// __JS__9
//  Arrays or Loops
// arrays are objects

const languages = ['c','cpp','js','java','go','python','R'];
console.log(languages)

console.log(languages.length)
console.log(languages[5].length)

console.log(languages.slice(1,5))

languages.push('dart')  // add at last
languages.unshift('backend')  // add at first
languages.pop(); // to remove elements from last
console.log(languages)


console.log(languages.shift()) // using shift we can pop the first element from list


for(let i = 0; i < 4; i++){
    console.log('*')
}

// Actors list
const actors = [
    {
        name: 'Actor 1',
        payment: 100
    },
    {
        name: 'Actor 2',
        payment: 200
    },
    {
        name: 'Actor 3',
        payment: 300
    },
    {
        name: 'Actor 4',
        payment: 400
    }
];

for(let i=0;i<actors.length;i++){
    console.log(actors[i].payment - 10)
}

/* for each loop is better version of for loop */
actors.forEach((actor)=>{
    actor.payment =  actor.payment - 10
    console.log(actor);
});


/* For off loop */
for(let actor of actors){
    console.log(actor.payment + 50)
}

/* filter items */
const students = [
    {
        name:'student-1',
        marks: 95
    },
     {
        name:'student-2',
        marks: 75
    },
     {
        name:'student-3',
        marks: 35
    },
     {
        name:'student-4',
        marks: 25
    }
]

// using forEach
students.forEach((std)=>{
    console.log(std.name+' and his marks -> '+  std.marks)
}
)

// using forOf
for(let std of students){
    console.log(std.name + ' Marks_obtain '+ std.marks)
}

// using filter
const failed = students.filter((student)=>{
    if(student.marks < 45){
        return true;
    }else{
        return false;
    }
});
console.log(failed)

console.log(students)  // not change in actual array

// using filter
const fail = students.filter((student)=>{
    return student.marks > 45;
})
console.log(fail)

/* 1 line using filter */

const failed_students = students.filter((student)=> student.marks > 45)


/* MAP */

const users = [
    {
        fname: 'John',
        lname: 'Doe'
    },
    {
        fname: 'sk',
        lname: 'hui'
    },{
        fname: 'lana',
        lname: 'sky'
    },{
        fname: 'george',
        lname: 'patty'
    },{
        fname: 'john',
        lname: 'cena'
    }
]


//using map

final_users = users.map((user)=>{
    // return 'hello'
    return {
        fullname: `${user.fname} ${user.lname}`
    }
})

console.log(final_users)  // it will return 5 times hello bcz of no. of elements present in array



// //using for of
// for(let user of users){
//     console.log(user.fname+user.lname)
// }

// // using for each
// users.forEach((user)=>{
//     console.log(user.fname +' '+user.lname)
// })

/* Using reduce */
//steps: foreach loop to convert into reduce

const movies = [
    {
        name:'intersteller',
        budget: 100
    },
    {
        name:'Social',
        budget: 400
    },
    {
        name:'Avengers:End_game',
        budget: 200
    },
    {
        name:'Iron_Man',
        budget: 300
    },
];

/* this is not well defined structure

let total = 0

movies.forEach((movie)=>{
    total += movie.budget;
});
console.log(total)

*/


// we will use reduce method
// movies.reduce((accumulator , object)=>{},initial_value)
const total_budget = movies.reduce((acc,movie)=>{
    acc += movie.budget
    return acc
},0)
 
console.log(total_budget)


// Indexof: return index of that value
const admins = [2,1,3];

const user ={
        name: 'XYZ',
        id: 2
}

console.log(admins.indexOf(user.id))


// Includes
console.log(admins.includes(user.id))


/* find */

const users_id = [
    {
        name: 'xyz',
        id: 1
    },
    {
        name: 'www',
        id: 2
    },
    {
        name: 'bbc',
        id: 3
    },
];

const my_user = users_id.find((user)=>{
    return user.id === 3
})

console.log(my_user)


/* sort method: original array modified */

const names = ['john','Jane','Shyam','Ram','Sameer','Mansi'];
names.sort();

console.log(names)



/* splice : splice(start, end) use to remove any element b/w ranges */

const names_list = ['john','Jane','Shyam','Ram','Sameer','Mansi'];

console.log(names_list.splice(2,1))


