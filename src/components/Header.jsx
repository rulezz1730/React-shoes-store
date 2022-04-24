import React from "react";

const Header = ({ onClickCart }) => {
    const handleClickCart = () => {
        onClickCart();
        console.log("Open cart");
    };

    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="headerLeft d-flex align-center">
                <img width={40} height={40} src="img/logo.png" alt="logo" />
                <div>
                    <h3 className="text-uppercase">Sneakers Store</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex headerRight">
                <li className="mr-30 cu-p" onClick={handleClickCart}>
                    <img width={18} height={18} src="img/cart.svg" alt="cart" />
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img width={18} height={18} src="img/user.svg" alt="user" />
                </li>
            </ul>
        </header>
    );
};

export default Header;
