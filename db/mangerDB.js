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
    find_subject(){
        var sql = "select * from tbl_exam_subject";
        return pool.execute(sql);
    },
    find_epartment(){
        var sql = "select * from tbl_exam_epartment";
        return pool.execute(sql);
    },
    saveSubject(aa){
        /*
            发过来的数据格式
            "subject.topic.id":A_topic_add_Cont,
            "subject.subjectType.id":A_type_add_Cont,
            "subject.subjectLevel.id":A_level_add_Cont,
            "subject.stem":stem,
            "subject.answer":answer,
            // "subject.analysis":analysis,
            "choiceContent":choiceContents,
            "choiceCorrect":correctChoices

        */
        var queryInfo = aa;
        var dep = queryInfo['subject.department.id'];
        var topic = queryInfo['subject.topic.id'];
        var types = queryInfo['subject.subjectType.id'];
        var level = queryInfo['subject.subjectLevel.id'];
        var answer = queryInfo['subject.answer'];
        var stem = queryInfo['subject.stem'];
        console.log(queryInfo);
        var sql = "insert into tbl_exam_subject(answer,checkState,stem,department_id,subjectLevel_id,subjectType_id,topic_id) values('"
        +answer+"','未审核','"+stem+"',"+dep+","+level+","+types+",,"+topic+")";
        return pool.execute(sql);
    },
    querySubject(aa){
        // department_id   subjectLevel_id  subjectType_id  topic_id
        var queryInfo = JSON.parse(aa);
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


