import { proyectos } from "../data/proyectos";
import { Link } from "react-router-dom";


function Proyectos() {
    return (
        <section className="w-full overflow-hidden flex flex-col justify-center items-center p-5">
            <h2 id="proyectos" className="font-bold text-center text-4xl p-5">Proyectos</h2>
            
            {
                proyectos.map((proyecto) => (
                    <article key={proyecto.id} className="flex justify-between">
                        <img
                            className="w-80 h-60 mr-10 p-5 rounded-3xl cursor-pointer" 
                            src={`/portafolio/src/assets/img/proyecto-${proyecto.img}.png`} 
                            alt={`imagen ${proyecto.img}`} />
                        
                        <div className="w-96 text-center text-lg p-2">
                            <h3 className="font-bold text-blue-600 text-2xl">{proyecto.title}</h3>
                            <p>{proyecto.subtitle}</p>
                            <p>{proyecto.description}</p>
                        </div>
                            
                        <div className="flex justify-center flex-col items-center ml-10 gap-5 text-white text-lg">
                            <Link to={proyecto.repo} className="bg-blue-700 rounded-xl p-2 ">Repositorio</Link>
                            {
                                proyecto.tipo === 'Demo' ? (
                                    <Link to={proyecto.Demo} className="bg-slate-500 rounded-xl p-2 ">Demo</Link>
                                ): (
                                    <Link to={`/gym/${proyecto.id}`}  className="bg-blue-400 rounded-xl p-2 ">Video</Link>
                                )
                            }
                        </div>
                    </article>
                ))
                
            }
            
        </section>
    );
    
}
export default Proyectos;