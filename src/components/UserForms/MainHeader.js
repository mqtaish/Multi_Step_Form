import React from 'react'

export const MainHeader = ({ headTitle, headParagraph }) => {
    return (
        <div className='main-header'>
            <h1 className='main-title'>{headTitle}</h1>
            <p>{headParagraph}</p>
        </div>
    )
}
