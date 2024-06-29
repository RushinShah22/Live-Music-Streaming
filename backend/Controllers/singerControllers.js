const User = require("./../Models/UserModel");

module.exports.getStreams = async (req, res) => {
    try{
        const streamData = await User.aggregate([
            {
                $match: {_id: req.body._id}
            },
            {
                $project: {
                    _id: 1,
                    streams: 1
                }
            }
        ]);

        res.status(200).json({
            status: "success",
            streams: streamData
        })
    }catch(err){
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}