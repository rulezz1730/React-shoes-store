import Card from "./components/Card/Card";
import CartDrawer from "./components/CartDrawer";
import Header from "./components/Header";

function App() {
    return (
        <div className="wrapper clear">
            <CartDrawer />
            <Header />
            <div className="content p-40">
                <div className="d-flex mb-40 align-center justify-between flex-wrap">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="img/search.svg" alt="Search" />
                        <input placeholder="Поиск" />
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default App;
