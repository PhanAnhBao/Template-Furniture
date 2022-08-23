import { Link } from "react-router-dom";
import { manyBuyer, productList } from "../../data/home.data";

function Product() {
    return (
        <div className='Home'>
            <div className="products--new">
                <h2 className="products--new__h2">
                    Sản phẩm
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
            <div class="pagination">
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a class="active" href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">...</a>
                <a href="#">&raquo;</a>
            </div>
        </div>
    );
}

export default Product;