import { createBrowserRouter } from "react-router-dom";

import { useStore } from "./store/todoStore";

import SideBar from "./components/organisms/Sidebar";
import GlobalContainer from "./components/templates/GlobalContainer";
import ItemsContainer from "./components/templates/ItemsContainer";
import TodoCard from "./components/organisms/TodoCard";
import NewTodoTask from "./components/organisms/NewTodoTask";

import { TextType } from "./components/atoms/Text";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

function App() {
  const { todos } = useStore();

  return (
    <GlobalContainer sidebar={<SideBar />}>
      <ItemsContainer title="Todo">
        {
          todos?.map((task, i) => (
            <TodoCard id={task.id} title={task.title} description={task.description} isDone={task.isDone} key={`${i}-${task.title}`} />
          ))
        }
        <NewTodoTask />         
      </ItemsContainer>
      <ItemsContainer title="Finished">
        {
          todos?.map((todo, i) => {
            return todo.isDone === true ? 
                <TodoCard id={todo.id} title={todo.title} description={todo.description} isDone={todo.isDone} key={`${i}-${todo.title}`} />
              :
            ''
          })
        }
      </ItemsContainer>
    </GlobalContainer>
  );
}

export default App;
