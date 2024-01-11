import { useEffect, useState, memo } from "react";
import { useParams } from "react-router-dom";
import { getItems, getItemsFilter } from "../../firebase/firebase";
import Footer from "../Footer/Footer";
import ItemList from "../Item/ItemList";
import Loading from "../Loading/Loading";
import NavBar from "../NavBar/NavBar";
import "./ItemListContainer.css";
const jsonData = require(`../../api/db.json`);

function ItemListContainer({ greeting }) {
  let { category } = useParams();
  const [items, setItems] = useState([]);
  const [itemsFilter, setItemsFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [searchFilter, setSearchFilter] = useState([]);
  const [availableOnly, setAvailableOnly] = useState(false);
  const [availableFilter, setAvailableFilter] = useState([]);

  useEffect(() => {
    // const task = new Promise((resolve, rejected) => {
    //   setLoading(true);
    //   setTimeout(() => {
    //     resolve(jsonData.data);
    //   }, 2000);
    // });
    // task.then((res) => setItems(res)).then(setLoading(false));
    setLoading(true);
    const asyncItems = async () => {
      const items = await getItems();
      setLoading(false);
      setItems(items);
    };

    asyncItems();
  }, []);

  useEffect(() => {
    // if (category) {
    //   let filter = items.filter((e) => e.category === category);
    //   setItemsFilter(filter);
    // }
    // console.log(category);

    if (category) {
      const asyncItems = async () => {
        const items = await getItemsFilter(category);
        setItemsFilter(items);
      };

      asyncItems();
    }
  }, [items, category]);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search) {
      const filter = items.filter(
        (item) => item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );

      setSearchFilter(filter);
    }
  }, [search]);

  const onBlurSearch = (e) => {
    console.log(e);
    setTimeout(() => {
      setSearch("");
    }, 100);
    //setSearch("");
  };

  const handleAvailable = () => {
    if (availableOnly) {
      setAvailableOnly(false);
    } else {
      setAvailableOnly(true);
    }
  };

  useEffect(() => {
    if (availableOnly) {
      const filter = items.filter((item) => item.stock > 0);
      setAvailableFilter(filter);
    } else {
      setAvailableFilter([]);
    }
  }, [availableOnly]);

  return (
    <>
      <NavBar
        onChange={onChange}
        search={search}
        searchFilter={searchFilter}
        onBlurSearch={onBlurSearch}
        handleAvailable={handleAvailable}
        availableOnly={availableOnly}
      />
      <div>
        {category ? (
          <div>
            {" "}
            <h2 className="title">
              {category[0].toUpperCase() + category.substring(1)}
            </h2>
            <p className="title-description">
              {`Explore our wide variety of ${
                category[0].toUpperCase() + category.substring(1)
              }`}
            </p>
          </div>
        ) : (
          <>
            <div>
              <h2 className="title">All products</h2>
              <p className="title-description">
                Explore our wide variety of furniture
              </p>
            </div>

            {loading && <Loading name={"Loading products..."} />}
            {search !== "" && searchFilter.length === 0 && (
              <div className="not-found">not found</div>
            )}
          </>
        )}

        <ItemList
          items={
            category
              ? itemsFilter
              : search !== ""
              ? searchFilter
              : availableFilter.length > 0
              ? availableFilter
              : items
          }
        />
      </div>
      <Footer />
    </>
  );
}

export default memo(ItemListContainer);
