/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import iconSearch from "./imagine/bx_bx-search.png"
import iconshoping from "./imagine/fa-solid_shopping-bag.png"
import iconfacebook from "./imagine/iconfb1.png"
import icontwitter from "./imagine/icontwitter.png"
import iconinstagram from "./imagine/iconinstagram.png"
import linecon from "./imagine/Line.png"
import downup from "./imagine/Group.png"
import deliverytruck from "./imagine/deliverytruck.png"
import pricedeliver from "./imagine/pricedeliver.png"
import chatdelivery from "./imagine/chatdelivery.png"
import flowers from "./imagine/flowers.png"
import menuicon from "./imagine/menuicon.png"
import { useSelector } from "react-redux"





function Header() {
  const state = useSelector((state) => {
    return state.mainShop.navbar
  })
  console.log(state)

  return (
          <header id="shop-header">
              <nav id="nav">
              <a href="#" id="Logo">Logo</a>
              <form id="form">
                      <input id="inputsearch" />
                      <img id="searchimg" src={iconSearch} width="25px" height="25px"/>
                      <img  id="menuicon" src={menuicon}alt="menuicon"/>
              </form>
              <ul>
                {state.map((val) => {
                  return <li key={val.id}><a href="#">{val.name}</a></li>
                })}
                  <img src={iconSearch} width="25px" height="25px"/>
                  <img src={iconshoping} width="25px" height="25px"/>
              </ul>
              </nav>
              <div id="centrtextdiv">
                <h2>Earth Laughs in</h2>
                <h1>FLOWER</h1>
              </div>
              <div id="iconsocialsitediv">
                <a  href="https://www.facebook.com/" target="_blank" ><img className="icon" src={iconfacebook}/></a>
                <a href="#"><img className="icon" src={icontwitter}/></a>
                <a href="#"><img className="icon" src={iconinstagram}/></a>
              </div>
              <div id="linedown">
                    <a href="#footer"><img src={downup}/></a>
                <div id="mainline">
                    <img className="line" src={linecon}/>
                    <img className="line" src={linecon}/>
                    <img className="line" src={linecon}/>
                    <img className="line" src={linecon}/>
                    <img className="line" src={linecon}/>
                </div>
              </div>
        </header>
  )
}
export {Header}




function Section1() {
  return (
    <main id="main">
        <section id="one-section">
          <div id="child1">
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
        <Section2/>
        <Section3/>
        <Footer/>
      </main>
  )
}
export {Section1}








function Section2() {
  const state = useSelector((state) => {
    return state.mainShop.shopstate
  })
 
  return (
    <section>
      <span id="Dailyoffer">Daily Offer</span>
      <div id="maindivbuckt">
        {state.map((val) => {
          return (
            <div key={val.id} id="bucketdiv">
              <img id="bucket" src={val.img}/>
              <p>
                <span id="cum">$ 59.99</span>
                <span id="span" >$29.99</span> 
              </p>
              <button id="addtocard">Add to card</button>
            </div>
          )
        })}
      </div>
    </section>
  )
}







function Section3() {
  return (
    <div id="section3">
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
        <img className="line" src={linecon}/>
        <img className="line" src={linecon}/>
        <img className="line" src={linecon}/>
        <img className="line" src={linecon}/>
        <img className="line" src={linecon}/>
      </div>
    </div>
  )
}


function Footer() {
  const state = useSelector((state) => {
    return state.mainShop.footer
  })
  return (
    <footer id="footer">
      {state.map((val) => {
        return <div id="footerdiv">
          {val.map((val) => {
            return <span>{val}</span>
          })}
        </div>
      })}
    </footer>
  )
}