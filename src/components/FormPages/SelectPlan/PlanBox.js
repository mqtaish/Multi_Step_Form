import React from 'react'
export const PlanBox = ({ planName, planPrice, id, handleFormSelectPlan, isSelected, handleSelectBox, isSwitched, selectedBox }) => {
    const planImage = `./images/icon-${planName.toLowerCase()}.svg`;
    const boxClassName = isSelected ? 'plan-box clicked' : 'plan-box' + (selectedBox == null && id === 1 ? ' clicked' : '');
    return (
        <div className={boxClassName} onClick={() => {
            const planPeriod = (isSwitched) ? "/yr" : "/mo";
            handleFormSelectPlan({ planName, planPrice, planPeriod, switchState: isSwitched })
            handleSelectBox(id);
        }}>
            <img className='plan-icon' src={planImage} alt={planName}></img>
            <div className='plan-texts'>
                <h3 className='plan-name'>{planName}</h3>
                <h5 className='plan-price'>${planPrice} {(isSwitched) ? "/yr" : "/mo"} </h5>
                <h5 className='plan-discount'> {(isSwitched) ? "2 months free " : ""}</h5>
            </div>
        </div>
    )
}
