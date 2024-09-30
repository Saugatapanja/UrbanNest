import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortOption, setSortOption] = useState('default');

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortedProducts = () => {
    let sortedArray = [...all_product];
    if (sortOption === 'price_asc') {
      sortedArray.sort((a, b) => a.new_price - b.new_price);
    } else if (sortOption === 'price_desc') {
      sortedArray.sort((a, b) => b.new_price - a.new_price);
    } else if (sortOption === 'name_asc') {
      sortedArray.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'name_desc') {
      sortedArray.sort((a, b) => b.name.localeCompare(a.name));
    }
    return sortedArray;
  };

  return (
    <div className='shop-category'>
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {all_product.length} products
        </p>
        <div className="shopcategory-sort">
          <select value={sortOption} onChange={handleSortChange} className="sort-dropdown">
            <option value="default">Sort By</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="name_asc">Name: A to Z</option>
            <option value="name_desc">Name: Z to A</option>
          </select>
        </div>
      </div>
      <div className="shopcategory-products">
        {sortedProducts().map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
