const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortid = require('shortid');
const ShortUrl =new Schema({
    fullUrl:{
        type:String
    },
    shortUrl:{
        type:String,

        default:shortid.generate()
    }
});

const ShortUrlModel = mongoose.model("UrlShortener",ShortUrl);
module.exports = {
    ShortUrlModel,
    create: async(body) =>{
        try{
            let url = await ShortUrlModel.create({
                fullUrl:body ? body : '',
                
            });
        if(url){
            await url.save();
        }
        
            console.log('Check Model:',url);
            return url;

        }catch(error) {
            console.log("=============Url model error================",error);
        }
    },
    fetchById: async (id) =>{
        try{
            

        }catch(error) {
            console.log("============Url Fetchin model error============",error);
        }
    }
};