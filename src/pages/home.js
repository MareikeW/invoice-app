import React from "react";
//import Menu from "../components/Menu";
import InvoiceCard from "../components/invoice-card/InvoiceCard";
import invoicesData from "../data/data.json";

function Home() {
    const invoiceCardComponents = invoicesData.map(invoice => {
        return (
            <InvoiceCard 
            key={invoice.id} 
            id={invoice.id} 
            clientName={invoice.clientName}
            paymentDue={invoice.paymentDue}
            total={invoice.total}
            status={invoice.status}
            />
        )
    })
    return (
        <section>
            
            {invoiceCardComponents}
        </section>
    )
}

export default Home;