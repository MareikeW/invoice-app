import styled from "styled-components";

export const LinkContainer = styled.div`
    height: 134px;
    border-radius: 8px;
    min-width: 327px;
    position: relative;
    margin-bottom: 16px;
    margin-left: 24px;
    margin-right: 24px;

    .arrowRight {
        display: none;
    }

    @media (min-width: 700px) {
        width: 672px;
        margin: 0 auto 16px auto;
        height: 72px;

        .arrowRight {
            display: block;
            position: absolute;
            right: 24px;
            top: 32px;
        }
    }

    @media (min-width: 1024px) {
        width: 730px;
    }
`

export const Container = styled(LinkContainer)` 
    background-color: #fff;
`

export const Id = styled.h4`
    position: absolute;
    top: 24px;
    left: 24px;

    @media (min-width: 700px) {
        top: 29px;
    }

    @media (min-width: 1024px) {
        left: 32px;
    }
`

export const Name = styled.p`
    color: #858BB2;
    position: absolute;
    top: 24px;
    right: 24px;

    @media (min-width: 700px) {
        top: 29px;
        left: 254px;
    }

    @media (min-width: 1024px) {
        left: 286px;
    }
`

export const DateInfo = styled.p`
    color: #858BB2;
    position: absolute;
    top: 63px;
    left: 24px;

    @media (min-width: 700px) {
        top: 29px;
        left: 111px;
    }

    @media (min-width: 1024px) {
        left: 135px;
    }
`

export const SumContainer = styled.div`
    position: absolute;
    bottom: 24px;
    left: 24px;
    
    @media (min-width: 700px) {
        top: 29px;
        left: 381px;
        width: 100px;
    }

    @media (min-width: 1024px) {
        left: 447px;
    }
`

export const Sum = styled.h3`
    @media (min-width: 700px) {
        text-align: right;
    } 
`

export const Status = styled.h4`
    color: ${({status}) => {
        if (status === "paid") return "#33D69F";
        else if (status === "pending") return "#FF8F00";
        else if (status === "draft") return "#373B53"
        else return "#000000";
    }};
    position: absolute;
    top: 67px;
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

    @media (min-width: 700px) {
        top: 16px;
        left: 520px;
        right: 48px;
    }

    @media (min-width: 1024px) {
        left: 578px;
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