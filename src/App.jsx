import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Redes from './components/Redes';
import SobreMi from './components/SobreMi';
import Skills from './components/Skills';
import SoftSkills from './components/SoftSkills';
import Hobbies from './components/Hobbies';
import FormacionAcademica from './components/FormacionAcademica'
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <header className='bg-slate-500 flex justify-between gap-5 p-5'>
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

      </main>
      <footer className='bg-slate-500 p-5'>
        <Contacto />
      </footer>
      
    </BrowserRouter>
  )
}

export default App
