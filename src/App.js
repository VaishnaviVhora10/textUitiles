import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import About from './Components/About';
import NavBar from "./Components/NavBar"
import TextForm from './Components/TextForm';
import {useState} from 'react';
function App() {
   const title = "TextUtiles"
  const initialStyle = {
    color: "black",
    background: "white"
  }

  const myStyle = {
    black:{color: "red",
    background: "black"},
     
    green:{
      color: "green",
      background: "green"
    },

    blue:{
      color: "white",
      background: "blue"
    }   
  }

const [mode, setMode] = useState(initialStyle);
console.log(mode);

  function switchModetoblack(){
   mode === initialStyle ? setMode(myStyle.black) : setMode(initialStyle);
   console.log("switched mode", mode)
  //  document.title = "Enable dark mode";
  // setInterval(function(){
  //   alert("Enable dark mode");
  // },1000)
  }

  function switchModetogreen(){
    mode === initialStyle ? setMode(myStyle.green) : setMode(initialStyle);
    console.log("switched mode", mode)
   }

   function switchModetoblue(){
    mode === initialStyle ? setMode(myStyle.blue) : setMode(initialStyle);
    console.log("switched mode", mode)
   }

  return (
    <div className="App" style = {mode}>
      <Router>
      <NavBar title = {title} mode={mode} switchModetoblack={switchModetoblack} switchModetogreen={switchModetogreen}
    switchModetoblue={switchModetoblue}/>
        <Routes>
          <Route path="/" element={<TextForm></TextForm>}></Route>
          {/* <Route path="/About" element={<About></About>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
