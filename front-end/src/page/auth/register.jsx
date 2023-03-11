import React, { useState, useNavigate } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    //const navigate = useNavigate();


    function handleUserNameChange(e) {
        setUserName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handlePasswordConfirmChange(e) {
        setConfirmPassword(e.target.value);
    }

    const handleAccountCreation = async (e) => {
        e.preventDefault();
        try {
            const data = {
                name: userName,
                email: email,
                password: password,
                c_password: confirmPassword,
            }
            const registerUser = await axios.post('http://127.0.0.1:8000/api/register', data)
            const res = JSON.parse(registerUser.json());
            console.log(res);
           // return navigate('/accueil');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="register">
            <form>
                <label>Nom et prénom</label>
                <input type="text" name="name" onChange={handleUserNameChange}/>

                <label>Email</label>
                <input type="email" name="email" onChange={handleEmailChange} />

                <label>Mot de passe</label>
                <input type="password" name="password"  onChange={handlePasswordChange}/>

                <label>Vérification mot de passe</label>
                <input type="c_password" name="c_password" onChange={handlePasswordConfirmChange}/>

                <button onClick={handleAccountCreation}>Créer un compte</button>

                <label>Vous avez deja un compte ? </label>
                <Link to="/login">Connectez vous</Link>
            </form>
        </div>
    )
}

export default Register;
