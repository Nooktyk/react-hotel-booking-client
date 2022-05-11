import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80" 
            alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Lorem, ipsum.</h1>
            <span className="siDistance">500m from capital</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </span>
            <span className="siFeatures">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$120</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
    </div>
  )
};

export default SearchItem;