import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';

const CartProducts = () => {
    const { cartItems } = useContext(CartContext);
    const carteItemsArray = [];
    for (const itemId in cartItems) {
        carteItemsArray.push({ id: Number(itemId), amount: cartItems[itemId] });
    }

    return (
        <section className='flex flex-col justify-start overflow-auto gap-2'>
            {carteItemsArray.map((product) => {
                return <CartItem {...product} key={`key_${product.id}`} />;
            })}
        </section>
    );
};

export default CartProducts;
