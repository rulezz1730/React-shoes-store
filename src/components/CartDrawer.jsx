import React from "react";

const CartDrawer = () => {
    return (
        <div style={{ display: "none" }} className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between align-center">
                    Корзина{" "}
                    <img
                        className="removeBtn  cu-p"
                        src="img/btn-remove.svg"
                        alt="Remove"
                    />
                </h2>
                <div class="items">
                    <div className="cartItem d-flex align-center">
                        <img
                            className="mr-20"
                            width={70}
                            height={70}
                            src="img/items/1.png"
                            alt="Sneakers"
                        />
                        <div className="mr-20">
                            <p className="mb-5">
                                Мужские Кроссовки Nike Blazer Mid Suede
                            </p>
                            <b>12000 руб.</b>
                        </div>
                        <img
                            className="removeBtn"
                            src="img/btn-remove.svg"
                            alt="Remove"
                        />
                    </div>
                    <div className="cartItem d-flex align-center">
                        <img
                            className="mr-20"
                            width={70}
                            height={70}
                            src="img/items/1.png"
                            alt="Sneakers"
                        />
                        <div className="mr-20">
                            <p className="mb-5">
                                Мужские Кроссовки Nike Blazer Mid Suede
                            </p>
                            <b>12000 руб.</b>
                        </div>
                        <img
                            className="removeBtn"
                            src="img/btn-remove.svg"
                            alt="Remove"
                        />
                    </div>
                    <div className="cartItem d-flex align-center">
                        <img
                            className="mr-20"
                            width={70}
                            height={70}
                            src="img/items/1.png"
                            alt="Sneakers"
                        />
                        <div className="mr-20">
                            <p className="mb-5">
                                Мужские Кроссовки Nike Blazer Mid Suede
                            </p>
                            <b>12000 руб.</b>
                        </div>
                        <img
                            className="removeBtn"
                            src="img/btn-remove.svg"
                            alt="Remove"
                        />
                    </div>
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
