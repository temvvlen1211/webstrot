export default function AnimalSign() {
  return (
    <>
      <section className="w-full py-10 ">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-2xl">
            What Your Chinese Zodiac Animal Sign Is
          </h1>
          <p className="text-gray-500">
            Your Chinese Zodiac sign is derived from your birth year, according
            to the Chinese lunar calendar. See the years of each animal below or
            use the calculator on the right to determine your own sign. Those
            born in January and February take care: Chinese (Lunar) New Year
            moves between 21 January and February 20. If you were born in
            January or February, check whether your birth date falls before or
            after Chinese New Year to know what your Chinese zodiac year is.
          </p>

          <div className="  ">
            <h2 className="text-2xl font-bold mb-4">Chinese Zodiac Signs</h2>
            <ul className="flex flex-col space-y-4">
              <li className="flex items-center space-x-2  bg-white  rounded-lg">
                <div className="w-3 h-3 bg-[var(--maincolor)] rounded-full"></div>
                <div>
                  <span className="font-semibold">Rat</span>: 2020, 2008, 1996,
                  1984, 1972, 1960
                </div>
              </li>
              <li className="flex items-center space-x-2  bg-white  rounded-lg">
                <div className="w-3 h-3 bg-[var(--maincolor)] rounded-full"></div>
                <div>
                  <span className="font-semibold">Ox</span>: 2021, 2009, 1997,
                  1985, 1973, 1961
                </div>
              </li>
              <li className="flex items-center space-x-2  bg-white  rounded-lg">
                <div className="w-3 h-3 bg-[var(--maincolor)] rounded-full"></div>
                <div>
                  <span className="font-semibold">Tiger</span>: 2022, 2010,
                  1998, 1986, 1974, 1962
                </div>
              </li>
              <li className="flex items-center space-x-2  bg-white  rounded-lg">
                <div className="w-3 h-3 bg-[var(--maincolor)] rounded-full"></div>
                <div>
                  <span className="font-semibold">Rabbit</span>: 2023, 2011,
                  1999, 1987, 1975, 1963
                </div>
              </li>
              <li className="flex items-center space-x-2  bg-white  rounded-lg">
                <div className="w-3 h-3 bg-[var(--maincolor)] rounded-full"></div>
                <div>
                  <span className="font-semibold">Dragon</span>: 2024, 2012,
                  2000, 1988, 1976, 1964
                </div>
              </li>
              <li className="flex items-center space-x-2  bg-white  rounded-lg">
                <div className="w-3 h-3 bg-[var(--maincolor)] rounded-full"></div>
                <div>
                  <span className="font-semibold">Snake</span>: 2013, 2001,
                  1989, 1977, 1965, 1953
                </div>
              </li>
              <li className="flex items-center space-x-2  bg-white  rounded-lg">
                <div className="w-3 h-3 bg-[var(--maincolor)] rounded-full"></div>
                <div>
                  <span className="font-semibold">Horse</span>: 2014, 2002,
                  1990, 1978, 1966, 1954
                </div>
              </li>
              <li className="flex items-center space-x-2  bg-white  rounded-lg">
                <div className="w-3 h-3 bg-[var(--maincolor)] rounded-full"></div>
                <div>
                  <span className="font-semibold">Goat</span>: 2015, 2003, 1991,
                  1979, 1967, 1955
                </div>
              </li>
              <li className="flex items-center space-x-2  bg-white  rounded-lg">
                <div className="w-3 h-3 bg-[var(--maincolor)] rounded-full"></div>
                <div>
                  <span className="font-semibold">Monkey</span>: 2016, 2004,
                  1992, 1980, 1968, 1956
                </div>
              </li>
              <li className="flex items-center space-x-2  bg-white  rounded-lg">
                <div className="w-3 h-3 bg-[var(--maincolor)] rounded-full"></div>
                <div>
                  <span className="font-semibold">Rooster</span>: 2017, 2005,
                  1993, 1981, 1969, 1957
                </div>
              </li>
              <li className="flex items-center space-x-2  bg-white  rounded-lg">
                <div className="w-3 h-3 bg-[var(--maincolor)] rounded-full"></div>
                <div>
                  <span className="font-semibold">Dog</span>: 2018, 2006, 1994,
                  1982, 1970, 1958
                </div>
              </li>
              <li className="flex items-center space-x-2  bg-white  rounded-lg">
                <div className="w-3 h-3 bg-[var(--maincolor)] rounded-full"></div>
                <div>
                  <span className="font-semibold">Pig</span>: 2019, 2007, 1995,
                  1983, 1971, 1959
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
