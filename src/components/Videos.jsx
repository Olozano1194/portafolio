import { useParams, Navigate } from 'react-router-dom';
// import Video from '/portafolio/videos/videos-AluraHotel.mp4';
import ReactPlayer from 'react-player';
import { proyectos } from '../data/proyectos';

function Videos() {
    const { videosId } = useParams();
    const proyecto = proyectos.find((proyecto) => proyecto.id === parseInt(videosId));

    if (!proyecto || proyecto.tipo !== 'Video') {
        return <Navigate to="/404" />;
                
    }

    return (
        <section>
            <h1>{proyecto.title}</h1>

            <ReactPlayer
                url={`/portafolio/videos/videos-${proyecto.img}.mp4`}
                controls={true}
                width="800px"
                height="600px"
                 
            />
                 
        </section>
    );  
    
}
export default Videos;