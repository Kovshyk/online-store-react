import React, {useState} from "react";
import Header from "./components/header";
import Search from "./components/search";
import CardComponent from "./components/card";
import Components from "./components/filters-category";
import Brands from "./components/filters-brand";
import Pagination from "./components/pagination";
function App() {
    const [counter, setCounter] = useState(undefined)
    function addToCart(){
        if (counter===undefined){
        setCounter(1)
        }else{
            setCounter(counter+1)
        }
    }

  return (
      <div className="main-page">
          <div className="main">
              <Header counter={counter} />
              <div className="content">
                  <div>

                      <div className="left-panel" data-element="filters-panel">
                          <div className="filters-panel shadows">
                              <div  className="filters-panel-content">
                                  <div className="price-slider filters">
                                      <h2>Price</h2>
                                  </div>
                                  <Components/>

                                  <hr></hr>
                                 <Brands/>
                                  <hr></hr>
                                  <div className="rating-slider">
                                      <h2>Rating</h2>
                                  </div>
                              </div>
                          </div>
                          <button>CLEAR ALL FILTERS</button>

                      </div>
                  </div>
                  <div className="products" >
                    <Search/>
                    <CardComponent onClick={addToCart}/>
                      <div id="pagination">
                          <Pagination activePage={0} totalPages={12}/>
                      </div>

                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
