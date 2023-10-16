import React from 'react'
import './SelectPlanStyle.css'
import '../../MainUI/MultiFormStepStyle.css'
import { PlanBox } from './PlanBox';
import { useState } from 'react';

export const planSelection = [
    {
        id: 1,
        name: "Arcade",
        pricePerMonth: 9,
        pricePerYear: 90,
    },
    {
        id: 2,
        name: "Advanced",
        pricePerMonth: 12,
        pricePerYear: 120,
    },
    {
        id: 3,
        name: "Pro",
        pricePerMonth: 15,
        pricePerYear: 150,
    },
];


export const SelectPlan = ({ plan, handleFormSelectPlan, isSwitched, setIsSwitched }) => {

    const [selectedBox, setSelectedBox] = useState(null);

    const handleSelectBox = (boxId) => {
        setSelectedBox(boxId);
    };

    const handleSwitchedToggle = function (isClicked) {
        const isYearly = !isSwitched ? "/yr" : "/mo";
        const pricePerPeriod = isSwitched ? plan.planPrice / 10 : plan.planPrice * 10;
        setIsSwitched(isClicked);
        handleFormSelectPlan({ ...plan, planPeriod: isYearly, planPrice: pricePerPeriod, switchState: isClicked });

    }

    const switchClass = isSwitched ? "switch switch--right" : "switch";

    const planSelectionLists = planSelection.map((item, index) => {

        const pricePerPeriod = (isSwitched) ? item.pricePerYear : item.pricePerMonth;

        return <PlanBox
            key={index}
            planName={item.name}
            isSwitched={isSwitched}
            planPrice={pricePerPeriod}
            handleFormSelectPlan={handleFormSelectPlan}
            isSelected={item.id === selectedBox}
            selectedBox={selectedBox}
            handleSelectBox={handleSelectBox}
            id={item.id}
        ></PlanBox>
    })

    return (
        <div className='select-plan'>
            <div className='membership-plan'>
                {planSelectionLists}
            </div>
            <div className='subscription-type'>
                <span>Monthly</span>
                <button className="billing-btn" onClick={(e) => {
                    e.preventDefault();
                    (isSwitched) ? handleSwitchedToggle(false) : handleSwitchedToggle(true);

                }}>
                    <div className={switchClass}></div>
                </button>
                <span>Yearly</span>
            </div>
        </div>
    )
}
