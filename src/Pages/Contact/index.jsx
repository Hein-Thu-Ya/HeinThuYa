import Nav from "../../components/Nav/nav";
import { Init } from "./hook";

const Contact = () => {

    const { data, loading, error } = Init()

    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>Error...</h1>

    return (
        <>
            <Nav />
            <div className="container contact">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card shadow p-3 rounded mb-5">
                            <div className="card-body">
                                <div className="row mt-5 text-center">
                                    {
                                        data && (<>
                                                <div className="col-md-4 mb-3">
                                                    <i className="far fa-envelope" />
                                                    <h5>PHONE</h5>
                                                    <p className="primary-text-color">{data.contact.phone}</p>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <i className="fas fa-phone-alt" />
                                                    <h5>EMAIL</h5>
                                                    <p className="primary-text-color">{data.contact.email}</p>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <i className="fas fa-map-marker-alt" />
                                                    <h5>LOCATION</h5>
                                                    <p className="primary-text-color">{data.contact.address}</p>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Contact