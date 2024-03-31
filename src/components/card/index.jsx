import BaseText from '../text';
import BaseView from '../view';

export default function BaseCard({ title = '', children }) {
  return (
    <BaseView classname='flex-1 bg-orange w-full rounded-2xl border border-blue'>
      <BaseView classname='flex justify-center items-center rounded-t-2xl border-b border-blue  py-3'>
        <BaseText locale medium size={16} classname=''>
          {title}
        </BaseText>
      </BaseView>
      <BaseView classname='flex-1 bg-blue200 rounded-b-2xl'>{children}</BaseView>
    </BaseView>
  );
}
