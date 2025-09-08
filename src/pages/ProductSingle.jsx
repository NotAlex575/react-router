import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductSingle = () => {
  const { id } = useParams ();
  const [prodotto, setProdotto] = useState();

    useEffect(() =>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProdotto(data));
    }, [id]);


    return (
    <>
    <div className="container text-center mt-5">
       {prodotto ? (
         <div className="row align-items-start">
            <div className="col-12 border mb-5" key={prodotto.id}> 
                <h2>{prodotto.title}</h2>
                <img className="img-fluid" src={prodotto.image} alt={prodotto.title} />
                <p>{prodotto.description}</p>
                <p>{prodotto.category}</p>
                <p>{prodotto.price} euro</p>
            </div>
        </div>
       ):(
        <p className="loader">caricamento in corso....</p>
       )}
    </div>
    </>
    )
}

export default ProductSingle