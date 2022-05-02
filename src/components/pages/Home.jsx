import React, { useEffect } from "react";
import cartService from "../../service/cart.service";
import itemService from "../../service/item.service";
import Card from "../Card/Card";

const Home = ({
    items,
    filtredItem,
    setFiltredItem,
    handleChangeSearchInput,
    handleAddFavourite,
    handlePlusItem,
}) => {
    return (
        <div className="content p-40">
            <div className="d-flex mb-40 align-center justify-between flex-wrap">
                <h1>Все кроссовки</h1>
                <div className="search-block d-flex">
                    <img src="img/search.svg" alt="Search" />
                    <input
                        placeholder="Поиск"
                        onChange={handleChangeSearchInput}
                        value={filtredItem}
                    />
                    {filtredItem && (
                        <img
                            width={20}
                            height={20}
                            className="removeBtn  cu-p"
                            src="img/btn-remove.svg"
                            alt="Clear"
                            onClick={() => setFiltredItem("")}
                        />
                    )}
                </div>
            </div>

            <div className="d-flex flex-wrap">
                {items
                    .filter((item) =>
                        item.title
                            .toLowerCase()
                            .includes(filtredItem.toLowerCase())
                    )
                    .map((item, index) => (
                        <Card
                            key={index}
                            // title={item.title}
                            // price={item.price}
                            // img={item.img}
                            onAddCart={() => handlePlusItem(item)}
                            onAddFavourite={() => handleAddFavourite(item)}
                            id={index}
                            {...item}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Home;
