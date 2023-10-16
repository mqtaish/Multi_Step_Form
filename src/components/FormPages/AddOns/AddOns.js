import "./AddOnsStyle.css";
import { AddonCard } from "./AddonCard";

export const options = [
    {
        id: 1,
        name: "Online service",
        description: "Access to multiplayer games",
        pricePerMonth: 1,
        pricePerYear: 10,
    },
    {
        id: 2,
        name: "Larger storage",
        description: "Extra 1TB of cloud save",
        pricePerMonth: 2,
        pricePerYear: 20,
    },
    {
        id: 3,
        name: "Customizable Profile",
        description: "Custom theme on your profile",
        pricePerMonth: 2,
        pricePerYear: 20,
    },
];

export const AddOns = ({
    addOns,
    handleFormSelectAddOns,
    checkboxState,
    onCheckboxChange,
    isSwitched,
}) => {
    const optionList = options.map((option, index) => {
        return (
            <AddonCard
                key={index}
                isSwitched={isSwitched}
                id={option.id}
                addOns={addOns}
                handleFormSelectAddOns={handleFormSelectAddOns}
                title={option.name}
                para={option.description}
                price={option.pricePerMonth}
                isChecked={checkboxState}
                onCheckboxChange={onCheckboxChange}
            ></AddonCard>
        );
    });

    return <div className="addons-cards">{optionList}</div>;
};
