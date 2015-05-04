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
};
exports.answer=function(req, res){
	models.Quiz.find(reqId).then(function(quiz){
		if(req.query.respuesta === quiz.respuesta){
		res.render('quizes/answer', {quiz: quiz, respuesta: 'Correcto'});
	}else{
		res.render('quizes/answer', {quiz: quiz, respuesta: 'Incorrecto'});
	}
	})
	
};
exports.index=function(req, res){
	models.Quiz.findAll().then(function(quizes){
	res.render('quizes/index.ejs', {quizes: quizes});
}).catch(function(error){next(error);});
};

