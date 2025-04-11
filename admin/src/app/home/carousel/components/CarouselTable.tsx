"use client";
import axios from "axios";
import ModalButton from "./ModalButton";
import AddForm from "./AddForm";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function CarouselTable() {
  interface Item {
    _id: string;
    image: string;
    rating: number;
    name: string;
    price: number;
  }
  const [data, setData] = useState<Item[]>([]);
  const [isEditing, setIsEditing] = useState(false); // State to manage AddForm visibility
  const [currentItem, setCurrentItem] = useState<Item | null>(null); // State to store the item being edited

  // Fetch data when the component mounts
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_CALLBACK_URL}/api/products`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, [setData]);

  const handleDelete = (item: Item) => {
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_CALLBACK_URL}/api/products/${item._id}`
      )
      .then(() => {
        toast.success("Амжилттай устгалаа");
        setData((prevData) => prevData.filter((i) => i._id !== item._id));
      })
      .catch((error) => {
        toast.error(" устгалаа Алдаа гарлаа");
        console.error("There was an error deleting the item!", error);
      });
  };

  const handleUpdate = (item: Item) => {
    setCurrentItem(item); // Set the current item to be edited
    setIsEditing(true); // Show the AddForm
  };

  return (
    <>
      <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
        <ModalButton />
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                number
              </th>
              <th scope="col" className="px-6 py-3">
                image
              </th>
              <th scope="col" className="px-6 py-3">
                rating
              </th>
              <th scope="col" className="px-6 py-3">
                name
              </th>
              <th scope="col" className="px-6 py-3">
                price
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    src={item.image}
                    className="object-cover w-40"
                    alt={item.image}
                  />
                </th>
                <td className="px-6 py-4">{item.rating}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">${item.price}</td>
                <td className="px-6 py-4 space-x-4">
                  <a
                    onClick={() => handleUpdate(item)}
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                  <a
                    onClick={() => handleDelete(item)}
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isEditing && currentItem && (
        <AddForm
          product={{
            _id: currentItem._id,
            image: currentItem.image,
            rating: currentItem.rating.toString(),
            name: currentItem.name,
            price: currentItem.price.toString(),
          }}
          setOpenModal={setIsEditing}
        />
      )}
    </>
  );
}
