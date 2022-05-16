import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

    const {data, loading, error} = useFetch(
        "hotels/countBycity?cities=bangkok,samutprakarn,puket");

  return (
    <div className="featured">
        {loading ? (
            "Loading please wait"
        ) : (
            <>
                <div className="featuredItem">
                    <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="" className="featuredImg"/>
                    <div className="featuredTitles">
                        <h1>Bangkok</h1>
                        <h2>{data[0]} properites</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="" className="featuredImg"/>
                    <div className="featuredTitles">
                        <h1>Samutprakarn</h1>
                        <h2>{data[1]} properites</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="" className="featuredImg"/>
                    <div className="featuredTitles">
                        <h1>Puket</h1>
                        <h2>{data[2]} properites</h2>
                    </div>
                </div>
            </>
            )
        }
    </div>
  )
};

export default Featured;