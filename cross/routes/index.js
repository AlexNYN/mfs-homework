var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*router.get('/jsonp', function(req, res, next) {
  setTimeout(()=>{
      res.jsonp({text:"hello"});
  },1000*5)
});*/

/*router.post('/json', function(req, res, next) {
    //允许所有域名访问www.a.com
    //res.header({"Access-Control-Allow-Origin":"*"});

    //只允许www.b.com访问www.a.com
    res.header({"Access-Control-Allow-Origin":"http://www.b.com:3000"});
    res.json({text:"hello"})
});*/

router.post('/json', function(req, res, next) {
    res.header({"Access-Control-Allow-Origin":"*"});
    res.json({
    errno:1,
    errmsg:"用户名已经存在！"
   })
});

/*router.post('/json', function(req, res, next) {
    res.header({"Access-Control-Allow-Origin":"http://www.a.com:3000"});
    res.json({method:"delete"})
});

router.post('/json', function(req, res, next) {
    res.header({"Access-Control-Allow-Method":"*"});
    res.header({"Access-Control-Allow-Origin":"*"});
    res.json({method:"put"})
});*/

module.exports = router;
