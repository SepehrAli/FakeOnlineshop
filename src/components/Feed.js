import React from "react";
import axios from "axios";
import styles from "../myStyle.module.css";
import { useState, useEffect } from "react";
// import components
import AllProducts from "./AllProducts";
import Loading from "./Loading";
function Feed(props) {
  const categoryHandler = (e) => {
    setCatgoryFilter(e.target.value);
  };
  // STATEs
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCatgoryFilter] = useState("All");
  const [dataAll, setDataAll] = useState([]);
  const BASEURL = "https://fakestoreapi.com";

  useEffect(() => {
    axios.get(`${BASEURL}/products`).then((res) => {
      setDataAll(res.data);
    });
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2500);
  }, []);
  return (
    <>
    {loading
    ? <div> <Loading /> </div>
    :  <div className={styles.feed}>
    <div>
      <div className={styles.category}>
        <h2 className={styles.categoryTitle}>Category</h2>
          <div className={styles.categoryOptions}>
            <button value="All" onClick={categoryHandler}>All
            </button>
            <br/>
            <button value="women's clothing" onClick={categoryHandler}>
              Women
            </button>
            <br/>
            <button value="men's clothing" onClick={categoryHandler}>
              Men
            </button>
            <br/>
            <button value="jewelery" onClick={categoryHandler}>
              Jwelery
            </button>
            <br/>
            <button value="electronics" onClick={categoryHandler}>
              Electronics
            </button>
            <br/>
            <h4>{categoryFilter}</h4>
          </div>
        </div>
      </div>
    <div>
      <AllProducts category={categoryFilter} productsArray={dataAll} />
    </div>
  </div>
    }
   
    </>
  );
}

export default Feed;
