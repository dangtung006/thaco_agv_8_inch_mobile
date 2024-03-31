import { BaseButton, BaseModal, BaseScreen, BaseView } from '@src/components';
import { useState } from 'react';
import PositionControl from './components/PositionControl';
import ListTasks from './components/ListTasks';
import Modal, { ReactNativeModal } from 'react-native-modal';
import ModalContentCreateTask from './components/ModalContentCreateTask';

export default function MovementControlScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);

  const viewLeft = () => {
    return (
      <BaseView classname='w-6/10 px-9 py-6 h-full flex justify-end items-center '>
        <PositionControl />
        <BaseView classname='w-full h-100px flex items-end justify-center flex-row '>
          <BaseButton
            onPress={() => setModalVisible(true)}
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
        visible={modalVisible}
        onBackdropPress={() => {
          setModalVisible(!modalVisible);
        }}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ModalContentCreateTask />
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
