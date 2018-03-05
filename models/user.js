// var client = require('../database');
var data = require('../pool');
var uid = require('../utils/uuid'); //用于生成id
function User(user) {
    this.name = user.name;
    this.password = user.password;
}
var tableName = "user";
// data = client.getDbCon();
module.exports = User;


User.showTop = function showTop(req,res,next){
    var sql = "select * from mb_jd no_primary_key order by Add_time desc limit 10";
    console.log(sql);
    console.log(req.session.user);
    data.query(sql,function(err,results){
        if(err){
            console.log(err)
        }else{
        res.contentType('json');
        
        return res.send(JSON.stringify(results));
        }
    })
}
User.changePlatform = function changePlatform(req, res, next) {
    var platform_selected = req.body.platform_selected;
    var platform = "";
   
    if(platform_selected == 'JDMB'){
          platform = "mb_jd";
     }else if(platform_selected == 'JDPC'){
           platform = "pc_jd";
     }else if(platform_selected == 'YHDMB'){
           platform = "mb_yhd";
     }else if(platform_selected == 'YHDPC'){
           platform = "pc_yhd";
     }else if(platform_selected == 'TMALLSUPER'){
           platform = "pc_tmallsuper";
     }else if(platform_selected == 'TMALL'){
          platform = "pc_tmall";
     }else if(platform_selected == 'SUNINGMB'){
         platform = "mb_suning";
     }else if(platform_selected == 'SUNINGPC'){
         platform = "pc_suning";
     }

    var sql = "select Url_img,Add_time,AdItem_title,Url_item,id,Brand,Category from " + platform + " no_primary_key order by Add_time desc limit 10";
    console.log(sql);
     data.query(sql, function(err, results) {
        if (err) {
            console.log(err)
        } else {
            res.contentType('json');

            return res.send(JSON.stringify(results));
        }
    })

}
User.scrollLoad = function scrollLoad(req, res, next) {
    var platform_selected = req.body.platform_selected;
    var platform = "";
    var number = req.body.number;
    var number1 = number * 10;
    var number2 = 10;
    if(platform_selected == 'JDMB'){
          platform = "mb_jd";
     }else if(platform_selected == 'JDPC'){
           platform = "pc_jd";
     }else if(platform_selected == 'YHDMB'){
           platform = "mb_yhd";
     }else if(platform_selected == 'YHDPC'){
           platform = "pc_yhd";
     }else if(platform_selected == 'TMALLSUPER'){
           platform = "pc_tmallsuper";
     }else if(platform_selected == 'TMALL'){
          platform = "pc_tmall";
     }else if(platform_selected == 'SUNINGMB'){
         platform = "mb_suning";
     }else if(platform_selected == 'SUNINGPC'){
         platform = "pc_suning";
     }

    var sql = "select Url_img,Add_time,AdItem_title,Url_item,id,Brand,Category  from " + platform + " no_primary_key order by Add_time desc limit "+ number1 + "," + number2;
    console.log(sql);
    data.query(sql, function(err, results) {
        if (err) {
            console.log(err)
        } else {
            res.contentType('json');

            return res.send(JSON.stringify(results));
        }
    })
}


User.updateBrand = function updateBrand(req, res, next) {
    var pid = req.body.id;
    var Brand = req.body.Brand;
    var platform_selected = req.body.platform_selected;
    var platform = "";
    if(platform_selected == 'JDMB'){
        platform = "mb_jd";
    }else if(platform_selected == 'JDPC'){
        platform = "pc_jd";
    }else if(platform_selected == 'YHDMB'){
        platform = "mb_yhd";
    }else if(platform_selected == 'YHDPC'){
        platform = "pc_yhd";
    }else if(platform_selected == 'TMALLSUPER'){
        platform = "pc_tmallsuper";
    }else if(platform_selected == 'TMALL'){
        platform = "pc_tmall";
    }else if(platform_selected == 'SUNINGMB'){
        platform = "mb_suning";
    }else if(platform_selected == 'SUNINGPC'){
        platform = "pc_suning";
    }
    var sql = "update "+platform+" set Brand = '"+Brand+"' where id='" + pid + "'";
    console.log(sql);
    data.query(sql, function(err, results) {
        if (err) {
            console.log(err)
        } else {
            var result = {"update":"success"}
            res.contentType('json');
            return res.send(JSON.stringify(result));
        }
    })
}

