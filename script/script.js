// let word = "salam necesen"
// function myIncludes(text, searched) {
//     for (let i = 0; i < text.length; i++) {
//         if (searched === text[i]) {
//             return true
//         }        
//     }
//     return false
// }
// console.log(myIncludes(word,"s"));

// task-12

// function findNumb(text) {
//     text = text.toString()
//     const myArr = [];
//     for (let i = 0; i < text.length; i++) {
//         myArr.push(text[i])

//     }
//     return myArr
// }
// console.log(findNumb(1244));

// task-13

// function findDigit(text) {
//     text = text.toString();
//     let big = 0
//     for (let i = 0; i < text.length; i++) {
//         if (big<text[i]) {
//             big=text[i]
//         }
//     }
//     return big
// }
// console.log(findDigit(4325));

// TASK-14
// function findDigit(text) {
//     text = text.toString();
//     small = text[1]
//     for (let i = 0; i < text.length; i++) {
//         if (small>text[i]) {
//             small=text[i]
//         }
//     }
//     return small
// }
// console.log(findDigit(14325));


// task-15

// function Number(text) {
//     text = text.toString()
//     const myArr = [];
//     let sum = 0
//     let multip = 1
//     let average = 0
//     const result =[]
//     for (let i = 0; i < text.length; i++) {
//         sum += +text[i]
//         multip *= +text[i]
//         average = sum/ text.length

//     }
//     result.push(sum)
//     result.push(multip)
//     result.push(average)
//     return result
// }
// console.log(Number(2322));



// task-16
// function divide(text) {
//     const arr=[]
//     for (let i = 0; i <= text; i++) {
//         if (text%i===0 ) {
//             console.log(i);
//             arr.push(i) 
//         }  
//     }
// return arr
// }
// divide(20)