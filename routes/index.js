var express = require('express');
var router = express.Router();

var quizController =require('../controllers/quiz_controller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);
router.get('/author', quizController.creditos);
module.exports = router;

var quizController =require('../controllers/quiz_controller.js');
router.get('/',function(res,req){
	res.render('index', {title: 'Quiz'});
});


module.exports = router;

