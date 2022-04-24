import React from "react";

const CartDrawer = ({ onCloseCart, addedItems = [] }) => {
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
                <div className="items">
                    {addedItems.map((item) => {
                        return (
                            <div
                                className="cartItem d-flex align-center"
                                key={item.id}
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
        </div>
    );
};

export default CartDrawer;
