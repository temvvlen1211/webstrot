import React from "react";

const archivesList = [
    "May 2017",
    "June 2017",
    "July 2017",
    "August 2017",
    "September 2017",
    "October 2017",
    "November 2017",
];

const Archives = () => {
    return (
        <section className=" py-10 w-full">
            <div className="border-2 border-[var(--maincolor)]">
                <h2 className="text-2xl p-3 font-bold text-white bg-[var(--maincolor)]">Archives</h2>
                <ul className=" divide-y-2">
                    {archivesList.map((month, index) => (
                        <li key={index} className=" p-3  ">
                            <a href="#" className="hover:text-[var(--maincolor)]">{month}</a>
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    );
};

export default Archives;
