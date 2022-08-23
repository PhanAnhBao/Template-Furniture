import { Link } from 'react-router-dom';
import { manyBuyer, productList } from '../../data/home.data';
import './styles.scss';

function Home() {

    return (
        <div className='Home'>
            <div className="products--new">
                <h2 className="products--new__h2">
                    Sản phẩm mới
                </h2>
            </div>

            <div className="products--new__row">
                {productList.map(item => {
                    if (item.sale === 0) {
                        return (
                            <div className='products--items'>
                                <div class="products--items__img">
                                    <img src={`./${item.imgUrl}`} alt="rings" />
                                    <div className="overlay">
                                        <div className="text">
                                            <img src={`./${item.imgUrl1}`} alt="rings" />
                                        </div>
                                    </div>
                                </div>
                                <div class="products--items__main">
                                    <Link to="/productdetails">{item.name}</Link>
                                    <p>${item.price.toFixed(2)}</p>
                                    <button className="border__button">Thêm vào giỏ hàng</button>
                                </div>
                                <span className="new"></span>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className='products--items'>
                                <div class="products--items__img">
                                    <img src={`./${item.imgUrl}`} alt="rings" />
                                    <div className="overlay">
                                        <div className="text">
                                            <img src={`./${item.imgUrl1}`} alt="rings" />
                                        </div>
                                    </div>
                                </div>
                                <div class="products--items__main">
                                <Link to="/productdetails">{item.name}</Link>
                                    <p><del>${item.price.toFixed(2)}</del> <span class="price">$240.00</span></p>
                                    <button class="border__button">Thêm vào giỏ hàng</button>
                                </div>
                                <span class="discount"></span>
                            </div>
                        )
                    }
                })}
            </div>
            <div className="many--order">
                <div className="buyers">
                    <h2 className="buyers__h2">
                        Mua nhiều
                    </h2>
                </div>
                <div className="products--orders--row">
                    <button className="slide--button slide--button__left">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button className="slide--button slide--button__right">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    {
                        manyBuyer.map(item => (
                            <div className="products--orders__item">
                                <div className="products--items__img">
                                    <img src={`./${item.imgUrl}`} alt="rings" />
                                    <div className="overlay">
                                        <div className="text">
                                            <img src={`./${item.imgUrl1}`} alt="rings" />
                                        </div>
                                    </div>
                                </div>
                                <div className="products--items__info">
                                <Link to="/productdetails">{item.name}</Link>
                                    <p>${item.price}.00</p>
                                    <button>Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

export default Home;