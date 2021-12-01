import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './Component/Home/Home/Home';
import ProjectsDetails from './Component/ProjectDetails/ProjectsDetails';

function App() {
  return (
    <div className="new-color">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />   
        <Route path="/home" element={<Home/>} />   
        <Route path="/projects/details/:project_id" element={<ProjectsDetails/>} />   
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
