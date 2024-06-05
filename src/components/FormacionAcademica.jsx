import { datos } from "../data/formacionAcademica";


function FormacionAcademica() {
    return (
        <section className="w-full overflow-hidden flex flex-col justify-center items-center p-5 border-b-2 border-stone-900">
            <h1 className="font-bold text-center text-4xl p-5">Formación Académica</h1>
            <ul  className="w-full flex flex-wrap justify-between text-center gap-5 mt-5 text-3xl cursor-pointer" >
                { datos.map((item) => (
                    <li key={item.id} className='flex items-center flex-col justify-center'>
                    <img
                        className={`w-40 h-30 rounded-xl ${item.imagen === 'PracticanteTic' ? 'w-40 h-32': ''} ${item.imagen === 'TecnologoPlatzi' ? 'w-40 h-28': ''} `} 
                        src={`/src/assets/img/formacion-${item.imagen}.png`}
                        alt={`Logo ${item.imagen}`} />

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


            
            