import Images from '@src/assets/gen';
import { BaseButton, BaseImage, BaseText, BaseView } from '@src/components';
import { useTaskState } from '@src/store/module/taskStorage';
import { useEffect } from 'react';

import SuccessModal from '../modal/success';
import PendingModal from '../modal/pending';
import ErrorModal from '../modal/error';
import { TASK_PROGRESS_STATUS } from '@src/store/module/taskStorage';

export default DeleteTask = ({
    modalStatus,
    handleModal,
    task
}) => {

    const { handleTask, taskProgress, setTaskProgress } = useTaskState();

    useEffect(()=>{
        !taskProgress != TASK_PROGRESS_STATUS.INIT && setTaskProgress(TASK_PROGRESS_STATUS.INIT)
    }, [])
    const onDeleteTask = () => {
        return handleTask({
            type: 'delete',
            data: {id: task.id}
        })
    }

    const initConfirmDelete = () => {
        return (
            <BaseView classname='flex justify-center items-center'>
                <BaseView classname='py-30px rounded-2xl bg-white w-7/10 flex flex-col items-center gap-x-4'>
                    <BaseView classname='w-6/10'>
                        <BaseView classname='bg-blue200 py-30px rounded-lg flex justify-between items-center'>
                            <BaseText locale size={16} semiBold>
                                Bạn có chắc chắn là muốn xóa không?
                            </BaseText>
                        </BaseView>
                        <BaseImage
                            source={Images.arrow}
                            classname='ml-15 w-8 h-8'
                            tintColor='#E8F7FF'
                        />
                    </BaseView>
                    <BaseImage source={Images.robot5} classname='w-200px h-200px' />
                </BaseView>
                <BaseView classname='mt-6 flex flex-row w-7/10 gap-x-10'>
                    <BaseButton title='Có' classname='flex-1' onPress={onDeleteTask} />
                    <BaseButton background='red' title='Không' classname='flex-1' onPress={()=>handleModal(!modalStatus)} />
                </BaseView>
            </BaseView>
        )
    }

    return (
        <BaseView>
            {taskProgress === TASK_PROGRESS_STATUS.INIT
                ? initConfirmDelete()
                : taskProgress === TASK_PROGRESS_STATUS.PENDING
                    ? <PendingModal />
                    : taskProgress === TASK_PROGRESS_STATUS.COMPLETED
                        ? <SuccessModal modalStatus={modalStatus} handleModal={handleModal} />
                        : <ErrorModal modalStatus={modalStatus} handleModal={handleModal} />
            }
        </BaseView>
    );
};
