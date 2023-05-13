import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEye, faWindowMaximize, faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';
import './styles.css';

export const TopBar = ({
  handleClick,
}) => {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const [accessibilityFontSize, setFontSize] = useState();
  const [liked, setLiked] = useState(false);

  function like() {
    setLiked(!liked);
  }

  function setHighContrast() {
    const app = document.querySelector('.App');

    if (isDarkTheme) {
      app.classList.remove('dark');
      setDarkTheme(false);
      return;
    }
    setDarkTheme(true);
    app.classList.add('dark');
  }
  
  function setSmallFontSize() {
    const app = document.querySelector('.App');
    
    if (accessibilityFontSize !== 'small') {
      app.classList.remove(accessibilityFontSize);
      setFontSize('small');
      app.classList.add('small');
    }
  }
  
  function setMediumFontSize() {
    const app = document.querySelector('.App');
    
    if (accessibilityFontSize !== 'medium') {
      app.classList.remove(accessibilityFontSize);
      setFontSize('medium');
      app.classList.add('medium');
    }
  }
  
  function setBigFontSize() {
    const app = document.querySelector('.App');
    
    if (accessibilityFontSize !== 'big') {
      app.classList.remove(accessibilityFontSize);
      setFontSize('big');
      app.classList.add('big');
    }
  }

  return (
    <div className="topbar flex">
      <div>
        <button className="btn btn-hamburger" onClick={handleClick}>
          <FontAwesomeIcon icon={faWindowMaximize} />
        </button>
        <input className="search-input" type='text' placeholder='Search...' />
      </div>
      <div>
        <button className="btn btn-small" onClick={setSmallFontSize}>
            A
        </button>
        <button className="btn btn-medium" onClick={setMediumFontSize}>
            A<sup>+</sup>
        </button>
        <button className="btn btn-big" onClick={setBigFontSize}>
            A<sup>++</sup>
        </button>
        <button className="btn btn-contrast" onClick={setHighContrast}>
            <FontAwesomeIcon icon={faEye} />
        </button>
        <button className="btn btn-like" onClick={like}>
          {!liked ? (<FontAwesomeIcon icon={faStar} />) : 
            (<FontAwesomeIcon icon={faStarHalfStroke} />)}
            <sup className="like-counter">{Number(liked)}</sup>
        </button>
      </div>
    </div>
  )
};

TopBar.displayName = "TopBar";