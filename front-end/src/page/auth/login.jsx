import React, { useState, useNavigate } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { setUserInfo } from "../../redux/action";
//import userReducer from "../../redux/reducer";
import store from "../../redux/store";

//import react hookform

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const navigate = useNavigate();
    const userState = store.getState();

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleUserLogin = async (e) => {
        e.preventDefault();
        try {
            const data = {
                email: email,
                password: password,
            }
            const registerUser = await axios.post('http://127.0.0.1:8000/api/login', data)
            // const res = JSON.parse(registerUser.json());
            console.log(registerUser.data.data);
            store.dispatch(setUserInfo(registerUser.data.data));
            console.log(useState.id)

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="auth">
            <div>
                <label>Email</label>
                <input type="email" name="Email" onChange={handleEmailChange}/>

                <label>Mot de passe</label>
                <input type="password" name="Password" onChange={handlePasswordChange}/>

                <button onClick={handleUserLogin}>Connexion</button>
                <label>Vous n'avez pas encore de compte ?</label>
                <Link to="/register">Créez un compte</Link>
            </div>
        </div>
    )
}

export default Login;