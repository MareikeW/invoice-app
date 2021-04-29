import React from "react";
import {Description, SenderAddress} from "./invoice-full-view-styles";

const IdDescriptionSenderAddress = ({id, description, street, city, postCode, country}) => {
    return (
        <div>
            <h4>#{id}</h4>
            <Description>{description}</Description>
            <br />
            <SenderAddress>
                <p>{street}</p>
                <p>{city}</p>
                <p>{postCode}</p>
                <p>{country}</p> 
            </SenderAddress> 
        </div>
    )
}

export default IdDescriptionSenderAddress;