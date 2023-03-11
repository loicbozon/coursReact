import React from "react";
import { Link } from "react-router-dom";


//import react hookform

function Login() {
    return (
        <div className="auth">
            <div>
                <label>Email</label>
                <input type="email" name="UserName"/>

                <label>Mot de passe</label>
                <input type="password" name="UserName"/>

                <button>Connexion</button>
                <label>Vous n'avez pas encore de compte ?</label>
                <Link to="/register">Créez un compte</Link>
            </div>
        </div>
    )
}

export default Login;