import {
  BaseButton,
  BaseModal,
  BaseScreen,
  BaseView,
  CreateTask,
} from '@src/components';
import { useState } from 'react';
import PositionControl from './components/PositionControl';
import ListTasks from './components/ListTasks';

export default function MovementControlScreen(props) {
  const [modalCreateTaskVisible, setModalCreateVisible] = useState(false);
  
  const viewLeft = () => {
    return (
      <BaseView classname='w-6/10 px-9 py-6 pt-12 h-full flex justify-end items-center'>
        <PositionControl />
        <BaseView classname='w-full flex-1 flex items-end justify-center flex-row '>
          <BaseButton
            onPress={() => setModalCreateVisible(true)}
            title='Tạo Task'
            width={300}
            background='orange'
            titleColor='black'
          />
        </BaseView>
      </BaseView>
    );
  };

  const viewRight = () => {
    return (
      <BaseView classname='w-4/10 py-6 pl-4 pr-10 h-full flex justify-end items-end'>
        <ListTasks />
        <BaseView classname='w-full h-80px flex items-end justify-center flex-row'>
          <BaseButton title='Tạo nhiệm vụ' />
        </BaseView>
      </BaseView>
    );
  };

  const viewModalCreateTask = () => {
    return (
      <BaseModal
        visible={modalCreateTaskVisible}
        onBackdropPress={() => {
          setModalCreateVisible(!modalCreateTaskVisible);
        }}
        onRequestClose={() => {
          setModalCreateVisible(!modalCreateTaskVisible);
        }}
      >
        <CreateTask />
      </BaseModal>
    );
  };
  

  return (
    <BaseScreen classname='pb-4'>
      {viewLeft()}
      {viewRight()}
      {viewModalCreateTask()}
    </BaseScreen>
  );
}
