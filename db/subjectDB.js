let pool = require("./pool");

module.exports = {
    find_paper(keys){
        var sql = "select * from tbl_exam_subject where id="+keys;
        excute(sql);
    },
    pass_checked(id){
        var sql = "update from tbl_exam_subject where id="+id;
        excute(sql);

    },
    unpass_check_paper(id){
        var sql = "";
        excute(sql);
    },
}

