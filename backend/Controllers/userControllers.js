module.exports.getRecommondations = (req, res) => {
    try{

    }catch(err){
        console.log(err);
        res.status(500).json({
            status: "fail",
            message: err.message
        })
    }

}