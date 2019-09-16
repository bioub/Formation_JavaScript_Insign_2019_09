setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 1000);
setTimeout(() => console.log('C'), 0);
setTimeout(() => console.log('D'), 500);
console.log('E');

// call stack
// ^
// |
// |                           lg      lg
// |st - st - st - st - lg ... cbC ... cbA - cbD ... cbB
// +-----------------------------------------------------> temps
//                      E      C       A     D       B

// file d'attente de callback (0ms) : cbC
// file d'attente de callback (2ms) : 
// file d'attente de callback (500ms) : cbA - cbD
// file d'attente de callback (501ms) : cbD
// file d'attente de callback (502ms) : 

// do {
//   exec_sync(code_js);
//   const cbs = wait_for_callback();
// } 
// while(true);

// https://www.youtube.com/watch?v=cCOL7MC4Pl0
