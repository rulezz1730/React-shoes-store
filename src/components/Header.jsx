import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const Header = ({ onClickCart }) => {
    const { totalPrice } = useCart();
    const handleClickCart = () => {
        onClickCart();
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
                <li className="mr-30 cu-p" onClick={handleClickCart}>
                    <img
                        width={20}
                        height={20}
                        src="img/cart.svg"
                        alt="Корзина"
                    />
                    <span>
                        <b>{totalPrice} руб.</b>
                    </span>
                </li>
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
                    <Link to="/orders">
                        <img
                            width={20}
                            height={20}
                            src="img/user.svg"
                            alt="Пользователь"
                        />
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
