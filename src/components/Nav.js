import { NavLink } from "react-router";

const Nav = ()=>{
    return (<ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                    <NavLink to="/" style={{ textDecoration: 'none' }} 
                        className={({ isActive }) =>(isActive ? "nav-link px-2 text-secondary" : "nav-link px-2 text-white")}>          
                        Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink to="articles" style={{ textDecoration: 'none' }}
                        className={({ isActive }) =>(isActive ? "nav-link px-2 text-secondary" : "nav-link px-2 text-white")}>
                        Статьи
                    </NavLink>
                </li>
                <li>
                    <NavLink to="authors" style={{ textDecoration: 'none' }}
                       className={({ isActive }) =>(isActive ? "nav-link px-2 text-secondary" : "nav-link px-2 text-white")}>  
                       Авторы
                    </NavLink>
                </li>                                                     
                <li>
                    <NavLink to="about" style={{ textDecoration: 'none' }}
                       className={({ isActive }) =>(isActive ? "nav-link px-2 text-secondary" : "nav-link px-2 text-white")}>  
                       О сайте
                    </NavLink>
                </li>                               
            </ul>);
}

export default Nav;