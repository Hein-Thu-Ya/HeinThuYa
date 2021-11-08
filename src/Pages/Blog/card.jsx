import React from 'react'
import Truncate from 'react-truncate';
import { useHistory } from 'react-router';
import moment from 'moment'

export default function Card({data}) {

    const {title, description, created_at} = data;

    const history = useHistory();

    return (
        <div className="card shadow-sm mb-3 p-1">
            <div className="card-body">
                <h3 className="card-title mb-1" onClick={() => history.push(`/detail/${data.id}`)}>{title}</h3>
                <p className="text-theme">{moment(created_at).format("MMMM-DD-YYYY")}{" "}</p>
                <p className="card-text">
                    <Truncate lines={3} ellipsis={<span>... </span>}>
                        {description}
                    </Truncate>
                </p>
                <button onClick={() => history.push(`/detail/${data.id}`)} className="blog-btn">Read More »</button>
            </div>
        </div>
    )
}
