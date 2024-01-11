import "./WindowModal.css";

function WindowModal({ children, isOpen, closeModal, handleClickDesactive }) {
  const handleModalClick = (e) => e.stopPropagation();

  const handleClick = () => {
    closeModal();
    handleClickDesactive();
  };
  return (
    <>
      <div className={`modal${isOpen ? " is-open" : ""}`} onClick={handleClick}>
        <div
          className={`modal-container ${isOpen ? "is-open" : ""}`}
          onClick={handleModalClick}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default WindowModal;
