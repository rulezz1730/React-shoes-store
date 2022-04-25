import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import CartDrawer from "./components/CartDrawer";
import Header from "./components/Header";

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [filtredItem, setFiltredItem] = useState("");
    const [isCartOpened, setCartOpened] = useState(false);
    const [isFavourite, setFavourite] = useState(false);

    useEffect(() => {
        fetch("https://62646bd2a55d5055be487d91.mockapi.io/items")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);

    const handlePlusItem = (item) => {
        const isItemAdded = cartItems.find((el) => el.id === Number(item.id));
        if (!isItemAdded) {
            setCartItems((prevState) => [...prevState, item]);
        }
    };

    const handleAddFavourite = () => {
        setFavourite(!isFavourite);
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

    return (
        <div className="wrapper clear">
            {isCartOpened && (
                <CartDrawer
                    onCloseCart={handleCloseCart}
                    addedItems={cartItems}
                />
            )}
            <Header onClickCart={handleOpenCart} />
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
                        .map((item) => (
                            <Card
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                imgUrl={item.img}
                                onAddCart={() => handlePlusItem(item)}
                                onAddFavourite={handleAddFavourite}
                                id={item.id}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default App;
