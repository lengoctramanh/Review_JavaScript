/** ARRAY METHODS
 * 1.Convert to string
 * 2.join
 * 3.pop
 * 4.push
 * 5.shift
 * 6.unshift
 * 7.splicing
 * 8.concat
 * 9.slicing
 */

const languages=[
   "Javascript",
   "PHP",
   "C++",
   "Go",
   "Ruby"
]
const person=[
   "Su",
   "Lu"
]
console.log(languages.toString()) //Javascript,PHP,C++,Go,Ruby
console.log(languages.join("-")) //Javascript-PHP-C++-Go-Ruby
console.log(languages.pop()) // xóa element cuối arr và return về phần tử đã xóa
Ruby
console.log(languages.push("Java"))
console.log(languages) //[ 'Javascript', 'PHP', 'C++', 'Go', 'Ruby', 'Java' ]
console.log(languages.shift("Javascript"))
console.log(languages) //[ 'PHP', 'C++', 'Go', 'Ruby' ]
console.log(languages.unshift("Java"))
console.log(languages.splice(1,2)) //[ 'PHP', 'C++' ]
 console.log(languages)//[ 'Javascript', 'Go', 'Ruby' ]
console.log(languages.splice(1,0,"Dart"))
console.log(languages) //[ 'Javascript', 'Dart', 'PHP', 'C++', 'Go', 'Ruby' ]
console.log(person.concat(languages)) //[ 'Su', 'Lu', 'Javascript', 'PHP', 'C++', 'Go', 'Ruby' ]
console.log(languages.concat(person))  //[ 'Javascript', 'PHP', 'C++', 'Go', 'Ruby', 'Su', 'Lu' ]
console.log(languages.slice(1,4)) //[ 'PHP', 'C++', 'Go' ]

/** ARRAY METHODS:sau là một function
 * 1.forEach():duyệt qua từng phần tử của mảng
 * 2.every():ktra thỏa đk,tất cả cùng đúng thì trả về true,dữ liệu trả về boolean
 * 3.some():ktra thỏa đk,chỉ cần ít nhất một cái đúng là true 
 * 4.find():tìm phần tử đầu tiên trong mảng thỏa mãn một điều kiện qua hàm callback.
 * 5.filter(): lọc ra một mảng mới chứa các phần tử thỏa mãn điều kiện.
 * 6.map():tạo ra một mảng mới chỉ chứa các phần tử thỏa mãn điều kiện.
 * 7.reduce(): thực hiện các phép tính tổng hợp (accumulate) trên các phần tử của mảng. 
 * 8.includes():kiểm tra xem một giá trị có tồn tại trong mảng hay không.
 *    
 */

const data = [
    {
        id: 1,
        name: "John Doe",
        age: 28,
        skills: ["JavaScript", "HTML", "CSS"],
        address: {
            city: "New York",
            country: "USA"
        }
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 34,
        skills: ["Python", "Django", "Machine Learning"],
        address: {
            city: "San Francisco",
            country: "USA"
        }
    },
    {
        id: 3,
        name: "Mike Johnson",
        age: 45,
        skills: ["Java", "Spring", "Hibernate"],
        address: {
            city: "Chicago",
            country: "USA"
        }
    },
    {
        id: 4,
        name: "Emily Davis",
        age: 40,
        skills: ["C++", "Qt", "Embedded Systems"],
        address: {
            city: "Austin",
            country: "USA"
        }
    }
 ];
 // * FOREACH
 const countryFilter=(user)=>{
    console.log(`User ${user.id}: ${user.address.city}`)
 }
 data.forEach(countryFilter)
 // *EVERY
 const ageFilter=(user)=>{
   return user.age>25
 }
 const isallOver25=data.every(ageFilter)
 console.log(isallOver25) //true
 // * FIND
 const javaDeveloper=data.find((user)=> {
    return user.skills.includes("Java")})
 if(javaDeveloper){
    console.log(`${javaDeveloper.name}`)
 } else {
    console.log("No Java developer found")
 }
 //* S0ME
 const ageFilter_=(user)=>{
   return user.age>40
 }
 const isallOver40=data.some(ageFilter_)
 console.log(isallOver40) //true
 //*FILTER
 const over30=data.filter((user)=> {
    return user.age>30
 })
 console.log(over30)
 //* MAP
 const userNames=data.map((user)=> {
    return user.name
 })
 // console.log(userNames)
 //*REDUCE
 const totalAge=data.reduce((sum,user)=> sum+user.age,0
 )
 console.log(totalAge)// 147=(28 + 34 + 45 + 40)