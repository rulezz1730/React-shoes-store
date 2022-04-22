import React from "react";

const Card = () => {
    return (
        <div className="card">
            <div className="favourite-item">
                <img src="img/item-unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src="img/items/1.png" alt="item" />
            <h5 className="mb-30">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена: </span>
                    <b>12000 руб.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="img/plus.svg" alt="plus" />
                </button>
            </div>
        </div>
    );
};

export default Card;
