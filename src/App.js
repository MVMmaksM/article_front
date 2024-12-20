import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from './components/Header.jsx';
import Main from "./components/pages/Main.jsx";
import IndexArticle from "./components/pages/articles/IndexArticle.jsx";
import Authors from "./components/pages/Authors.jsx";
import About from "./components/pages/About.jsx";
import Profile from './components/pages/Profile.jsx';
import NotFound from './components/pages/Not found.jsx';
import {store} from "./store/index.js";
import { Provider } from 'react-redux';
import Registration from "./components/pages/registration/Registration.jsx"

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Header/>}>  
                <Route path="/" element={<Main/>}/>
                <Route path='articles/*' element={<IndexArticle />}/>
                <Route path='authors' element={<Authors />}/>
                <Route path='about' element={<About />}/>
                <Route path='profile' element={<Profile />}/>
                <Route path='/*' element={<NotFound />}/>
                <Route path="registration" element = {<Registration />}/>
              </Route>      
            </Routes> 
          </BrowserRouter>
        </Provider>         
  );
}

export default App;
