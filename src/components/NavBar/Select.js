import "./Select.css";

function Select({ captureType }) {
  return (
    <div className="filter-button-container">
      <select onChange={captureType} style={{ backgroundColor: "#e3e3e3" }}>
        <option value="">Category</option>
        <option value="all">All</option>
        <option value="chairs">Chairs</option>
        <option value="desks">Desks</option>
        <option value="tables">Tables</option>
        <option value="shelfs">Shelfs</option>
        <option value="beds">Beds</option>
        <option value="closets">Closets</option>
      </select>
    </div>
  );
}

export default Select;
