export default function Number() {
    const numbers = [{
        id: 1,
        cycle: 113, name: "Trusted by Million Clients"
    }, {
        id: 2,
        cycle: 16, name: "Trusted by Million Clients"
    }, {
        id: 3,
        cycle: 13, name: "Trusted by Million Clients"
    }, {
        id: 4,
        cycle: 16, name: "Trusted by Million Clients"
    }, {
        id: 5,
        cycle: 136, name: "Trusted by Million Clients"
    },]
    return <>
        <section className="flex w-full " >

            {numbers.map((res) => {
                return <>
                    <section key={res.id} className="flex w-full  gap-5 py-10 flex-col odd:bg-[var(--maincolor)] even:bg-[var(--darkpurple)] justify-center items-center" >
                        <p className="rounded-full border-2 font-semibold text-3xl border-[var(--bordercolor)] text-[var(--bgcolor)] p-5 ">{res.cycle}</p>
                        <h1 className="text-3xl text-[var(--textcolor)]">{res.name}</h1>
                    </section></>
            })}

        </section >
    </>
}