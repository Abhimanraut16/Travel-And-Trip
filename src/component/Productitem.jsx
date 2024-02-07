import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Productitem() {
    let [products, setproduct] = useState([])
    

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setproduct(data))

    }, [])
    return (
        <div>
            <header>
                <div className="container">
                <Link to="product-details">
                    <div className="row gap-3">

                       
                            {products.map((pData) =>
                                <div className="col">
                                    <div className="card">
                                        <div className="card_count">
                                            <div className="image">
                                                <img src={pData.image} />
                                            </div>
                                        </div>
                                        <div className="only_price">
                                            <div className="only">Only</div>
                                            <div className="price">Rs {pData.price}</div>
                                        </div>
                                        <div className="detail">{pData.category}</div>
                                        <div className="mark-price"><del> Rs 3000 </del></div>
                                        <div className="buy"> <a href>

                                            {/* <div className="btn-buy">  BUY</div> */}
                                        </a></div>
                                    </div>
                                </div>
                            )}

</div>
                        </Link>

                    
                </div>

            </header>
        </div>
    )
}
