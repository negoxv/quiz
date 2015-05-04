var express = require('express');
var router = express.Router();
var quizController =require('../controllers/quiz_controller');
router.get('/',function(res,req){
	res.render('index', {title: 'Quiz'});
});

router.param('quizId', quizController.load);
/* GET home page. */
router.get('/quizes',          quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);
module.exports = router;
