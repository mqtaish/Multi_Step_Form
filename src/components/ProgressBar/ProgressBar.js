import React from 'react'
import '../MainUI/MultiFormStepStyle.css'
import { Step } from './Step'
import { AdminLogin } from './AdminLogin'

export const ProgressBar = ({ pageNumber, setAdmin, admin, setIsLogged }) => {
    return (
        <div className='left-side-column'>
            <div className='steps'>
                <Step
                    pageNumber={pageNumber}
                    number={1}
                    stepPageNumber={"STEP 1"}
                    stepTitle={"YOUR INFO"}
                ></Step>

                <Step
                    pageNumber={pageNumber}
                    number={2}
                    stepPageNumber={"STEP 2"}
                    stepTitle={"SELECT INFO"}
                ></Step>

                <Step
                    pageNumber={pageNumber}
                    number={3}
                    stepPageNumber={"STEP 3"}
                    stepTitle={"ADD-ONS"}
                ></Step>

                <Step
                    pageNumber={pageNumber}
                    number={4}
                    stepPageNumber={"STEP 4"}
                    stepTitle={"SUMMARY"}
                ></Step>

                <AdminLogin
                    admin={admin}
                    setAdmin={setAdmin}
                    setIsLogged={setIsLogged}
                ></AdminLogin>

            </div>
        </div >
    )
}
