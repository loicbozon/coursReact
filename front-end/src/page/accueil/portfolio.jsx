import React from "react";
import Navbar from '../../components/Navbar';
import "../../style/portfolio.scss";

function portfolio() {
    return (
        <div className="navbar">
            <Navbar />

            <h1 className="titre">Présentation du travail réalisé</h1>
            <div className="accueil-body">
                <div className="parent">
                    <div className="div1">
                        <img className="imgillustration" src="/photo1.jpg" alt="photo1" />
                    </div>
                    <div className="div2">
                        <h2>PARTICULIERS</h2>
                        <p>Balade à Bordeaux avec un photographe professionnel.</p>
                    </div>
                    <div className="div3">
                        <img className="imgillustration" src="/photo2.jpg" alt="photo2" />
                    </div>
                    <div className="div4">
                        <h2>E-COMMERCE</h2>
                        <p>Maximiser vos chances de développement de votre marque grâce à des visuels de qualité. Jouissez d'un réseau de modèles professionnelles pour vos produits.</p>
                    </div>
                    <div className="div5">
                        <h2> RETRO / VINTAGE </h2>
                        <p>Plongez dans des décors authentiques pour créer un univers photo unique.</p>
                    </div>
                    <div className="div6">
                        <img className="imgillustration" src="/photo3.jpg" alt="photo3" />
                    </div>
                    <div className="div7">
                        <h2> CREATION </h2>
                        <p>Découvrez l'univers créatif de notre photographe à travers ses créations authentiques.</p>
                    </div>
                    <div className="div8">
                        <img className="imgillustration" src="/photo4.jpg" alt="photo4" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default portfolio;