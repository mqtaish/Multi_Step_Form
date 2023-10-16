import React from 'react'
import './AdminDashboard.css'
export const AdminDashboard = ({ usersData, setIsLogged, setPageNumber, setIsSwitched, setAdmin }) => {
    return (
        <div>
            <table className="user-table">
                <thead>
                    <tr>
                        <th className="table-header">Name</th>
                        <th className="table-header">Email</th>
                        <th className="table-header">Phone</th>
                        <th className="table-header">Plan Name</th>
                        <th className="table-header">Total Price</th>
                        <th className="table-header">Add-Ons</th>
                    </tr>
                </thead>
                <tbody>
                    {usersData.map((user, index) => {
                        const { switchState, name, email, phone, planName, planPrice, planPeriod, addOns } = user;
                        const total = planPrice + (addOns ? addOns.reduce((acc, addOn) => acc + (switchState ? addOn.price * 10 : addOn.price), 0) : 0);
                        console.log("plan price", planPrice);
                        console.log(planPeriod);
                        console.log(total);
                        return (
                            <tr key={index}>
                                <td className="table-data">{name}</td>
                                <td className="table-data">{email}</td>
                                <td className="table-data">{phone}</td>
                                <td className="table-data">{planName}</td>
                                <td className="table-data">
                                    {`${total} ${(switchState) ? "/yr" : "/mo"}`}
                                </td>
                                <td className="table-data">
                                    {addOns && (
                                        <ul className="addon-list">
                                            {addOns.map((addOn, addOnIndex) => {
                                                const { title } = addOn;
                                                return (
                                                    <li key={addOnIndex} className="addon-item">
                                                        {title}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <button className='admin-logout'
                onClick={(e) => {
                    e.preventDefault();
                    setIsLogged(false);
                    setPageNumber(1);
                    setAdmin({})
                    setIsSwitched(false);
                }}
            >Logout</button>
        </div>
    );
}
