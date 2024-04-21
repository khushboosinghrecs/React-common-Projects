import { createContext, useContext } from "react";
import UseMemoHook from "./Check";
import "./styles.css";
import UseState from "./UseState";

function ComponentA() {
  return (
    <div>
      <ComponentB />
    </div>
  );
}
function ComponentB() {
  return (
    <div>
      <ComponentC />
    </div>
  );
}

function ComponentC() {
  const userContext = useContext(myContext);
  console.log(userContext);
  return <h3>name: {userContext.name}</h3>;
}

const myContext = createContext();
export default function ContextApi() {
  return (
    <myContext.Provider value={{ name: "Arvind", age: 25 }}>
      <div className="App">
        <ComponentA />
        <UseMemoHook />
      </div>
    </myContext.Provider>
  );
}
