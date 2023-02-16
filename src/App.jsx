import logo from './logo.svg';
import './App.css';
import Headerform from "./components/Headerform"
import { Link, Navigate, Route, Routes } from "react-router-dom"
import Person from "./views/Person";
import Planet from "./views/Planet";

function App() {
  return (
    <div className="App">
      <Headerform/>

      <Routes>
        <Route path="/person/:id" element={<Person/>}></Route>
        <Route path="/planet/:id" element={<Planet/>}></Route>
      </Routes>
    </div>

  );
}

export default App;