User.updateCategory = function updateCategory(req, res, next) {
    var pid = req.body.id;
    var Category = req.body.Category;
    var platform_selected = req.body.platform_selected;
    var platform = "";
    if(platform_selected == 'JDMB'){
        platform = "mb_jd";
    }else if(platform_selected == 'JDPC'){
        platform = "pc_jd";
    }else if(platform_selected == 'YHDMB'){
        platform = "mb_yhd";
    }else if(platform_selected == 'YHDPC'){
        platform = "pc_yhd";
    }else if(platform_selected == 'TMALLSUPER'){
        platform = "pc_tmallsuper";
    }else if(platform_selected == 'TMALL'){
        platform = "pc_tmall";
    }else if(platform_selected == 'SUNINGMB'){
        platform = "mb_suning";
    }else if(platform_selected == 'SUNINGPC'){
        platform = "pc_suning";
    }
    var sql = "update "+platform+" set Category = '"+Category+"' where id='" + pid + "'";
    console.log(sql);
    data.query(sql, function(err, results) {
        if (err) {
            console.log(err)
        } else {
            var result = {"update":"success"}
            res.contentType('json');
            return res.send(JSON.stringify(result));
        }
    })
}

User.custom = function custom(req, res, next) {
    var selectCategory = req.body.selectCategory;
    var selectBrand = req.body.selectBrand;
    var date = req.body.date;
    var platform_selected = req.body.platform_selected;
    var platform = "";
    
    if(platform_selected == 'JDMB'){
        platform = "mb_jd";
    }else if(platform_selected == 'JDPC'){
        platform = "pc_jd";
    }else if(platform_selected == 'YHDMB'){
        platform = "mb_yhd";
    }else if(platform_selected == 'YHDPC'){
        platform = "pc_yhd";
    }else if(platform_selected == 'TMALLSUPER'){
        platform = "pc_tmallsuper";
    }else if(platform_selected == 'TMALL'){
        platform = "pc_tmall";
    }else if(platform_selected == 'SUNINGMB'){
        platform = "mb_suning";
    }else if(platform_selected == 'SUNINGPC'){
        platform = "pc_suning";
    }

    var year = date.split(".")[0];
    var month = date.split(".")[1];
    var day = date.split(".")[2];
    var sql=""
    console.log(year + " " +month + " " +day + " ")
    if(year !=undefined&& month != undefined && day != undefined){
        sql = "select Url_img,Add_time,AdItem_title,Url_item,id,Brand,Category from "+platform+" where Category like '%"+selectCategory+"%' and Brand like '%"+selectBrand+"%' and year(Add_time) = " + year + " and month(Add_time) = " + month + " and day(Add_time) = " + day
        console.log(sql)
    }else if(year !=undefined&& month != undefined && day == undefined){
        sql = "select Url_img,Add_time,AdItem_title,Url_item,id,Brand,Category from "+platform+" where Category like '%"+selectCategory+"%' and Brand like '%"+selectBrand+"%' and year(Add_time) = " + year + " and month(Add_time) = " + month 
        console.log(sql)
    }else if(year !=undefined&& month == undefined && day == undefined){
        sql = "select Url_img,Add_time,AdItem_title,Url_item,id,Brand,Category from "+platform+" where Category like '%"+selectCategory+"%' and Brand like '%"+selectBrand+"%' and year(Add_time) = " + year 
        console.log(sql)
    }
     data.query(sql, function(err, results) {
        if (err) {
            console.log(err)
        } else {
            res.contentType('json');

            return res.send(JSON.stringify(results));
        }
    })
}

User.custom_CB = function custom_CB(req, res, next) {
    var selectCategory = req.body.selectCategory;
    var selectBrand = req.body.selectBrand;
    var date = req.body.date;
    var platform_selected = req.body.platform_selected;
    var platform = "";
    
    if(platform_selected == 'JDMB'){
        platform = "mb_jd";
    }else if(platform_selected == 'JDPC'){
        platform = "pc_jd";
    }else if(platform_selected == 'YHDMB'){
        platform = "mb_yhd";
    }else if(platform_selected == 'YHDPC'){
        platform = "pc_yhd";
    }else if(platform_selected == 'TMALLSUPER'){
        platform = "pc_tmallsuper";
    }else if(platform_selected == 'TMALL'){
        platform = "pc_tmall";
    }else if(platform_selected == 'SUNINGMB'){
        platform = "mb_suning";
    }else if(platform_selected == 'SUNINGPC'){
        platform = "pc_suning";
    }

  
    var sql = "select Url_img,Add_time,AdItem_title,Url_item,id,Brand,Category from "+platform+" where Category like '%"+selectCategory+"%' and Brand like '%"+selectBrand+"%'";
    console.log(sql);
     data.query(sql, function(err, results) {
        if (err) {
            console.log(err)
        } else {
            res.contentType('json');

            return res.send(JSON.stringify(results));
        }
    })
}

