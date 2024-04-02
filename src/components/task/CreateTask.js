import Images from '@src/assets/gen';
import {
    BaseButton,
    BaseImage,
    BaseText,
    BaseTextInput,
    BaseView,
} from '@src/components';
import { useState } from 'react';

const CREATE_TASK_STATUS = {
    INIT: 'INIT',
    PENDING: 'PENDING',
    COMPLETED: 'COMPLETED',
    ERROR: 'ERROR',
};
export default function CreateTask({
    taskName,
    handleTaskChange,
    handleCreateTask = ()=>{}
}) {
    // taskName={taskName} handleTaskChange={setTaskName}
    const [status, setStatus] = useState(CREATE_TASK_STATUS.INIT);
    // const [taskName, setTaskName] = useState("")
    const initTask = () => {
        return (
            <BaseView classname='flex justify-center items-center'>
                <BaseView classname='p-4 rounded-lg bg-white w-6/10 flex flex-row items-center gap-x-4'>
                    <BaseTextInput
                        placeholder='Điền tên task...'
                        classname='flex-1 h-46px'
                        value={taskName}
                        changeInput={handleTaskChange}
                    />
                    <BaseButton
                        onPress={()=>{
                            return handleCreateTask();
                        } 
                            // {

                            // console.log("taskName ::: " , taskName);
                            // // setStatus(CREATE_TASK_STATUS.PENDING);
                            // // setTimeout(() => {
                            // //     setStatus(CREATE_TASK_STATUS.COMPLETED);
                            // // }, 500);
                            // }
                        }
                        small
                        title='Xác nhận'
                    />
                </BaseView>
            </BaseView>
        );
    };

    const createTaskPending = () => {
        return (
            <BaseView classname='flex justify-center items-center'>
                <BaseView classname='py-30px rounded-2xl bg-white w-7/10 flex flex-col items-center gap-x-4'>
                    <BaseView classname='w-6/10'>
                        <BaseView classname='bg-blue500 py-30px rounded-lg flex justify-between items-center'>
                            <BaseText locale size={16} semiBold>
                                Đang tạo task, xin vui lòng đợi một chút !
                            </BaseText>
                        </BaseView>
                        <BaseImage
                            source={Images.arrow}
                            classname='ml-15 w-8 h-8'
                            tintColor='#21AFFF'
                        />
                    </BaseView>
                    <BaseImage source={Images.robot3} classname='w-200px h-200px' />
                </BaseView>
            </BaseView>
        );
    };

    const createTaskCompleted = () => {
        return (
            <BaseView classname='flex justify-center items-center'>
                <BaseView classname='py-30px rounded-2xl bg-white w-7/10 flex flex-col items-center gap-x-4'>
                    <BaseView classname='w-6/10'>
                        <BaseView classname='bg-green py-30px rounded-lg flex justify-between items-center'>
                            <BaseText locale size={16} semiBold classname='text-white'>
                                Task tạo thành công !!
                            </BaseText>
                        </BaseView>
                        <BaseImage
                            source={Images.arrow}
                            classname='ml-15 w-8 h-8'
                            tintColor='#2EAB47'
                        />
                    </BaseView>
                    <BaseImage source={Images.robot4} classname='w-200px h-200px' />
                </BaseView>
                <BaseButton
                    onPress={() => {
                        setStatus(CREATE_TASK_STATUS.ERROR);
                    }}
                    title='Xác nhận'
                    classname='mt-6 w-7/10'
                />
            </BaseView>
        );
    };

    const createTaskError = () => {
        return (
            <BaseView classname='flex justify-center items-center'>
                <BaseView classname='py-30px rounded-2xl bg-white w-7/10 flex flex-col items-center gap-x-4'>
                    <BaseView classname='w-6/10'>
                        <BaseView classname='bg-red py-30px rounded-lg flex justify-between items-center'>
                            <BaseText locale size={16} semiBold classname='text-white'>
                                Task tạo thất bại, xin vui lòng thử lại
                            </BaseText>
                        </BaseView>
                        <BaseImage
                            source={Images.arrow}
                            classname='ml-15 w-8 h-8'
                            tintColor='#FF462D'
                        />
                    </BaseView>
                    <BaseImage source={Images.robot5} classname='w-200px h-200px' />
                </BaseView>
                <BaseButton
                    onPress={() => {
                        setStatus(CREATE_TASK_STATUS.INIT);
                    }}
                    title='Xác nhận'
                    classname='mt-6 w-7/10'
                />
            </BaseView>
        );
    };

    return (
        <BaseView>
            {status === CREATE_TASK_STATUS.INIT
                ? initTask()
                : status === CREATE_TASK_STATUS.PENDING
                    ? createTaskPending()
                    : status === CREATE_TASK_STATUS.COMPLETED
                        ? createTaskCompleted()
                        : createTaskError()}
        </BaseView>
    );
}
