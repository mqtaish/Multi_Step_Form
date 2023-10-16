import React from "react";

export const UserFieldInput = ({
    labetText,
    inputType,
    placeholder,
    className,
    handleFormUserData,
    name,
    formDataValue,
    errors,
}) => {

    const hasError = errors[name];

    return (
        <div className="user-input" >

            <div className="main-label">
                <label className={className}>{labetText}</label>
                {hasError && <div className="error-message">{errors[name]}</div>}
            </div>


            <input className={(hasError) ? "red-border" : ""}
                type={inputType}
                placeholder={placeholder}
                required
                value={formDataValue}
                onChange={(e) => {
                    handleFormUserData(name, e.target.value);
                }}
            ></input>

        </div >
    );
};