User.custom_CT = function custom_CT(req, res, next) {
    var selectCategory = req.body.selectCategory;
    var date = req.body.date;
    var platform_selected = req.body.platform_selected;
    var platform = "";
    
    if(platform_selected == 'JDMB'){
        platform = "mb_jd";
    }else if(platform_selected == 'JDPC'){
        platform = "pc_jd";
    }else if(platform_selected == 'YHDMB'){
        platform = "mb_yhd";
    }else if(platform_selected == 'YHDPC'){
        platform = "pc_yhd";
    }else if(platform_selected == 'TMALLSUPER'){
        platform = "pc_tmallsuper";
    }else if(platform_selected == 'TMALL'){
        platform = "pc_tmall";
    }else if(platform_selected == 'SUNINGMB'){
        platform = "mb_suning";
    }else if(platform_selected == 'SUNINGPC'){
        platform = "pc_suning";
    }

    var year = date.split(".")[0];
    var month = date.split(".")[1];
    var day = date.split(".")[2];
    var sql=""
    console.log(year + " " +month + " " +day + " ")
    if(year !=undefined&& month != undefined && day != undefined){
        sql = "select Url_img,Add_time,AdItem_title,Url_item,id,Brand,Category from "+platform+" where Category like '%"+selectCategory+"%' and year(Add_time) = " + year + " and month(Add_time) = " + month + " and day(Add_time) = " + day
        console.log(sql)
    }else if(year !=undefined&& month != undefined && day == undefined){
        sql = "select Url_img,Add_time,AdItem_title,Url_item,id,Brand,Category from "+platform+" where Category like '%"+selectCategory+"%' and year(Add_time) = " + year + " and month(Add_time) = " + month 
        console.log(sql)
    }else if(year !=undefined&& month == undefined && day == undefined){
        sql = "select Url_img,Add_time,AdItem_title,Url_item,id,Brand,Category from "+platform+" where Category like '%"+selectCategory+"%' and year(Add_time) = " + year 
        console.log(sql)
    }
     data.query(sql, function(err, results) {
        if (err) {
            console.log(err)
        } else {
            res.contentType('json');

            return res.send(JSON.stringify(results));
        }
    })
}

User.custom_BT = function custom_BT(req, res, next) {
    var selectBrand = req.body.selectBrand;
    var date = req.body.date;
    var platform_selected = req.body.platform_selected;
    var platform = "";
    
    if(platform_selected == 'JDMB'){
        platform = "mb_jd";
    }else if(platform_selected == 'JDPC'){
        platform = "pc_jd";
    }else if(platform_selected == 'YHDMB'){
        platform = "mb_yhd";
    }else if(platform_selected == 'YHDPC'){
        platform = "pc_yhd";
    }else if(platform_selected == 'TMALLSUPER'){
        platform = "pc_tmallsuper";
    }else if(platform_selected == 'TMALL'){
        platform = "pc_tmall";
    }else if(platform_selected == 'SUNINGMB'){
        platform = "mb_suning";
    }else if(platform_selected == 'SUNINGPC'){
        platform = "pc_suning";
    }

    var year = date.split(".")[0];
    var month = date.split(".")[1];
    var day = date.split(".")[2];
    var sql=""
    console.log(year + " " +month + " " +day + " ")
    if(year !=undefined&& month != undefined && day != undefined){
        sql = "select Url_img,Add_time,AdItem_title,Url_item,id,Brand,Category from "+platform+" where Brand like '%"+selectBrand+"%' and year(Add_time) = " + year + " and month(Add_time) = " + month + " and day(Add_time) = " + day
        console.log(sql)
    }else if(year !=undefined&& month != undefined && day == undefined){
        sql = "select Url_img,Add_time,AdItem_title,Url_item,id,Brand,Category from "+platform+" where Brand like '%"+selectBrand+"%' and year(Add_time) = " + year + " and month(Add_time) = " + month 
        console.log(sql)
    }else if(year !=undefined&& month == undefined && day == undefined){
        sql = "select Url_img,Add_time,AdItem_title,Url_item,id,Brand,Category from "+platform+" where Brand like '%"+selectBrand+"%' and year(Add_time) = " + year 
        console.log(sql)
    }
     data.query(sql, function(err, results) {
        if (err) {
            console.log(err)
        } else {
            res.contentType('json');

            return res.send(JSON.stringify(results));
        }
    })
}


