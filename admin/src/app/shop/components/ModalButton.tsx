"use client";
import { useState } from "react";
import AddForm from "./AddForm";

export default function ModalButton() {
  const [OpenModal, setOpenModal] = useState(false);

  return (
    <section>
      <button
        onClick={() => setOpenModal(true)}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Add Product
      </button>

      {OpenModal && <AddForm setOpenModal={setOpenModal} />}
    </section>
  );
}
