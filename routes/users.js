let express = require('express');

let routes = express.Router();


routes.get('/users', (req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.json({
        users:[{
            name:'Jose augusto',
            email:'porcel_augusto@hotmaol.com ',
            id: 1
        }]
    });


});

routes.get('/users/admin', (req, res)=>{

    es.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.json({
        users:[]
    });


});

module.exports = routes;