User.custom_Brand = function custom_Brand(req, res, next) {
    var selectBrand = req.body.selectBrand;
    var date = req.body.date;
    var platform_selected = req.body.platform_selected;
    var platform = "";
    
    if(platform_selected == 'JDMB'){
        platform = "mb_jd";
    }else if(platform_selected == 'JDPC'){
        platform = "pc_jd";
    }else if(platform_selected == 'YHDMB'){
        platform = "mb_yhd";
    }else if(platform_selected == 'YHDPC'){
        platform = "pc_yhd";
    }else if(platform_selected == 'TMALLSUPER'){
        platform = "pc_tmallsuper";
    }else if(platform_selected == 'TMALL'){
        platform = "pc_tmall";
    }else if(platform_selected == 'SUNINGMB'){
        platform = "mb_suning";
    }else if(platform_selected == 'SUNINGPC'){
        platform = "pc_suning";
    }

  
    var sql = "select Url_img,Add_time,AdItem_title,Url_item,id,Brand,Category from "+platform+" where Brand like '%"+selectBrand+"%'";
    console.log(sql);
     data.query(sql, function(err, results) {
        if (err) {
            console.log(err)
        } else {
            res.contentType('json');

            return res.send(JSON.stringify(results));
        }
    })
}


User.custom_Category = function custom_Category(req, res, next) {
    var selectCategory = req.body.selectCategory;
    var date = req.body.date;
    var platform_selected = req.body.platform_selected;
    var platform = "";
    
    if(platform_selected == 'JDMB'){
        platform = "mb_jd";
    }else if(platform_selected == 'JDPC'){
        platform = "pc_jd";
    }else if(platform_selected == 'YHDMB'){
        platform = "mb_yhd";
    }else if(platform_selected == 'YHDPC'){
        platform = "pc_yhd";
    }else if(platform_selected == 'TMALLSUPER'){
        platform = "pc_tmallsuper";
    }else if(platform_selected == 'TMALL'){
        platform = "pc_tmall";
    }else if(platform_selected == 'SUNINGMB'){
        platform = "mb_suning";
    }else if(platform_selected == 'SUNINGPC'){
        platform = "pc_suning";
    }

  
    var sql = "select Url_img,Add_time,AdItem_title,Url_item,id,Brand,Category from "+platform+" where Category like '%"+selectCategory+"%'";
    console.log(sql);
     data.query(sql, function(err, results) {
        if (err) {
            console.log(err)
        } else {
            res.contentType('json');

            return res.send(JSON.stringify(results));
        }
    })
}


User.custom_Date = function custom_Date(req, res, next) {
    var date = req.body.date;
    var platform_selected = req.body.platform_selected;
    var platform = "";
    
    if(platform_selected == 'JDMB'){
        platform = "mb_jd";
    }else if(platform_selected == 'JDPC'){
        platform = "pc_jd";
    }else if(platform_selected == 'YHDMB'){
        platform = "mb_yhd";
    }else if(platform_selected == 'YHDPC'){
        platform = "pc_yhd";
    }else if(platform_selected == 'TMALLSUPER'){
        platform = "pc_tmallsuper";
    }else if(platform_selected == 'TMALL'){
        platform = "pc_tmall";
    }else if(platform_selected == 'SUNINGMB'){
        platform = "mb_suning";
    }else if(platform_selected == 'SUNINGPC'){
        platform = "pc_suning";
    }

    var year = date.split(".")[0];
    var month = date.split(".")[1];
    var day = date.split(".")[2];
    var sql=""
    console.log(year + " " +month + " " +day + " ")
    if(year !=undefined&& month != undefined && day != undefined){
        sql = "select Url_img,Add_time,AdItem_title,Url_item,id,Brand,Category from "+platform+" where year(Add_time) = " + year + " and month(Add_time) = " + month + " and day(Add_time) = " + day
        console.log(sql)
    }else if(year !=undefined&& month != undefined && day == undefined){
        sql = "select Url_img,Add_time,AdItem_title,Url_item,id,Brand,Category from "+platform+" where year(Add_time) = " + year + " and month(Add_time) = " + month 
        console.log(sql)
    }else if(year !=undefined&& month == undefined && day == undefined){
        sql = "select Url_img,Add_time,AdItem_title,Url_item,id,Brand,Category from "+platform+" where year(Add_time) = " + year 
        console.log(sql)
    }
     data.query(sql, function(err, results) {
        if (err) {
            console.log(err)
        } else {
            res.contentType('json');
            console.log(results)
            return res.send(JSON.stringify(results));
        }
    })
}


