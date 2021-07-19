import { createSlice } from "@reduxjs/toolkit";
import rosesinbox from "./imagine/img1.png"
import mixflowersbucket from "./imagine/img2.png"
import compoziciafrompoppy from "./imagine/img3.png"
import linecon from "./imagine/Line.png"
import callpng from "./imagine/call.png"
import vector from "./imagine/Vector.png"


const initialState = {
    shopstate:[
        {id:Math.random(),name:"Roses in box",img:rosesinbox},
        {id:Math.random(),name:"mix flowers bucket",img:mixflowersbucket},
        {id:Math.random(),name:"compozicia from poppy",img:compoziciafrompoppy},
        {id:Math.random(),name:"Roses in box",img:rosesinbox},
        {id:Math.random(),name:"mix flowers bucket",img:mixflowersbucket},
        {id:Math.random(),name:"compozicia from poppy",img:compoziciafrompoppy},
        {id:Math.random(),name:"Roses in box",img:rosesinbox},
        {id:Math.random(),name:"mix flowers bucket",img:mixflowersbucket},
        {id:Math.random(),name:"compozicia from poppy",img:compoziciafrompoppy},
        {id:Math.random(),name:"Roses in box",img:rosesinbox},
        {id:Math.random(),name:"mix flowers bucket",img:mixflowersbucket},
        {id:Math.random(),name:"compozicia from poppy",img:compoziciafrompoppy}
    ],
    navbar:[
        {id:Math.random(),name:"Ծաղկեփնջեր"},
        {id:Math.random(),name:"Կոմպոզիցիաներ"},
        {id:Math.random(),name:"Սգո Ծաղիկներ"}
    ],
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

    }
})
export default mainshopSlice.reducer

