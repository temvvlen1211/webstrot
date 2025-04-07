const NewProduct = () => {
  const categories = ["Yantra", "Gemstone", "Books", "Workshop DVD"];

  return (
    <>
      <section className="w-full py-10">
        <div className=" border-[var(--maincolor)] border-2 ">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-white p-3 bg-[var(--maincolor)] s ">
            New Products
          </h2>

          {/* Categories List */}
          <ul className=" divide-y-2 divide-[var(--maincolor)]">
            {categories.map((category, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block text-lg p-3 text-gray-500 hover:text-[var(--maincolor)] transition"
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default NewProduct;
