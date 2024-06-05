import imgPerfil from '../assets/img/foto_perfil.jpeg'

function SobreMi() {
    return (
        <section className="flex justify-center items-center flex-col p-7 border-b-2 border-stone-900">
            <div className='rounded-full'>
                <img src={imgPerfil} alt="img-perfil" className='rounded-full w-60' />
            </div>

            <div className='text-slate-950 text-lg text-center'>
                <h2 className='text-4xl font-bold mt-5 mb-4'>Sobre mi</h2>

                <p className='leading-9'>¡Hola¡ soy <span className='font-bold'>Oscar</span>, un apasionado ingeniero en sistemas colombiano de 29 años, 
                que desde el 2022 se ha dedicado al apasionante  mundo de la programación, especialmente 
                en el Front-End.<br></br>
                Durante el último año, he invertido mi tiempo en diversas plataformas de aprendizaje para 
                profundizar mis conocimientos.<br></br> Participé en el programa de Oracle con Alura 
                Latam, donde adquirí habilidades en tecnologías como Java, JavaScript, CSS3, 
                y SQL.<br></br> Además, aproveché un curso gratuito del Ministerio de las TIC en 
                programación para expandir mis conocimientos.<br></br>
                En paralelo, también he estado estudiando en Platzi, donde he tenido acceso 
                a valiosos cursos gratuitos que me han permitido explorar más a fondo 
                Frameworks como BootStrap y Django.<br></br> Actualmente, estoy ampliando mis 
                conocimientos de manera autodidacta, centrándome en tecnologías como React, 
                Next.js y Tailwind CSS.<br></br>
                Estoy emocionado por seguir creciendo profesionalmente y aplicar mis habilidades 
                en proyectos desafiantes.<br></br>
                ¡Gracias por    visitar mi perfil y conocer más sobre mí!
                </p>
            </div>
        </section>

    );
}
export default SobreMi;