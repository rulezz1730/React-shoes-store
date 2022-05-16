import React, { useState, useContext } from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";
import AppContext from "../../AppContext";

const Card = ({
    id,
    title,
    img,
    price,
    onFavorite,
    onPlus,
    favourited = false,
    loading = false,
}) => {
    const { isItemAdded } = useContext(AppContext);
    const [isFavourite, setIsFavorite] = useState(favourited);
    const obj = { id, parentId: id, title, img, price };

    const onClickPlus = () => {
        onPlus(obj);
    };

    const onClickFavourite = () => {
        onFavorite(obj);
        setIsFavorite(!isFavourite);
    };

    return (
        <div className={styles.card}>
            {loading ? (
                <ContentLoader
                    speed={1}
                    width={155}
                    height={265}
                    viewBox="0 0 150 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect
                        x="0"
                        y="0"
                        rx="10"
                        ry="10"
                        width="150"
                        height="120"
                    />
                    <rect x="0" y="145" rx="6" ry="6" width="150" height="15" />
                    <rect x="2" y="170" rx="5" ry="5" width="90" height="15" />
                    <rect x="0" y="220" rx="6" ry="6" width="80" height="25" />
                    <rect
                        x="118"
                        y="220"
                        rx="6"
                        ry="6"
                        width="32"
                        height="32"
                    />
                </ContentLoader>
            ) : (
                <>
                    {onFavorite && (
                        <div
                            className={styles.favouriteItem + " cu-p"}
                            onClick={onClickFavourite}
                        >
                            <img
                                src={
                                    isFavourite
                                        ? "img/item-liked.svg"
                                        : "img/item-unliked.svg"
                                }
                                alt="Liked/Unliked"
                            />
                        </div>
                    )}
                    <img width={133} height={112} src={img} alt="item" />
                    <h5 className="mb-30">{title}</h5>
                    <div className="cardBottom d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена: </span>
                            <b>{price} руб.</b>
                        </div>

                        <img
                            className={styles.plus}
                            src={
                                isItemAdded(id)
                                    ? "img/item-btn-added.svg"
                                    : "img/btn-plus.svg"
                            }
                            alt="Plus"
                            onClick={onClickPlus}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default Card;
