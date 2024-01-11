import { useEffect, useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import WindowModal from "../WindowModal/WindowModal";
import "./NavBar.css";
import "../../../node_modules/hamburgers/_sass/hamburgers/hamburgers.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import NavCategories from "./NavCategories";
import Select from "./Select";

function NavBar({
  onChange,
  search,
  searchFilter,
  onBlurSearch,
  handleAvailable,
  availableOnly,
}) {
  const [scrollUp, setScrollUp] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  let location = useLocation();

  useEffect(() => {
    if (type) {
      navigate(`/category/${type}`);
    }
    if (type === "all") {
      navigate("/");
    }
  }, [type]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
  };
  let lasScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lasScroll) setScrollUp(false);
      else setScrollUp(true);

      lasScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    !isActive ? setIsActive(true) : setIsActive(false);
    isOpen ? closeModal() : openModal();
  };
  const handleClickDesactive = () => setIsActive(false);

  const navigateHomeClick = () => {
    navigate("/");
  };

  const captureType = (e) => {
    setType(e.target.value);
  };

  return (
    <>
      <WindowModal
        isOpen={isOpen}
        closeModal={closeModal}
        handleClickDesactive={handleClickDesactive}
      >
        <div
          className={`menu-title-nav-bar${
            id || location.pathname === "/cart" ? "-detail" : ""
          }`}
        >
          <h2>The OAK</h2>
          <span>Furniture shop</span>
        </div>
        <div className="menu-category">
          <h2>Category</h2>
        </div>
        <NavCategories />
      </WindowModal>

      <div
        className={`header-nav-bar ${scrollUp}${
          id || location.pathname === "/cart" ? "-detail" : ""
        }`}
      >
        <header className={`trigger-menu-wrapper`}>
          <div className="menu-container">
            <button
              style={{
                zIndex: 54,
                paddingLeft: "30%",
                paddingBottom: 0,
                color: "#ffff",
              }}
              onClick={handleClick}
              className={`hamburger hamburger--collapse ${
                isActive && "is-active"
              } equis`}
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <span className="menu">Menú</span>
          </div>
          <div className="nav-bar-title" onClick={navigateHomeClick}>
            <img
              className="icon-img"
              src="https://cdn-icons-png.flaticon.com/512/5437/5437538.png"
            />
            <div className="titlee flex flex-col justify-center text-center ">
              <h1 className="h-2 mb-1 titlee md:h-8">The Oak</h1>
              <span className="span">Furniture Shop</span>
            </div>
          </div>
          <div>
            <input
              onBlur={onBlurSearch}
              onChange={onChange}
              type="text"
              value={search}
              placeholder="Search"
              className="search"
            />
            <div className="search-results">
              {scrollUp &&
                search &&
                searchFilter.map((e) => (
                  <div
                    onClick={() => {
                      navigate(`/item/${e.id}`);
                    }}
                    className="container-search"
                  >
                    <div className="title-search">{e.title}</div>
                    <div className="image-search">
                      <img src={e.img} width="30px" />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div></div>
          <div>
            <CartWidget />
          </div>
        </header>

        <nav
          className={`filters${
            id || location.pathname === "/cart" ? "-disabled" : ""
          }`}
        >
          <Select captureType={captureType} />

          <div
            className={`filter-button-container${
              availableOnly ? "-active" : ""
            }`}
          >
            <button onClick={handleAvailable}>Available only</button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
