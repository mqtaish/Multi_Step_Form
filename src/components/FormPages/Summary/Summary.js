import React from 'react'
import './Summary.css'
import { TotalCost } from './TotalCost'

export const Summary = ({ addOns, isSwitched, plan }) => {
    let TotolCostAddons = plan.planPrice;
    console.log(plan.planPrice);
    const TotalCostList = addOns.map((item, index) => {
        TotolCostAddons += ((isSwitched) ? item.price * 10 : item.price);
        return <TotalCost
            key={index}
            className="d-flex"
            serviceName={item.title}
            serviceCost={`+$` + ((isSwitched) ? item.price * 10 : item.price) + `$`}
        ></TotalCost>
    })


    return (
        <div className='summary'>
            <div className='actual-price'>
                <div className="box-info">
                    <h4>{plan.planName} {(isSwitched) ? "Yearly" : "Monthly"}</h4>
                    <h4>Change</h4>
                </div>
                <span className='actual-charge-price'> ${plan.planPrice} {plan.period}</span>
            </div>
            <div className='total-fees'>
                {TotalCostList}
            </div>

            <TotalCost
                className="total-charges"
                serviceName={(isSwitched) ? "Total per year" : "Total per month"}
                serviceCost={`+$` + TotolCostAddons + ((isSwitched) ? "/yr" : "/mo")}
            ></TotalCost>


        </div >
    )
}
