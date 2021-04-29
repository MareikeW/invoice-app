import React, {useState} from "react";
//import Menu from "../components/menu/Menu";
import InvoiceCard from "../components/invoice-card/InvoiceCard";
import MenuInvoiceAmount from "../components/menu/MenuInvoiceAmount";
import FilterButton from "../components/menu/FilterButton";
import AddInvoiceButton from "../components/menu/AddInvoiceButton";
import ZeroInvoices from "../components/invoice-card/ZeroInvoices";
import Header from "../components/shared/Header";
import {Context} from "../context";
import {Link} from "react-router-dom";
import {MenuContainer, FilterOptions, FilterOption, FilterCheckbox} from "../components/menu/menu-styles";

const Home = () => {
    const context = React.useContext(Context);
    const [filterBox, setFilterBox] = useState([]);
    
    let filteredInvoices;
    
    const filterInvoices = (event) => {
        const {name} = event.target;
        
        setFilterBox(prevState => {
            if (prevState.includes(name)) {
                return prevState.filter(invoice => invoice !== name);
            }
            return [...prevState, name];
        })
    }
    
    if (filterBox.length) {
        filteredInvoices = context.invoices.filter(invoice => filterBox.includes(invoice.status));
    } else {
        filteredInvoices = context.invoices;
    }

    return (
        <section>
            <Header />
            <MenuContainer>
                <MenuInvoiceAmount amount={filteredInvoices}/>

                <form>
                    <FilterButton />
                        <FilterOptions id="filterOptions">
                            <FilterOption>Draft
                                <FilterCheckbox 
                                    type="checkbox"
                                    name="draft"
                                    checked={filterBox.includes("draft")}
                                    onChange={filterInvoices}
                                    />
                            </FilterOption>
                            <FilterOption>Pending
                                <FilterCheckbox 
                                type="checkbox"
                                name="pending"
                                checked={filterBox.includes("pending")}
                                onChange={filterInvoices}
                                />
                            </FilterOption>
                            <FilterOption>Paid
                                <FilterCheckbox 
                                type="checkbox"
                                name="paid"
                                checked={filterBox.includes("paid")}
                                onChange={filterInvoices}
                                />
                            </FilterOption>
                        </FilterOptions>    
                </form>
            
                <Link to="/create-invoice" style={{textDecoration: "none"}}>                 
                    <AddInvoiceButton />  
                </Link>
            </MenuContainer>

            {filteredInvoices.length < 1 ? 
                <ZeroInvoices />
            :
                filteredInvoices.map(invoice => {
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
            }
        </section>
    )
}

export default Home;

