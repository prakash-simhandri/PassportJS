module.exports = (App) =>{
    App.get("/login", (req, res) => {
        console.log('this is home page!', req.app.get('user'))
        res.send(req.app.get('user'))
    })
}