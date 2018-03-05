/*
 * GET home page.
 */
//用于生成口令的散列值
var crypto = require('crypto');
var User = require('../models/user');
// var Post = require('../models/post');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.redirect('index.html')
    });
    
    app.get('/jdmb1', function(req, res, next) {

        User.showTop(req, res, next);
    })
    app.post('/platform',function(req,res,next){
        User.changePlatform(req,res,next)
    })
    
    app.post('/scrollLoad',function(req,res,next){
        User.scrollLoad(req,res,next)
    })
    app.post('/updateBrand',function(req,res,next){
        User.updateBrand(req,res,next)
    })
    app.post('/updateCategory',function(req,res,next){
        User.updateCategory(req,res,next)
    })
    app.post('/custom',function(req,res,next){
        User.custom(req,res,next)
    })
    app.post('/custom_CB',function(req,res,next){
        User.custom_CB(req,res,next)
    })
    app.post('/custom_CT',function(req,res,next){
        User.custom_CT(req,res,next)
    })
    app.post('/custom_BT',function(req,res,next){
        User.custom_BT(req,res,next)
    })
    app.post('/custom_Brand',function(req,res,next){
        User.custom_Brand(req,res,next)
    })
    app.post('/custom_Category',function(req,res,next){
        User.custom_Category(req,res,next)
    })
    app.post('/custom_Date',function(req,res,next){
        User.custom_Date(req,res,next)
    })

    app.post('/screen',function(req,res,next){
        User.showLast(req,res,next);
    })

    app.post('/screen_prev',function(req,res,next){
        User.showprev(req,res,next);
    })

    app.post('/screen_next',function(req,res,next){
        User.shownext(req,res,next);
    })

    app.post('/choose',function(req,res,next){
        User.choose(req,res,next);
    })



}
