import { FC, ReactNode } from 'react';

interface IState {
    sidebar?: ReactNode;
    children: ReactNode;
}

const GlobalContainer: FC<IState>= ({ sidebar, children }) => {
    return (
      <div className='GlobalContainer h-[100vh] w-[100vw] bg-grey-default flex'>
        {sidebar}
        <div className='pl-[130px] pt-[65px] pr-[50px]'>
            {children}
        </div>
      </div>
    );
}
  
export default GlobalContainer;