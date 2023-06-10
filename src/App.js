import "./App.css";
import CustomCard from "./components/CustomCard";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <CustomCard />
      </div>
    </div>
  );
}

export default App;
