async function test (req, res){
    try{
        res.send({
            status: 200,
            message: "Api is working"
        })
        console.log("api Test message");
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    test
};