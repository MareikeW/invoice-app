import React from "react";
import Menu from "../components/Menu";
import InvoiceCard from "../components/invoice-card/InvoiceCard";

function Home() {
    return (
        <section>
            <Menu />
            <InvoiceCard />
        </section>
    )
}

export default Home;