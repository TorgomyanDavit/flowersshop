import { createSlice } from "@reduxjs/toolkit";
import rosesinbox from "./imagine/img1.png"
import mixflowersbucket from "./imagine/img2.png"
import compoziciafrompoppy from "./imagine/img3.png"




const initialState = {
    shopstate:[
        {id:Math.random(),name:"Roses in box",img:rosesinbox},
        {id:Math.random(),name:"mix flowers bucket",img:mixflowersbucket},
        {id:Math.random(),name:"compozicia from poppy",img:compoziciafrompoppy},
        {id:Math.random(),name:"Roses in box",img:rosesinbox},
        {id:Math.random(),name:"mix flowers bucket",img:mixflowersbucket},
        {id:Math.random(),name:"compozicia from poppy",img:compoziciafrompoppy}
    ],
    navbar:[
        {id:Math.random(),name:"HOME"},
        {id:Math.random(),name:"PRODUCT"},
        {id:Math.random(),name:"SERVICE"},
        {id:Math.random(),name:"CONTACT US"},
    ]
}

const mainshopSlice = createSlice({
    name:"mainShop",
    initialState:initialState,

    reducers: {

    }
})

export default mainshopSlice.reducer

