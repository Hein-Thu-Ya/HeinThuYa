import Nav from "../../components/Nav/nav";
import Card from "./card";
import { useQuery } from "@apollo/client";
import { ALLPROJECTS } from "../../utils/query";
import './index.css'

const Project = () => {

    let { data, loading, error } = useQuery(ALLPROJECTS)

    return (
        <>
            <Nav />
            <div className="container projects">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  {
                    loading && <h2>Loading...</h2>
                  }
                  {
                    error && <h2>Something Went Wrong!</h2>
                  }
                  {
                    data && data.projects.map(e => 
                      <Card data={e} key={e.id} />
                    ) 
                  }
                </div>
              </div>
            </div>
        </>
    )
}

export default Project