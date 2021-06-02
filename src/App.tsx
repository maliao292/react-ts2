import React from "react";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import ShoppingCart from "./components/ShoppingCart";
import style from "../src/static/css/style.module.css";

function App() {
  return (
    <div className={style.app}>
      <h1>狂拽炫酷的字体</h1>
      <ShoppingCart></ShoppingCart>
      <div className={style.robotList}>
        {robots.map(({ id, name, email }) => {
          return <Robot id={id} name={name} email={email} key={id}></Robot>;
        })}
      </div>
    </div>
  );
}

export default App;
