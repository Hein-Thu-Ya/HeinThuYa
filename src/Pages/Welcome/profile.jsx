import React from 'react'
import { Link } from "react-router-dom"
import ReactMarkDown from 'react-markdown'
import profile from '../../images/HeinThuYa.jpg'

export default function Profile({data}) {

    const {title, description, image} = data.welcome

    return (
        <div className="row">
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-3">
                <img src={profile} alt="" className="my-image" />
            </div>
            <div className="col-sm-12 col-md-7 col-lg-8 col-xl-9">
                <h1 className="name-text">{title}</h1>
                <ReactMarkDown>
                    {description}
                </ReactMarkDown>
                <div className="links mt-3">
                    <Link to="/blog">Blog Posts</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </div>
    )
}
