import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import { Route, Routes } from 'react-router-dom';
import AddMovie from './components/AddMovie';


function App() {
  return (
    <div className=' relative'>
      <Header/>
      <Routes>
        <Route path='/' element={<Cards/>}/>
        <Route path='/addmovie' element={<AddMovie/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
