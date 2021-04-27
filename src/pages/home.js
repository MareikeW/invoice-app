import React, {useState} from "react";
//import Menu from "../components/menu/Menu";
import InvoiceCard from "../components/invoice-card/InvoiceCard";
import Header from "../components/shared/Header";
import {Context} from "../context";
import {Link} from "react-router-dom";
import {MenuContainer, FilterButton, 
    FilterOptions, FilterOption, FilterCheckbox, 
    AddInvoiceButton, PlusSign, ZeroInvoicesContainer} from "../components/menu/menu-styles";
import {ReactComponent as Arrow} from "../icons/icon-arrow-down.svg";
import {ReactComponent as Plus} from "../icons/icon-plus.svg";
import {ReactComponent as ZeroInvoices} from "../icons/illustration-empty.svg";

const Home = () => {
    const context = React.useContext(Context);
    const [filterBox, setFilterBox] = useState([]);
    
    let filteredInvoices;
    const filterOptions = document.getElementById("filterOptions");

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

    const toggleFilterButton = (event) => {
        event.preventDefault();
        if (filterOptions.style.visibility === "visible") {
            filterOptions.style.visibility = "hidden";
        } else {
            filterOptions.style.visibility = "visible";
        }  
    }

    return (
        <section>
            <Header />
            <MenuContainer>
                <div>
                    <h2>Invoices</h2>
                    <p className="mobileVersion">{filteredInvoices.length} invoices</p>
                    <p className="tabletVersion">There are a total of {filteredInvoices.length} invoices</p> 
                </div>

                <form>
                <div className="mobileVersion">
                    <FilterButton onClick={toggleFilterButton}>Filter
                        <Arrow />
                    </FilterButton>
                </div>
                <div className="tabletVersion">
                    <FilterButton onClick={toggleFilterButton}>Filter by status
                        <Arrow />
                    </FilterButton>
                </div>
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
                    <AddInvoiceButton className="mobileVersion">
                        <PlusSign>
                            <Plus style={{position: "absolute", top: "10px", left: "10px"}}/>
                        </PlusSign>New
                    </AddInvoiceButton>
                    <AddInvoiceButton className="tabletVersion">
                        <PlusSign>
                            <Plus style={{position: "absolute", top: "10px", left: "10px"}}/>
                        </PlusSign>New Invoice
                    </AddInvoiceButton>
                </Link>
            </MenuContainer>
            {filteredInvoices.length < 1 ? 
            <ZeroInvoicesContainer>
                <ZeroInvoices />
                <h2>There is nothing here</h2>
                <p>Create an invoice by clicking the <strong>New</strong> button and get started</p>
            </ZeroInvoicesContainer>
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

