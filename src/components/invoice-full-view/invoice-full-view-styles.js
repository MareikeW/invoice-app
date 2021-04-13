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
    left: 187px;
    top: 31px;
`

export const SentTo = styled.div`
    position: absolute;
    top: 162px;
`

export const InvoiceTotalContainer = styled.div`
    padding-left: 24px;
    padding-top: 40px;
`
 
export const TotalPrice = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: -0.42px;
    text-align: right;
    padding-right: 24px;
`