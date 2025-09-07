import { useEffect, useState } from "react";

const Products = () => {
    const [prodotti, setProdotti] = useState([]);

    useEffect(() =>{
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProdotti(data));
    }, []);

    return (
    <>
        <div>Products</div>
        <ul>
            {prodotti.map((prodotto) => {
                return(
                <li key={prodotto.id}> 
                    <h2>{prodotto.title}</h2>
                    <img src={prodotto.image} alt={prodotto.title} />
                    <p>{prodotto.description}</p>
                    <p>{prodotto.category}</p>
                    <p>{prodotto.price} euro</p>
                </li>
                )
            })}
        </ul>
    </>
  )
}

export default Products