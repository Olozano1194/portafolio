import { datos } from "../data/formacionAcademica";


function FormacionAcademica() {
    return (
        <section className="w-full flex flex-col justify-center items-center p-5 border-b-2 border-stone-900">
            <h1 id="formacionAcademica" className="font-bold text-center text-4xl p-5">Formación Académica</h1>
            <ul  className="w-full flex justify-center items-center flex-wrap md:justify-between text-center gap-5 mt-5 text-3xl cursor-pointer" >
                { datos.map((item) => (
                    <li key={item.id} className='flex items-center flex-col justify-center'>
                        <div className="w-48 h-32 flex items-center justify-center bg-gray-200 overflow-hidden">
                            <img
                                className=" rounded-xl max-w-full max-h-full object-contain"
                                // className={`w-48 h-30 rounded-xl ${item.imagen === 'PracticanteAlura' ? 'w-40 h-25': ''} ${item.imagen === 'TecnologoPlatzi' ? 'w-40 h-28': ''} `} 
                                src={`/portafolio/assets/formacion-${item.imagen}.png`}
                                alt={`Logo ${item.imagen}`} 
                            />
                        </div>
                        <span className={`w-48 text-lg mt-3`}>{item.titulacion}</span>
                        <span className="w-32 text-lg">{item.date}</span>
                    </li>
                    ))
                }

            </ul>
        </section>
    );
    
}
export default FormacionAcademica;


            
            