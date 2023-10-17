import React, { useState, useEffect } from "react";
import { MainHeader } from "./MainHeader";
import { PersonalInfo } from "../FormPages/PersonalInfo/PersonalInfo";
import { SelectPlan } from "../FormPages/SelectPlan/SelectPlan";
import { AddOns } from "../FormPages/AddOns/AddOns";
import { Summary } from "../FormPages/Summary/Summary";
import { Button } from "../Buttons/Button";
import { ThanksMessage } from "../FormPages/ThanksMessage/ThanksMessage";
import { AdminDashboard } from './AdminDashboard'

export const UserForms = ({ pageNumber, setPageNumber, isLogged, setIsLogged, setAdmin }) => {

    const [usersData, setUsersData] = useState([]);

    const storageKey = 'usersData';
    useEffect(() => {
        const storedData = localStorage.getItem(storageKey);
        if (storedData) {
            setUsersData(JSON.parse(storedData));
        }
    }, []);

    const handleSetUsersData = () => {
        const userData = { ...formData, ...plan, addOns: [...addOns] };
        const updatedData = [...usersData, userData];
        setUsersData(updatedData);
        localStorage.setItem(storageKey, JSON.stringify(updatedData));
    }

    const [formData, setFormData] = useState({ name: "", email: "", phone: "", });
    const [plan, setPlan] = useState({ planName: "Arcade", planPeriod: "/mo", switchState: false, planPrice: 9 });
    const [addOns, setAddOns] = useState([]);

    const handleFormUserData = (fieldName, value) => setFormData({ ...formData, [fieldName]: value });
    const handleFormSelectPlan = (planObj) => {
        setPlan(planObj);
    };

    const handleFormSelectAddOns = ({ title, price }, addOnsValue) => {

        if (addOnsValue) {
            setAddOns([...addOns, { title, price }]);
        } else {
            const newFilteredArray = addOns.filter((item) => {
                return item.title !== title;
            });
            setAddOns(newFilteredArray);
        }
    };

    const [checkboxState, setCheckboxState] = useState({});

    const handleCheckboxChange = (id, isChecked) => setCheckboxState({ ...checkboxState, [id]: isChecked });

    const [isSwitched, setIsSwitched] = useState(false);

    const handleSwitchedToggle = (isClicked) => {
        setIsSwitched(isClicked);
    };

    const formTitles = [
        {
            headTitle: "Personal info",
            headParagraph:
                "please provide your name, email address, and phone number.",
        },
        {
            headTitle: "Select your plan",
            headParagraph: "You have the option of monthly or yearly billing.",
        },
        {
            headTitle: "Pick add-ons",
            headParagraph: "Add-ons help enhance your gaming experience.",
        },
        {
            headTitle: "Finishing up",
            headParagraph: "Double check everything looks OK before confirming.",
        },
    ];

    const pageDisplay = function (pageNumber) {
        switch (pageNumber) {
            case 1:
                return (
                    <PersonalInfo
                        handleFormUserData={handleFormUserData}
                        formData={formData}
                        errors={errors}
                    />
                );
            case 2:
                return (
                    <SelectPlan
                        isSwitched={isSwitched}
                        setIsSwitched={setIsSwitched}
                        handleSwitchedToggle={handleSwitchedToggle}
                        plan={plan}
                        handleFormSelectPlan={handleFormSelectPlan}
                    />
                );
            case 3:
                return (
                    <AddOns
                        isSwitched={isSwitched}
                        setIsSwitched={setIsSwitched}
                        checkboxState={checkboxState}
                        handleCheckboxChange={handleCheckboxChange}
                        handleFormSelectAddOns={handleFormSelectAddOns}
                    />
                );
            case 4:
                return (
                    <Summary
                        plan={plan}
                        addOns={addOns}
                        isSwitched={isSwitched}
                    />
                );

            case 5:
                return <ThanksMessage
                    setPageNumber={setPageNumber}
                />;

            default:
                return null;
        }
    };


    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const validationErrors = {};

        const isEmpty = (value) => !value || !value.trim();

        if (isEmpty(formData.name)) {
            validationErrors.name = "Name is required";
        }

        if (isEmpty(formData.email)) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email is not valid";
        }

        if (isEmpty(formData.phone)) {
            validationErrors.phone = "Phone is required";
        }

        setErrors(validationErrors);

        return Object.keys(validationErrors).length === 0;
    };


    const resetAllStates = (isReset) => {
        if (isReset) {
            setFormData({})
            setPlan({ planName: "Arcade", planPeriod: "/mo", switchState: false, planPrice: 9 })
            setAdmin({})
            setAddOns([])
            setCheckboxState({})
            setIsSwitched(false)
            setErrors({})
        }
    }

    return (
        <div className={(!isLogged) ? "right-side-forms" : ""} >
            <form className="user-form">

                {isLogged && <AdminDashboard
                    usersData={usersData}
                    setIsLogged={setIsLogged}
                    setPageNumber={setPageNumber}
                    resetAllStates={resetAllStates}
                ></AdminDashboard>}

                {!isLogged && pageNumber !== 5 && (
                    <MainHeader
                        headTitle={formTitles[pageNumber - 1].headTitle}
                        headParagraph={formTitles[pageNumber - 1].headParagraph}
                    ></MainHeader>
                )}

                {!isLogged && pageDisplay(pageNumber)}

                <div
                    className={(pageNumber === 5) ? "next-back-button display-none" : "next-back-button"}
                >
                    {!isLogged && (pageNumber !== 5) && (
                        <Button
                            setPageNumber={setPageNumber}
                            pageNumber={pageNumber}
                            classNameBtn={(pageNumber === 1) ? "back-step-btn hidden" : "back-step-btn"}
                            nameBtn={"Go Back"}
                        ></Button>
                    )}

                    {!isLogged && (pageNumber !== 5) && <Button
                        setPageNumber={setPageNumber}
                        pageNumber={pageNumber}
                        classNameBtn="next-step-btn "
                        nameBtn={pageNumber !== 4 ? "Next Step" : "Confirm"}
                        handleSetUsersData={handleSetUsersData}
                        validateForm={validateForm}
                        resetAllStates={resetAllStates}
                    ></Button>}

                </div>
            </form >
        </div >
    );
};
