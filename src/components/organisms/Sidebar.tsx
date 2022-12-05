import { FC } from 'react';

import Image from '../atoms/Image';
import LinkIcon from '../molecules/LinkIcon';


import LogoHC from "./../../assets/logo/logo-hc.png";
import HomeIcon from "./../../assets/icon/home-icon.svg";
import CalendarIcon from "./../../assets/icon/calendar-icon.svg";
import SettingIcon from "./../../assets/icon/setting-icon.svg";


const SideBar: FC= () => {
    return (
      <div className='Sidebar fixed top-0 left-0 z-50 h-[100%] w-[100px] rounded-r-[20px] bg-white py-[15px] flex flex-col gap-[22px] px-[13px] items-center'>
        <div className="mt-[25px]">
            <Image imageSrc={LogoHC} imageWidth="42px" />
        </div>
        <div className='mb-[50px] w-[70px] bg-grey-light h-[1px]' />

        <div className=" flex flex-col gap-[72px]">
            <LinkIcon LinkIconSrc={HomeIcon} LinkTo='/' />
            <LinkIcon LinkIconSrc={CalendarIcon} LinkTo='/' />
            <LinkIcon LinkIconSrc={SettingIcon} LinkTo='/' />
        </div>
      </div>
    );
}
  
export default SideBar;