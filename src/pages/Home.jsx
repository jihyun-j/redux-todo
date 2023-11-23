import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import todos from "../redux/modules/todos";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

const Home = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [isDone, setIsDone] = useState(false);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id,
      title,
      contents,
      isDone,
    };

    dispatch(addTodo(newTodo));
  };
  return (
    <div>
      <TodoForm>
        <input
          type="text"
          name=""
          id=""
          value={title}
          onChange={onChangeTitle}
        />
        <input
          type="text"
          name=""
          id=""
          value={contents}
          onChange={onChangeContents}
        />
        <input type="submit" onSubmit={addTodoHandler} />
      </TodoForm>

      {todos.map((todo) => {
        return (
          <ul key={todo.id}>
            <li>{todo.id}</li>
            <li>{todo.title}</li>
            <li>{todo.isDone}</li>
            <li>{todo.contents}</li>
            <button>삭제</button>
          </ul>
        );
      })}
    </div>
  );
};

export default Home;
const TodoForm = styled.form`
  background-color: yellow;
  display: flex;
  flex-direction: column;
`;
