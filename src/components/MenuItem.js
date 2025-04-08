import React, { useState } from 'react';
import './MenuItem.css';

function MenuItem({ item }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`menu-item ${item.popular ? 'popular' : ''}`}>
      <div className="menu-item-image">
        {!imageLoaded && <div className="image-placeholder" />}
        <img 
          src={item.image} 
          alt={item.name}
          onLoad={() => setImageLoaded(true)}
          style={{ display: imageLoaded ? 'block' : 'none' }}
        />
        <div className="item-badges">
          {item.popular && <span className="badge popular">Mais Pedido</span>}
          {item.vegan && <span className="badge vegan">Vegano</span>}
          {item.glutenFree && <span className="badge gluten-free">Sem Glúten</span>}
        </div>
      </div>
      <div className="menu-item-content">
        <div className="category">{item.category}</div>
        <h3>{item.name}</h3>
        <p className="description">{item.description}</p>
        <div className="price-container">
          <p className="price">R$ {item.price.toFixed(2)}</p>
          <button className="add-to-cart">
            <span className="button-text">Adicionar</span>
            <span className="button-icon">+</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem; 