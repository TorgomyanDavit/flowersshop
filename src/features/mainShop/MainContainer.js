/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import deliverytruck from "./imagine/deliverytruck.png"
import pricedeliver from "./imagine/pricedeliver.png"
import chatdelivery from "./imagine/chatdelivery.png"
import flowers from "./imagine/flowers.png"
import {useSelector} from "react-redux"













function Main() {
  return (
    <main id="main">
        <Section1/>
        <Section2/>
        <Section3/>
    </main>
  )
}
export {Main}

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
        <a href="#"><img src={deliverytruck}/></a>
        <a href="#"><img src={pricedeliver}/></a>
        <a href="#"><img id="lastimg" src={chatdelivery}/></a>
      </div>
    </div>
  </section>
  )
}
export {Section1}





function Section2() {
  const state = useSelector((state) => {
    return state.mainShop.shopstate.assortment
  })
  
  return (
    <section id="section2">
      <span id="titleSection2">Daily Offer</span>
        {state.map((val) => {
          return val.map((el) => {
            return (
              <div key={el.id} id="flowerContent">
                <img id="flower" src={el.img}/>
                <p id="cum">
                  <span>$ 59.99</span>
                  <span>$29.99</span> 
                </p>
                <button id="addToCard">Add to card</button>
              </div>
            )
          })
        })}
    </section>
  )
}





function Section3() {
  const state = useSelector((state) => {
    return state.mainShop
  })

  return (
    <section id="section3">
      <span>Wedding boucqets</span>
      <p>
        <span>
          Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor
          invidunt ut labore et dolore
          magna aliquya
        </span>
      </p>

      <div id="mainline">
            {state.forslideline.line.map((val) => {
              return  <img key={val.id} className="line" src={val.img}/>
            })}
      </div>
    </section>
  )
}





function Footer() {
  const state = useSelector((state) => {
    return state.mainShop.footer
  })

  return (
    <footer id="footer">
      {state.map((mainval) => {
        return <div key={Math.random()} id="footerdiv">
          {mainval.map((val) => {
            return ( typeof val === "string" ) ? <span key={Math.random()}>{val}</span> : <p key={Math.random()} id="pfooter" ><img src={val[0]}/><span>{val[1]}</span></p>
          })}
        </div>
      })}
    </footer>
  )
}
export {Footer}


