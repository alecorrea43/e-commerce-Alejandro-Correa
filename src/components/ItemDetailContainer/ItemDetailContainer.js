import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getItemDetail } from "../../firebase/firebase";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import NavBar from "../NavBar/NavBar";
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css";
const jsonData = require(`../../api/db.json`);

function ItemDetailCointainer() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    // const task = new Promise((resolve, rejected) => {
    //   setTimeout(() => {
    //     resolve(jsonData.data);
    //   }, 2000);
    // });

    // task.then((res) => {
    //   setItem(res.filter((e) => e.id == id));
    // });
    setLoading(true);
    const asyncItem = async () => {
      const res = await getItemDetail(id);
      setLoading(false);
      setItem(res);
    };
    asyncItem();
  }, [id]);

  return (
    <>
      <div className="background-detail-container">
        <NavBar />
        <div className="loader-detail-container">
          {loading && <Loading name={"Loading product..."} />}
        </div>

        {item && <ItemDetail item={item} />}
      </div>
    </>
  );
}

export default ItemDetailCointainer;
