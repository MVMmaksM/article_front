import { NavLink, Outlet } from "react-router";

const Header=(props)=>{
    return (<div>
                 <header class="p-3 bg-dark text-white">
                    <div class="container">
                        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">                               
                            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                <li>
                                    <NavLink to="/" style={{ textDecoration: 'none' }}>
                                        <p class="nav-link px-2 text-white">Главная</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="articles" style={{ textDecoration: 'none' }}>
                                        <p class="nav-link px-2 text-white">Статьи</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="authors" style={{ textDecoration: 'none' }}>  
                                        <p class="nav-link px-2 text-white">Авторы</p>
                                    </NavLink>
                                </li>                                                     
                                <li>
                                    <NavLink to="about" className='no-underline'>  
                                        <p class="nav-link px-2 text-white">About</p>
                                    </NavLink>
                                </li>
                            </ul>                
                            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                                <input type="search" class="form-control form-control-dark" placeholder="Поиск..." aria-label="Search"/>
                            </form>                
                            <div class="text-end">
                                <button type="button" class="btn btn-outline-light me-2">Вход</button>
                                <button type="button" class="btn btn-warning">Регистрация</button>                            
                                <a href="#" data-bs-toggle="tooltip" title="Профиль" class="m-5 link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" aria-expanded="false">
                                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"/>
                                </a>                                                    
                            </div>
                        </div>
                    </div>               
                </header>
                <div>
                    <Outlet />
                </div>
            </div>
           )
}

export default Header;