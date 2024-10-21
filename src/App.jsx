import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Redes from './components/Redes';
import SobreMi from './components/SobreMi';
import Skills from './components/Skills';
import SoftSkills from './components/SoftSkills';
import Hobbies from './components/Hobbies';
import FormacionAcademica from './components/FormacionAcademica'
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Videos from './components/Videos';
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <header className='w-full bg-slate-500 flex justify-center lg:gap-3 p-2'>
        <Navbar />
      </header>
      <main className='bg-gray-200 p-5'>

          <Redes />
          <SobreMi />
          <Skills />
          <SoftSkills />
          <Hobbies />
          <FormacionAcademica />
          <Proyectos />

          <Routes >
            <Route path="/Videos/:videosId" element={<Videos />} />
          </Routes>
      </main>
      <footer className='bg-slate-500 p-5'>
        <Contacto />
      </footer>
      
    </BrowserRouter>
  )
}

export default App
