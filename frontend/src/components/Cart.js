import React, { useEffect, useState } from 'react';
import { fetchCart, removeFromCart, updateCart } from '../api';

const Cart = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const loadCart = async () => {
      const cartData = await fetchCart();
      setCart(cartData);
    };

    loadCart();
  }, []);

  const handleRemove = async (productId) => {
    await removeFromCart(productId);
    setCart(await fetchCart());
  };

  const handleUpdate = async (productId, quantity) => {
    await updateCart(productId, quantity);
    setCart(await fetchCart());
  };

  if (!cart) return <div>Loading...</div>;

  const totalItems = cart.products.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.products.reduce((sum, item) => sum + item.productId.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div>
        {cart.products.map((item) => (
          <div key={item.productId._id} className="cart-item">
            <h3>{item.productId.name}</h3>
            <p>${item.productId.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleRemove(item.productId._id)}>Remove</button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleUpdate(item.productId._id, e.target.value)}
            />
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total Items: {totalItems}</h3>
        <h3>Total Price: ${totalPrice}</h3>
      </div>
    </div>
  );
};

export default Cart;
