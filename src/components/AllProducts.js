
import { Link } from "react-router-dom";
import styles from "../myStyle.module.css";

function AllProducts(props) {
  const categories = props.category;
  const filteredProducts = props.productsArray.filter((x) => {
    if (categories === "All") {
      return x;
    } else {
      return x.category === categories;
    }
  });
  return (
    <div className={styles.allItemPage}>
      {filteredProducts.map((item) => {
        return (
          <Link key={item.id} to={`/myproduct/${item.id}`}>
            <div>
              <ul className={styles.allItems}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <h6>{item.price} $</h6>
              </ul>
            </div>
          </Link>
        );
      })}
      {console.log()}
    </div> 
  );
}

export default AllProducts;
