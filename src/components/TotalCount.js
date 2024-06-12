import React, { useContext } from "react";
import { CountContext } from "./CountContext"; // Adjust the import according to your file structure

function TotalCount() {
    const { state } = useContext(CountContext);

    const totalCount = Object.values(state.items).reduce((sum, count) => sum + count, 0);

    return (
        <div>
            <h2>Total Count: {totalCount}</h2>
        </div>
    );
}

export default TotalCount;
