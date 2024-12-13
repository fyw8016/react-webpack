import React from "react";
// import Todo from './assets/svg/todo.svg';
import develop02 from "@/assets/img/develop02.png";
import develop04 from "@/assets/img/develop04.png";
import "./app.less";
// import style from './app.less'

function App() {
  return (
    <div>
      <h2>template_react</h2>
      {/* <Todo /> */}
      <img src={develop02} alt="大于10kb的图片" />
      <img src={develop04} alt="小于10kb的图片" />
    </div>
  );
}
export default App;
