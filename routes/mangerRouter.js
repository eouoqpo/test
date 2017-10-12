require('babel-polyfill');
let express = require('express');
let route = express.Router();
let mangerDB = require('../db/mangerDB.js');

route.get('/subject_type',(req,resp)=>{
    mangerDB.subject_type().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});


route.get('/subject_level',(req,resp)=>{
    mangerDB.subject_level().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});


route.get('/find_topic',(req,resp)=>{
    mangerDB.find_topic().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});

route.get('/find_subject',(req,resp)=>{
    mangerDB.find_subject().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});

route.get('/find_epartment',(req,resp)=>{
    mangerDB.find_epartment().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});

route.post('/querySubject',(req,resp)=>{
    Object.assign(req.body);
    // console.log(req.body);
    mangerDB.querySubject(req.body).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});

// updateSubject
route.get('/updateSubject',(req,resp)=>{
    Object.assign(req.body);
    // console.log(req.body,'lsdf oe frtoijtrewer');
    mangerDB.updateSubject(req.query.id,'审核通过').then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});

// updateSubject
route.get('/updateSubDef',(req,resp)=>{
    Object.assign(req.body);
    // console.log(req.body,'lsdf oe frtoijtrewer');
    mangerDB.updateSubDef(req.query.id,'未审核通过').then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});

route.get('/queryChoice',(req,resp)=>{
    Object.assign(req.body);
    // console.log(req.body,'lsdf oe frtoijtrewer');
    mangerDB.queryChoice(req.query.id).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});



module.exports = route;
