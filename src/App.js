import "./App.css";
import { Title } from "./components/Title";
import { Form } from "./components/Form";
import { TotalHours } from "./components/TotalHours";
import { BadList } from "./components/BadList";
import { GoodList } from "./components/GoodList";
import { useState } from "react";

function App() {
  const [goodList, setGoodList] = useState([]);
  const [badList, setBadList] = useState([]);
  const ttlBadHours = badList.reduce((acc, curr) => acc + curr.hr, 0);
  const ttlGoodHours = goodList.reduce((acc, curr) => acc + curr.hr, 0);

  const addNewTask = (task) => {
    setGoodList([...goodList, task]);
  };

  const handleOnGoodListDelete = (i) => {
    const newArg = goodList.filter((item, index) => index !== i);
    setGoodList(newArg);
  };
  const handleOnBadListDelete = (i) => {
    const newArg = badList.filter((item, index) => index !== i);

    setBadList(newArg);
  };
  const handleOnMoveToBadList = (i) => {
    const selectedItem = goodList[i];
    setBadList([...badList, selectedItem]);
    const newArg = goodList.filter((item, index) => index !== i);
    setGoodList(newArg);
  };
  const handleOnMoveToGoodList = (i) => {
    const selectedItem = badList[i];
    setGoodList([...goodList, selectedItem]);
    const newArg = badList.filter((item, index) => index !== i);
    setBadList(newArg);
  };
  const total = ttlBadHours + ttlGoodHours;

  return (
    <div className="App">
      {/* Title */}
      <Title />
      {/* Form */}
      <Form addNewTask={addNewTask} />
      {/* Good-list */}
      <GoodList
        goodList={goodList}
        handleOnGoodListDelete={handleOnGoodListDelete}
        handleOnMoveToBadList={handleOnMoveToBadList}
      />
      {/* bad-list */}
      <BadList
        badList={badList}
        handleOnBadListDelete={handleOnBadListDelete}
        handleOnMoveToGoodList={handleOnMoveToGoodList}
        ttlBadHours={ttlBadHours}
      />
      {/* total hours */}
      <TotalHours total={total} />
    </div>
  );
}

export default App;
