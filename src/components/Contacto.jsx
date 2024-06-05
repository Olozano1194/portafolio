

function Contacto() {
    return (
        <section id="contacto" className="w-full overflow-hidden flex flex-col justify-center items-center p-5">
            <h2 className="font-bold text-center text-4xl p-5">Contacto</h2>
            <p className="text-lg p-3">¿Quieres contactarme</p>
            <p className="text-lg p-3">Complete el siguiente formulario y me pondré en contacto con usted lo antes posible</p>
            
            <form className="w-full flex flex-wrap  justify-between text-center gap-2 mt-5 text-xl cursor-pointer">
                <label className="border-2" htmlFor="nombre">Nombre:
                    <input className="ml-3 border-l-rose-50 rounded-lg" type="text" name="nombre" id="nombre" placeholder="Nombre" />
                </label>

                <label className="w-50 border-2 " htmlFor="email">Correo electrónico:
                    <input className="ml-3 border-l-rose-50 rounded-lg" type="email" name="email" id="email" placeholder="Correo Electrónico" />
                </label>

                <label htmlFor="asunto" className="w-full border-2 border-l-rose-50 rounded-lg">
                    Asunto:
                    <input className="ml-3" type="text" name="asunto" id="asunto" placeholder="Asunto" />
                </label>

                <label htmlFor="mensaje" className="w-full resize-none border-2 border-l-rose-50 rounded-lg" >
                    Escribir Mensaje:
                    <input className="ml-3 w-500" type="textarea" name="mensaje" id="mensaje" placeholder="Escribir Mensaje" />
                </label>

                <div className="w-full mt-5  text-center ">
                    <input className="cursor-pointer bg-blue-200 p-3 rounded-xl" type="submit" value='Enviar Mensaje' />
                </div>
                

            </form>

            <div className="mt-7 mb-5 text-xl ">
                <p>© Hecho por Oscar Lozano - 2024</p>
            </div>
        </section>
    );
    
}
export default Contacto;