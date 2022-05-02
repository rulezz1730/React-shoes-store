import React from "react";
import { Link } from "react-router-dom";

const Header = ({ onClickCart }) => {
    const handleClickCart = () => {
        onClickCart();
        console.log("Open cart");
    };

    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
                <div className="headerLeft d-flex align-center">
                    <img width={40} height={40} src="img/logo.png" alt="Logo" />

                    <div>
                        <h3 className="text-uppercase">Sneakers Store</h3>
                        <p className="opacity-5">Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className="d-flex headerRight">
                <Link to="/cart">
                    <li className="mr-30 cu-p" onClick={handleClickCart}>
                        <img
                            width={20}
                            height={20}
                            src="img/cart.svg"
                            alt="Корзина"
                        />
                        <span>1205 руб.</span>
                    </li>
                </Link>
                <li className="mr-10 cu-p">
                    <Link to="/favourites">
                        <img
                            width={20}
                            height={20}
                            src="img/favourite.svg"
                            alt="Закладки"
                        />
                    </Link>
                </li>
                <li className="cu-p">
                    <img
                        width={20}
                        height={20}
                        src="img/user.svg"
                        alt="Пользователь"
                    />
                </li>
            </ul>
        </header>
    );
};

export default Header;
