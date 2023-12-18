// function Animals () {
//   return (
//     <div>
//       <h1>Animals: </h1>
//       <ul>
//         <li>Lion</li>
//         <li>Cow</li>
//         <li>Snake</li>
//         <li>Lizard</li>
//       </ul>
//     </div>
//   )
// }

//using list structure 

// function Animals () {
//   const animals = ['Lion', 'Cow', 'Snake', 'Lizards']

//   //created an array and used map to loop over the array
//   //using {} to wrap the array and passed object animal from the map
//   //to show the looped list

//   return (
//     <div>
//       <h1>Animals: </h1>
//       <ul>
//         {animals.map((animal) => {
//           return <li key={animal}>{animal}</li>
//         })}
//       </ul>
//     </div>
//   )
// }

// function Animals () {
//   const animals = ['Lion', 'Cow', 'Snake', 'Lizard']
//   const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)

//   //created one variable here for looping the array
//   //then in the ul animalList has been passed

//   return (
//     <div>
//       <h1>Animals: </h1>
//       <ul>
//         {animalsList}
//       </ul>
//     </div>
//   )
// }

// function ListItem(props) {
//   return <li>{props.animal}</li>
// }

// function List(props) {
//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         return <ListItem key={animal} animal={animal} />
//       })}
//     </ul>
//   )
// }

// function Animals() {
//   const animals = ['Lion', 'Cow', 'Snake', 'Lizard']

//   return (
//     <div>
//       <h1>Animals :</h1>
//       <List animals={animals} />
//     </div>
//   )
// }

//using ternary operator

// function List(props) {
//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         return animal.startsWith('L') ? <li key={animal}>{animal}</li> : null
//       })}
//     </ul>
//   )
// }

// function Animals() {
//   const animals = ['Lion', 'Cow', 'Snake', 'Lizard']

//   return (
//     <div>
//       <h1>Animals: </h1>
//       <List animals={animals}/>
//     </div>
//   )
// }

//using && operator

// function List(props) {
//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         return animal.startsWith('L') && <li key={animal}>{animal}</li>
//       })}
//     </ul>
//   )
// }

// function Animals() {
//   const animals = ['Lion', 'Cow', 'Snake', 'Lizard']

//   return (
//     <div>
//       <h1>Animals: </h1>
//       <List animals={animals} />
//     </div>
//   )
// }

//using if else or switch 

// function List(props) {
//   if(!props.animals) {
//     return <div>Loading...</div>
//   }

//   if(props.animals.length === 0) {
//     return <div>There are no animals in the list!</div>
//   }

//   return(
//     <ul>
//       {props.animals.map((animal) => {
//         return <li key={animal}>{animal}</li>
//       })}
//     </ul>
//   )
// }

// function Animals() {
//   const animals = []

//   return (
//     <div>
//       <h1>Animals: </h1>
//       <List animals={animals} />
//     </div>
//   )
// }

// function List(props) {
//   return (
//     <>
//     {!props.animals ? (
//       <div>Loading...</div>
//     ) : props.animals.length > 0 ? (
//       <ul>
//         {props.animal.map((animal) => {
//           return <li key={animal}>{animal}</li>
//         })}
//       </ul>
//     ) : (
//       <div>There are no animals on the list!</div>
//     )
//   }
//     </>
//   )
// }

//or using &&

function List(props) {
  return (
    <>
    {!props.animals && <div>Loading...</div>}
    {props.animals && props.animals.length > 0 && (
      <ul>
        {props.animals.map((animal) => {
          return <li key={animal}>{animal}</li>
        })}
      </ul>
    )}
    {props.animals && props.animals.length === 0 && <div>There are no animals in the list! </div>}
    </>
  )
}

function Animals() {
  const animals = []

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals}/>
    </div>
  )
}






export {Animals}