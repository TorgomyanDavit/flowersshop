import { useSelector } from "react-redux"

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
  export default Footer