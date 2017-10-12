let pool = require('./pool');

module.exports ={
    subject_type(){
        var sql = "select * from tbl_exam_subjecttype";
        return pool.execute(sql);
    },
    subject_level(){
        var sql = "select * from tbl_exam_subjectlevel";
        return pool.execute(sql);
    },
    find_topic(){
        var sql = "select * from tbl_exam_topic";
        return pool.execute(sql);
    },
    find_epartment(){
        var sql = "select * from tbl_exam_epartment";
        return pool.execute(sql);
    },
    querySubject(aa){
        // department_id   subjectLevel_id  subjectType_id  topic_id
        var queryInfo = aa;
        console.log(queryInfo);
        var dep = queryInfo['subject.department.id'];
        var topic = queryInfo['subject.topic.id'];
        var types = queryInfo['subject.subjectType.id'];
        var level = queryInfo['subject.subjectLevel.id'];
        var sql = "select * from tbl_exam_subject where department_id="
        +dep+" and subjectLevel_id="
        +level+" and subjectType_id="
        +types+" and topic_id="+topic+"";
        return pool.execute(sql);  
    },
    updateSubject(id,checkState){
        var sql = "update tbl_exam_subject set checkState='"+checkState+"' where id="+id;
        console.log(sql,'hello');
        return pool.execute(sql);
    },
    deleteSubject(id,checkState){
        var sql = "delete tbl_exam_subject where id="+id;
    },
    updateSubDef(id,checkState){
        var sql = "update tbl_exam_subject set checkState='"+checkState+"' where id="+id;
        console.log(sql);
        return pool.execute(sql);
    },
    queryChoice(aa){
        var id = aa;
        var sql = "select * from tbl_exam_choice where subject_id ="+id;
        console.log(sql);
        return pool.execute(sql);
    }
}
// module.exports = router;


