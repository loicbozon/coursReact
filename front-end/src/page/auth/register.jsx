import React from "react";
import { Link } from "react-router-dom";


function Register() {
    return (
        <div className="register">
            <form>
                <label>Nom</label>
                <input type="text" name="UserName"/>

                <label>Prénom</label>
                <input type="text" name="UserName"/>

                <label>Email</label>
                <input type="email" name="UserName"/>

                <label>Mot de passe</label>
                <input type="password" name="UserName"/>

                <button>Créer un compte</button>

                <label>Vous avez deja un compte ? </label>
                <Link to="/login">Connectez vous</Link>
            </form>
        </div>
    )
}

export default Register;
