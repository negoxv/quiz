<<<<<<< HEAD
//get /quizes/question
exports.question=function(req, res){
	res.render('quizes/question', {pregunta: 'capital de Italia'});
=======
//get /quizes/questio
var models = require('../models/models.js');
exports.load=function(req, res, next, quizId){
	models.Quiz.find(quizId).then(function(quiz){
		if(quiz){
			req.quiz = quiz;
			next();
		}else{next(new Error('No existe quizId=' + quizId));}

}).catch(function(error){next(error);});
};
exports.show=function(req, res){
	models.Quiz.find(req.params.quizId).then(function(quiz){
	res.render('quizes/show', { quiz: quiz});
}
)
>>>>>>> origin/master
};
exports.answer=function(req, res){
	if(req.query.respuesta === 'Roma'){
		res.render('quizes/answer', {respuesta: 'Correcto'});
	}else{
		res.render('quizes/answer', {respuesta: 'Incorrecto'});
	}
};
exports.creditos=function(req, res){
	res.render('author', {creditos: 'creditos de marta y luis'});
};
