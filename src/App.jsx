import React, { useEffect, useState } from 'react'
import Section from './component/Section'


function App() {
    let [data, setcat] = useState([])
    let [products, setproduct] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(d => updateData(d))

        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setproduct(data))

    }, [])

    return (
        <div>
            <nav className="navbar bg-dark navbar-expand-lg " data-bs-theme="dark" >
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Product</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Contact</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

            <section className='border-bottom py-2'>
                <div className="container">
                    <div className="row bg">
                        {data.map((c) =>
                            <div className="col-2">{c}</div>
                        )}
                    </div>
                </div>
            </section>
         
<Section/>


        </div>
    )
}

export default App