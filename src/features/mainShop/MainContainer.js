/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import iconSearch from "./imagine/bx_bx-search.png"
import iconshoping from "./imagine/fa-solid_shopping-bag.png"
import iconfacebook from "./imagine/iconfb1.png"
import icontwitter from "./imagine/icontwitter.png"
import iconinstagram from "./imagine/iconinstagram.png"
import downup from "./imagine/Group.png"
import deliverytruck from "./imagine/deliverytruck.png"
import pricedeliver from "./imagine/pricedeliver.png"
import chatdelivery from "./imagine/chatdelivery.png"
import flowers from "./imagine/flowers.png"
import menuicon from "./imagine/menuicon.png"
import {useSelector} from "react-redux"
import {useState} from "react"









function Header() {
  const [arr,setArrey] = useState(array("Lilit-Flower"))
  const [TurnOnInputSearch,setTurnOnInputSearch] = useState(true)

  const [value,setValue] = useState("")
  const state = useSelector((state) => {
    return state.mainShop
  })

  function array(Shopname) {
    return  Shopname.split("").map((letter) => {
      return <span key={Math.random()} style={{color:"rgb("+ Math.round(Math.random() * 255) +","+ Math.round(Math.random() * 255) +","+ Math.round(Math.random() * 255) +")"}}>{letter}</span>
    })
  }



  
  return (
    <header id="shop-header">
      <nav id="nav">
        <a href="http://localhost:3000/#" id="Logo" onClick={(e) => {
          setArrey(array("Lilit-Flower"))
        }}>{arr}</a >

        <ul>
          {/* li */}
          {state.navbar.map((val) => {
            return <li id="headerli" key={val.id}><a href="#">{val.name}</a></li>
          })}
          
          <form id="form" onSubmit={(e) => {
            e.preventDefault()
          }}>
            <input id={TurnOnInputSearch ? "inputSearch" : "TurnOnInputSearch"} 
                placeholder="Search" 
                value={value} 
                onChange={(e) => {
                  console.log(value)
                  setValue(e.target.value)
            }}/>
            

          </form>
          <img src={iconSearch} width="30px" height="30px" onClick={(e) => {
              setTurnOnInputSearch(!TurnOnInputSearch)
            }}/>
          <img src={iconshoping} width="30px" height="30px"/>
          <img id="menuicon"src={menuicon} alt="menuicon"/>
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
            {state.forslideline.line.map((val) => {
              return  <img key={val.id} className="line" src={val.img}/>
            })}
          </div>
      </div>
  </header>
  )
}
export {Header}


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
    return state.mainShop.shopstate
  })
 
  return (
    <section id="section2">
      <span id="titleSection2">Daily Offer</span>
        {state.map((val) => {
          return (
            <div key={val.id} id="flowerContent">
              <img id="flower" src={val.img}/>
              <p id="cum">
                <span>$ 59.99</span>
                <span>$29.99</span> 
              </p>
              <button id="addToCard">Add to card</button>
            </div>
          )
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


