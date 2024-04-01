import Images from '@src/assets/gen';
import {
  BaseView,
  BaseTouchable,
  BaseText,
  BaseImage,
  BaseModal,
  UpdateTask,
  DeleteTask,
} from '@src/components';
import { useState } from 'react';

export default TaskItem = ({ isShowIndex = true }) => {
  const [modalUpdateTaskVisible, setModalUpdateVisible] = useState(false);
  const [modalDeleteTaskVisible, setModalDeleteVisible] = useState(false);

  const viewModalUpdateTask = () => {
    return (
      <BaseModal
        visible={modalUpdateTaskVisible}
        onBackdropPress={() => {
          setModalUpdateVisible(!modalUpdateTaskVisible);
        }}
        onRequestClose={() => {
          setModalUpdateVisible(!modalUpdateTaskVisible);
        }}
      >
        <UpdateTask />
      </BaseModal>
    );
  };
  const viewModalDeleteTask = () => {
    return (
      <BaseModal
        visible={modalDeleteTaskVisible}
        onBackdropPress={() => {
          setModalDeleteVisible(!modalDeleteTaskVisible);
        }}
        onRequestClose={() => {
          setModalDeleteVisible(!modalDeleteTaskVisible);
        }}
      >
        <DeleteTask />
      </BaseModal>
    );
  };

  return (
    <BaseView classname='flex flex-row w-full mb-4 py-2 px-3 items-center'>
      {isShowIndex && (
        <BaseView classname='bg-white border border-black rounded-full w-[30px] h-[30px] flex justify-center items-center'>
          <BaseText size={16} bold>
            1
          </BaseText>
        </BaseView>
      )}
      {/* //////////////////////////////// */}
      {/* //////////////////////////////// */}
      <BaseView classname='flex flex-col flex-1 mx-2 '>
        <BaseView classname='bg-blue rounded-t-lg py-1 px-2'>
          <BaseText classname='text-white' size={12}>
            TASK1234
          </BaseText>
        </BaseView>
        <BaseView classname='bg-white px-4 py-2 flex flex-wrap flex-row rounded-b-lg'>
          {[1, 2, 3, 1, 1, 1, 1, 1, 11].map((item, index) => {
            return (
              <BaseView
                key={index}
                classname='w-8 h-8 mb-2 mr-2 rounded-lg bg-blue flex justify-center items-center'
              >
                <BaseText classname='text-white' bold size={16}>
                  {index + 1}
                </BaseText>
              </BaseView>
            );
          })}
        </BaseView>
      </BaseView>
      {/* //////////////////////////////// */}
      {/* //////////////////////////////// */}
      <BaseTouchable onPress={() => setModalUpdateVisible(true)}>
        <BaseImage source={Images.edit} classname='w-12 h-12 mr-2' />
      </BaseTouchable>
      {/* //////////////////////////////// */}
      {/* //////////////////////////////// */}
      <BaseTouchable onPress={() => setModalDeleteVisible(true)}>
        <BaseImage source={Images.delete} classname='w-12 h-12' />
      </BaseTouchable>

      {viewModalUpdateTask()}
      {viewModalDeleteTask()}
    </BaseView>
  );
};