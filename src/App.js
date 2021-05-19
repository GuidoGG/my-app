import './App.css';
import Header from "./components/common/Header";
import Textfield from "./components/Textfield";
import homeicon from "./icons/home.png";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <div style={{ textAlign: "center" }}>
        <Textfield />
        <div style={{ textAlign: "center" }}>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={homeicon} alt="Home" />
          test

        </div>
        <h1>hadsldlkdlko</h1>
      </div>
    </div>

  );
}

export default App;