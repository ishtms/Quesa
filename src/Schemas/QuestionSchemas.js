var mongoose = require('mongoose');

/*
    question --- {
                ques: "Questoin",
                askedBy: "Username",
                askedTime: 'time',
                course: ''
            }
    answer - {
        user: 'name',
        answertime: '',
        question: '',
        course: '',
        answer: ''
    }

*/

let QuestionSchemas = mongoose.Schema({
    question: {type: Object, default: {}},
    answers: {type: Object, default: []}
})

module.exports = mongoose.model('QuestionSchemas', QuestionSchemas);