import React from 'react'

export default function Card({data}) {

    const { name, link } = data;

    return (
        <div className="project-block mb-3">
            <h2 className="card-title">
                <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
            </h2>
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">Visit Website »</a>
            <hr />
        </div>
    )
}
