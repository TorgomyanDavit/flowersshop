import { useSelector } from "react-redux"

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
export default Section3