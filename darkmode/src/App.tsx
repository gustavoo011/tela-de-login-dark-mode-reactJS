import { Form } from "./components/form";
import "./App.css";
import ReactSwitch from "react-switch";
import { useState } from "react";

function App() {

  const [theme, setTheme] = useState("light");
  const toggleTheme =()=>{
    //corr - estado atual do elemento
    setTheme(corr=>(corr=="light"?"dark":"light"));
    
  }

  return (
    <div className="App" id={theme}>
      <Form/>
      <br />
      <ReactSwitch onChange={toggleTheme} checked={theme == "dark"}/>
    </div>
  )
}

export default App
