import Images from '@src/assets/gen';
import {
  BaseButton,
  BaseImage,
  BaseScrollView,
  BaseText,
  BaseView,
} from '@src/components';
import { useCommonState } from '@src/store/commonStorage';
import { useEffect } from 'react';
import { Image } from 'react-native';

export const ViewLeft = () => {
  const { missions, setMissions } = useCommonState((state) => state);
  const items = [
    {
      title: 'Nhận',
      status: 1,
    },
    {
      title: 'Trạm 1',
      status: 2,
    },
    {
      title: 'Trạm 2',
      status: 3,
    },
    {
      title: 'Trạm 3',
      status: 3,
    },
    {
      title: 'Trạm 4',
      status: 3,
    },
    {
      title: 'Trạm 5',
      status: 3,
    },
    {
      title: 'Trạm 6',
      status: 3,
    },
    {
      title: 'Trả thức ăn thừa',
      status: 3,
    },
  ];

  useEffect(() => {
    setMissions(items);
  }, []);

  const getColor = (item) => {
    let color = {
      bg: 'greyBt50',
      border: 'greyBt',
      text: 'darkText',
    };
    switch (item.status) {
      case 1:
        color = {
          bg: 'green50',
          border: 'green',
          text: 'green',
        };
        break;
      case 2:
        color = {
          bg: 'orange100',
          border: 'orange',
          text: 'orange',
        };
        break;
      default:
        break;
    }
    return color;
  };

  const _buildItem = (item, index) => {
    return (
      <BaseView key={index} classname='flex flex-col items-center'>
        <BaseButton
          classname={`w-300px rounded-full bg-${getColor(item).bg}`}
          small
          titleSize={24}
          titleColor={getColor(item).text}
          title={item.title}
          borderColor={getColor(item).border}
        />
        {index < items.length - 1 ? (
          <BaseImage source={Images.arrowDown} classname='h-50px' />
        ) : (
          <BaseView classname='h-50px'></BaseView>
        )}
      </BaseView>
    );
  };
  return (
    <BaseView classname='w-5/11 h-full flex  px-25px pt-16px'>
      <BaseText locale size={24} semiBold>
        Quy trình nhiệm vụ
      </BaseText>
      {missions.length > 0 ? (
        <BaseScrollView classname='mt-42px'>
          {missions.map((item, index) => _buildItem(item, index))}
        </BaseScrollView>
      ) : (
        <BaseView classname='flex-1 justify-center items-center'>
          <BaseText locale size={18}>
            Không có nhiệm vụ
          </BaseText>
        </BaseView>
      )}
    </BaseView>
  );
};
