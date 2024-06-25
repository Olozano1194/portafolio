import { useForm } from "react-hook-form"; //importación del useForm para validar el formulario

function Contacto() {
    const { register, handleSubmit, formState: {errors}, reset } = useForm();
    
    const onSubmit = handleSubmit((data) => {
        //console.log(data);
        alert('Mensaje enviado correctamente.....')
        reset();
    })

    return (
        <section className="w-full overflow-hidden flex flex-col justify-center items-center p-5">
            <h2 id="contacto" className="font-bold text-center text-4xl p-5">Contacto</h2>
            <p className="text-lg p-3">¿Quieres contactarme?</p>
            <p className="text-lg p-3">Complete el siguiente formulario y me pondré en contacto con usted lo antes posible</p>
            
            <form
                onSubmit={onSubmit}
                className="w-full flex flex-wrap justify-between text-center gap-2 mt-5 text-xl cursor-pointer">

                <label className="" htmlFor="nombre">
                    <input 
                        className="w-80 ml-3 border-l-rose-50 rounded-lg p-2" 
                        type="text" 
                        name="nombre" 
                        id="nombre" 
                        {...register('nombre', {
                            required: {
                                value: true,
                                message: 'El nombre es requerido'
                            },
                            minLength: {
                                value: 4,
                                message: 'El nombre debe tener al menos 4 caracteres'
                            },
                            maxLength: {
                                value: 20,
                                message: 'El nombre debe tener maximo de 20 caracteres'
                            }
                        })}
                        placeholder="Nombre" />
                        {errors.nombre && <span className="text-orange-400 span">
                            {errors.nombre.message}
                        </span>}
                </label>

                <label htmlFor="email">
                    <input 
                        className="w-80 ml-3 border-l-rose-50 rounded-lg p-2" 
                        type="email" 
                        name="email"
                        {...register('email', {
                                required: {
                                    value: true,
                                    message: 'El email es requerido'
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'El email no es válido'
                                }
                            })
                        } 
                        
                        placeholder="Correo Electrónico" />
                        {errors.email && <span className="text-orange-400 span">{errors.email.message}</span>}
                </label>

                <label htmlFor="asunto" className="w-full" >
                    <input 
                        className="w-80 mt-5 ml-3 p-2 border-l-rose-50 rounded-lg" 
                        type="text" 
                        name="asunto" 
                        
                        {...register('asunto', 
                            { required:
                                { value: true,
                                  message: 'El asunto es requerido',
                                },
                                minLength: {
                                    value: 6,
                                    message: 'El asunto debe tener al menos 6 caracteres'
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'El mensaje debe tener maximo 20 caracteres'
                                }
                            }
                        )}
                        placeholder="Asunto" />
                        {errors.asunto && <span className="text-orange-400 span asunto">{errors.asunto.message}</span>}
                </label>

                <label htmlFor="mensaje" className="w-full resize-none" >
                    <textarea 
                        className="w-full h-36 mt-5 ml-3 p-2 border-l-rose-50 rounded-lg resize-none" 
                        name="mensaje" 
                        id="mensaje"
                        {...register('mensaje',
                            { required:
                                { value: true,
                                  message: 'El mensaje es requerido',
                                },
                                minLength: {
                                    value: 10,
                                    message: 'El mensaje debe tener al menos 10 caracteres'
                                },
                                maxLength: {
                                    value: 70,
                                    message: 'El mensaje debe tener maximo 70 caracteres'
                                }
                            }
                        )}
                        placeholder="Escribir Mensaje" />
                        {errors.mensaje && <span className="text-orange-400 text-lg">{errors.mensaje.message}</span>}
                </label>

                <div className="w-full mt-5  text-center ">
                    <input 
                        className="cursor-pointer bg-blue-200 p-3 rounded-xl" 
                        type="submit" 
                        value='Enviar Mensaje' />
                </div>
                

            </form>

            <div className="mt-7 mb-5 text-xl ">
                <p>© Hecho por Oscar Lozano - 2024</p>
            </div>
        </section>
    );
    
}
export default Contacto;