import React, { useContext } from "react";
import GoBackButton from "../components/buttons/GoBackButton";
import IdDescriptionSenderAddress from "../components/invoice-full-view/IdDescriptionSenderAddress.js";
import InvoiceInformation from "../components/invoice-full-view/InvoiceInformation";
import InvoiceTotalContainerHeadings from "../components/invoice-full-view/InvoiceTotalContainerHeadings";
import Item from "../components/invoice-full-view/Item";
import TotalPrice from "../components/invoice-full-view/TotalPrice";
import {StyledMarkAsPaidBtn, StyledEditBtn, StyledDeleteBtn} from "../components/buttons/button-styles";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import {Context} from "../context";
import Header from "../components/shared/Header";
import {ViewInvoicePageContainer, InvoiceViewContainer, InvoiceUpperContainer, InvoiceTotalContainer,
     StatusContainer, StatusButtons, StatusWord, StatusName, StatusDot} from "../components/invoice-full-view/invoice-full-view-styles.js";


const ViewInvoice = () => {
    const {invoiceId} = useParams();
    const context = useContext(Context);

    // Sucht nach der Rechnung, die angezeigt werden soll
    const thisInvoice = context.invoices.find(invoice => invoice.id === invoiceId);

    return (
        <ViewInvoicePageContainer>
            <Header />
            <Link to="/"><GoBackButton /></Link>
            <StatusContainer className="statusMobileVersion">
                <StatusWord>Status</StatusWord>
                <StatusName status={thisInvoice.status}>
                    <StatusDot status={thisInvoice.status} />{thisInvoice.status}
                </StatusName>
            </StatusContainer>

            <StatusContainer className="statusTabletVersion">
                <StatusWord>Status</StatusWord>
                <StatusName status={thisInvoice.status}>
                    <StatusDot status={thisInvoice.status} />{thisInvoice.status}
                </StatusName>
                <StatusButtons>
                    <Link to={`/edit-invoice/${thisInvoice.id}`}>
                        <StyledEditBtn>Edit</StyledEditBtn>
                    </Link> 
                    
                    <Link to="/">
                        <StyledDeleteBtn className="deleteButton" onClick={() => context.clearInvoiceData(thisInvoice.id)}>Delete</StyledDeleteBtn>
                    </Link>
                    <Link to="/">
                        <StyledMarkAsPaidBtn value="paid" onClick={() => context.setStatusToPaid(thisInvoice.id)}>Mark as Paid</StyledMarkAsPaidBtn>
                    </Link>
                </StatusButtons>
            </StatusContainer>
            
            <InvoiceViewContainer className="body2">
                <InvoiceUpperContainer>
                    <IdDescriptionSenderAddress 
                        id={thisInvoice.id} 
                        description={thisInvoice.description}
                        street={thisInvoice.senderAddress.street}
                        city={thisInvoice.senderAddress.city}
                        postCode={thisInvoice.senderAddress.postCode}
                        country={thisInvoice.senderAddress.country} 
                    />
                
                    <InvoiceInformation 
                        createdAt={thisInvoice.createdAt}
                        paymentDue={thisInvoice.paymentDue}
                        clientName={thisInvoice.clientName}
                        street={thisInvoice.clientAddress.street}
                        city={thisInvoice.clientAddress.city}
                        postCode={thisInvoice.clientAddress.postCode}
                        country={thisInvoice.clientAddress.country}
                        clientEmail={thisInvoice.clientEmail}
                    />
                </InvoiceUpperContainer>
                <InvoiceTotalContainer>
                    <InvoiceTotalContainerHeadings />
                    {/* Iteriert durch sämtliche Items, weil manchmal mehr als ein Item in der Liste steht */}
                    {thisInvoice.items.map(item => (
                        <Item 
                            key={item.total}
                            name={item.name}
                            quantity={item.quantity}
                            price={item.price}
                            total={item.total}
                        />
                    ))}
                    <TotalPrice total={thisInvoice.total}/>
                    
                </InvoiceTotalContainer>
            </InvoiceViewContainer>

            <div className="viewInvoiceButtonCollectionMobile">
                    <Link to={`/edit-invoice/${thisInvoice.id}`}>
                    <StyledEditBtn>Edit</StyledEditBtn>
                </Link> 
        
                <Link to="/">
                    <StyledDeleteBtn className="deleteButton" onClick={() => context.clearInvoiceData(thisInvoice.id)}>Delete</StyledDeleteBtn>
                </Link>
                <Link to="/">
                    <StyledMarkAsPaidBtn value="paid" onClick={() => context.setStatusToPaid(thisInvoice.id)}>Mark as Paid</StyledMarkAsPaidBtn>
                </Link>
            </div>
        </ViewInvoicePageContainer>
    )
}

export default ViewInvoice;