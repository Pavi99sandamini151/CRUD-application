import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
const ProductList = () => {
    const [products, setProduct] = useState([]);
 
    useEffect(() => {
        getProducts();
    }, []);
 
    const getProducts = async () => {
        const response = await axios.get('http://localhost:5000/products');
        setProduct(response.data);
    }
 
    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5000/products/${id}`);
        getProducts();
    }
 
    return (
        <div>
            <h4>ALL Products</h4>
            <Link to="/add" className="btn btn-success">Add New</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { products.map((product, index) => (
                        <tr key={ product.id }>
                            <td>{ index + 1 }</td>
                            <td>{ product.title }</td>
                            <td>{ product.price }</td>
                            <td>
                                <Link to={`/edit/${product.id}`} className="btn btn-warning">  <i className="fas fa-edit"></i>&nbsp;Edit</Link> &nbsp;
                                <button onClick={ () => deleteProduct(product.id) } className="btn btn-danger"><i className="far fa-trash-alt"></i>&nbsp;Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default ProductList