import React from "react";
import { CountProvider } from "./CountContext";
import Item from "./Item";
import TotalCount from "./TotalCount";

function Shop() {
    return (
        <CountProvider>
            <div className="card">
                <h1>Shop</h1>
                <Item name="Item 1" initCount={10} chargeNumber={5} />
                <Item name="Item 2" initCount={20} chargeNumber={10} />
                <Item name="Item 3" initCount={1} />
                <TotalCount />
            </div>
        </CountProvider>
    );
}

export default Shop;
