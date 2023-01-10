// var friends=['vinod','kamran','arjun','rahul'];
// for (let i=0; i<=friends.length;i++) {
//     console.log(friends[i])
// }

// var friends=['vinod','kamran','rahul','vickey'];
// for(let elements in friends){
// console.log(`${elements} ${friends}`)
// }

// for each loop
// var friends=['thapa','vinod','harry','kamran'];
// friends.forEach((elements,index,myarray) => {
//     console.log(`${elements}  ${index} ${myarray}`)
// });


// const animals=['pig','goat','sheep'];
// animals.push('last')
// console.log(animals)

// const animals=['pig','goat','sheep'];
// animals.unshift('first')
// console.log(animals)

// const numbers=[1,2,3,4,5];
// numbers.unshift(4,9);
// console.log(numbers)

// last delete
// const num1=[1,2,3,4,5];
// num1.pop()
// console.log(num1)


// shift first item remove
// const fruits=['apple','mango','banana','grapes'];
// fruits.shift()
// console.log(fruits)

// splice main
// const months=['jan','march','april','june','july'];
// const indexofmonth =months.indexOf('march');
// console.log(indexofmonth)
// if (indexofmonth != -1) {
//     const update = months.splice(indexofmonth,1,'March') 
//     console.log(months)
// }else{
// console.log('no such data found')
// }

// const months=['jan','march','april','june','july'];
// const monthss = months.splice(5,0,"Dec");
// console.log(monthss)

const months=['jan','march','april','june','july'];
const monthss=months.splice(months.length,0,"Dec");
console.log(monthss)









