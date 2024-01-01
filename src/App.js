import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Omkar" about="About US" />
      {/* <Navbar/> */}
      <div className="container my-4"><TextForm heading="Enter Text Here To Analyze" /></div>
    </>
  );
}

export default App;
