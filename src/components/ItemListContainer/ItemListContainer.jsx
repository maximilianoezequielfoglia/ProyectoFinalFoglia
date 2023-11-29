import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState();
  const category = useParams().category;
  useEffect(() => {
    const productsRef = collection(db, "products");
    const q = category
      ? query(productsRef, where("category", "==", category))
      : productsRef;
    getDocs(q).then((resp) => {
      setProducts(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
      if (category) {
        setTitle(category);
      } else {
        setTitle("all");
      }
    });
  }, [category]);

  return (
    <>
      <ItemList products={products} title={title} />
    </>
  );
};

export default ItemListContainer;
