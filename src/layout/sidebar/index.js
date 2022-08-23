import { Link } from 'react-router-dom';
import { brands, category } from '../../data/header.data';
import './styles.scss';

function Sidebar() {
    return (
        <div className="section--left">
            <div className="catalog--categories">
                <div className="catalog">
                    <h2 className="catalog__h2">
                        Loại
                    </h2>
                </div>
                <div className="categories">
                    <ul>
                        {
                            category.map(item => (
                                <li key={item.id}><Link to="#">{item.name}</Link></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="catalog--brands">
                <div className="brand">
                    <h2 className="brand__h2">
                        Hiệu
                    </h2>
                </div>
                <div className="brands">
                    <ul>
                        {
                            brands.map(item => (
                                <li key={item.id}><Link to="#">{item.name}</Link></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="banner--img">
                <img src="./images/banner__col.jpg" alt="banner_06" />
                <img src="./images/banner__col1.jpg" alt="banner_07" />
            </div>
        </div>
    );
}

export default Sidebar;