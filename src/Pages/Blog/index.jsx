import './index.css'
import Nav from "../../components/Nav/nav";
import Card from './card';
import { Init } from './hook';

const Blog = () => {

    const {data, loading, error, setTags} = Init()

    return (
        <>
            <Nav />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                    <button className="btn btn-outline-secondary btn-rounded mb-3 ml-3" onClick={() => setTags('all')}>All</button>
                    {
                      data && data.tags.map(item => 
                        <button className="btn btn-outline-secondary btn-rounded mb-3 ml-3" key={item.id} onClick={() => setTags(Number(item.id))}>#{item.name}</button>
                      )
                    }
                    {
                      loading && <h2>Loading...</h2>
                    }
                    {
                      error && <h2>Error...</h2>
                    }
                    {
                      data && data.articles.map(e =>
                          <Card data={e} key={e.id} />
                      )
                    }
                </div>
              </div>
            </div>
        </>
    )
}

export default Blog