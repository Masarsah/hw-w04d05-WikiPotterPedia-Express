var express = require('express');
var router = express.Router();

var harrypotter = require('../modules/harrypotter');

// routes

router.get('/', function(request, response){
  var mustacheData = {
    studentList: harrypotter
  };

  response.render('./students/student', mustacheData);
})



router.get('/:id', function(request, response){
  var studentId = request.params.id;  
  var mustacheData = {
    student: harrypotter[studentId] 
  }
  response.render('./students/showstudent', mustacheData);
})



module.exports = router;