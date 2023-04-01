import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEye } from '@fortawesome/free-regular-svg-icons';
import './styles.css';

export const SearchBar = () => {
    const app = document.querySelector('.App');
    const [isDarkTheme, setDarkTheme] = useState(false);
    const [accessibilityFontSize, setFontSize] = useState('medium');
  
    function setHighContrast() {
        if (isDarkTheme) {
          app.classList.remove('dark');
          setDarkTheme(false);
          return;
        }
        setDarkTheme(true);
        app.classList.add('dark');
      }
      
      function setSmallFontSize() {
        app.classList.remove(accessibilityFontSize);
        setFontSize('small');
        app.classList.add('small');
      }
      
      function setMediumFontSize() {
        app.classList.remove(accessibilityFontSize);
        setFontSize('medium');
        app.classList.add('medium');
      }
      
      function setBigFontSize() {
        app.classList.remove(accessibilityFontSize);
        setFontSize('big');
        app.classList.add('big');
      }

     return (
        <div className="searchbar flex">
            <input className="search-input" type='text' placeholder='Search...' />
            <div>
                <button className="btn btn-small" onClick={setSmallFontSize}>
                    A
                </button>
                <button className="btn btn-medium" onClick={setMediumFontSize}>
                    A
                </button>
                <button className="btn btn-big" onClick={setBigFontSize}>
                    A
                </button>
                <button className="contrast" onClick={setHighContrast}>
                    <FontAwesomeIcon icon={faEye} />
                </button>
                <button className="searchbar-button">
                    <FontAwesomeIcon icon={faStar} />
                    Star
                </button>
                <span className="searchbar-counter">34</span>
            </div>
        </div>
     )
};

SearchBar.displayName = "SearchBar";