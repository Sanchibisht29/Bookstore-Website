var express = require('express');
var path = require('path');
var logger = require('morgan');
var index = require('./routes/index');
var app = express();
var mongoose=require('mongoose');
var socket = require('socket.io');


app.use( express.static( "public" ) );

mongoose.connect('mongodb://localhost:27017/ecommerce',{ useNewUrlParser:true , useUnifiedTopology: true },(error)=>{
    if(!error)
    {
        console.log("sucess")
    }
    else{
        console.log("error");
    }
}
);


var io = socket(app.listen(3007));

io.sockets.on('connection', chal);

function chal(socket){
socket.on('yaw', yawchange);
  console.log("someone connected : "+socket.id);
  

  var data;
function yawchange(data){
  socket.broadcast.emit('yawtake', data);
  console.log(data.slideval)
}
}


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set path for static assets
app.use(express.static(path.join(__dirname, 'public')));


// routes
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.render('error', {status:err.status, message:err.message});
});

module.exports = app;
