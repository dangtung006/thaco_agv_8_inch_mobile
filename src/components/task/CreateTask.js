import Images from '@src/assets/gen';
import {
    BaseButton,
    BaseImage,
    BaseText,
    BaseTextInput,
    BaseView,
} from '@src/components';
import { useEffect, useState } from 'react';
import { useTaskState } from '@src/store/module/taskStorage';

import SuccessModal from '../modal/success';
import PendingModal from '../modal/pending';
import ErrorModal from '../modal/error';
import { TASK_PROGRESS_STATUS } from '@src/store/module/taskStorage';

export default function CreateTask({
    selectedPos,
    modalStatus,
    handleModal,
    handleSelectedPos
}) {

    const [taskName, setTaskName] = useState("");
    const { handleTask, taskProgress, setTaskProgress } = useTaskState();

    useEffect(()=>{
        if(!taskProgress != TASK_PROGRESS_STATUS.INIT){
            setTaskProgress(TASK_PROGRESS_STATUS.INIT)
        }
    }, [])

    const onCreateTask = async () => {
        console.log("selected pos::" , selectedPos);
        setTaskName("");
        handleSelectedPos([]);
        await handleTask({
            type: 'insert',
            data: {
                name: taskName,
                tasks: selectedPos
            }
        });
    }

    const initTask = () => {
        return (
            <BaseView classname='flex justify-center items-center'>
                <BaseView classname='p-4 rounded-lg bg-white w-6/10 flex flex-row items-center gap-x-4'>
                    <BaseTextInput
                        placeholder='Điền tên task...'
                        classname='flex-1 h-46px'
                        value={taskName}
                        changeInput={setTaskName}
                    />
                    <BaseButton
                        onPress={onCreateTask}
                        small
                        title='Xác nhận'
                    />
                </BaseView>
            </BaseView>
        );
    };

    return (
        <BaseView>
            { taskProgress === TASK_PROGRESS_STATUS.INIT
                ? initTask()
                : taskProgress === TASK_PROGRESS_STATUS.PENDING
                    ? <PendingModal />
                    : taskProgress === TASK_PROGRESS_STATUS.COMPLETED
                        ? <SuccessModal   modalStatus={modalStatus} handleModal={handleModal} />
                            :taskProgress === TASK_PROGRESS_STATUS.ERROR 
                            ? <ErrorModal   modalStatus={modalStatus} handleModal={handleModal} />
                            :<></>
            }
        </BaseView>
    );
}
