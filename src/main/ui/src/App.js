import './assets/css/App.css';
import { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';

function App() {
    // const [{response, error, isLoading}, doFetch] = useFetch("http://localhost:8080/product")
    // console.log("app", response, error, isLoading);
    // useEffect(() => {
    //     doFetch();
    // }, [doFetch]);
  // return (
  //   <div className="app">
  //       <ProductTable products={PRODUCTS_API} />
  //   </div>
  // );

    const products = FetchProducts("http://localhost:8080/product");
}

function ProductTable({products}) {
    const rows = [];

    products.forEach((product) => rows.push(<ProductRow product={product} key={product.id} />))

    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>SKU</th>
                    <th>PRICE</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

function ProductRow({product}) {
  return (
      <tr>
          <td>{product.id}</td>
          <td>{product.sku}</td>
          <td>{product.price}</td>
      </tr>
  )
}

const PRODUCTS = [
    {"id":1,"sku":"AAA001","price":5.99},
    {"id":2,"sku":"AAA002","price":10.00},
    {"id":3,"sku":"BBB001","price":0.69}
]

const FetchProducts = (url) => {
    let products = []
    const [{response, error, isLoading}, doFetch] = useFetch("http://localhost:8080/product");
    useEffect(() => {
        doFetch()
    }, [])

    console.log("app", response, error, isLoading)

    products = JSON.parse(response.data)

    console.log(products)

    return(PRODUCTS)
}

export default App;
