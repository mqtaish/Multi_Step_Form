import React, { useState } from 'react'

export const AdminLogin = ({ setAdmin, setIsLogged, admin }) => {
    const [errorMessage, setErrorMessage] = useState("");
    return (
        <form className='admin-login'>
            <input onChange={(e) => {
                setAdmin({ ...admin, user: e.target.value })
            }} type="text" placeholder="Enter user" />
            <input
                onChange={(e) => {
                    setAdmin({ ...admin, password: e.target.value })
                }}
                type="password" placeholder="Enter password" />

            <span className='admin-login-error-msg'>{errorMessage}</span>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    if (admin.user === "admin" && admin.password === "admin") {
                        setIsLogged(true)
                    } else {
                        setErrorMessage("Username or Password is Incorrect")
                    }
                }}
            >Login</button>
        </form>
    )
}
