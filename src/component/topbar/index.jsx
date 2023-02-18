import React, { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Modal from "../modal";
import Navbar from "../navbar";

const Topbar = () => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimensions();

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open && width >= 640) {
      closeModal();
    }
  }, [open, width]);

  return (
    <div className="h-full flex items-center justify-between px-4 bg-slate-300/50 drop-shadow-md border-b border-gray-400/20 backdrop-blur">
      <div>Topbar</div>
      <button className="block sm:hidden" onClick={openModal}>
        <i className="uil uil-bars"></i>
      </button>

      <Modal
        open={open}
        closeModal={closeModal}
        stylingClasses={`${open ? "open-sidebar" : "close-sidebar"}`}
      >
        <Navbar closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default Topbar;
