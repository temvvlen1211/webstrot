"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";

export default function AddForm({
  setOpenModal,
  product,
}: {
  setOpenModal: (open: boolean) => void;
  product?: {
    _id?: string;
    image: string;
    rating: string;
    name: string;
    price: string;
  };
}) {
  const [formData, setFormData] = useState({
    image: "",
    rating: "",
    name: "",
    price: "",
  });

  // Prefill form data when editing
  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (product && product._id) {
        // Update existing product
        await axios
          .put(
            `${process.env.NEXT_PUBLIC_CALLBACK_URL}/api/products/${product._id}`,
            formData
          )
          .then(() => toast.success("Амжилттай шинэчиллээ"))
          .catch(() => toast.error(" шинэчиллээ Алдаа гарлаа"));
        console.log("Product updated successfully");
      } else {
        // Add new product
        await axios
          .post(
            `${process.env.NEXT_PUBLIC_CALLBACK_URL}/api/products`,
            formData
          )
          .then(() => toast.success("Амжилттай нэмлээ"))
          .catch(() => toast.error(" нэмлээ Алдаа гарлаа"));
      }
      setOpenModal(false);
      setFormData({ name: "", price: "", image: "", rating: "" });
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <>
      <div className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-sm">
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {product ? "Edit Product" : "Add Product"}
              </h3>
              <button
                onClick={() => setOpenModal(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <IoMdClose />
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 md:p-5 space-y-4">
              <form onSubmit={handleSubmit}>
                {/* Image */}
                <div className="mb-5">
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-bold uppercase text-gray-900 dark:text-white"
                  >
                    Image URL
                  </label>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                {/* Rating */}
                <div className="mb-5">
                  <label
                    htmlFor="rating"
                    className="block mb-2 text-sm font-bold uppercase text-gray-900 dark:text-white"
                  >
                    Rating
                  </label>
                  <input
                    type="number"
                    id="rating"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    placeholder="0 - 5"
                    min="0"
                    max="5"
                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                {/* Name */}
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-bold uppercase text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Product Name"
                    required
                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                {/* Price */}
                <div className="mb-5">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-bold uppercase text-gray-900 dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Product Price"
                    required
                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div className="space-x-4">
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpenModal(false)}
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
