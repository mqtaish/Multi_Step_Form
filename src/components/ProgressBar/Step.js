import React from 'react'

export const Step = ({ number, stepPageNumber, stepTitle, pageNumber }) => {

    const isActive = (number === pageNumber) ? "step-number active" : "step-number"
    return (
        <div className='step'>
            <div className={isActive}  > {number}</div>
            <div className='step-titles'>
                <h3 className='step-page-number'>{stepPageNumber}</h3>
                <h5>{stepTitle}</h5>
            </div>
        </div >
    )
}
