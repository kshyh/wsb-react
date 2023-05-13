import { useState, useEffect } from 'react';
import './App.css';
import { Navigation } from './Navigation';
import { TopBar } from './TopBar';
import { Avatar } from './Avatar';
import { Route, Routes, BrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import { Overview } from './Overview';
import { Layouts } from './Layouts';

export const Url = {
  dashboard: '/dashboard',
  layouts: '/layouts',
  accountSettings: '/account-settings',
  authentications: '/authentications',
  misc: '/misc',
  cards: '/cards',
  userInterface: '/user-interface',
  extendedUi: '/extended-ui',
  boxicons: '/boxicons',
  formElements: '/form-elements',
};

const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

function App() {
  const [isNavVisible, setNavVisible] = useState(false);
  let [width, setWidth] = useState(getWidth());
  // const { pathname, state: locationState } = useLocation();
  // const navigate = useNavigate();

  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth());
      setNavVisible(false);
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  function showNavigation() {
    setNavVisible(!isNavVisible);
  }
  return (
    <BrowserRouter>
      <div className="App parent medium">
        <div className="div1 box">
          {(isNavVisible || width > 525) && (
            <Navigation>
              <Routes>
                <Route element={<Overview />} path={Url.dashboard} />
                <Route element={<Layouts />} path={Url.layouts} />
                <Route element={<Overview />} path={Url.accountSettings} />
                <Route element={<Overview />} path={Url.authentications} />
                <Route element={<Overview />} path={Url.misc} />
                <Route element={<Overview />} path={Url.cards} />
                <Route element={<Overview />} path={Url.userInterface} />
                <Route element={<Overview />} path={Url.extendedUi} />
                <Route element={<Overview />} path={Url.boxicons} />
                <Route element={<Overview />} path={Url.formElements} />
              </Routes>
            </Navigation>
          )}
        </div>
        <div className="div2 box">
          <TopBar handleClick={showNavigation} />
        </div>
        <div className="div3 box">
          1
          <Avatar url="https://fwcdn.pl/ppo/03/66/140366/450369.1.jpg" description="" />
        </div>
        <div className="div4 box">
          2
          <Avatar url="https://fwcdn.pl/ppo/05/59/40559/450082.3.jpg" description="" />
        </div>
        <div className="div5 box">
          3
          <Avatar url="https://fwcdn.pl/ppo/32/36/73236/450602.3.jpg" description="" />
        </div>
        <div className="div6 box">
          4
          <Avatar url="https://fwcdn.pl/ppo/09/17/220917/450368.3.jpg" description="" />
        </div>
        <div className="div7 box">
          5
          <Avatar url="https://fwcdn.pl/ppo/77/66/7766/450367.3.jpg" description="" />
        </div>
        <div className="div8 box">
          6
          <Avatar url="https://fwcdn.pl/ppo/65/20/526520/450604.3.jpg" description="" />
        </div>
        <div className="div9 box">
          7
          <Avatar url="https://fwcdn.pl/ppo/94/47/1129447/455460.3.jpg" description="" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
