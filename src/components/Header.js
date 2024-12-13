import { Outlet } from "react-router";
import Nav from "./Nav";
import Footer from "./Footer";
import Auth from "./Auth";

const Header=(props)=>{
    return (<div>
                 <header class="p-3 text-white">
                    <div class="container">
                        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">                                                      
                            <Nav />       
                            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                                <input type="search" class="form-control form-control-dark" placeholder="Поиск..." aria-label="Search"/>
                            </form>                
                            <Auth />
                        </div>
                    </div>
                    <hr/>               
                </header>                           
                <div class="bg-dark text-white">
                    <Outlet />                   
                </div>        
                <Footer />
            </div>
           )
}

export default Header;