import { FaFutbol, FaHeadphones, FaGamepad } from 'react-icons/fa';
import { CgGym } from 'react-icons/cg';
import { GiCook } from 'react-icons/gi';

function getIcon(iconName) {
    switch (iconName) {
        case 'FaFutbol':
            return <FaFutbol className='iconHtml' size={'3rem'} />;
        case 'CgGym':
            return <CgGym  className='iconJava' size={'3rem'} />;
        case 'FaHeadphones':
            return <FaHeadphones className='iconCss' size={'3rem'} />;
        case 'FaGamepad':
            return <FaGamepad className='iconPy' size={'3rem'} />;
        case 'GiCook':
            return <GiCook  className='iconDj' size={'3rem'} />;
        
        default:
            return null;
    }
    
}
export default getIcon;