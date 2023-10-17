import React from "react";

export const Button = ({
    validateForm,
    classNameBtn,
    nameBtn,
    setPageNumber,
    pageNumber,
    handleSetUsersData,
    resetAllStates,

}) => {


    const handleConfirmBtn = () => {
        handleSetUsersData();
        resetAllStates(true);
    }

    return (
        <button disabled={(pageNumber === 1) && (nameBtn === "Go Back")}
            onClick={(e) => {
                e.preventDefault();

                if (nameBtn !== "Go Back" && !validateForm()) {
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
