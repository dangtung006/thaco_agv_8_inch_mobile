import Images from '@src/assets/gen';
import {
    BaseImage,
    BaseText,
    BaseView,
} from '@src/components';

export default SuccessModal = ({
    message = 'Task tạo thành công !!',
    modalStatus,
    handleModal
}) => {
    return (
        <BaseView classname='flex justify-center items-center'>
            <BaseView classname='py-30px rounded-2xl bg-white w-7/10 flex flex-col items-center gap-x-4'>
                <BaseView classname='w-6/10'>
                    <BaseView classname='bg-green py-30px rounded-lg flex justify-between items-center'>
                        <BaseText locale size={16} semiBold classname='text-white'>
                            { message }
                        </BaseText>
                    </BaseView>
                    <BaseImage
                        source={Images.arrow}
                        classname='ml-15 w-8 h-8'
                        tintColor='#2EAB47'
                    />
                </BaseView>
                <BaseImage source={Images.robot4} classname='w-200px h-200px' />
            </BaseView>
            <BaseButton
                onPress={() => handleModal(!modalStatus)}
                title='Xác nhận'
                classname='mt-6 w-7/10'
            />
        </BaseView>
    )
}