import { NavLink } from "react-router";

const Auth=()=>{
    return(<div class="text-end">
                <button type="button" class="btn btn-outline-light me-2">Вход</button>
                <button type="button" class="btn btn-warning">Регистрация</button>                            
                <NavLink to="profile" data-bs-toggle="tooltip" title="Профиль" className="m-5 link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"/>
                </NavLink>                                                    
            </div>);
}

export default Auth;