const eventEmiter = require("events");

const emitter = new eventEmiter();

emitter.on('click',(arg1,arg2) => {
  // 箭头函数没有arguments和this，此时的arguements和this是外层module的arguments和this，
  // console.log(arguments);
  console.log(arg1,arg2);
})

// 监听事件,必须放在监听的事件的emit之前才可以被调用

emitter.prependListener('click', (arg1,arg2) => {
  console.log('click事件执行了',arg1,arg2);
});

emitter.emit('click','222','333');
