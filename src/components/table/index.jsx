import tw from '@src/utils/tailwindLoader';
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BaseText from '../text';
import BaseView from '../view';
import { classnames } from '@src/utils/common';
import { ERROR_LEVEL, ERROR_STATUS } from '@src/utils/constants';

const BaseTable = ({ data, handleLoadMore, loading }) => {
  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator style={tw`mt-4`} />;
  };

  const _buildText = (item, level, classname) => {
    return (
      <BaseText
        classname={classnames(
          'text-center flex-1',
          classname,
          level === ERROR_LEVEL.HIGH ? 'text-red' : 'text-darkText'
        )}
      >
        {item}
      </BaseText>
    );
  };

  const renderItem = ({ item, index }) => (
    <BaseView
      classname={classnames(
        `h-60px items-center flex-row`,
        index % 2 === 0 ? `bg-[#F3F4F6]` : null
      )}
    >
      {_buildText(index + 1, item.level)}
      {_buildText(item.errorName, item.level, 'flex-2')}
      {_buildText(item.description, item.level, 'flex-2')}
      {_buildText(
        item.level === ERROR_LEVEL.HIGH ? 'Cao' : 'Trung Bình',
        item.level
      )}
      {_buildText(item.errorTime, item.level)}

      <BaseText
        classname={classnames(
          'text-center flex-1',
          item.status === ERROR_STATUS.COMPLETED ? 'text-green' : 'text-orange'
        )}
      >
        {item.status === ERROR_STATUS.COMPLETED ? 'Đã xử lý' : 'Chưa xử lý'}
      </BaseText>
    </BaseView>
  );

  return (
    <BaseView classname={`flex-1 bg-white rounded-xl shadow-sm`}>
      <BaseView
        classname={`flex-row h-60px items-center border-b-2 border-gray-300 `}
      >
        <BaseText locale semiBold classname={`flex-1 text-center `}>
          STT
        </BaseText>
        <BaseText locale semiBold classname={`flex-2 text-center `}>
          Tên lỗi
        </BaseText>
        <BaseText locale semiBold classname={`flex-2 text-center `}>
          Mô tả
        </BaseText>
        <BaseText locale semiBold classname={`flex-1 text-center `}>
          Mức độ
        </BaseText>
        <BaseText locale semiBold classname={`flex-1 text-center `}>
          Thời gian lỗi
        </BaseText>
        <BaseText locale semiBold classname={`flex-1 text-center `}>
          Trạng thái xử lý
        </BaseText>
      </BaseView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListFooterComponent={renderFooter}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={1}
      />
    </BaseView>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
  },
  highLevel: {
    color: 'red',
  },
  mediumLevel: {
    color: 'orange',
  },
  unresolvedStatus: {
    color: 'orange',
  },
  resolvedStatus: {
    color: 'green',
  },
});

export default BaseTable;
