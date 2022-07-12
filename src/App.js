import React from "react";

/* 컴포넌트명은 대문자로 시작 */
function Food(props) {
  return <h1>I like { props.fav }</h1>;
}

function App() {
  return (
  <div>
    <h1>Hello</h1>
    <Food fav="salmon" />
  </div>
  );
}

export default App;
