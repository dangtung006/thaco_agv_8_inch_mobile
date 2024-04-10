import Images from '@src/assets/gen';
import {
    BaseImageBackground,
    BaseScrollView,
    BaseText,
    BaseView,
    BaseButton
} from '@src/components';
import {
    TouchableOpacity,
    ActivityIndicator
} from "react-native"
import { useLocalStorage } from '@src/store/localStorage';
import { classnames } from '@src/utils/common';
import { useState } from 'react';
import { usePositionState } from '@src/store/module/positionStorage';
export default function PositionControl({
    selectedPos,
    handleSelectPosition
}) {
    const { locale } = useLocalStorage((state) => state);

    const {
        loading,
        positions
    } = usePositionState();

    const selectPos = (val) => {
        if (handleSelectPosition) return handleSelectPosition(val)
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
                    {
                        loading ? <ActivityIndicator size="large" color="#0000ff" /> : (
                            <BaseView classname='flex flex-wrap flex-row  gap-x-10 gap-y-5'>
                                {positions.map((item, index) => {
                                    return (
                                        // <BaseButton
                                        //     key={item.id}
                                        //     width={90}
                                        //     height={80}
                                        //     title={item.name}
                                        //     background={selectedPos.includes(item.id) ? 'blue500' : 'greyBt'}
                                        //     onPress={() => selectPos(item.id)}
                                        // />


                                        <TouchableOpacity key={item.id} onPress={() => selectPos(item.id)}>
                                            <BaseView
                                                
                                                classname={classnames(
                                                    'w-90px h-64px rounded-lg flex justify-center items-center',
                                                    `${selectedPos.includes(item.id) ? 'bg-blue' : 'bg-greyBt'}`
                                                )}
                                            >
                                                <BaseText bold size={20} classname='text-white'>
                                                    {item.name}
                                                </BaseText>
                                            </BaseView>
                                        </TouchableOpacity>
                                    );
                                })}
                            </BaseView>
                        )
                    }
                </BaseScrollView>
                <BaseView classname='h-6'></BaseView>
            </BaseView>
        </BaseImageBackground>
    );
}
