import React from 'react'
import './index.css'

export default function BackButton() {
    return (
        <span className="back-button" onClick={() => window.history.back()}><i className="fas fa-arrow-left"></i></span>
    )
}
