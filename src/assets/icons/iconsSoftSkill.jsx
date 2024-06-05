import { FaUsers, FaCalendarTimes } from 'react-icons/fa';
import { FcCollaboration } from 'react-icons/fc';
import { RiEmpathizeFill } from 'react-icons/ri';

function getIcon(iconName) {
    switch (iconName) {
        case 'FaUsers':
            return <FaUsers className='iconHtml' size={'3rem'} />;
        case 'RiEmpathizeFill':
            return <RiEmpathizeFill  className='iconJava' size={'3rem'} />;
        case 'FcCollaboration':
            return <FcCollaboration className='iconCss' size={'3rem'} />;
        case 'FaCalendarTimes':
            return <FaCalendarTimes className='iconPy' size={'3rem'} />;
        
        default:
            return null;
    }
    
}
export default getIcon;