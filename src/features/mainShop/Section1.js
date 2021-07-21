import deliverytruck from "./imagine/deliverytruck.png"
import pricedeliver from "./imagine/pricedeliver.png"
import chatdelivery from "./imagine/chatdelivery.png"
import flowers from "./imagine/flowers.png"


function Section1() {
    return (
    <section id="one-section">
      <div id="child1">
        <h2>Fresh Autumn Collection</h2>
        <img id="reklamimg" src={flowers} alt="reklam img"/>
      </div>
  
      <div className="child2">
          <h2>Fresh Autumn Collection</h2>
          <p>
            This flower is the best gift to exhibit  your Love , 
            This flower is the best gift to exhibit  your Love , 
            This flower is the best gift to exhibit your Love , 
            This flower is the best gift to exhibit  your Love ,
          </p>
          <span>$10.18</span>
          <button><span>Add to card</span>Add to card</button>
      </div>
  
      <div className="child3">
        <h2>Our Services {"&"} Delivery</h2>
        <p>
          We have a deliver Services to will take 
          your compozition 
          <span>We take a guarante our flower quality</span>
        </p>
  
        <div className="icondiv">
          <img alt="deliverytruck" src={deliverytruck}/>
          <img alt="deliverytruck" src={pricedeliver}/>
          <img alt="deliverytruck" id="lastimg" src={chatdelivery}/>
        </div>
      </div>
    </section>
    )
  }
  export default Section1