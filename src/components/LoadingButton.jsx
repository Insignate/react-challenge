import React from 'react'
import { useSelector } from 'react-redux'

/*loading button component to show in what state the application is curretly at
(eg: if it is ready to be clicked and send a message to the server
or if it is locked and waiting for a server message)
*/
const LoadingButton = ({buttonText, loadingText, className}) => {
    const loading = useSelector(state => state.names.loading)
    return (
        <button className={className}>{loading ? loadingText : buttonText}</button>
    )
}

export default LoadingButton;