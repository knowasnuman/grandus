import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import ContactPage from './Pages/ContactPage/ContactPage';
import VakalarPage from './Pages/VakalarPage/VakalarPage';
import SeminerPage from './Pages/SeminerPage/SeminerPage';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/iletisim' element={<ContactPage/>}/>
        <Route path='/vakalar' element={<VakalarPage/>}/>
        <Route path='/seminerler' element={<SeminerPage/>}/>

      </Routes>
    </>
  );
}

export default App;
