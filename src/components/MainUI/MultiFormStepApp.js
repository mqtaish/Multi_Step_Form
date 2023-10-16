import React, { useState } from 'react'
import './MultiFormStepStyle.css'
import '../FormPages/PersonalInfo/PersonalInfoStyle.css'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import { UserForms } from '../UserForms/UserForms'


export const MultiFormStepApp = () => {

    const [pageNumber, setPageNumber] = useState(1);
    const [isLogged, setIsLogged] = useState(false);
    const [admin, setAdmin] = useState({ user: "", password: "" });

    const handleIsLoggedAdmin = (isLogged) => setIsLogged(isLogged);

    return (
        <div className='container'>
            <div className='wrapper'>
                {(!isLogged) && <ProgressBar
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    setAdmin={setAdmin}
                    admin={admin}
                    setIsLogged={setIsLogged}
                ></ProgressBar>}

                {<UserForms
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    isLogged={isLogged}
                    setIsLogged={setIsLogged}
                    setAdmin={setAdmin}
                ></UserForms>}
            </div>
        </div>
    )
}
