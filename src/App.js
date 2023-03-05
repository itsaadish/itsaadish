import Home from "./Info";
import Aboutme from "./components/aboutme/aboutme";
import { BrowserRouter,HashRouter ,Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
         <div className="App">
          <Home></Home>
         <Routes>
                 <Route exact path='/itsaadish/about' element={<Aboutme />}></Route>
          </Routes>
        </div>  
    
    </BrowserRouter>
    
  );
}

export default App;
