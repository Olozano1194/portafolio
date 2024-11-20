import imgPerfil from '../assets/foto_perfil.jpeg'

function SobreMi() {
    return (
        <section id='sobreMi' className="flex justify-center items-center flex-col p-7 border-b-2 border-stone-900">
            <div className='rounded-full'>
                <img src={imgPerfil} alt="img-perfil" className='rounded-full w-60' />
            </div>

            <div className='text-slate-950 text-[1.05rem] md:text-[1.2rem] text-center'>
                <h2 className='text-4xl font-bold mt-5 mb-4'>Sobre mi</h2>

                <p className='leading-9'>¡Hola¡ Soy <span className='font-bold'>Oscar</span>, un apasionado ingeniero en sistemas colombiano de 29 años 
                que, desde el 2022, se ha dedicado al fascinante mundo de la programación, especialmente 
                en el Front-End.<br></br>
                Durante el último año, he invertido mi tiempo en diversas plataformas de aprendizaje para 
                profundizar mis conocimientos.<br></br> Participé en el programa de Oracle con Alura Latam, donde adquirí habilidades en tecnologías como Java, JavaScript, CSS3 y MySQL.<br></br>Adicionalmente he logrado expandir mis conocimientos en programación gracias a las herramientas que ofrece el ministerio de las TIC con su programa "MISIONTIC".<br></br>En paralelo, he estado estudiando en Platzi, donde he tenido acceso 
                a valiosos cursos que me han permitido explorar más a fondo 
                frameworks como BootStrap y Django.<br></br> Actualmente, estoy ampliando mis conocimientos de manera autodidacta, centrándome en tecnologías como React, Tailwind, Express, Django RestFramework, MongoDB, Vercel y Git.<br></br>
                Estoy emocionado por seguir creciendo profesionalmente y aplicar mis habilidades en proyectos desafiantes.<br></br>
                ¡Gracias por visitar mi perfil y conocer más sobre mí!.
                </p>
            </div>
        </section>

    );
}
export default SobreMi;