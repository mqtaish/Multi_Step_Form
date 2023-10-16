import React from "react";

export const Button = ({
    validateForm,
    classNameBtn,
    nameBtn,
    setPageNumber,
    pageNumber,
    handleSetUsersData,
    setFormData,
    setPlan,
    setAdmin,
    setAddOns,
    setCheckboxState,
}) => {

    const resetAllState = () => {
        setFormData({})
        setPlan({ planName: "Arcade", planPrice: 9 })
        setAdmin({})
        setCheckboxState({})
        setAddOns([])
    }

    const handleConfirmBtn = () => {
        handleSetUsersData();
        resetAllState();
    }

    return (
        <button disabled={(pageNumber === 1) && (nameBtn === "Go Back")}
            onClick={(e) => {
                e.preventDefault();

                if (!validateForm()) {
                    return false;
                }

                (nameBtn === "Next Step" || nameBtn === "Confirm") ? setPageNumber((curr) => curr + 1) :
                    setPageNumber((curr) => curr - 1);

                if (nameBtn === "Confirm") {
                    handleConfirmBtn();
                }

            }}
            className={classNameBtn}
        >
            {nameBtn}
        </button>
    );
};
