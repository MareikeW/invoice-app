import React from "react";
import Menu from "../components/menu/Menu";
import InvoiceCard from "../components/invoice-card/InvoiceCard";
import {Context} from "../context";
import {Link} from "react-router-dom";


const Home = () => {
    const context = React.useContext(Context);
    const invoiceCardComponents = context.invoices.map(invoice => {
        return (
            <Link to={`/view-invoice/${invoice.id}`} key={invoice.id}>
                <InvoiceCard 
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

