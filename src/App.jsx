// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainlayout from './layouts/Mainlayout';  
import Home from './pages/Home';  
import ContactUs from './pages/ContactUs';
import './index.css'
import Courses from './pages/Courses';
import StudentReview from './pages/StudentReview';
import Interview from './pages/Interview.jsx'
import Versus from './pages/Versus.jsx';
import Hostel from './pages/Hostel.jsx';
import ClassRoom from './pages/ClassRoom.jsx';
import Profile from './pages/Profile.jsx';
import ProductionC from './pages/ProductionC.jsx'
import PythonC from './pages/PythonC.jsx'
import DotnetC from './pages/DotnetC.jsx'
import DataEngineer from './pages/DataEngineer.jsx';
import SuccessStory from './pages/SuccessStory.jsx'
import DevopsC from './pages/DevopsC.jsx';
import Question from './pages/Question.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}> 
          <Route index element={<Home />} /> 
          <Route path="aboutus" element={<ContactUs/>} />
          <Route path="/Courses" element={<Courses/>} />
          <Route path="/studentReview" element={<StudentReview/>} />
          <Route path="/InterviewQuestions" element={<Interview/>} />
          <Route path="/UniqVsOther" element={<Versus/>} />
          <Route path="/Hostel" element={<Hostel/>} />
          <Route path="/classRooms" element={<ClassRoom/>} />
          <Route path="/Profiles" element={<Profile/>} />
          <Route path="/pythonCourse" element={<PythonC/>} />
          <Route path="/DotnetCourse" element={<DotnetC/>} />
          <Route path="/ProductionCourse" element={<ProductionC/>} />
          <Route path="/DataEngineerCourse" element={<DataEngineer/>} />
          <Route path="/successStory" element={<SuccessStory/>} />
          <Route path="/devOps" element={<DevopsC/>} />
          <Route path="/faqQuestions" element={<Question/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
