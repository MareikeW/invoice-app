import styled from "styled-components";

export const InvoiceViewContainer = styled.div`
    background-color: #FFFFFF;
    width: 327px;
    border-radius: 8px;
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    color: #7E88C3;
    margin: 24px;
`

export const IdNameAdressContainer = styled.div`
    padding-top: 24px;
    padding-left: 24px;
`

export const InvoiceInformationContainer = styled.div`
    height: 209px;
    position: relative;
    padding-left: 24px;
    margin-top: 31px;
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
`

export const BillTo = styled.div`
    position: absolute;
    left: 160px;
    top: 0px;
`

export const BillToAddress = styled.div`
    padding-top: 8px;
`

export const SentTo = styled.div`
    position: absolute;
    top: 162px;
`

export const InvoiceTotalContainer = styled.div`
    width: 279px;
    background-color: #F9FAFE;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 8px;
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
`
 
export const TotalPrice = styled.p`
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
`

export const StatusWord = styled.h4`
    margin-left: 24px;
    font-weight: 500;
    color: #7E88C3;
`

export const StatusName = styled.span`
    text-transform: capitalize;
    margin-right: 48px;
    color: #FF8F00;
`