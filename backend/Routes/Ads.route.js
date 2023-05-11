const express = require("express");
const {AdsModel} = require("../Model/Ads.model")
const adsRouter = express.Router();

adsRouter.get("/",async(req,res)=>{
    try {
        // let keyword = req.query.q
        // let {keyword} = req.body
        // console.log(keyword)
       let ads = await AdsModel.aggregate([
          {
            $search: {
              text: {
                path: ['description','headline'],
                query: "the"
              }
            }
          }
        ])
        res.send({data:ads})
    } catch (err) {
        res.status(400).send({msg:"unable to get data",err:err.message})
    }
})

module.exports = {
    adsRouter
}

// [
//     {
//         companyName:"Salesforce",
//         companyId:3,
//         primaryText:"The world’s leading CRM is ready to help you simplify the business part of your small business.",
//         headline:"Salesforce for Small Business",
//         description:"Providing customer relationship management (CRM) software and applications focused on sales, customer service, marketing automation, e-commerce, analytics, and application development.",
//         CTA:"Sign Up",
//         imageUrl:"https://i.ibb.co/DRSbr1h/salesforce.jpg"
//     },
//     {
//         companyName:"Levi's",
//         companyId:1,
//         primaryText:"We like where you’re going with this.",
//         headline:"Relaxed Fit Men's Jeans",
//         description:"Levi Strauss & Co. is one of the world's largest brand-name apparel companies and a global leader in jeanswear.",
//         CTA:"Shop Now",
//         imageUrl:"https://i.ibb.co/SNH5Y5K/levis.jpg"
//     },
//     {
//         companyName:"Cotopaxi",
//         companyId:6,
//         primaryText:"Teva x Cotopaxi is back! Celebrate eternal summer with limited-edition Teva x Cotopaxi Original Universal sandals in bold new colors.",
//         headline:"Made With Recycled Plastic",
//         description:"Shop Back to School",
//         CTA:"Shop Now",
//         imageUrl:"https://i.ibb.co/5FgMPMd/cotopaxi.jpg"
//     },
//     {
//         companyName:"Netflix",
//         companyId:7,
//         primaryText:"The Emmy-nominated Netflix comedy special from the late Norm Macdonald is his last gift to the world of comedy he helped shape.",
//         headline:"Norm Macdonald's Nothing Special gives one last dose of the late comic",
//         description:"subscription-based streaming service that allows our members to watch TV shows and movies on an internet-connected device",
//         CTA:"Learn More",
//         imageUrl:"https://i.ibb.co/pdT67yY/norm-Macdonald.jpg"
//     },
//     {
//         companyName:"Valentino",
//         companyId:9,
//         primaryText:"Visit Valentino.com, discover the new products and shop now!",
//         headline:"Valentino Hexagonal Metal Frame With Crystal Studs",
//         description:"Italian luxury fashion house",
//         CTA:"Shop Now",
//         imageUrl:"https://i.ibb.co/tp0Ts7J/valentino.jpg"
//     },
//     {
//         companyName:"Purple",
//         companyId:11,
//         primaryText:"Say ‘goodnight’ to sleeping hot 🔥 with Purple products—designed to dissipate heat.",
//         headline:"Cooler Summers Start Here",
//         description:"Shop Purple products, designed to help you sleep cool.",
//         CTA:"Shop Now",
//         imageUrl:"https://i.ibb.co/gMrHHbx/purple-display-ads.jpg"
//     },
//     {
//         companyName:"Curology",
//         companyId:10,
//         primaryText:"Dark spots. Breakouts. Rosacea. Dull skin. Fine lines. Our formulas are custom-mixed for YOUR skin concerns.",
//         headline:"Personalized skincare for dark spots, acne, and more.",
//         description:"Personalized skincare for dark spots, acne, and more. Results may vary.",
//         CTA:"Order Now",
//         imageUrl:"https://i.ibb.co/N10kNsB/curology.jpg"
//     }
// ]