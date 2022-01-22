import NewsFeed from "./Components/NewsFeed";
import Currencyconv from "./Components/Currencyconv";


function App() {
  return (
    <div className= "App">
    <h1>Crypto Dashboard</h1>
    <div className ="app-wrapper">
    
      <NewsFeed/>
      <Currencyconv/>
      </div>
      
    </div>
  );
}

export default App;
