import logo from './logo.svg';
import './App.css';
import AddBus from './components/AddBus';
import DeleteBus from './components/DeleteBus';
import SearchBus from './components/SearchBus';
import ViewBus from './components/ViewBus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<AddBus/>}/>
    <Route path='/View' element={<ViewBus/>}/>
    <Route path='/Search' element={<SearchBus/>}/>
    <Route path='/Delete' element={<DeleteBus/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
