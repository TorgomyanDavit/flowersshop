/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */


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


