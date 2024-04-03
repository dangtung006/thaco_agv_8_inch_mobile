import Images from '@src/assets/gen';
import {
    BaseImage,
    BaseScrollView,
    BaseText,
    BaseTouchable,
    BaseView,
} from '@src/components';
import { classnames } from '@src/utils/common';
import { useState } from 'react';
import { Dimensions, FlatList } from 'react-native';
const deviceWidth = Dimensions.get('window').width;

export default UpdateTask = ({
    id,
    name,
    positions
}) => {
    const [updatePos, setUpdatePos] = useState(positions);

    const handleRemove = (point)=>{
        let newPos = [...updatePos];
        newPos = newPos.filter(pos => pos.id !=point.id)
        setUpdatePos(newPos)
    }

    const updateTask = ()=>{
        const updateTask = {
            "type": "update",
            "data": {
                "id": id,
                "name": name,
                "tasks": updatePos.map(item=>item.id)
            }
        }
        
        return handleUpdateTask(updateTask)
    }

    return (
        <BaseView classname='flex justify-center items-center'>
            <BaseView
                classname={classnames(
                    `w-${deviceWidth * 0.6}px`,
                    'rounded-2xl bg-white flex flex-col max-h-7.5/10 border border-blue'
                )}
            >
                <BaseView classname='h-8 bg-blue flex flex-row rounded-t-2xl justify-between items-center px-4'>
                    <BaseText classname='text-white'>{name}</BaseText>
                    <BaseTouchable classname='w-6 h-6 flex justify-center items-center '>
                        <BaseImage source={Images.edit2} classname='w-18px h-18px' />
                    </BaseTouchable>
                </BaseView>
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
                            <BaseTouchable classname='w-7 h-7 absolute bg-white rounded-full right-0 top-[-10px] flex justify-center items-center' onPress={()=>handleRemove(item)}>
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
                onPress={updateTask}
                title='Xác nhận'
                classname={classnames('mt-6', `w-${deviceWidth * 0.6}px`)}
            />
        </BaseView>
    );
};
