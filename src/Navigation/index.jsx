import { memo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faAddressBook,faEdit,faEye,faEnvelope,faCalendarPlus ,faKeyboard,faWindowRestore} from '@fortawesome/free-regular-svg-icons';
import './styles.css';
import { Link } from "react-router-dom";
import { Url } from "../App";


export const Navigation = memo(() => {
     return (
        <div className="navigation">
            <dl>
                <dd>
                    <Link to={Url.dashboard}>
                        <FontAwesomeIcon icon={faAddressBook} />
                        Dashboard
                    </Link>
                </dd>
                <dd>
                    <Link to={Url.layouts}>
                        <FontAwesomeIcon icon={faEdit} />
                        Layouts
                    </Link>
                </dd>
                <dt>Pages</dt>
                <dd>
                    <Link to={Url.accountSettings}>
                        <FontAwesomeIcon icon={faEye} />
                        Account Settings
                    </Link>
                </dd>
                <dd>
                    <Link to={Url.authentications}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        Authentications
                    </Link>
                </dd>
                <dd>
                    <Link to={Url.misc}>
                    <FontAwesomeIcon icon={faKeyboard} />
                    Misc
                    </Link>
                </dd>
                <dt>Components</dt>
                <dd>
                    <Link to={Url.cards}>
                        <FontAwesomeIcon icon={faCalendarPlus} />
                        Cards
                    </Link>
                </dd>
                <dd>
                    <Link to={Url.userInterface}>
                        <FontAwesomeIcon icon={faEdit} />
                        User Interface
                    </Link>
                </dd>
                <dd>
                    <Link to={Url.extendedUi}>
                        <FontAwesomeIcon icon={faAddressBook} />
                        Extended UI
                    </Link>
                </dd>
                <dd>
                    <Link to={Url.boxicons}>
                        <FontAwesomeIcon icon={faCopy} />
                        Boxicons
                    </Link>
                </dd>
                <dt>Forms and Tables</dt>
                <dd>
                    <Link to={Url.formElements}>
                        <FontAwesomeIcon icon={faWindowRestore} />
                        Form Elements
                    </Link>
                </dd>
            </dl>
        </div>
     )
});

Navigation.displayName = "Navigation";