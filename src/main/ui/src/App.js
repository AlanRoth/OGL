import './assets/css/App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="app">
      <MyButton />
    </div>
  );
}

function ProductRow({product}) {
  return (
      <tr>
        <td>{product.sku}</td>
        <td>{product.price}</td>
      </tr>
  )
}

const PRODUCTS = [
    {}
]

export default App;
