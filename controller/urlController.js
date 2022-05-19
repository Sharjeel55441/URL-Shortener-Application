const UrlModel = require('../model/shortUrl');

exports.postUrl=async(req,res,next) =>{
    try{
    let fullUrl = req.body.fullUrl;
        console.log("Check Body:",fullUrl);
        let postUrl = await UrlModel.create(fullUrl);
        console.log('Check Controller:',postUrl);
        if(postUrl) {
            return res.status(200).json({
                message:"URL Post Successfully....",
                hasError:false,
                url:postUrl
            });
            
        }else{
            return res.status(400).json({
                message:"URL Not Creating.....",
                hasError:true
            })
        }

    }catch(error) {
        console.log("==============Url Creating Error=================",error);
    }
}