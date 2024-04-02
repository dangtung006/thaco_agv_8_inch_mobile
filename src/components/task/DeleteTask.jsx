import Images from '@src/assets/gen';
import { BaseButton, BaseImage, BaseText, BaseView } from '@src/components';

export default DeleteTask = ({
    removeTask = ()=>{}
}) => {
    return (
        <BaseView classname='flex justify-center items-center'>
            <BaseView classname='py-30px rounded-2xl bg-white w-7/10 flex flex-col items-center gap-x-4'>
                <BaseView classname='w-6/10'>
                    <BaseView classname='bg-blue200 py-30px rounded-lg flex justify-between items-center'>
                        <BaseText locale size={16} semiBold>
                            Bạn có chắc chắn là muốn xóa không?
                        </BaseText>
                    </BaseView>
                    <BaseImage
                        source={Images.arrow}
                        classname='ml-15 w-8 h-8'
                        tintColor='#E8F7FF'
                    />
                </BaseView>
                <BaseImage source={Images.robot5} classname='w-200px h-200px' />
            </BaseView>
            <BaseView classname='mt-6 flex flex-row w-7/10 gap-x-10'>
                <BaseButton title='Có' classname='flex-1' onPress={removeTask}/>
                <BaseButton background='red' title='Không' classname='flex-1' />
            </BaseView>
        </BaseView>
    );
};
