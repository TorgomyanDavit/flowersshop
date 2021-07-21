import {Main,Footer} from "./features/mainShop/MainContainer";
import { Header } from "./features/mainShop/Header";
import "./features/mainShop/MainContainer.css"


function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
