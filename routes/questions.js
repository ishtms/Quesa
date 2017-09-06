var express = require('express');
var router = express.Router();
var QuestionSchema = require('../src/Schemas/QuestionSchemas');

/* GET home page. */
router.get('/getdata/question', function(req, res, next) {
  console.log("Working")
  res.json({
      working: "working"
  })
});
router.get('/getdata/answer', function(req, res, next) {
    
  });

  router.post('/submitdata/question', function(req, res, next) {
    
  });

  router.post('/submitdata/answer', function(req, res, next) {
      console.log("WOKRING")
        QuestionSchema.create({
            question: {
                ques: req.body.ques,
                askBy: req.body.name,
                askTime: new Date().toISOString(),
                course: req.body.course
            },
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

module.exports = router;
  