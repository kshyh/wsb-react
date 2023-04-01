import './App.css';
import { Navigation } from './Navigation';
import { SearchBar } from './SearchBar';
import { Avatar } from './Avatar';

function App() {
  return (
    <div className="App parent medium">
      <div className="div1 box">
        <Navigation />
      </div>
      <div className="div2 box">
        <SearchBar />
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
  );
}

export default App;
