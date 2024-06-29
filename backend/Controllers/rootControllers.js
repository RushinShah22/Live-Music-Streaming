const Stream = require("./../Models/StreamModel")

module.exports.getStreams = async (req, res) => {
    try{
        const streams = await Stream.find().sort("liveDate").limit(8);
        res.status(200).json({
            status: "success",
            streams
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            status: "fail",
            message: err.message
        })
    }
    
}