import React from "react";
import Navbar from '../../components/Navbar';
import "../../style/accueil.scss";


function Accueil() {
    return (
        <div className="body">
            <Navbar />
            <img className="logo" src="/logo1.png" alt="logo" />

            <h1>Instant Image</h1>

            <div className="presentation">
                Nous sommes un studio de photo professionnel spécialisé dans la création d'images de haute qualité pour une variété de types de photographies, y compris la photographie de portrait, la photographie de produits, la photographie de mode et la photographie publicitaire.
            </div >
            <div className="presentation">
                Notre studio est équipé des dernières technologies de l'industrie pour garantir que nos photographies sont d'une qualité exceptionnelle. Nous avons également un large éventail d'accessoires et de décors pour ajouter de la créativité et de la personnalisation à chaque séance photo.
            </div>
            <div className="presentation">
                Notre équipe de photographes professionnels est là pour vous guider à travers chaque étape du processus de la séance photo, en s'assurant que vous êtes à l'aise et satisfait du résultat final.            </div>
            <div className="presentation">
                Que vous soyez un professionnel à la recherche de photographies pour votre entreprise, un mannequin à la recherche de photographies pour votre portfolio, ou tout simplement quelqu'un qui veut capturer un moment spécial de votre vie, notre studio photo est là pour vous.
            </div>
            <div className="presentation">
                Contactez-nous dès maintenant pour en savoir plus sur nos services de photographie, nos forfaits, et pour réserver une séance photo dans notre studio. Nous sommes impatients de travailler avec vous pour créer des images incroyables qui vont durer toute une vie.
            </div>
        </div>
    )
}

export default Accueil;