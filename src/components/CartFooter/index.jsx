import "./style.scss";
import formatPrrice from "../../utils/priceFormatter";

const CartFooter = ({ total }) => {
    const { count, price } = total;

    return (  
        <footer className="cart-footer">
                        <div className="cart-footer__count">{count} ед.</div>
                        <div className="cart-footer__price">
                            {formatPrrice(price)} руб.
                        </div>
                    </footer>
    );
}
 
export default CartFooter;