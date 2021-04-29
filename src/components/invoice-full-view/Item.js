import React from "react";
import {StyledItem} from "./invoice-full-view-styles";
import { toCurrencyFormat } from "../../utils/utils.js";

const Item = ({key, name, quantity, price, total}) => {
    return (
        <StyledItem>
            <div className="itemMobileVersion">
                <h4>{name}</h4>
                <p>{quantity} x £ {toCurrencyFormat(price)}</p>
                <p className="itemTotal">£ {toCurrencyFormat(total)}</p>
            </div>
            <div className="itemTabletVersion">
                <h4>{name}</h4>
                <p className="itemQuantity">{quantity}</p>
                <p className="itemPrice">£ {toCurrencyFormat(price)}</p>
                <p className="itemTotal">£ {toCurrencyFormat(total)}</p>
            </div>
        </StyledItem>
    )
}

export default Item;