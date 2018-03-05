var mysql=require("mysql");

var pool = mysql.createPool({
  host: '10.143.103.222',
  user: 'dand',
  password: '',
  port: 3306,
  database: 'spyder'
});


setInterval(function(){
    pool.query('SELECT 1');
}, 18000000);

module.exports = pool
