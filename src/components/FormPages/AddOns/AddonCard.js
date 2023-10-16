import React from "react";

export const AddonCard = ({
    id,
    title,
    para,
    price,
    addOns,
    handleFormSelectAddOns,
    isChecked,
    onCheckboxChange,
    isSwitched
}) => {
    const classIsCheck = (isChecked[id]) ? "is-checked-border" : "";

    return (
        <label
            className={"addon-card online-service " + classIsCheck}
            onClick={(e) => {
                handleFormSelectAddOns({ title, price }, e.target.checked);
            }}

        >
            <input type="checkbox"
                value={isChecked[id]}
                checked={isChecked[id]}
                onChange={(e) => onCheckboxChange(id, e.target.checked)}
            ></input>
            <div className="texts-card">
                <h4>{title}</h4>
                <h5>{para}</h5>
            </div>
            <span className="monthly-charge">+${(isSwitched) ? (price * 10) + `/yr` : price + `/mo`} </span>
        </label >
    );
};
