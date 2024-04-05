import Images from '@src/assets/gen';
import { BaseImage, BaseText, BaseView } from '@src/components';

export default function NoMissons() {
    return (
        <BaseView classname='flex flex-col justify-between items-center p-5 flex-1'>
            <BaseView classname='w-8/10'>
                <BaseView classname='bg-white p-4 rounded-lg flex justify-between items-center'>
                    <BaseText locale size={16} semiBold>
                        Không có nhiệm vụ nào để tôi thực hiện ~
                    </BaseText>
                </BaseView>
                <BaseImage
                    source={Images.arrow}
                    classname='ml-10 w-8 h-8'
                    tintColor='white'
                />
            </BaseView>
            <BaseImage
                source={Images.robot2}
                classname='flex-1 mb-10'
            />
        </BaseView>
    );
}
