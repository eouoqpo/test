/**
 * /exam/manager/getAllSubjectType
/exam/manager/saveSubject
/exam/manager/delSubject
/exam/manager/getAllSubjectLevel
/exam/manager/checkSubject


/exam/manager/getAllDepartmentes


/exam/manager/getDepartmentTopics


/exam/manager/getAllTopics

/exam/manager/getAllSubjects



/exam/manager/getAllStudents    /exam/manager/saveStudent

/exam/manager/saveExamPaper  /exam/manager/getExamPaperById 
/exam/manager/getAllExamPapers

 */



let express = require('express');
let route = express.Router();
let studentDB = require('../db/studentDB');
let Student = require('../model/Student')
//查询所有
route.get('/findAll',(req,resp)=>{
  studentDB.findAll().then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});