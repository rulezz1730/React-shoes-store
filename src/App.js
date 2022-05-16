import React, { useState, useEffect } from "react";
import CartDrawer from "./components/CartDrawer/CartDrawer";
import Header from "./components/Header";
import cartService from "./service/cart.service";
import itemService from "./service/item.service";
import favouritesService from "./service/favourites.service";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Favourites from "./components/pages/Favourites";
import AppContext from "./AppContext";
import Orders from "./components/pages/Orders";

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [cartOpened, setCartOpened] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                await itemService.get().then((res) => setItems(res));
                await cartService.get().then((res) => setCartItems(res));
                await favouritesService.get().then((res) => setFavorites(res));
                setIsLoading(false);
            } catch (error) {
                alert("Ошибка при запросе данных ;(");
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const onAddToCart = async (obj) => {
        try {
            const findItem = cartItems.find(
                (item) => Number(item.parentId) === Number(obj.id)
            );
            if (findItem) {
                setCartItems((prev) =>
                    prev.filter(
                        (item) => Number(item.parentId) !== Number(obj.id)
                    )
                );
                await cartService.delete(findItem.id);
            } else {
                setCartItems((prev) => [...prev, obj]);
                const data = await cartService.post(obj);
                setCartItems((prev) =>
                    prev.map((item) => {
                        if (item.parentId === data.parentId) {
                            return {
                                ...item,
                                id: data.id,
                            };
                        }
                        return item;
                    })
                );
            }
        } catch (error) {
            alert("Ошибка при добавлении в корзину");
            console.error(error);
        }
    };

    const onRemoveItem = (id) => {
        try {
            cartService.delete(id);
            setCartItems((prev) =>
                prev.filter((item) => Number(item.id) !== Number(id))
            );
        } catch (error) {
            alert("Ошибка при удалении из корзины");
            console.error(error);
        }
    };

    const onAddToFavorite = async (obj) => {
        try {
            if (
                favorites.find((favObj) => Number(favObj.id) === Number(obj.id))
            ) {
                favouritesService.delete(obj.id);
                setFavorites((prev) =>
                    prev.filter((item) => Number(item.id) !== Number(obj.id))
                );
            } else {
                const data = favouritesService.post(obj);
                setFavorites((prev) => [...prev, data]);
            }
        } catch (error) {
            alert("Не удалось добавить в фавориты");
            console.error(error);
        }
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.parentId) === Number(id));
    };

    return (
        <AppContext.Provider
            value={{
                items,
                cartItems,
                favorites,
                isItemAdded,
                onAddToFavorite,
                onAddToCart,
                setCartOpened,
                setCartItems,
            }}
        >
            <div className="wrapper clear">
                {cartOpened && (
                    <CartDrawer
                        items={cartItems}
                        onClose={() => setCartOpened(false)}
                        onRemove={onRemoveItem}
                        opened={cartOpened}
                        onAddToCart={onAddToCart}
                    />
                )}

                <Header onClickCart={() => setCartOpened(true)} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                items={items}
                                cartItems={cartItems}
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                                onChangeSearchInput={onChangeSearchInput}
                                onAddToFavorite={onAddToFavorite}
                                onAddToCart={onAddToCart}
                                isLoading={isLoading}
                            />
                        }
                    />
                    <Route index path="/favourites" element={<Favourites />} />
                    <Route index path="/orders" element={<Orders />} />
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
