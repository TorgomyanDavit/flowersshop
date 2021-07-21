import iconSearch from "./imagine/bx_bx-search.png"
import iconshoping from "./imagine/fa-solid_shopping-bag.png"
import iconfacebook from "./imagine/iconfb1.png"
import icontwitter from "./imagine/icontwitter.png"
import iconinstagram from "./imagine/iconinstagram.png"
import downup from "./imagine/Group.png"
import menuicon from "./imagine/menuicon.png"
import {useState} from "react"
import { useDispatch } from "react-redux"
import {filterlistbar,assortmentedFlowers,clearSection2} from "./MainContainerSlices"
import { useSelector } from "react-redux"


function Header() {
    const [TurnOnInputSearch,setTurnOnInputSearch] = useState(true)
    const [arr,setArrey] = useState(array("Lilit-Flower"))
    const [showMenubar,setshowMenubar] = useState(false)
    const [value,setValue] = useState("")
    const dispatch = useDispatch()
  
    const state = useSelector((state) => {
      return state.mainShop
    })
  
    /**Logo */
    function array(ShopLogo) {
      return  ShopLogo.split("").map((letter) => {
        return <span  key={Math.random()} style={{color:"rgb("+ Math.round(Math.random() * 255) +","+ Math.round(Math.random() * 255) +","+ Math.round(Math.random() * 255) +")"}} onClick={() => {
          dispatch(clearSection2())
        }}>{letter}</span>
      })
    }
  
    /* Menubar */
    function MenuNavbar() {
      return <div id={showMenubar ? "menuBar" : "menubarDisplaynone"}>
        {state.navbarlist.map((value) => {
          return value.content.map((val) => {
            return <p key={val.id} onClick={() => {
              dispatch(assortmentedFlowers({
                name:val
              }))
            }}>{val}</p>
          })
        })}
      </div>
    }
  
  
  
    return (
      <header id="shop-header">
        <nav id="nav" onMouseLeave={() => {
          setshowMenubar(false)
        }}>
          <a href="#shop-header" id="Logo" onClick={(e) => {
            setArrey(array("Lilit-Flower"))
          }}>{arr}</a >
  
          <ul>
            {/* li */}
            {state.navbar.map((val,i) => {
              return <li id="headerli" key={val.id} onMouseEnter={(e) => {
                setshowMenubar(true)
                dispatch(filterlistbar({
                  id:val.id
                }))
              }}><a href="#section2">{val.name} {(val === state.navbarlist[0]) ? MenuNavbar() : null}</a></li>
            })}
  
            {/* form */}
            <form id="form" onSubmit={(e) => {
              e.preventDefault()
            }}>
              <input id={TurnOnInputSearch ? "inputSearch" : "TurnOnInputSearch"} 
                  placeholder="Search" 
                  value={value} 
                  onChange={(e) => {
                    setValue(e.target.value)
              }}/>
            </form>
  
            {/* img */}
            <img alt="iconsearch" src={iconSearch} width="30px" height="30px" onClick={(e) => {
                setTurnOnInputSearch(!TurnOnInputSearch)
              }}/>
            <img alt="iconShoping" src={iconshoping} width="30px" height="30px"/>
            <img alt="menuicon" id="menuicon"src={menuicon} />
          </ul>
        </nav>
  
        <div id="centrtextdiv">
          <h2>Earth Laughs in</h2>
          <h1>FLOWER</h1>
        </div>
  
        <div id="iconsocialsitediv">
          <a href="https://www.facebook.com/" rel="noreferrer" target="_blank" ><img alt="iconfacebook" className="icon" src={iconfacebook}/></a>
          <a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><img alt="icontwitter" className="icon" src={icontwitter}/></a>
          <a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><img alt="iconinstagram" className="icon" src={iconinstagram}/></a>
        </div>
  
        <div id="linedown">
          <a href="#footer"><img alt="downup" src={downup}/></a>
            <div id="mainline">
              {state.forslideline.line.map((val) => {
                return  <img alt="line" key={val.id} className="line" src={val.img}/>
              })}
            </div>
        </div>
    </header>
    )
  }
  export default Header