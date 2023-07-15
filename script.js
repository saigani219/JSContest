/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((element) => {
    if(element.profession == "developer")
    console.log(element);
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((element) => {
    if(element.profession == "developer")
    console.log(element);
  })
}

function addData() {
  //Write your code here, just console.log
  let newObj = {
    id: 4, name: "susan", age: "20", profession: "intern"
  }
  arr.push(newObj);
  console.log(newObj);
}

function removeAdmin() {
  //Write your code here, just console.log
  let filteredStudents = arr.filter((element) => {
    return element.profession !== "admin";
  });
  console.log(filteredStudents);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 4, name: "Kamal", age: "23", profession: "Tester" },
    { id: 5, name: "Pavan", age: "24", profession: "Data Analyst" },
    { id: 6, name: "Yogesh", age: "22", profession: "Data Engineer" },
  ]
  let concatenatedArray = arr.concat(newArr);
  console.log(concatenatedArray);
}
