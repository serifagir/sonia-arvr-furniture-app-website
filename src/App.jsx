import React from 'react';
import './App.scss';
import  armchair  from './assets/armchair.webp';
import  bed  from './assets/bed.webp';
import  chair  from './assets/chair.webp';
import  dinnertable  from './assets/dinnertable.webp';
import  sofa  from './assets/sofa.webp';
import  tablelamp  from './assets/tablelamp.webp';
import  tvcabinet  from './assets/tvcabinet.webp';
import  wardrobe  from './assets/wardrobe.webp';



function App() {

  return (
    <>
      <div className="heading">
        <h1>AR Furniture Catalog</h1>
      </div>
      <div className="products">
        <div className="product-cards">


          <div className="product-card">
            <div className="product-card-img"><img className="product-card-img-div" src={dinnertable}/></div>
            <div className="product-card-header">Dinner Table</div>
            <div className="product-card-subtext">4 colors available</div>
            <div className="product-card-price-button-container">
              <a href="http://localhost:5173/productid1">
                <button className="product-card-price-button-container-button" >
                  View AR
                </button>
              </a>
              
              <h1 className="product-card-price-button-container-price">1000$</h1>
            </div>
            </div>


            <div className="product-card">
            <div className="product-card-img"><img className="product-card-img-div" src={sofa}/></div>
            <div className="product-card-header">Sofa</div>
            <div className="product-card-subtext">4 colors available</div>
            <div className="product-card-price-button-container">
            <a href="http://localhost:5173/productid2">
                <button className="product-card-price-button-container-button" >
                  View AR
                </button>
              </a>
              <h1 className="product-card-price-button-container-price">1000$</h1>
            </div>
            </div>

            


            <div className="product-card">
            <div className="product-card-img"><img className="product-card-img-div" src={armchair}/></div>
            <div className="product-card-header">Armchair</div>
            <div className="product-card-subtext">4 colors available</div>
            <div className="product-card-price-button-container">
            <a href="http://localhost:5173/productid3">
                <button className="product-card-price-button-container-button" >
                  View AR
                </button>
              </a>
              <h1 className="product-card-price-button-container-price">1000$</h1>
            </div>
            </div>

           

            


            <div className="product-card">
            <div className="product-card-img"><img className="product-card-img-div" src={bed}/></div>
            <div className="product-card-header">Bed</div>
            <div className="product-card-subtext">4 colors available</div>
            <div className="product-card-price-button-container">
              <button className="product-card-price-button-container-button">
                View AR
              </button>
              <h1 className="product-card-price-button-container-price">1000$</h1>
            </div>
            </div>



            <div className="product-card">
            <div className="product-card-img"><img className="product-card-img-div" src={tvcabinet}/></div>
            <div className="product-card-header">TV Cabinet</div>
            <div className="product-card-subtext">4 colors available</div>
            <div className="product-card-price-button-container">
              <button className="product-card-price-button-container-button">
                View AR
              </button>
              <h1 className="product-card-price-button-container-price">1000$</h1>
            </div>
            </div>


            <div className="product-card">
            <div className="product-card-img"><img className="product-card-img-div" src={wardrobe}/></div>
            <div className="product-card-header">Wardrobe</div>
            <div className="product-card-subtext">4 colors available</div>
            <div className="product-card-price-button-container">
              <button className="product-card-price-button-container-button">
                View AR
              </button>
              <h1 className="product-card-price-button-container-price">1000$</h1>
            </div>
            </div>


            <div className="product-card">
            <div className="product-card-img"><img className="product-card-img-div" src={tablelamp}/></div>
            <div className="product-card-header">Table Lamp</div>
            <div className="product-card-subtext">4 colors available</div>
            <div className="product-card-price-button-container">
              <button className="product-card-price-button-container-button">
                View AR
              </button>
              <h1 className="product-card-price-button-container-price">1000$</h1>
            </div>
            </div>


            <div className="product-card">
            <div className="product-card-img"><img className="product-card-img-div" src={chair}/></div>
            <div className="product-card-header">Chair</div>
            <div className="product-card-subtext">4 colors available</div>
            <div className="product-card-price-button-container">
              <button className="product-card-price-button-container-button">
                View AR
              </button>
              <h1 className="product-card-price-button-container-price">1000$</h1>
            </div>
            </div>
          </div>
      </div>

      <div className="footer">
        <h1 className="footer-h1">SONIA ARVR </h1>
      </div>
    </>
  )
}

export default App

