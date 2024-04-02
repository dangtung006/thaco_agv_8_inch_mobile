import Images from '@src/assets/gen';
import {
    BaseImageBackground,
    BaseScrollView,
    BaseText,
    BaseView,
} from '@src/components';
import {
    TouchableOpacity
} from "react-native"
import { useLocalStorage } from '@src/store/localStorage';
import { classnames } from '@src/utils/common';
import { useState } from 'react';

export default function PositionControl({ 
    positions, 
    selectedPos,
    handleSelectPosition
}) {
    const { locale } = useLocalStorage((state) => state);
    const selectPos = (val)=>{
        if(handleSelectPosition) return handleSelectPosition(val)
    }

    return (
        <BaseImageBackground
            source={locale === 'vi' ? Images.bgTaskVi : Images.bgTaskEn}
            classname='w-full aspect-100/64 flex flex-row'
        >
            <BaseView classname='w-15/100'></BaseView>
            <BaseView classname='w-85/100'>
                <BaseView classname='aspect-100/12'></BaseView>
                <BaseScrollView classname='pr-9'>
                    <BaseView classname='flex flex-wrap flex-row  gap-x-10 gap-y-5'>
                        {positions.map((item, index) => {
                            return (
                                <BaseView
                                    key={item.id}
                                    classname={classnames(
                                        'w-56px h-56px rounded-lg flex justify-center items-center',
                                        `${selectedPos.includes(item.id) ? 'bg-blue' : 'bg-greyBt'}`
                                    )}
                                >
                                    <TouchableOpacity onPress={() => selectPos(item.id)}>
                                        <BaseText bold size={20} classname='text-white'>
                                            {item.name}
                                        </BaseText>
                                    </TouchableOpacity>
                                </BaseView>
                            );
                        })}
                    </BaseView>
                </BaseScrollView>
                <BaseView classname='h-6'></BaseView>
            </BaseView>
        </BaseImageBackground>
    );
}
