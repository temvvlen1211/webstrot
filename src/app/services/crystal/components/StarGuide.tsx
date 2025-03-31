"use client";

import { useState } from "react";

const StarGuide = () => {
    const [openPanel, setOpenPanel] = useState("dayGuide");

    const togglePanel = (panelId: string) => {
        setOpenPanel(openPanel === panelId ? "" : panelId);
    };

    return (<section className="w-full py-10">
        <div className=" border-2 border-[var(--maincolor)] ">
            {/* Heading */}
            <h2 className="text-2xl font-bold text-white  p-3   bg-[var(--maincolor)] ">Your Star Guide</h2>

            {/* Accordion Section */}
            {/* Day Guide */}
            <div className=" divide-y-2 divide-[var(--maincolor)] ">
                <button
                    onClick={() => togglePanel("dayGuide")}
                    className="w-full text-left px-4 py-3 text-lg font-semibold  bg-  transition flex justify-between"
                >
                    Day Guide
                    <span>{openPanel === "dayGuide" ? "−" : "+"}</span>
                </button>
                {openPanel === "dayGuide" && (
                    <div className="p-4 text-gray-700">
                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                    </div>
                )}

                {/* Life Meter */}
                <button
                    onClick={() => togglePanel("lifeMeter")}
                    className="w-full text-left px-4 py-3 text-lg font-semibold   transition flex justify-between"
                >
                    Life Meter
                    <span>{openPanel === "lifeMeter" ? "−" : "+"}</span>
                </button>
                {openPanel === "lifeMeter" && (
                    <div className="p-4 text-gray-700">
                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                    </div>
                )}

                {/* Compatibility */}
                <button
                    onClick={() => togglePanel("compatibility")}
                    className="w-full text-left px-4 py-3 text-lg font-semibold   transition flex justify-between"
                >
                    Compatibility
                    <span>{openPanel === "compatibility" ? "−" : "+"}</span>
                </button>
                {openPanel === "compatibility" && (
                    <div className="p-4 text-gray-700">
                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                    </div>
                )}
            </div>
        </div>
    </section>

    );
};

export default StarGuide;
