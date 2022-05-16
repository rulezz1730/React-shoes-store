import React, { useContext } from "react";
import Card from "../Card/Card";
import AppContext from "../../AppContext";

const Favourites = ({ onAddToCart }) => {
    const { favorites, onAddToFavorite } = useContext(AppContext);

    return (
        <div className="content p-40">
            <div className="d-flex mb-40 align-center justify-between flex-wrap">
                <h1>Мои закладки</h1>
            </div>

            <div className="d-flex flex-wrap">
                {favorites.map((item, index) => (
                    <Card
                        key={index}
                        favorited={true}
                        onFavorite={onAddToFavorite}
                        onPlus={(item) => onAddToCart(item)}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
};

export default Favourites;
