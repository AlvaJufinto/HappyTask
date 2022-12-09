import { FC, useState } from 'react';
import { useStore } from "./../store/todoStore";

import SideBar from "./../components/organisms/Sidebar";
import GlobalContainer from "../components/templates/GlobalContainer";
import Text from '../components/atoms/Text';
import ItemsContainer from "./../components/templates/ItemsContainer";
import TodoCard from "./../components/organisms/TodoCard";
import NewTodoTask from "./../components/organisms/NewTodoTask";

import { TextType } from '../components/atoms/Text';

export enum PageNumber {
  All,
  Todo,
  Finished,
}
export const Home: FC = () => {
  const [tab, setTab] = useState<PageNumber>(PageNumber.All);
  const { todos } = useStore();
  

  return (
    <GlobalContainer sidebar={<SideBar />}>
      <div className="flex border-b-[1px] border-grey-light w-[90vw]">
        <div className={`w-[100px] text-center py-[3px] cursor-pointer ${tab === PageNumber.All ? 'border-b-[1px]' : '' }`} onClick={() => setTab(PageNumber.All)}>
          <Text text='All' textType={TextType.Title} />
        </div>
        <div className={`w-[100px] text-center py-[3px] cursor-pointer ${tab === PageNumber.Todo ? 'border-b-[1px]' : '' }`} onClick={() => setTab(PageNumber.Todo)}>
          <Text text='To Do' textType={TextType.Title} />
        </div>
        <div className={`w-[100px] text-center py-[3px] cursor-pointer ${tab === PageNumber.Finished ? 'border-b-[1px]' : '' }`} onClick={() => setTab(PageNumber.Finished)}>
          <Text text='Finished' textType={TextType.Title} />
        </div>
      </div>
      <div className='pt-[45px]'>
      <div className={`${tab !== PageNumber.All ? 'hidden' : '' }`}>
          <ItemsContainer title="All">
            {
              todos?.map((todo, i) => (
                  <TodoCard id={todo.id} title={todo.title} description={todo.description} isDone={todo.isDone} key={`${i}-${todo.title}`} />
              ))
            }
            <NewTodoTask />         
          </ItemsContainer>
        </div>
        <div className={`${tab !== PageNumber.Todo ? 'hidden' : '' }`}>
          <ItemsContainer title="To Do">
            {
              todos?.map((todo, i) => {
                return !todo.isDone &&
                  <TodoCard id={todo.id} title={todo.title} description={todo.description} isDone={todo.isDone} key={`${i}-${todo.title}`} />
              })
            }
            <NewTodoTask />         
          </ItemsContainer>
        </div>
        <div className={`${tab !== PageNumber.Finished ? 'hidden' : '' }`}>
          <ItemsContainer title="Finished">
            {
              todos?.map((todo, i) => {
                return todo.isDone &&
                    <TodoCard id={todo.id} title={todo.title} description={todo.description} isDone={todo.isDone} key={`${i}-${todo.title}`} />
              })
            }
          </ItemsContainer>
        </div>
      </div>
    </GlobalContainer>
  );
}

export default Home;