User.showLast = function showLast(req, res, next) {
    var platform = req.body.platform;
    var sql = "";
     if(platform == "JD"){
       sql = "select * from mb_jd_screenshot no_primary_key order by id desc limit 10";
     }else if(platform == "TB"){
       sql = "select * from mb_tb_screenshot no_primary_key order by id desc limit 10";
     }else if(platform == "YHD"){
       sql = "select * from mb_yhd_screenshot no_primary_key order by id desc limit 10";
     }else if(platform == "SN"){
       sql = "select * from mb_sn_screenshot no_primary_key order by id desc limit 10";
     }else if(platform == "MIA"){
       sql = "select * from mb_mia_screenshot no_primary_key order by id desc limit 10";
     }
    console.log(sql);
    data.query(sql, function(err, results) {
        if (err) {
            console.log(err)
        } else {
            res.contentType('json');
            return res.send(JSON.stringify(results));
        }
    })
}


User.showprev = function showprev(req, res, next) {
    var number = req.body.number;
    var platform = req.body.platform;
    var sql = "";
    var number1 = number * 10;
    var number2 = 10;
    if(platform == "JD"){
        sql = "select * from mb_jd_screenshot no_primary_key order by id desc limit " + number1 + "," + number2;
     }else if(platform == "TB"){
       sql = "select * from mb_tb_screenshot no_primary_key order by id desc limit " + number1 + "," + number2;
     }else if(platform == "YHD"){
        sql = "select * from mb_yhd_screenshot no_primary_key order by id desc limit " + number1 + "," + number2;
     }else if(platform == "SN"){
        sql = "select * from mb_sn_screenshot no_primary_key order by id desc limit " + number1 + "," + number2;
     }else if(platform == "MIA"){
        sql = "select * from mb_mia_screenshot no_primary_key order by id desc limit " + number1 + "," + number2;
     }

    console.log(sql);
   
    data.query(sql, function(err, results) {
        if (err) {
            console.log(err)
        } else {
            res.contentType('json');
            return res.send(JSON.stringify(results));
        }
    })
}


User.shownext = function shownext(req, res, next) {
    var platform = req.body.platform;
    var sql = "";
    var number = req.body.number;
    var number1 = number * 10;
    var number2 = 10;
    if(platform == "JD"){
        sql = "select * from mb_jd_screenshot no_primary_key order by id desc limit " + number1 + "," + number2;
     }else if(platform == "TB"){
       sql = "select * from mb_tb_screenshot no_primary_key order by id desc limit " + number1 + "," + number2;
     }else if(platform == "YHD"){
        sql = "select * from mb_yhd_screenshot no_primary_key order by id desc limit " + number1 + "," + number2;
     }else if(platform == "SN"){
        sql = "select * from mb_sn_screenshot no_primary_key order by id desc limit " + number1 + "," + number2;
     }else if(platform == "MIA"){
        sql = "select * from mb_mia_screenshot no_primary_key order by id desc limit " + number1 + "," + number2;
     }


    console.log(sql);
    data.query(sql, function(err, results) {
        if (err) {
            console.log(err)
        } else {
            res.contentType('json');
            return res.send(JSON.stringify(results));
        }
    })
}


User.choose = function choose(req, res, next) {
    var platform = req.body.platform;
    var sql = "";
    var choose = req.body.choose;
    if(platform =="JD"){
     sql = "select * from mb_jd_screenshot no_primary_key WHERE name=" + choose;
    } 
     if(platform == "JD"){
       sql = "select * from mb_jd_screenshot no_primary_key WHERE name=" + choose;
     }else if(platform == "TB"){
        sql = "select * from mb_tb_screenshot no_primary_key WHERE name=" + choose;
     }else if(platform == "YHD"){
        sql = "select * from mb_yhd_screenshot no_primary_key WHERE name=" + choose;
     }else if(platform == "SN"){
        sql = "select * from mb_sn_screenshot no_primary_key WHERE name=" + choose;
     }else if(platform == "MIA"){
        sql = "select * from mb_mia_screenshot no_primary_key WHERE name=" + choose;
     }
    console.log(sql);
    data.query(sql, function(err, results) {
        if (err) {
            console.log(err)
        } else {
            res.contentType('json');
            return res.send(JSON.stringify(results));
        }
    })
}
