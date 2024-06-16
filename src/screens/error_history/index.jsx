import Images from '@src/assets/gen';
import { BaseScreen, BaseTable } from '@src/components';
import { ViewLeft } from './ViewLeft';
import { ViewRight } from './ViewRight';
import { useState } from 'react';
import { ERROR_LEVEL, ERROR_STATUS } from '@src/utils/constants';
export default function ErrorHistoryScreen(props) {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const data = [
    {
      id: '1',
      errorName: 'Lỗi mất kết nối',
      description: 'Lorem ipsum dolor sit amet',
      level: ERROR_LEVEL.HIGH,
      errorTime: '01/06/2024',
      status: ERROR_STATUS.COMPLETED,
    },
    {
      id: '2',
      errorName: 'Lỗi mất kết nối',
      description: 'Lorem ipsum dolor sit amet',
      level: ERROR_LEVEL.HIGH,
      errorTime: '01/06/2024',
      status: ERROR_STATUS.PENDING,
    },
    {
      id: '3',
      errorName: 'Lỗi mất kết nối',
      description: 'Lorem ipsum dolor sit amet',
      level: ERROR_LEVEL.MEDIUM,
      errorTime: '01/06/2024',
      status: ERROR_STATUS.COMPLETED,
    },
    {
      id: '4',
      errorName: 'Lỗi mất kết nối',
      description: 'Lorem ipsum dolor sit amet',
      level: ERROR_LEVEL.HIGH,
      errorTime: '01/06/2024',
      status: ERROR_STATUS.COMPLETED,
    },
    {
      id: '5',
      errorName: 'Lỗi mất kết nối',
      description: 'Lorem ipsum dolor sit amet',
      level: ERROR_LEVEL.MEDIUM,
      errorTime: '01/06/2024',
      status: ERROR_STATUS.PENDING,
    },
    {
      id: '6',
      errorName: 'Lỗi mất kết nối',
      description: 'Lorem ipsum dolor sit amet',
      level: ERROR_LEVEL.HIGH,
      errorTime: '01/06/2024',
      status: ERROR_STATUS.PENDING,
    },
    {
      id: '7',
      errorName: 'Lỗi mất kết nối',
      description: 'Lorem ipsum dolor sit amet',
      level: ERROR_LEVEL.HIGH,
      errorTime: '01/06/2024',
      status: ERROR_STATUS.PENDING,
    },
    {
      id: '8',
      errorName: 'Lỗi mất kết nối',
      description: 'Lorem ipsum dolor sit amet',
      level: ERROR_LEVEL.HIGH,
      errorTime: '01/06/2024',
      status: ERROR_STATUS.PENDING,
    },
    {
      id: '9',
      errorName: 'Lỗi mất kết nối',
      description: 'Lorem ipsum dolor sit amet',
      level: ERROR_LEVEL.HIGH,
      errorTime: '01/06/2024',
      status: ERROR_STATUS.PENDING,
    },
    {
      id: '10',
      errorName: 'Lỗi mất kết nối',
      description: 'Lorem ipsum dolor sit amet',
      level: ERROR_LEVEL.HIGH,
      errorTime: '01/06/2024',
      status: ERROR_STATUS.PENDING,
    },
    {
      id: '11',
      errorName: 'Lỗi mất kết nối',
      description: 'Lorem ipsum dolor sit amet',
      level: ERROR_LEVEL.HIGH,
      errorTime: '01/06/2024',
      status: ERROR_STATUS.PENDING,
    },
    {
      id: '12',
      errorName: 'Lỗi mất kết nối',
      description: 'Lorem ipsum dolor sit amet',
      level: ERROR_LEVEL.HIGH,
      errorTime: '01/06/2024',
      status: ERROR_STATUS.PENDING,
    },
    {
      id: '13',
      errorName: 'Lỗi mất kết nối',
      description: 'Lorem ipsum dolor sit amet',
      level: ERROR_LEVEL.HIGH,
      errorTime: '01/06/2024',
      status: ERROR_STATUS.PENDING,
    },
    {
      id: '14',
      errorName: 'Lỗi mất kết nối',
      description: 'Lorem ipsum dolor sit amet',
      level: ERROR_LEVEL.HIGH,
      errorTime: '01/06/2024',
      status: ERROR_STATUS.PENDING,
    },
  ];
  return (
    <BaseScreen classname='px-36px py-25px bg-bg flex-1'>
      <BaseTable
        data={data}
        handleLoadMore={() => {
          if (hasMore && !loading) {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 1000);
            setHasMore(false);
          }
        }}
        loading={loading}
      />
    </BaseScreen>
  );
}
