// REST API


// fetch() ---> с помощью данной функций идет запросы на бызу данных , в нутри круглых скобок указывается адрес той или иной базы. (старрый метот)


// const routeButtons = [
//   {
//     id:1,
//     title:"Posts",
//     route:"comments"
//   },
//   {
//     id:2,
//     title:"Posts",
//     route:"comments"
//   },
//   {
//     id:3,
//     title:"Posts",
//     route:"comments"
//   },
//   {
//     id:4,
//     title:"Posts",
//     route:"comments"
//   },
// ]

// function requestDatabase(route = "posts"){
//   fetch(`https://jsonplaceholder.typicode.com/${route}`)
//   .then(response => response.json())
//   .then(response => console.log(response))
// }



// fetch(`https://jsonplaceholder.typicode.com/photos}`)
//   .then(response => response.json())
//   .then(response => {
//     response.forEach(element => {
//       document.write(element.title)
//     })
//   })



// practes

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(response => console.log(response))



const routeButtons = [
  {
    id:1,
    title:"Posts",
    route:"posts",
    color:"green"
  },
  {
    id:2,
    title:"Comments",
    route:"comments",
    color:"red"
  },
  {
    id:3,
    title:"Albums",
    route:"albums",
    color:"blue"
  },
  {
    id:4,
    title:"Photos",
    route:"photos",
    color:"gold"
  },
  {
    id:5,
    title:"Users",
    route:"users",
    color:"brown"
  },
  {
    id:6,
    title:"Todos",
    route:"todos",
    color:"orange"
  },
]

  

const container = document.querySelector(".row")
const cardContainer = document.querySelector(".row_cards")
const signOut = document.querySelector(".signOut")

function requestDatabase(route = "posts"){
  fetch(`https://jsonplaceholder.typicode.com/${route}`)
  .then(response => response.json())
  .then(response => getBase(route, response))
}


window.addEventListener("load", () => {
  Buttons(routeButtons)


  requestDatabase("posts")
})

function  Buttons(base) {
  const template = base.map(item => {
    console.log(item)
    return` 
    <buttton onclick="requestDatabase('${item.route}')" style="background:${item.color}" class="btn">
      ${item.title}
    </buttton>
    `
  }).join(" ")

  container.innerHTML = template
}

function getBase(route, database) {
  let template = '';

  if(database){
    if(route === "posts"){
      template = database.map(item => {
        console.log(item);
        return`
        <div class="card">
          <h2>${item.title}</h2>

          <p>
            ${item.body}
          </p>
        </div>
        `
      }).join(" ")
    }else if(route === "comments"){
        template = database.map(item => {
        console.log(item);
        return`
        <div class="card">
          <h2>${item.email}</h2>
          <h2>${item.name}</h2>

          <p>
            ${item.body}
          </p>
        </div>
        `
      }).join(" ")
    }else if(route === "albums"){
      template = database.map(item => {
        console.log(item);
        return`
        <div class="card">
          <h2>${item.title}</h2>
        </div>
        `
      }).join(" ")
    }else if(route === "photos"){
      template = database.map(item => {
        console.log(item);
        return`
        <div class="card">
          <h2>${item.title}</h2>
          <img src="${item.url}" width="100%" height="200px">
        </div>
        `
      }).join(" ")
    }else if(route === "todos"){
      template = database.map(item => {
        console.log(item);
        return`
        <div class="card">
          <h2>${item.title}</h2>
          <h2>${item.completed}</h2>
        </div>
        `
      }).join(" ")
    }else if(route === "users"){
      template = database.map(item => {
        console.log(item);
        return`
        <div class="card" style="margin-top: 30px;">
          <h2>${item.name}</h2>
          <h2>${item.username}</h2>
          <h2>${item.email}</h2>
          <h2>${item.address.street}</h2>
          <h2>${item.address.suite}</h2>
          <h2>${item.address.city}</h2>
          <h2>${item.address.zipcode}</h2>
         
        </div>
        `
      }).join(" ")
    }
  }

  cardContainer.innerHTML = template;
}

window.addEventListener("load", () => {
  if(localStorage.getItem("isAuth") === "false"){
    window.open("../register.html" , "_self")
  }
})


signOut.addEventListener("click", () => {
  localStorage.setItem("isAuth", "false")
  window.open("../register.html" , "_self")
})