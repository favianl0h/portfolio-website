// import logo from './logo.svg';
import "./CSS/Component.css";
import "./CSS/Component.css";
import "./CSS/Class.css";
import Home from './Home/Home';
import Navbar from './Navbar';

export default function App() {
  return (
    <div style={{ width:'100vw', marginTop:'80px', }}>
      <Navbar style={{ zIndex:1, top:0, }}/>
      <div> {/* Main Views */}
        <Home />
      </div>
    </div>
  );
};
