import { BiAddToQueue } from "react-icons/bi";
import ProductModal from "../ProductModal";
import { useState } from "react";

const AddButton = (props) => {
  console.log(props);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <BiAddToQueue onClick={openModal} />
      <ProductModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        addProduct={props.addProduct}
      />
    </>
  );
};

export default AddButton;
