import * as React from "react";
import Layout, { LeftCol, RightCol } from "./Layout";
import ListNames from "./ListNames";
import TodoList from "./TodoList";
import User from "./User";
import ITodos from "../type/todos.type";

const user = {
  id: 1,
  name: "Alessandro",
  image: "https://github.com/lifeisfoo.png",
};
const lists = [{ id: 1, name: "Importante", undone_count: 0 } /*...*/];

//const allTodos=[] as Todos[]

const allTodos: ITodos [] = [
  { listId: 2, id: 1, done: false, text: "Prima attività" } /*...*/,
];
//const allTodos = [{ listId: 2, id: 1, done: false, text: "Prima attività" },/*...*/];

export function AppCh64() {
  const [listIdx, setListIdx] = React.useState(-1);
  const [todos, setTodos] = React.useState({});

  const selectListByIdx = (idx: any) => {
    setListIdx(idx);
    setTodos(allTodos.filter((t) => t.listId === lists[idx].id));
  };

  return (
    <Layout>
      <LeftCol>
        <User name={user.name} image={user.image} id={0} />
        <hr />
        <ListNames
          lists={lists}
          selectedListIdx={listIdx}
          onListClick={selectListByIdx}
        />
      </LeftCol>
      <RightCol>
        <TodoList  /> {todos}
      </RightCol>
    </Layout>
  );
}
