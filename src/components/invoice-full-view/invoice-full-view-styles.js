import styled from "styled-components";

export const ViewInvoicePageContainer = styled.div`
    .statusMobileVersion {
        display: block;
    }

    .statusTabletVersion {
        display: none
    }

    .viewInvoiceButtonCollectionMobile {
        display: flex;
        background-color: #FFFFFF;
        justify-content: space-between;
        padding: 21px;
    }

    @media (min-width: 720px) {
        .statusMobileVersion {
            display: none;
        }

        .statusTabletVersion {
            display: block;
            width: 688px;
            height: 88px;
        }

        .viewInvoiceButtonCollectionMobile {
            display: none;
        }
    }

    @media (min-width: 1024px) {
        .statusTabletVersion {
            width: 730px;
        }
    }
`

export const InvoiceViewContainer = styled.div`
    background-color: #FFFFFF;
    width: 327px;
    border-radius: 8px;
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    color: #7E88C3;
    margin: 24px auto;
    padding: 24px;

    @media (min-width: 720px) {
        width: 688px;
        padding: 32px;
        position: relative;

        h4 {
            font-size: 16px;
        }
    }

    @media (min-width: 1024px) {
        width: 730px;
        padding: 48px;
    }
`

export const InvoiceUpperContainer = styled.div`
    @media (min-width: 720px) {
        height: 274px;
    }
`

export const Description = styled.p`
    @media (min-width: 720px) {
        position: absolute;
        top: 64px;
    }

    @media (min-width: 1024px) {
        position: absolute;
        top: 80px;
    }
`

export const SenderAddress = styled.div`
    @media (min-width: 720px) {
        position: absolute;
        right: 32px;
        top: 32px;
        text-align: right;
        font-size: 11px;
    }

    @media (min-width: 1024px) {
        position: absolute;
        right: 48px;
        top: 48px;
    }
`

export const InvoiceInformationContainer = styled.div`
    height: 209px;
    position: relative;
    margin-top: 31px;

    @media (min-width: 720px) {
        position: absolute;
        top: 128px;
    }
`

export const InvoiceData = styled.h3`
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.31px;
    padding-top: 12px;
`

export const PaymentDue = styled.div`
    position: absolute;
    top: 79px;
    width: 200px;
`

export const BillTo = styled.div`
    position: absolute;
    left: 160px;
    top: 0px;

    @media (min-width: 720px) {
        left: 196px;
        width: 150px;
    }
`

export const BillToAddress = styled.div`
    padding-top: 8px;

    @media (min-width: 720px) {
        font-size: 11px;
    }
`

export const SentTo = styled.div`
    position: absolute;
    top: 162px;

    @media (min-width: 720px) {
        top: 0;
        left: 399px;
        width: 200px;
    }
`

export const InvoiceTotalContainer = styled.div`
    width: 279px;
    background-color: #F9FAFE;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 8px;

    @media (min-width: 720px) {
        width: 624px;
    }
`

export const StyledInvoiceTotalContainerHeadings = styled.div`
    display: none;

    @media (min-width: 720px) {
        display: block;
        position: relative;
        padding: 32px;
        padding-bottom: 18px;
        font-size: 11px;
    }
`

export const HeadingItemName = styled.p`
    position: absolute;
`

export const HeadingItemQuantity = styled.p`
    position: absolute;
    left: 308px;
`

export const HeadingItemPrice = styled.p`
    position: absolute;
    left: 426px;
`

export const HeadingItemTotal = styled.p`
    position: absolute;
    left: 563px;
`

export const StyledItem = styled.div`
    padding: 24px;  
    position: relative;

    .itemMobileVersion {
        display: block;
    }

    .itemTabletVersion {
        display: none;
    }

    h4 {
        margin-bottom: 8px;
    }

    .itemTotal {
        position: absolute;
        right: 24px;
        top: 36px;
        color: #000000;
        font-weight: bold;
    }

    @media (min-width: 720px) {
        padding: 32px;

        h4 {
            font-size: 12px;
        }

        .itemQuantity {
            position: absolute;
            top: 32px;
            left: 318px;
        }

        .itemPrice {
            position: absolute;
            top: 32px;
            right: 169px;
        }

        .itemTotal {
            top: 32px;
        }

        .itemMobileVersion {
            display: none;
        }
    
        .itemTabletVersion {
            display: block;
        }
    }
`

export const TotalPriceContainer = styled.div`
    height: 80px;
    background-color: #373B53;
    width: inherit;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const GrandTotalTerm = styled.p`
    padding-left: 24px;

    .mobileVersion {
        display: block;
    }

    .tabletVersion {
        display: none;
    }

    @media (min-width: 720px) {
        .mobileVersion {
            display: none;
        }
    
        .tabletVersion {
            display: block;
        } 
    }
`
 
export const StyledTotalPrice = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: -0.42px;
    text-align: right;
    padding-right: 24px;
`

export const StatusContainer = styled.div`
    width: 327px;
    height: 91px;
    background-color: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    margin-left: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin: 0 auto;
`

export const StatusButtons = styled.div`
    width: 309px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 20px;
    right: 32px;
`

export const StatusWord = styled.h4`
    margin-left: 24px;
    font-weight: 500;
    color: #7E88C3;
    padding-top: 36px;

    @media (min-width: 720px) {
        margin-left: 32px;
    }
`

export const StatusName = styled.h4`
    color: ${({status}) => {
        if (status === "paid") return "#33D69F";
        else if (status === "pending") return "#FF8F00";
        else if (status === "draft") return "#373B53"
        else return "#000000";
    }};
    position: absolute;
    top: 24px;
    bottom: 27px;
    right: 24px;
    text-transform: capitalize;
    border-radius: 6px;
    background-color: ${({status}) => {
        if (status === "paid") return "rgba(51,214,159,0.06)";
        else if (status === "pending") return "rgba(255,143,0,0.06)";
        else if (status === "draft") return "rgba(55,59,83,0.06)";
    }};
    padding: ${({status}) => {
        if (status === "paid") return "13px 29px 12px 46px";
        else if (status === "pending") return "13px 17px 12px 34px";
        else if (status === "draft") return "13px 27px 12px 43px";
    }};

    @media (min-width: 720px) {
        left: 87px;
        right: 497px;
    }

    @media (min-width: 1024px) {
        right: 539px;
    }
`

export const StatusDot = styled.span`
    height: 8px;
        width: 8px;
        border-radius: 50%;
        background-color: ${({status}) => {
            if (status === "paid") return "#33D69F";
            else if (status === "pending") return "#FF8F00";
            else if (status === "draft") return "#373B53"
            else return "#000000";
        }};
        position: absolute;
        left: ${({status}) => {
            if (status === "paid") return "30px";
            else if (status === "pending") return "18px";
            else if (status === "draft") return "27px"
        }};
        top: 16px;
`