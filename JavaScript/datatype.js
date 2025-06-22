// STRING
const example="Tram Anh"
console.log(example)
//NUMBER
const number=16226
console.log(number)
//BOOLEAN
const bool=true
console.log(bool)
//UNDEFINDED
const myPerson={
    name:"TramAnh"
}
console.log(myPerson.age)
// NULL:xóa value nhưng giữ nguyên key
const personId={
    name:"Jay",
    age:12
}
personId.age=null
console.log(personId)
//OBJECT
const student={
    name:"Alice",
    age:13,
    isStudent:true
}
console.log(student.isStudent)
//FUNCTION
const handleCount=(a,b)=> {
return a+b
}
console.log(handleCount(2,5))

