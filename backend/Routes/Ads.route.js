const express = require("express");
const { AdsModel } = require("../Model/Ads.model");
const adsRouter = express.Router();

adsRouter.get("/", async (req, res) => {
  try {
    keyword = req.query.q;
    if (keyword != "") {
      let ads = await AdsModel.find({
        $or: [
          { companyName: { $regex: new RegExp(keyword, "i") } },
          { primaryText: { $regex: new RegExp(keyword, "i") } },
          { headline: { $regex: new RegExp(keyword, "i") } },
          { description: { $regex: new RegExp(keyword, "i") } },
        ],
      });
      res.send({ data: ads });
      
    } else {
      let ads = await AdsModel.find();
      res.send({ data: ads });
    }
  } catch (err) {
    res.status(400).send({ msg: "unable to get data", err: err.message });
  }
});

module.exports = {
  adsRouter,
};