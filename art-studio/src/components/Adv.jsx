import React from 'react';
import '../App.css';
import img from '../img/pictures/3rd-section-img.png';

function Adv() {
    return(
        <div className="advantages" id="advantages">
            <div className="advantages-content">
                <h2 className="advantages-title">Современный дизайн</h2>
                <p className="advantages-text">Разрушаем стереотипы, делаем крутой дизайн и создаем ШЕДЕВРЫ</p>
                <img src={img} alt="advantages-img" className="advantages-img" />
            </div>
            <div className="advantages-background">
                <p className="bg-text">Наша фишка</p>
            </div>
        </div>
    )
}

export default Adv;