fetch("https://api.github.com/users/WebDevloperVishal",{
    method:"GET"
})
  .then((res) => {
    return res.json()
  })
  .then((data)=>{
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log("Finally")
  });

//   https://jsonplaceholder.typicode.com/guide/