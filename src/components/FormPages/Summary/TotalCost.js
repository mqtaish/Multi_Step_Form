import React from "react";

export const TotalCost = ({ className, serviceName, serviceCost, planPeriod }) => {
    return (
        <div className={className}>
            <span >{serviceName}</span>
            <span className={(className === "total-charges") ? "service-cost" : ""} >{serviceCost}{planPeriod}</span>
        </div>
    );
};
