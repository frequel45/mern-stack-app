import React, { useEffect, useState } from 'react';
import { fetchProductDetails, addToCart } from '../api';
import { useParams } from 'react-router-dom';

const Product = ({ product }) => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (id) {
      const loadProductDetails = async () => {
        const productDetails = await fetchProductDetails(id);
        setDetails(productDetails);
      };

      loadProductDetails();
    }
  }, [id]);

  const handleAddToCart = async () => {
    await addToCart(details.id, 1);
  };

  if (!details && !product) return <div>Loading...</div>;

  const productDetails = details || product;

  return (
    <div className="product">
      <img src={productDetails.imageUrl} alt={productDetails.name} />
      <h2>{productDetails.name}</h2>
      <p>{productDetails.description}</p>
      <p>${productDetails.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
