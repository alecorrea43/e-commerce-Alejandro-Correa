import { useState } from "react";
import Item from "./Item";
import "./Item.css";
import ReactPaginate from "react-paginate";
import "./ItemListPagination.css";

function ItemList({ items }) {
  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = 6;
  const pagesVisited = pageNumber * itemsPerPage;

  const displayItems = items
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((item, i) => {
      return <div>{items && <Item item={item} key={i} />}</div>;
    });

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="flex-center">
      <div className="item-list">{displayItems}</div>
      <ReactPaginate
        previousLabel={"< Previous"}
        nextLabel={"Next >"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination-buttons"}
        previousLinkClassName={"previous-button"}
        nextLinkClassName={"next-button"}
        disabledClassName={"pagination-disabled"}
        activeClassName={"active-button"}
      />
    </div>
  );
}

export default ItemList;
