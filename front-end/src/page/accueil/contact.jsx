import React from "react";
import Navbar from '../../components/Navbar';
import "../../style/contact.scss";


function Contact() {
    return (
        <div>
            <Navbar />

            <h1 className="titre-contact"> Formulaire de contact </h1>
            <div className="container">
                <form>
                    <label> Nom</label>
                    <input type="text" name="name" id="name" />

                    <label>Contact</label>
                    <input type="mail" name="contact" id="contact" />

                    <label >Sujet</label>
                    <input className="subject" type="text" name="sujet" id="sujet" />

                    <button className="send">Envoyer</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;