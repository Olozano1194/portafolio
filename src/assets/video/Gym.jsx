import { useParams } from 'react-router-dom';
import Video from '../video/videos/videos-AluraHotel.mp4';
import { proyectos } from '../../data/proyectos';

function Gym() {
    const { gymId } = useParams();
    const proyecto = proyectos.find((proyecto) => proyecto.id === parseInt(gymId));

    if (!proyecto || proyecto.tipo !== 'Video') {
        return <Redirect to="/404" />;
                
    }

    return (
        <section>
            <h1>{proyecto.title}</h1>
        
            <video  controls width='800' height='240' >
                <source src={`/src/assets/video/videos/${proyecto.img}.mp4`} type='video/mp4' />
                Tu navegador no soporta el elemento video
            </video>
        </section>
    );  
    
}
export default Gym;