import React from 'react'
import { useState } from 'react'
import { UserFieldInput } from './UserFieldInput'

export const PersonalInfo = ({ handleFormUserData, formData, errors }) => {

    return (
        <div className='form-inputs'>
            <UserFieldInput
                name="name"
                handleFormUserData={handleFormUserData}
                className="name"
                labetText="name"
                inputType="text"
                formDataValue={formData.name}
                placeholder="e.g. Stephen King"
                errors={errors}
            >
            </UserFieldInput>

            <UserFieldInput
                name="email"
                handleFormUserData={handleFormUserData}
                className="email"
                labetText="Email"
                inputType="text"
                formDataValue={formData.email}
                placeholder="e.g. stephenking@lorem.com"
                errors={errors}

            >
            </UserFieldInput>

            <UserFieldInput
                name="phone"
                handleFormUserData={handleFormUserData}
                className="phone"
                labetText="Phone Number"
                formDataValue={formData.phone}
                inputType="tel"
                placeholder="e.g. +1 234 567 890"
                errors={errors}
            >
            </UserFieldInput>

        </div >
    )
}
