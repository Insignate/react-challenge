import React from 'react'
import { useSelector } from 'react-redux'

const LoadingButton = ({buttonText, loadingText, className}) => {
    const loading = useSelector(state => state.names.loading)
    return (
        <button className={className}>{loading ? loadingText : buttonText}</button>
    )
}

export default LoadingButton;