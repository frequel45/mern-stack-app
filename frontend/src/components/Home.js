import React, { useEffect, useState } from 'react';
import { fetchHomepage } from '../api';
import Banner from './Banner';
import Product from './Product';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadHomepage = async () => {
      const homepageData = await fetchHomepage();
      setData(homepageData);
    };

    loadHomepage();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Banner imageUrl={data.banner.imageUrl} link={data.banner.link} />
      <div className="products">
        {data.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
