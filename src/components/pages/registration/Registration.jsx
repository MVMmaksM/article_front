import { useState } from "react";
import Button from "../../Button.jsx";
import RegApi from "../../../api/RegApi.js"

const Registration = ()=>{
    const [phone, setPhone] = useState("");
    const [code_id, setCodeId] = useState("");
    const [conirmBlock, setConfirmBlock] = useState("d-none");
    const [confirmCode, setConfirmCode] = useState("");

    const postRegPhone = async()=>{
        const responce = await RegApi.reg(phone);
        if(responce.code_id){
            setCodeId(responce.code_id);           
            setConfirmBlock("d-block");
        }
    }

    const postConfirmCode = async()=>{
        const result = await RegApi.confirmCode(code_id, confirmCode);
    }

    return(<div class="min-vh-100"> 
                <form>
                    <div class="container">                        
                        <div class='col-12 col-lg-12 me-lg-12 mb-2 justify-content-center mb-md-0'>
                            <div class="row">
                                <div class="col-6">
                                    <div class="mb-3">
                                        <label class="form-label">Введите номер телефона</label>
                                        <input type="number" class="form-control" value={phone} onChange={e => setPhone(e.target.value)}/>                                                                                    
                                    </div>                                     
                                    <Button onclick={postRegPhone} name="Зарегистрироваться" class="mt-1 mb-4 btn btn-outline-light"/>
                                    <div class={conirmBlock}>
                                    <div class="mb-3">
                                        <label class="form-label">Введите код подтверждения</label>
                                        <input type="number" class="form-control" value={confirmCode} onChange={e => setConfirmCode(e.target.value)}/>                                                                                    
                                    </div>                                     
                                    <Button onclick={postConfirmCode} name="Подтвердить" class="mt-1 btn btn-outline-light"/>
                                </div> 
                                </div>                                                                   
                            </div> 
                        </div>                                             
                    </div>                    
                </form>
           </div>);
}

export default Registration;