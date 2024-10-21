import { FaHtml5, FaJava, FaCss3, FaPython, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiDjango, SiTailwindcss, SiMysql } from 'react-icons/si';

function getIcon(iconName) {
    switch (iconName) {
        case 'FaHtml5':
            return <FaHtml5 className='iconHtml' size={'3rem'} />;
        case 'FaJava':
            return <FaJava  className='iconJava' size={'3rem'} />;
        case 'FaCss3':
            return <FaCss3 className='iconCss' size={'3rem'} />;
        case 'FaPython':
            return <FaPython className='iconPy' size={'3rem'} />;

        case 'IoLogoJavascript':
            return <IoLogoJavascript className='iconJS' size={'3rem'} />;

        case 'SiDjango':
            return <SiDjango className='iconDj' size={'3rem'} />;
        
        case 'FaReact':
            return <FaReact className='iconReact' size={'3rem'} />;
        
        case 'SiTailwind':
            return <SiTailwindcss className='iconTw' size={'3rem'} />;
        
        case 'SiMysql':
            return <SiMysql className='iconMysql' size={'3rem'} />;

        default:
            return null;
    }
    
}
export default getIcon;