import { NavLink } from "react-router";
import Button from "./Button.jsx";

const Auth=()=>{
    return(<div class="text-end">
                <Button name="Вход" class="m-3 btn btn-outline-light"/>
                <NavLink to="registration">
                    <button type="button" class="btn btn-warning">Регистрация</button>                           
                </NavLink>
                <NavLink to="profile" data-bs-toggle="tooltip" title="Профиль" className="m-5 link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"/>
                </NavLink>                                                    
            </div>);
}

export default Auth;