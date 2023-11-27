import { ChangeEvent, useState } from "react";
import "./App.css";
import { IData } from "./interfaces";
import { data } from "./constants";

function App(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [arr, setArray] = useState<IData[]>(data);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const handleSubmit = (): void => {
    if (!title.trim()?.length) return;

    const newData = {
      title: title,
      id: new Date().getTime(),
    };
    setArray([newData, ...arr]);
    setTitle("");
  };

  const deleteItem = (id: number): void => {
    setArray(arr.filter((item) => item.id !== id));
  };

  return (
    <div className="todo">
      <h1 className="title">Todo App</h1>
      <div className="flex">
        <input
          type="text"
          placeholder="Enter todo"
          value={title}
          onChange={changeHandler}
          className="input"
        />
        <button onClick={handleSubmit} className="btn">
          Add
        </button>
      </div>
      <div className="item-cards">
        {arr.map((item) => (
          <div key={item.id} className="item-card">
            <h4>{item.title}</h4>
            <div className="delBtn">
              <button onClick={() => deleteItem(item.id)}>del</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
