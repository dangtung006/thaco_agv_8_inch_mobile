import Images from '@src/assets/gen';
import {
    BaseButton,
    BaseImage,
    BaseScrollView,
    BaseSelect,
    BaseText,
    BaseTouchable,
    BaseView,
} from '@src/components';
import { useEffect, useMemo, useState } from 'react';
import RobotApi from '@src/utils/robotApi';
import { useAMRState } from '@src/store/modules/amrStorage';

export const ViewRight = () => {

    const robotApi = new RobotApi()
    const { amr } = useAMRState()
    const { ip, station, taskStatus } = amr
    const [locations, setLocations] = useState(false)
    const [postion, setPosition] = useState({ title: "Chọn Vị Trí", id: 0 })
    const [isEmergency, setEmergency] = useState(false)

    async function goTarget() {
        const task_idx = postion.id
        const task = locations.find(loc => loc.task_idx == task_idx)
        const stationId = task.arg_operations.nav
        console.log("station_id", stationId)
        resp = await robotApi.navTo({
            id: stationId
        })
    }

    async function handleManualMoving() {
        if (taskStatus == 2) {
            resp = await robotApi.pause()
        } else if (taskStatus == 3) {
            resp = await robotApi.resume()
        }
    }


    async function setEmc(params) {
        resp = await robotApi.sofEmc()
    }


    const handleSelectPos = (pos) => {
        console.log("posss::", pos)
        setPosition((pre) => ({
            ...pre,
            title: pos.title,
            id: pos.id
        }))
    }

    const getCurrStation = () => {
        if (!locations) return ""
        const curr = locations.find(loc => {
            if (loc && loc.task_name && loc.arg_operations && loc.arg_operations.nav && loc.arg_operations.nav == station) {
                return loc
            }
            return false
        })

        if (!curr) return ""
        return curr.task_name
    }

    const getLocationOpt = () => {
        if (!locations) return []
        locs = locations.map(loc => ({
            title: loc && loc.task_name ? loc.task_name : "",
            id: loc && loc.task_idx ? loc.task_idx : 0
        }))
        return locs
    }

    async function getRobotLocations() {
        let locs = await robotApi.getStations()
        locs && setLocations(locs)
    }



    const _buildInfo = useMemo(
        () => (
            <BaseView classname='flex flex-row gap-3'>
                <BaseView classname='flex gap-2 flex-row flex-1 h-65px rounded-3xl bg-blue300 items-center justify-start px-20px'>
                    <BaseImage source={Images.ip} classname='w-44px h-44px mt-1' />
                    <BaseText semiBold size={24}>
                        {ip}
                    </BaseText>
                </BaseView>
                <BaseView classname='flex gap-2 flex-row flex-1 h-65px rounded-3xl bg-blue300 items-center justify-start px-20px'>
                    <BaseImage source={Images.location} classname='w-35px h-35px' />
                    <BaseText semiBold size={24}>
                        {getCurrStation()}
                    </BaseText>
                </BaseView>
            </BaseView>
        ),
        [ip, station]
    );

    const _buildSelectPosition = useMemo(
        () => (
            <BaseView classname=''>
                <BaseText locale size={24} semiBold classname='mt-30px'>
                    Điều khiển tự động theo vị trí
                </BaseText>
                <BaseSelect
                    classname='mt-3'
                    onChange={handleSelectPos}
                    value={postion}
                    data={getLocationOpt()}
                />
            </BaseView>
        ),
        [locations, postion]
    );

    const _buildAction = useMemo(
        () => (
            <BaseView classname='flex-1'>
                <BaseButton
                    onPress={goTarget}
                    title='Bắt đầu điều hướng'
                    background='blue500'
                    classname='h-70px mt-10'
                    titleColor='white'
                    titleSize={28}
                />
                {/* ////////////////////////////////////////////// */}
                <BaseView classname='flex flex-1 flex-row justify-center mt-10 gap-50px'>
                    {(taskStatus == 2 || taskStatus == 3) && (
                        <>
                            <BaseView classname='flex flex-col items-center'>
                                <BaseTouchable onPress={handleManualMoving}>
                                    <BaseImage
                                        source={taskStatus == 2 ? Images.pause : Images.play}
                                        classname='w-120px h-120px'
                                    />
                                </BaseTouchable>
                                <BaseText locale size={18} classname='mt-2'>
                                    {taskStatus == 2 ? 'Tạm dừng' : 'Chạy'}
                                </BaseText>
                            </BaseView>
                            <BaseView classname='flex flex-col items-center'>
                                <BaseTouchable onPress={() => robotApi.cancel()}>
                                    <BaseImage
                                        source={taskStatus ? Images.stop : Images.pauseInactive}
                                        classname='w-120px h-120px'
                                    />
                                </BaseTouchable>
                                <BaseText locale size={18} classname='mt-2'>
                                    Kết thúc
                                </BaseText>
                            </BaseView>
                        </>
                    )}
                </BaseView>
                {/* ////////////////////////////////////////////// */}
                < BaseButton
                    title='Dừng khẩn cấp'
                    background='red'
                    classname='h-100px mt-10'
                    titleColor='white'
                    titleSize={28}
                    onPress={() => robotApi.sofEmc()}
                />
            </BaseView >
        ),
        [taskStatus, postion]
    );

    useEffect(() => {
        getRobotLocations()
    }, [])
    return (
        <BaseView classname='flex-1 bg-bg h-full flex flex-col px-36px py-20px'>
            <BaseText locale size={24} semiBold classname='mt-30px'>
                {postion.title}
            </BaseText>
            {_buildInfo}
            {_buildSelectPosition}
            {_buildAction}
        </BaseView>
    );
};
