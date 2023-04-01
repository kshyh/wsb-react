import { memo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faAddressBook,faEdit,faEye,faEnvelope,faCalendarPlus,faKeyboard,faWindowRestore} from '@fortawesome/free-regular-svg-icons';
import './styles.css';

export const Avatar = memo((props) => {
     return (
        <div className="avatar">
            <img src={props.url} alt={props.description} />
        </div>
     )
});

Avatar.displayName = "Avatar";