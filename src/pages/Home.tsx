import { FC } from 'react';
import { useStore } from "./../store/todoStore";

import SideBar from "./../components/organisms/Sidebar";
import GlobalContainer from "../components/templates/GlobalContainer";
import ItemsContainer from "./../components/templates/ItemsContainer";
import TodoCard from "./../components/organisms/TodoCard";
import NewTodoTask from "./../components/organisms/NewTodoTask";

export const Home: FC = () => {
  const { todos } = useStore();

  return (
    <GlobalContainer sidebar={<SideBar />}>
      <ItemsContainer title="To Do">
        {
          todos?.map((todo, i) => {
            return !todo.isDone &&
              <TodoCard id={todo.id} title={todo.title} description={todo.description} isDone={todo.isDone} key={`${i}-${todo.title}`} />
          })
        }
        <NewTodoTask />         
      </ItemsContainer>
      <ItemsContainer title="Finished">
        {
          todos?.map((todo, i) => {
            return todo.isDone &&
                <TodoCard id={todo.id} title={todo.title} description={todo.description} isDone={todo.isDone} key={`${i}-${todo.title}`} />
          })
        }
      </ItemsContainer>
    </GlobalContainer>
  );
}

export default Home;
