const express = require("express");
const {AdsModel} = require("../Model/Ads.model")
const adsRouter = express.Router();

adsRouter.post("/",async(req,res)=>{
    try {
        await AdsModel.insertMany([
            {
                companyName:"Salesforce",
                companyId:3,
                primaryText:"The world’s leading CRM is ready to help you simplify the business part of your small business.",
                headline:"Salesforce for Small Business",
                description:"fgh",
                CTA:"Sign Up",
                imageUrl:"fgh"
            },
            {
                companyName:"Levi's",
                companyId:1,
                primaryText:"We like where you’re going with this.",
                headline:"Relaxed Fit Men's Jeans",
                description:"fgh",
                CTA:"Shop Now",
                imageUrl:"fgh"
            },
            {
                companyName:"Cotopaxi",
                companyId:6,
                primaryText:"Teva x Cotopaxi is back! Celebrate eternal summer with limited-edition Teva x Cotopaxi Original Universal sandals in bold new colors.",
                headline:"Made With Recycled Plastic",
                description:"Shop Back to School",
                CTA:"Shop Now",
                imageUrl:"fgh"
            },
            {
                companyName:"Netflix",
                companyId:7,
                primaryText:"The Emmy-nominated Netflix comedy special from the late Norm Macdonald is his last gift to the world of comedy he helped shape.",
                headline:"Norm Macdonald's Nothing Special gives one last dose of the late comic",
                description:"",
                CTA:"Learn More",
                imageUrl:"fgh"
            },
            {
                companyName:"Valentino",
                companyId:9,
                primaryText:"Visit Valentino.com, discover the new products and shop now!",
                headline:"Valentino Hexagonal Metal Frame With Crystal Studs",
                description:"",
                CTA:"Shop Now",
                imageUrl:"fgh"
            },
            {
                companyName:"Purple",
                companyId:11,
                primaryText:"Say ‘goodnight’ to sleeping hot 🔥 with Purple products—designed to dissipate heat.",
                headline:"Cooler Summers Start Here",
                description:"Shop Purple products, designed to help you sleep cool.",
                CTA:"Shop Now",
                imageUrl:"fgh"
            },
            {
                companyName:"Curology",
                companyId:10,
                primaryText:"Dark spots. Breakouts. Rosacea. Dull skin. Fine lines. Our formulas are custom-mixed for YOUR skin concerns.",
                headline:"Personalized skincare for dark spots, acne, and more.",
                description:"Personalized skincare for dark spots, acne, and more. Results may vary.",
                CTA:"Order Now",
                imageUrl:"fgh"
            }
        ])
        res.status(200).send({msg:"A new note has been added",data:newAd});
    } catch (err) {
        res.status(400).send({msg:"unable to post",err:err.message})
    }
})

module.exports = {
    adsRouter
}