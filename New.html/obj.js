let myobj={
    name:"Pranay",
    age:"23"
}
let myobj_serialized=JSON.stringify(myobj);
localStorage.setItem("myobj",myobj_serialized);
