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
                  <img  id="menuicon" src="imagine/menuicon.png" alt="menuicon" />
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
            <img id="reklamimg"src="imagine/flowers.png" alt="reklam img"/>
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
              <a href="#"><img src="/imagine/deliverytruck.png"/></a>
              <a href="#"><img src="/imagine/pricedeliver.png"/></a>
              <a href="#"><img id="lastimg"src="/imagine/chatdelivery.png"/></a>
            </div>
          </div>
        </section>
        <Section2/>
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
            </div>
          )
        })}
      </div>
    </section>
  )
}