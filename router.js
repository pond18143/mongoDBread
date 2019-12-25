module.exports = function(app){
    const handle = require('./handle');
    var data;

    app.post('/read', async function test(req, res) {
        id = req.body.id;
        data = await handle.DBread(id)
        console.log(data)
        res.status(200).json(data)
    })

}
