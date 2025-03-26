export default function Layout() {
  return (
    <>
      <section className="flex justify-center items-center w-full py-10">
        <div className="container w-full">
          <div className=" flex flex-col sm:flex-row w-full gap-5  ">
            {/* body*/}
            <div className="sm:max-w-3/4 w-full px-5 sm:px-0 "></div>
            {/* aside */}
            <div className="sm:max-w-1/4 w-full pb-20 sm:pb-0 px-5 sm:px-0"></div>
          </div>
        </div>
      </section>
    </>
  );
}
