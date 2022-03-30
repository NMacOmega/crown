import { Link } from "react-router-dom";
import './top-nav.styles.scss';

const TopNav = () => {

    return (
            <div className="top-nav-container">
                <nav className = "top-nav">
                    <div className = "logo-container">
                        <Link to="/">CRWN</Link> |{" "}
                    </div>
                    <div className = "nav-link-container">
                        <Link to="/">Shop</Link>
                    </div>
                    <div className = "nav-link-container">
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className = "nav-link-container">
                        <Link to="/signin">Sign In</Link>
                    </div>
                    <div className = "nav-cart-container">
                         <Link to="/cart">Cart</Link>
                    </div>
                </nav>
            </div>
    );
}
export default TopNav
