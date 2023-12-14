import axios from 'axios';
import { useEffect, useState } from 'react';

const AddProduct = () => {
    const [productName, setProductName] = useState();
    const [productPrice, setProductPrice] = useState();
    const [message, setMessage] = useState();
    const [allProducts, setAllProducts] = useState();

    useEffect(() => {
        axios.get('http://localhost:3001/').then((response) => setAllProducts(response.data.products));
    });

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                axios.post('http://localhost:3001/addProduct', {
                    product_name: productName,
                    product_price: productPrice
                }).then((response) => setMessage(response.data.message));
            }}>
                <input type='text' placeholder='Name of the product' onChange={(e) => setProductName(e.target.value)} value={productName} />

                <input type='number' placeholder='Price of the product' onChange={(e) => setProductPrice(e.target.value)} value={productPrice} />

                <input type='submit' value='Add Product' />
            </form>
            <p>{message}</p>

            <button onClick={() => {
                axios.delete('http://localhost:3001/deleteProduct').then((response) => setMessage(response.data.message));
            }}>Delete</button>

            <hr />
            <ul>
                {allProducts && allProducts.map((product) => <li>{product.product_name}</li>)}
            </ul>
        </>
    );
}

export default AddProduct;