import { memo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faAddressBook,faEdit,faEye,faEnvelope,faCalendarPlus ,faKeyboard,faWindowRestore} from '@fortawesome/free-regular-svg-icons';
import './styles.css';
// import { Route, Routes, useLocation, useNavigate } from "react-router-dom";


const Url = {
    dashboard: "/dashboard",
    layouts: "/layouts",
    accountSettings: "/account-settings",
    authentications: "/authentications",
    misc: "/misc",
    cards: "/cards",
    userInterface: "/user-interface",
    extendedUi: "/extended-ui",
    boxicons: "/boxicons",
    formElements: "/form-elements",
  }

export const Navigation = memo(() => {
    // const { pathname, state: locationState } = useLocation();
    // const navigate = useNavigate();

     return (
        <div className="navigation">
            <dl>
                <dd>
                    <FontAwesomeIcon icon={faAddressBook} />
                    Dashboard
                </dd>
                <dd>
                    <FontAwesomeIcon icon={faEdit} />
                    Layouts
                </dd>
                <dt>Pages</dt>
                <dd>
                    <FontAwesomeIcon icon={faEye} />
                    Account Settings
                </dd>
                <dd>
                    <FontAwesomeIcon icon={faEnvelope} />
                    Authentications
                </dd>
                <dd>
                    <FontAwesomeIcon icon={faKeyboard} />
                    Misc
                </dd>
                <dt>Components</dt>
                <dd>
                    <FontAwesomeIcon icon={faCalendarPlus} />
                    Cards
                </dd>
                <dd>
                    <FontAwesomeIcon icon={faEdit} />
                    User Interface
                </dd>
                <dd>
                <FontAwesomeIcon icon={faAddressBook} />
                    Extended UI
                </dd>
                <dd>
                    <FontAwesomeIcon icon={faCopy} />
                    Boxicons
                </dd>
                <dt>Forms and Tables</dt>
                <dd>
                    <FontAwesomeIcon icon={faWindowRestore} />
                    Form Elements
                </dd>
            </dl>
        </div>
     )
});

Navigation.displayName = "Navigation";