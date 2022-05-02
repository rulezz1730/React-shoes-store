import React from "react";
import { Link } from "react-router-dom";
const CartDrawer = ({ onCloseCart, addedItems = [], onRemoveItem }) => {
    // const history = Navigate();
    // console.log(history);
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between align-center">
                    Корзина{" "}
                    <img
                        className="removeBtn  cu-p"
                        src="img/btn-remove.svg"
                        alt="Remove"
                        onClick={onCloseCart}
                    />
                </h2>

                {addedItems.length > 0 ? (
                    <div>
                        <div className="items">
                            {addedItems.map((item, index) => {
                                return (
                                    <div
                                        className="cartItem d-flex align-center"
                                        key={index}
                                    >
                                        <img
                                            className="mr-20"
                                            width={70}
                                            height={70}
                                            src={item.img}
                                            alt="Sneakers"
                                        />
                                        <div className="mr-20">
                                            <p className="mb-5">{item.title}</p>
                                            <b>{item.price} руб.</b>
                                        </div>
                                        <img
                                            className="removeBtn"
                                            src="img/btn-remove.svg"
                                            alt="Remove"
                                            onClick={() =>
                                                onRemoveItem(item.id)
                                            }
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        <div className="cartTotalBlock">
                            <ul>
                                <li className="d-flex">
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>24000 руб.</b>
                                </li>
                                <li className="d-flex">
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>1200 руб.</b>
                                </li>
                                <button className="greenButton">
                                    Оформить заказ
                                    <img src="/img/arrow.svg" alt="Arrow" />
                                </button>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className="cartEmpty d-flex flex-column align-center justify-center">
                        <img
                            className="mb-20"
                            width={120}
                            height={120}
                            src="img/empty-cart.jpeg"
                            alt="CatrEmpty"
                        />
                        <h2 className="mb-10">Корзина пустая</h2>
                        <p>
                            Добавьте хотя бы одну пару кроссовок, чтобы сделать
                            заказ
                        </p>
                        <Link to="/">
                            <button
                                onClick={onCloseCart}
                                className="greenButton"
                            >
                                <img src="/img/arrow.svg" alt="Arrow" />
                                Вернуться назад
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
