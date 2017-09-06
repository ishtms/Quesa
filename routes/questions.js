var express = require('express');
var router = express.Router();
var QuestionSchema = require('../src/Schemas/QuestionSchemas');

/* GET home page. */
router.get('/getdata/question', function(req, res, next) {
    QuestionSchema.find({course: req.query.course},(err,response)=>{
        if(err){
            res.json({
                confirmation: 'fail'
            })
        }else{
            res.json({
                result: response
            })
        }
    })
});
router.get('/getdata/answer', function(req, res, next) {
    
  });

  router.post('/submitdata/question', function(req, res, next) {
    console.log("WOKRING")
    QuestionSchema.create({
        question: {
            ques: req.body.ques,
            askTime: new Date().toISOString(),
            description: req.body.description
        },
        user: req.body.user,
        course: req.body.course,
        answers: []
    },(err, response)=>{
        if(err){
            res.json({
                confirmation: false
            });
        }else{
            res.json({
                confirmation: true,
                result: response 
            })
        }
    })
  });

  router.post('/submitdata/answer', function(req, res, next) {
      
  });

module.exports = router;
  