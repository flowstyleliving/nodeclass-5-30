// Node.js is a non-blocking model so we don't have to wait things to finish before going on the next task
// it will execute into the event loop upon completion.

setTimeout(()=> {
  console.log('hi after 3 sec')
}, 3000);

console.log('hi now');


//
// setTimeout(()=> {
//   console.log('hello')
// }, 5000);
// setInterval(()=> {
// console.log('world')
// }, 1000)
