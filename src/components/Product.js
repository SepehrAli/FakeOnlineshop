import axios from 'axios';
import styles from "../myStyle.module.css"
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function Product(props) {
   const ID = useParams()
  const [theProduct , setTheProduct ] = useState({})
  const [buynumber,setBuynumber] = useState(0)
   useEffect(()=>{
      axios.get(`https://fakestoreapi.com/products/${ID.id}`)
      .then((res)=> setTheProduct(res.data))
   })
   return (
        <div className={styles.productItem}>
           <img className={styles.ItemImage} src={theProduct.image} />
           <h2 className={styles.ItemTitle} >{theProduct.title}</h2>
           <p className={styles.ItemDescription}>{theProduct.description}</p>
           <h4 className={styles.ItemPrice} >$ {theProduct.price}</h4>
           <button onClick={()=>setBuynumber(buynumber+1)} >BUY</button>
         <div>numbers of product: {buynumber}</div> 
        </div>
    );
}

export default Product;