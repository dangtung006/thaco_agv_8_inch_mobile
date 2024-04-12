import Images from '@src/assets/gen';
import {
    BaseImage,
    BaseScrollView,
    BaseText,
    BaseTouchable,
    BaseView,
    BaseTextInput
} from '@src/components';
import { classnames } from '@src/utils/common';
import { useEffect, useState } from 'react';
import { Dimensions, FlatList } from 'react-native';
const deviceWidth = Dimensions.get('window').width;
import SuccessModal from '../modal/success';
import PendingModal from '../modal/pending';
import ErrorModal from '../modal/error';
import { TASK_PROGRESS_STATUS } from '@src/store/module/taskStorage';
import { useTaskState } from '@src/store/module/taskStorage';

export default UpdateTask = ({
    task,
    modalStatus,
    handleModal
}) => {

    const [updatePos, setUpdatePos] = useState(task.list_station);
    const { handleTask, taskProgress, setTaskProgress } = useTaskState();
    const [editTaskName, setEditTaskName] = useState(task.name)

    const handleRemove = (point) => {
        let newPos = [...updatePos];
        newPos = newPos.filter(pos => pos.id != point.id)
        setUpdatePos(newPos)
    }

    const onUpdateTask = () => {
        return handleTask({
            "type": "update",
            "data": {
                "id": task.id,
                "name": editTaskName,
                "tasks": updatePos.map(pos => pos.id)
            }

        })
    }

    useEffect(() => {
        !taskProgress != TASK_PROGRESS_STATUS.INIT && setTaskProgress(TASK_PROGRESS_STATUS.INIT)
    }, []);


    const initUpdate = () => {
        return (
            <BaseView classname='flex justify-center items-center'>
                <BaseView
                    classname={classnames(
                        `w-${deviceWidth * 0.6}px`,
                        'rounded-2xl bg-white flex flex-col max-h-7.5/10 border border-blue'
                    )}
                >
                    <BaseView classname='h-18 bg-blue flex flex-row rounded-t-2xl justify-between items-center px-4'>
                        <BaseTextInput
                            placeholder='Điền tên task...'
                            classname='flex-1 h-56px text-lg'
                            value={editTaskName}
                            changeInput={setEditTaskName}
                        />
                        <BaseTouchable classname='w-6 h-6 flex justify-center items-center '>
                            <BaseImage source={Images.edit2} classname='w-18px h-18px' />
                        </BaseTouchable>
                    </BaseView>

                    {/* <BaseView classname='flex justify-center items-center'>
                        <BaseView classname='p-4 rounded-lg bg-white w-6/10 flex flex-row items-center gap-x-4'>
                            <BaseTextInput
                                placeholder='Điền tên task...'
                                classname='flex-1 h-46px'
                                value={'a'}
                            changeInput={setTaskName}
                            />
                            <BaseButton
                                // onPress={onCreateTask}
                                small
                                title='Xác nhận'
                            />
                            <BaseTouchable classname='w-6 h-6 flex justify-center items-center '>
                                <BaseImage source={Images.edit2} classname='w-18px h-18px' />
                            </BaseTouchable>
                        </BaseView>
                    </BaseView> */}
                    <FlatList
                        numColumns={3}
                        data={updatePos}
                        style={{
                            marginVertical: 12,
                            paddingHorizontal: 24,
                        }}
                        renderItem={({ item, index }) => (
                            <BaseView
                                key={item.id}
                                classname={classnames(
                                    ` w-[${(deviceWidth * 0.6 - 50 - 88) / 3}px] mt-6  relative`,
                                    index % 3 !== 2 ? 'mr-11' : ''
                                )}
                            >
                                <BaseView classname='border border-blue py-2 rounded-lg justify-center items-center mr-3'>
                                    <BaseView
                                        key={index}
                                        classname={classnames(
                                            'w-56px h-56px rounded-lg flex justify-center items-center',
                                            'bg-blue'
                                        )}
                                    >
                                        <BaseText bold size={24} classname='text-white'>
                                            {item.name}
                                        </BaseText>
                                    </BaseView>
                                </BaseView>
                                <BaseTouchable classname='w-7 h-7 absolute bg-white rounded-full right-0 top-[-10px] flex justify-center items-center' onPress={() => handleRemove(item)}>
                                    <BaseImage
                                        source={Images.cancel}
                                        classname='w-6 h-6'
                                        tintColor='red'
                                    />
                                </BaseTouchable>
                            </BaseView>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </BaseView>
                <BaseButton
                    onPress={onUpdateTask}
                    title='Xác nhận'
                    classname={classnames('mt-6', `w-${deviceWidth * 0.6}px`)}
                />
            </BaseView>
        )
    }
    return (
        <BaseView>
            {taskProgress === TASK_PROGRESS_STATUS.INIT
                ? initUpdate()
                : taskProgress === TASK_PROGRESS_STATUS.PENDING
                    ? <PendingModal />
                    : taskProgress === TASK_PROGRESS_STATUS.COMPLETED
                        ? <SuccessModal modalStatus={modalStatus} handleModal={handleModal} />
                        : taskProgress === TASK_PROGRESS_STATUS.ERROR
                            ? <ErrorModal modalStatus={modalStatus} handleModal={handleModal} />
                            : <></>
            }
        </BaseView>
    );
};
