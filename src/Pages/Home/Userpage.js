import React, {useState,useEffect} from "react";
import {loginApi} from "../../services/Auth/loginApi";

function Userpage() {
const [user, setUser] = useState()

    // useEffect(() => {
    //         api
    //           .get("/auth/me")
    //           .then((response) => setUser(response.data))
    //           .catch((err) => {
    //             console.error(err);
    //           });
    //       }, []);

async function get(){
    const response = await loginApi.apiGetRequest(
        loginApi.Userinfo()
    );

    console.log(response)
}

    return(
        <div className="Profile">
        <button onClick={get}>botao</button>
        <h1>This is the userpage </h1>
        </div>
    )
}

export default Userpage;