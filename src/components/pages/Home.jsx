import React, { useEffect } from "react";
import Card from "../Card/Card";

const Home = ({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
    isLoading,
}) => {
    const renderItems = () => {
        const filtredItems = items.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        return (isLoading ? [...Array(12)] : filtredItems).map(
            (item, index) => (
                <Card
                    key={index}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    onPlus={(obj) => onAddToCart(obj)}
                    loading={isLoading}
                    {...item}
                />
            )
        );
    };

    return (
        <div className="content p-40">
            <div className="d-flex mb-40 align-center justify-between flex-wrap">
                <h1>Все кроссовки</h1>
                <div className="search-block d-flex">
                    <img src="img/search.svg" alt="Search" />
                    <input
                        placeholder="Поиск"
                        onChange={onChangeSearchInput}
                        value={searchValue}
                    />
                    {searchValue && (
                        <img
                            width={20}
                            height={20}
                            className="removeBtn  cu-p"
                            src="img/btn-remove.svg"
                            alt="Clear"
                            onClick={() => setSearchValue("")}
                        />
                    )}
                </div>
            </div>
            <div className="d-flex flex-wrap">{renderItems()}</div>
        </div>
    );
};

export default Home;
