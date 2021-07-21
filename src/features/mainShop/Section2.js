import { useSelector } from "react-redux"

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
                  <img alt="flower" id="flower" src={el.img}/>
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
export default Section2