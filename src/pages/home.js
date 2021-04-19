import React, {useContext} from "react";
import Menu from "../components/menu/Menu";
import InvoiceCard from "../components/invoice-card/InvoiceCard";
import {Context} from "../context";
import {Link} from "react-router-dom";

const Home = () => {
    const context = useContext(Context);
    const invoiceCardComponents = Object.keys(context.invoices).map(invoice => {
        return (
            <Link to={`/view-invoice/${invoice.id}`}>
                <InvoiceCard 
                key={invoice.id} 
                id={invoice.id} 
                clientName={invoice.clientName}
                paymentDue={invoice.paymentDue}
                total={invoice.total}
                status={invoice.status}
                />
            </Link>
        )
    })
    
    return (
        <section>
            <Menu amountsOfInvoices={invoiceCardComponents.length}/>
            
            {invoiceCardComponents}
        </section>
    )
}

export default Home;