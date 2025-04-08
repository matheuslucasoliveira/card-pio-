import React from 'react';
import './App.css';
import { menuItems } from './data';
import MenuItem from './components/MenuItem';

function App() {
  // Agrupar itens por categoria
  const groupedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cardápio Digital</h1>
        <p className="subtitle">Delícias para todos os gostos</p>
      </header>
      <main className="menu-container">
        {Object.entries(groupedItems).map(([category, items]) => (
          <section key={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            <div className="items-grid">
              {items.map(item => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
