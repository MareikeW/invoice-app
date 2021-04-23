import styled from "styled-components";

export const Container = styled.div`
    height: 134px;
    background-color: #fff;
    border-radius: 8px;
    max-width: 327px;
    position: relative;
    margin-bottom: 16px;
    margin-left: 24px;
    margin-right: 24px;
`

export const Id = styled.h4`
    position: absolute;
    top: 24px;
    left: 24px;
`

export const Name = styled.p`
    color: #858BB2;
    position: absolute;
    top: 24px;
    right: 24px;
`

export const DateInfo = styled.p`
    color: #858BB2;
    position: absolute;
    top: 63px;
    left: 24px;
`

export const Sum = styled.h3`
    position: absolute;
    bottom: 24px;
    left: 24px;
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