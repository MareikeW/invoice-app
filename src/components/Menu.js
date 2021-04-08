import React from "react";

function Menu() {
    return (
        <div>
            <div>
                <h2>Invoices</h2>
                <p>... invoices</p>
            </div>

            <label for="filter">Filter</label>
            <select id="filter" name="filter">
                <option value="draft">Draft</option>
                <option value="pending">Pending</option>
                <option value="paid">Paid</option>
            </select>
            

            <button><span>+</span> New</button>
        </div>
    )
}

export default Menu;