export default function OwnPalm() {
  return (
    <>
      <section className="w-full flex flex-col  gap-5 ">
        <h1 className="text-2xl font-semibold">
          How To Do Your Own Palm Reading
        </h1>
        <div>
          <h1 className=" text-lg font-bold pb-5">
            Does Each Lines Carry Its Own Meaning?
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint aecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo tore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit ernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
          <div className="flex gap-5 flex-col sm:flex-row w-full py-5">
            <img
              src="https://webstrot.com/html/jyotish/light_version/images/content/kundali/hand_img.jpg"
              className="w-lg object-cover"
              alt=""
            />
            <div className="w-full flex flex-col gap-5  ">
              <p>
                Hncididunt ut labore et dolore magna aliqua. Ut enim ad im
                veniam, quis nostrud exercitation ullamco laboris nisi utquip ex
                ea commodo consequat. Duis aute irure dolor i ehenderit in
                voluptate velit esse cillum dolore eu giat nulla priatur. eur
                sint occaecat cupidatat non proident, sunt in culpa qui icia
                deserunt mollit anim id est laborum. Sed ut perspiciatisde omnis
                iste natus error sit voluptatem accusantium oremque laudantium,
                totam rem aperiam.
              </p>
              <p>
                Eaque ipsa quae ab illo inventore veritatis et quasi rchitecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam tatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia tur magni
                dolores eos qui ratione voluptatem sequi nesciunt. e porro
                quisquam est, qui dolorem ipsum quia dol sit ametr, adipisci
                velit, sed quia non numquaus modi tempora idunt ut labore.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full ">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">
              01. Determine the hand shape.
            </h2>
            <p className="text-gray-600">
              Each hand shape is associated with certain character traits. The
              length of the palm is measured from the wrist to the bottom of the
              fingers. The basic interpretations are as follows:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="mt-1 text-blue-500">
                  <i className="fas fa-circle"></i>
                </div>
                <div className="text-gray-700">
                  <strong>Earth</strong> - broad, square palms and fingers,
                  thick or coarse skin, and ruddy color; length of the palm
                  equals length of fingers.
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="mt-1 text-blue-500">
                  <i className="fas fa-circle"></i>
                </div>
                <div className="text-gray-700">
                  <strong>Air</strong> - square or rectangular palms with long
                  fingers and sometimes protruding knuckles, low-set thumbs, and
                  dry skin; length of the palm less than length of fingers.
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="mt-1 text-blue-500">
                  <i className="fas fa-circle"></i>
                </div>
                <div className="text-gray-700">
                  <strong>Water</strong> - long, sometimes oval-shaped palm,
                  with long, flexible, conical fingers; length of the palm
                  equals the length of fingers but is less than the width across
                  the widest part of the palm.
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full ">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">
              02. Look at the mounts.
            </h2>
            <p className="text-gray-600">
              That's what the fleshy bit below your fingers is called, on the
              opposite side of your knuckle. To make them visible, cup your hand
              just a bit. Which one is the largest?
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="mt-1 text-blue-500">
                  <i className="fas fa-circle"></i>
                </div>
                <div className="text-gray-700">
                  <strong>Venus Mount:</strong> A high Venus mount (the one
                  under your thumb) indicates a predisposition for hedonism,
                  promiscuity, and the need for instant gratification. A
                  non-existent Venus mount indicates little interest in family
                  matters.
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="mt-1 text-blue-500">
                  <i className="fas fa-circle"></i>
                </div>
                <div className="text-gray-700">
                  <strong>Jupiter Mount:</strong> The mount under your index
                  finger is called the Jupiter mount. If this is well-developed,
                  it means you are dominant, possibly self-centered, and
                  aggressive. A lack of one means you lack confidence.
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="mt-1 text-blue-500">
                  <i className="fas fa-circle"></i>
                </div>
                <div className="text-gray-700">
                  <strong>Saturn Mount:</strong> Under your middle finger is the
                  Saturn mount. A high mount shows you're stubborn, cynical, and
                  prone to depression. If it is low, it's an indicator of
                  superficiality and disorganization.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
