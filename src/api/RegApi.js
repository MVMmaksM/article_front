import Fetch from "./Fetch";

class RegApi{
    static async reg(phone){
        const credPhone = btoa(phone);
        const headers = new Headers();
        headers.append("reg", credPhone);

        return await Fetch.post("/api/v1/registration/phone", headers);
    }

    static async confirmCode(code_id, confirmCode){
        const cred = btoa(code_id + ":" + confirmCode);

        const headers = new Headers();
        headers.append("confirm", cred);

        return await Fetch.post("/api/v1/registration/phone/confirm", headers);
    }
}

export default RegApi;