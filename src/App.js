import React, { useEffect, useState } from "react";
// import Card from "./components/Card/Card";
import CartDrawer from "./components/CartDrawer";
import Header from "./components/Header";
import cartService from "./service/cart.service";
import itemService from "./service/item.service";
import favouritesService from "./service/favourites.service";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Favourites from "./components/pages/Favourites";
import httpService from "./service/http.service";

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [filtredItem, setFiltredItem] = useState("");
    const [favouritesItems, setFavouriteItems] = useState([]);
    const [isCartOpened, setCartOpened] = useState(false);
    const [isFavourite, setFavourite] = useState(false);

    useEffect(() => {
        itemService.get().then((res) => setItems(res));
        cartService.get().then((res) => setCartItems(res));
        favouritesService.get().then((res) => setFavouriteItems(res));
    }, []);

    const handlePlusItem = async (item) => {
        await cartService.post(item);
        await cartService.get().then((res) => setCartItems(res));
    };

    const handleAddFavourite = async (item) => {
        try {
            if (favouritesItems.find((el) => el.id === item.id)) {
                favouritesService.delete(item.id);
            } else {
                const data = await favouritesService.post({
                    ...item,
                    isFavourite: true,
                });
                setFavouriteItems((prevState) => [...prevState, data]);
            }
        } catch (error) {
            alert("Не удалось добавить в Избранное!");
        }
    };

    const handleCloseCart = () => {
        setCartOpened(!isCartOpened);
    };

    const handleOpenCart = () => {
        setCartOpened(!isCartOpened);
    };

    const handleChangeSearchInput = (event) => {
        setFiltredItem(event.target.value);
    };

    const handleRemoveCartItem = (cartId) => {
        cartService.delete(cartId);
        setCartItems((prevState) => prevState.filter((el) => el.id !== cartId));
    };

    return (
        <div className="wrapper clear">
            {isCartOpened && (
                <CartDrawer
                    onCloseCart={handleCloseCart}
                    addedItems={cartItems}
                    onRemoveItem={handleRemoveCartItem}
                />
            )}

            <Header onClickCart={handleOpenCart} />
            <Routes>
                <Route
                    index
                    path="/"
                    element={
                        <Home
                            items={items}
                            filtredItem={filtredItem}
                            setFiltredItem={setFiltredItem}
                            handleChangeSearchInput={handleChangeSearchInput}
                            handleAddFavourite={handleAddFavourite}
                            handlePlusItem={handlePlusItem}
                        />
                    }
                />
                <Route
                    index
                    path="/favourites"
                    element={
                        <Favourites
                            favouritesItems={favouritesItems}
                            handleAddFavourite={handleAddFavourite}
                        />
                    }
                />
            </Routes>
            {/* <div className="content p-40">
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
                                title={item.title}
                                price={item.price}
                                imgUrl={item.img}
                                onAddCart={() => handlePlusItem(item)}
                                onAddFavourite={() => handleAddFavourite(item)}
                                id={index}
                            />
                        ))}
                </div>
            </div> */}
        </div>
    );
}

export default App;
