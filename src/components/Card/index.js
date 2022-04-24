import React, { useState } from "react";
import styles from "./Card.module.scss";

const Card = ({ title, price, imgUrl, onAddCart, onAddFavourite, id }) => {
    const [isAdded, setAdded] = useState(false);
    const [isFavourite, setFavourite] = useState(false);

    const handleAddCart = () => {
        setAdded(!isAdded);
        onAddCart();
    };

    const handleAddFavourite = (event) => {
        onAddFavourite();
        setFavourite(!isFavourite);
    };

    return (
        <div className={styles.card}>
            <div
                className={styles.favouriteItem + " cu-p"}
                onClick={handleAddFavourite}
            >
                <img
                    src={
                        isFavourite
                            ? "img/item-liked.svg"
                            : "img/item-unliked.svg"
                    }
                    alt="Unliked"
                />
            </div>
            <img width={133} height={112} src={imgUrl} alt="item" />
            <h5 className="mb-30">{title}</h5>
            <div className="cardBottom d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена: </span>
                    <b>{price} руб.</b>
                </div>

                <img
                    className={styles.plus}
                    src={
                        isAdded ? "img/item-btn-added.svg" : "img/btn-plus.svg"
                    }
                    alt="Plus"
                    onClick={handleAddCart}
                    // id={id}
                />
            </div>
        </div>
    );
};

export default Card;
