import React from "react";
import './Filters.scss'

const Filters = () => {
  return (
    <aside className="filters">
      <h3>Filters</h3>
      <ul>
        <li><strong>Category</strong></li>
        <li>T-shirts</li>
        <li>Shorts</li>
        <li>Shirts</li>
        <li>Hoodies</li>
        <li>Jeans</li>
      </ul>
      <ul>
        <li><strong>Price</strong></li>
        <li>$50 - $200</li>
      </ul>
      <ul>
        <li><strong>Colors</strong></li>
        <li>Red, Blue, Yellow, etc.</li>
      </ul>
      <ul>
        <li><strong>Size</strong></li>
        <li>Small, Medium, Large</li>
      </ul>
    </aside>
  );
};

export default Filters;
