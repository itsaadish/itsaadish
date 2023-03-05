import Home from "./Info";
import Aboutme from "./components/aboutme/aboutme";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
         <div className="App">
          <Home></Home>
         <Routes>
                 <Route exact path='/itsaadish/about' element={<Aboutme />}></Route>
          </Routes>
        </div>  
    
    </Router>
    
  );
}

export default App;
