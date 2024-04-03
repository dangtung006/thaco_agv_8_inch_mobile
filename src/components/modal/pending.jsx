import Images from '@src/assets/gen';
import {
    BaseImage,
    BaseText,
    BaseView,
} from '@src/components';

export default PendingModal = ({
    message='Đang tạo task, xin vui lòng đợi một chút !'
})=>{
    return(
        <BaseView classname='flex justify-center items-center'>
        <BaseView classname='py-30px rounded-2xl bg-white w-7/10 flex flex-col items-center gap-x-4'>
            <BaseView classname='w-6/10'>
                <BaseView classname='bg-blue500 py-30px rounded-lg flex justify-between items-center'>
                    <BaseText locale size={16} semiBold>
                        { message }
                    </BaseText>
                </BaseView>
                <BaseImage
                    source={Images.arrow}
                    classname='ml-15 w-8 h-8'
                    tintColor='#21AFFF'
                />
            </BaseView>
            <BaseImage source={Images.robot3} classname='w-200px h-200px' />
        </BaseView>
    </BaseView>
    )
}