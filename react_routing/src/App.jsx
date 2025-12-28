
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentDetails from './components/Student_details'
import StudentList from './components/Student_List'
import MoreInfo from './components/MoreInfo';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StudentList/>}></Route>
      <Route path="/student/:id" element={<StudentDetails/>}>
      <Route path="more" element={<MoreInfo/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
