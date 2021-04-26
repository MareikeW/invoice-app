import React, {useState} from "react";
//import Menu from "../components/menu/Menu";
import InvoiceCard from "../components/invoice-card/InvoiceCard";
import {Context} from "../context";
import {Link} from "react-router-dom";
import {MenuContainer, NumInvoices, FilterButton, 
    FilterOptions, FilterOption, FilterCheckbox, 
    AddInvoiceButton, PlusSign} from "../components/menu/menu-styles";
import {ReactComponent as Arrow} from "../icons/icon-arrow-down.svg";
import {ReactComponent as Plus} from "../icons/icon-plus.svg";

const Home = () => {
    const context = React.useContext(Context);

    const [filterBox, setFilterBox] = useState([]);
    const filterInvoices = (event) => {
        const {name} = event.target;
        
        setFilterBox(prevState => {
            if (prevState.includes(name)) {
                return prevState.filter(invoice => invoice !== name);
            }
            return [...prevState, name];
        })
    }
    
    let filteredInvoices;
    if (filterBox.length) {
        filteredInvoices = context.invoices.filter(invoice => filterBox.includes(invoice.status));
    } else {
        filteredInvoices = context.invoices;
    }
    
    return (
        <section>
            <MenuContainer>
                <div>
                    <h2>Invoices</h2>
                    <NumInvoices>{filteredInvoices.length} invoices</NumInvoices>
                </div>

                <form>
                    <FilterButton>Filter
                    <Arrow />
                    </FilterButton>
                    <FilterOptions>
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
            
                <Link to="/create-invoice"><AddInvoiceButton><PlusSign><Plus style={{position: "absolute", top: "10px", left: "10px"}}/></PlusSign> New</AddInvoiceButton></Link>
            </MenuContainer>
            {filteredInvoices.map(invoice => {
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
            })}
        </section>
    )
}

export default Home;

