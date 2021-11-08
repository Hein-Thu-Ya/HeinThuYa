import React from 'react'
import Nav from '../../components/Nav/nav'
import BackButton from '../../components/BackButton'
import { Init } from './hook'
import ReactMarkDown from 'react-markdown'
import moment from 'moment'

export default function BlogDetail() {

    const {data, loading, error} = Init()

    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>Error...</h1>

    return (
        <>
            <Nav />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card shadow-sm mb-3 p-1">
                            <div className="card-body">
                                <BackButton />
                                <h3 className="card-title mb-1">{data.article.title}</h3>
                                <p className="text-theme">{moment(data.article.created_at).format("MMMM-DD-YYYY")}{" "}</p>
                                <hr />
                                <ReactMarkDown>
                                    {data.article.description}
                                </ReactMarkDown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </>
    )
}
