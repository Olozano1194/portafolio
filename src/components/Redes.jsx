import {Link} from 'react-router-dom';
import { FaLinkedin, FaGithub, FaFile  } from 'react-icons/fa';



function Redes() {
    return (
        <div className="text-justify text-lg text-slate-950 border-b-2 border-stone-900">
            <p>Hola, soy <span className='text-black font-bold'>Oscar Eduardo Lozano Bocanegra</span></p>

            <p>Ingeniero de sistemas, graduado de la institución de educación superior
                <span className='font-bold'> "ITFIP"</span>. En Alura Latam, participé en el proyecto Oracle ONE, donde 
                he podido fortalecer mis habilidades en el desarrollo en; Java, JavaScript, 
                Css3 y SQL.
                en mi portafolio encontrarás muestras de mis proyectos y enlaces a mi repositorio
                de GitHub, Linkendln y currículum.
                ¡Gracias por visitar y espero que disfrutes explorando mi trabajo!
                Estoy emocionado por lo que el futuro me depara y agradecido por seguir creciendo profesionalmente.
                </p>

                <div className='flex items-center justify-center gap-10 p-4 text-4xl'>
                    <Link to={'https://www.linkedin.com/in/OlozanoBocanegra'} target='_blank' className='hover:text-cyan-500 redes'><FaLinkedin /></Link>
                    <Link to={'https://github.com/Olozano1194'} target='_blank' className='hover:text-stone-600 redes'><FaGithub /></Link>
                    <Link to={'portafolio/curriculum/resumeOscarLozano.pdf'} target='_blank' className='hover:text-pink-400 redes'><FaFile /></Link>
                </div>
                  
        </div>
    )
};

export default Redes;

