import Header from "./components/Header";
import {Routes,Route} from "react-router-dom"
import Login from "./components/Login";
import Product from "./components/Product";
import Feed from "./components/Feed";
function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/All" element={<Feed/>} />
      <Route path="/myproduct/:id" element={<Product/>} />
     </Routes>
    </div>
  );
}

export default App;
