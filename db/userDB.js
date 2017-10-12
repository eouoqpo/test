let pool = require('./pool');
/*
module.exports = {
    //通过关键字查询
    // query(keys){
    //   var sql = "select * from tbl_exam_user";
    //   return pool.execute(sql);
    // },
    findById(id){
        var sql = "select * from tbl_exam_user where id="+id;
        return pool.execute(sql);
    },
    findAll(){
      var sql = "select * from tbl_exam_usert";
      return pool.execute(sql);
    },
    batchDelete(ids){
      var sql = "delete from tbl_exam_user where id in ("+ids.join()+")";
      return pool.execute(sql);
    },
    save(user){
      var sql = "insert into tbl_exam_user values(null,'"
      +user.age+"','"
      +user.gender+"','"
      +user.name+"',"
      +user.password+"',"
      +user.telephone+"',"
      +user.department_id+"',";
      return pool.execute(sql);
    },
    update(user){
      var sql = "update tbl_exam_user set name = '"
      +user.age+"','"
      +user.gender+"','"
      +user.name+"',"
      +user.password+"',"
      +user.telephone+"',"
      +user.department_id+"', where id ="
      +user.id;
      return pool.execute(sql);
    }
}
*/