const Stream = require("./../Models/StreamModel");

module.exports.createStream = async (req, res) => {
    try{
        const stream = await Stream.create(req.body);
        res.status(201).json({
            status: "success",
            stream
        })
    }catch(err){
        console.log(err);
        res.status(403).json({
            status: "fail",
            message: err.message
        })
    }
}

module.exports.deleteSteam = async (req, res) => {
    try{
        await Stream.findByIdAndDelete(req.params.id);
        res.status(203).json({
            status: "success",
            message: "stream successfully deleted."
        })
    }catch(err){
        console.log(err);
        res.status(403).json({
            status: "fail",
            message: err.message
        })
    }
}

module.exports.updateStream = async (req, res) => {
    try{
        const stream = await Stream.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true
        });
        res.status(200).json({
            status: "success",
            stream
        })
    }catch(err){
        console.log(err);
        res.status(404).json({
            status: "fail",
            message: err.message
        })
    }
}

module.exports.getStream = async (req, res) => {
    try{
        const stream = await Stream.findById(req.params.id);
        res.status(200).json({
            status: "success",
            stream
        })
        console.log(stream)
    }catch(err){
        console.log(err.message);
        res.status(404).json({
            status: "fail",
            message: err.message
        })
    }
}

module.exports.getAllStream = async (req, res) => {
    try{
        console.log("yess");
        let streams = await Stream.find();
        streams = streams || []
        res.status(200).json({
            status: "success",
            streams
        })
        console.log(streams)
    }catch(err){
        console.log(err.message);
        res.status(404).json({
            status: "fail",
            message: err.message
        })
    }

}