import React, { useEffect } from "react";
import Card from "../Card/Card";

const Favourites = ({ favouritesItems, handleAddFavourite }) => {
    return (
        <div className="content p-40">
            <div className="d-flex mb-40 align-center justify-between flex-wrap">
                <h1>Мои закладки</h1>
            </div>

            <div className="d-flex flex-wrap">
                <div className="d-flex flex-wrap">
                    {favouritesItems.map((item, index) => (
                        <Card
                            key={index}
                            onAddFavourite={() => handleAddFavourite(item)}
                            id={index}
                            isFavourite={item.isFavourite}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Favourites;
