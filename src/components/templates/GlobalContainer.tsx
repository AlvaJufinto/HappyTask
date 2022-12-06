import { FC, ReactNode } from 'react';

interface IState {
    sidebar?: ReactNode;
    children: ReactNode;
}

const GlobalContainer: FC<IState>= ({ sidebar, children }) => {
    return ( 
      <div className='GlobalContainer h-[100vh]  pb-[150px] bg-grey-default flex'>
        {sidebar}
        <div className='pl-[120px] pt-[65px] pr-[0px]'>
            {children}
        </div>
      </div>
    );
}
  
export default GlobalContainer;