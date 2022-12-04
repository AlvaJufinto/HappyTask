import { FC } from 'react';

import Image from '../atoms/Image';
import LinkIcon from '../molecules/LinkIcon';


import LogoHC from "./../../assets/logo/logo-hc.png";
import HomeIcon from "./../../assets/icon/home-icon.svg";
import CalendarIcon from "./../../assets/icon/calendar-icon.svg";
import SettingIcon from "./../../assets/icon/setting-icon.svg";


const SideBar: FC= () => {
    return (
      <div className='Sidebar h-[100vh] w-[100px] rounded-r-[20px] bg-white py-[15px] flex flex-col gap-[22px] items-center'>
        <div className="mt-[35px]">
            <Image imageSrc={LogoHC} imageWidth="42px" />
        </div>
        <hr className='mb-[50px] w-[70px] bg-grey-light h-[1px]' />

        <div className=" flex flex-col gap-[72px]">
            <LinkIcon LinkIconSrc={HomeIcon} LinkTo='/' />
            <LinkIcon LinkIconSrc={CalendarIcon} LinkTo='/' />
            <LinkIcon LinkIconSrc={SettingIcon} LinkTo='/' />

        </div>
      </div>
    );
}
  
export default SideBar;