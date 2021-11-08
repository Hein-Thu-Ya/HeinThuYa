import './index.css'
import { Init } from './hook';
import Profile from './profile'

const Welcome = () => {

    const { data, loading, error } = Init();

    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
                <div className="col-10">
                    {
                        loading && <h1>Loading...</h1>
                    }
                    {
                        error && <h1>Something Went Wrong!</h1>
                    }
                    {
                        data && <Profile data={data} />
                    }
                </div>
            </div>
      </div>
  
    )
}

export default Welcome