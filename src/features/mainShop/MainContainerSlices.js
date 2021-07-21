import { createSlice } from "@reduxjs/toolkit";
import rosesinbox from "./imagine/img1.png"
import mixflowersbucket from "./imagine/img2.png"
import compoziciafrompoppy from "./imagine/img3.png"
import linecon from "./imagine/Line.png"
import callpng from "./imagine/call.png"
import vector from "./imagine/Vector.png"


const initialState = {
    shopstate:{ 
        assortment:[],
        roses:[
            {id:Math.random(),name:"Roses in box",img:rosesinbox},
            {id:Math.random(),name:"Roses in box",img:rosesinbox},
            {id:Math.random(),name:"Roses in box",img:rosesinbox},
            {id:Math.random(),name:"Roses in box",img:rosesinbox},
        ],
        bucket:[
            {id:Math.random(),name:"mix flowers bucket",img:mixflowersbucket},
            {id:Math.random(),name:"mix flowers bucket",img:mixflowersbucket},
            {id:Math.random(),name:"mix flowers bucket",img:mixflowersbucket},
            {id:Math.random(),name:"mix flowers bucket",img:mixflowersbucket},
        ],
        poppy:[
            {id:Math.random(),name:"compozicia from poppy",img:compoziciafrompoppy},
            {id:Math.random(),name:"compozicia from poppy",img:compoziciafrompoppy},
            {id:Math.random(),name:"compozicia from poppy",img:compoziciafrompoppy},
            {id:Math.random(),name:"compozicia from poppy",img:compoziciafrompoppy}
        ]
    },
    navbar:[
        {id:Math.random(),name:"Ծաղկեփնջեր",content:["roses","bucket","poppy"]},
        {id:Math.random(),name:"Կոմպոզիցիաներ",content:["Զամբյուղներով","կավից ամանով","Տուփերիով"]},
        {id:Math.random(),name:"ՍգոԾաղիկներ",content:["ծաղկեպսակներ","Հոգեհանգստյան զամբյուղներ"]}
    ],
    navbarlist:[],
    footer:[
        ["Categories","Wedding","Love & Romance","Gift","Greethings","simphaty"],
        ["Information","Delivery information","privacy police","Gitoms & conditionft","Why us"],
        ["My account","order history","wishists","News Letter"],
        ["Contact us",[vector,"G,hasratyan street "],[callpng ,"094717021"]]
    ],
    forslideline:{
        line:[{id:1,img:linecon},{id:2,img:linecon},{id:3,img:linecon},{id:4,img:linecon},{id:5,img:linecon}]
    }
}

const mainshopSlice = createSlice({
    name:"mainShop",
    initialState:initialState,

    reducers: {
        filterlistbar:(state,action) => {
            state.navbar.forEach((val) => {
                if(val.id === action.payload.id) {
                    state.navbarlist.splice(0,state.navbarlist.length)
                    state.navbarlist.push(val)
                }
                return state
            })
        },

        assortmentedFlowers:(state,action) => {
            state.shopstate.assortment.splice(0,state.shopstate.assortment.length)
            if(Object.keys(state.shopstate).filter((val) => val === action.payload.name).toString() === action.payload.name) {
               state.shopstate.assortment.push(state.shopstate[action.payload.name])
            }
        },

        clearSection2:(state,action) => {
            state.shopstate.assortment.splice(0,state.shopstate.assortment.length)
        }

    }
})
export const {filterlistbar,assortmentedFlowers,clearSection2} = mainshopSlice.actions
export default mainshopSlice.reducer

