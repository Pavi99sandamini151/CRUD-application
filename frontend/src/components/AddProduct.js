import { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';
 
const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const history = useHistory();
 
    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/products',{
            title: title,
            price: price
        });
        history.push("/");
    }
 
    return (
        <div >
            <h1>Add New Product</h1>
            <form onSubmit={ saveProduct }>
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}>Title</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="Title"
                        value={ title }
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                </div>
 
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}>Price</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="Price"
                        value={ price }
                        onChange={ (e) => setPrice(e.target.value) }
                    />
                </div>
 
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <button className="btn btn-success" type="submit" style={{marginTop:'5pc'}}>Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddProduct