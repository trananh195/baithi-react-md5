import './App.css';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

function App() {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [isCheck, setCheck] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:3000/products").then(res => {
            setProducts(res.data)
        }).catch(Error => console.log(Error))
    }, [isCheck])

    const handledDelete = (id) => {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:3000/products/"+id).then(res => {
                alert("Delete Success!!!")
                setCheck(true)
            }).catch(Error => console.log(Error))
        }
    }


    return (
        <>
            <div className="container">
                <span><h1>List Products</h1></span>
                <div>
                    <Link to={'create'} className="btn btn-outline-primary" style={{borderRadius: '5px'}}>Create</Link>
                </div>
                <table className='table table-hover'>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product, index = 0) => {
                        return (
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td><Link to={'/detail/'+product.id}>{product.title}</Link></td>
                                <td>{product.price}</td>
                                <td><Link className="btn btn-outline-primary" to={'update/' + product.id}>Update</Link>
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger"
                                            onClick={() => handledDelete(product.id)}>Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default App;

