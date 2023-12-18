// import { people } from './data'
// import { getImageUrl } from './utils'

import { Fragment } from 'react'
import {recipes} from './data'


// const people = [
//   'Creola Katherine Johnson : mathematician',
//   'Mario Jose Molina-Rasquel Henriquez: chemist',
//   'Mohammad Abdus Salam: physicist',
//   'Percy Lavon Julian: chemist',
//   'Subrahmanyan Chandrasekhar: astrophysicist'
// ]

// export default function List() {
//   const listItems = people.map(person => <li>{person}</li>);
//   return <ul>{listItems}</ul>
// }




// const people = [{
//   id: 0,
//   name: 'Creola Katherine Johnson',
//   profession: 'mathematician'
// }, {
//   id: 1,
//   name: 'Mario José Molina-Pasquel Henríquez',
//   profession: 'chemist',
// }, {
//   id: 2,
//    name: 'Mohammad Abdus Salam',
//    profession: 'physicist',
// }, {
//   name: 'Percy Lavon Julian',
//   profession: 'chemist',
// }, {
//   name: 'Subrahmanyan Chandrasekhar',
//   profession: 'astrophysicist'
// }]

// const chemists = people.filter(person => {
//   person.profession === 'chemist'
// })

// export default function List() {
//   const chemists = people.filter(person => 
//       person.profession === 'chemist'
//   )
//      const listItems = chemists.map(person => 
//       <li>
//         <img src={getImageUrl(person)} alt={person.name} />
//         <p>
//           <b>{person.name}:</b>
//           {' ' + person.profession + ' '}
//           know for {person.accomplishments}
//         </p>
//       </li>
//       )
//       return <ul>{listItems}</ul>
// }

// export default function List() {
//      const listItems = people.map(person => 
//       <li key={person.id}>
//         <img src={getImageUrl(person)} alt={person.name} />
//         <p>
//           <b>{person.name}:</b>
//           {' ' + person.profession + ' '}
//           know for {person.accomplishment}
//         </p>
//       </li>
//       )
//       return <ul>{listItems}</ul>
// }

// export default function List() {
//   const chemists = people.filter(person => 
//     person.profession === 'chemist'
//   )
//     const listItems1 = chemists.map(person =>
//       <li>
//         <img src={getImageUrl(person)} alt={person.name} />
//         <p>
//           <b>{person.name}</b>
//           {' ' + person.profession + ''}
//           know for {person.accomplishment}
//         </p>
//       </li>
//       );


//       const notChemists = people.filter(person =>
//         person.profession !== 'chemist')

//       const listItems = notChemists.map(person =>
//         <li>
//           <img src={getImageUrl(person)} alt={person.name} />
//           <p>
//             <b>{person.name}</b>
//             {' ' + person.profession + ''}
//             know for {person.accomplishment}
//           </p>
//         </li>
//         );
  
      
//   return (
//     <article>
//       <h1>Scientists</h1>
//       <h1>Chemists</h1>
//       <ul>{listItems1}</ul>
//       <h1>Everyone Else</h1>
//       <ul>{listItems}</ul>
//     </article>
//   );
// }

//solution

// export default function List() {
//   const chemists = people.filter(person => 
//     person.profession === 'chemist'
//     )

//     const everyoneElse = people.filter(person =>
//     person.profession !== 'chemist'      
//       )

//     return (
//       <article>
//         <h1>Scientists</h1>
//         <h2>Chemists</h2>
//         <ul>
//           {chemists.map(person =>
//           <li key={person.id}>
//           <img src={getImageUrl(person)} alt={person.name} />
//           <p>
//             <b>{person.name}:</b>
//             {' ' + person.profession + ' '}
//             known for {person.accomplishment}
//           </p>
//           </li>
//           )}
//         </ul>
//         <h2>Everyone Else</h2>
//         {everyoneElse.map(person =>
//         <li key={person.id}>
//           <img src={getImageUrl(person)} alt={person.name} />
//           <p>
//             <b>{person.name}:</b>
//             {' ' + person.profession + ' '}
//             know for {person.accomplishment}
//           </p>
//         </li>
//           )}
//       </article>
//     )
// }


//second solution 

// function ListSection({title, people}) {
//   return (
//     <>
//     <h2>{title}</h2>
//     <ul>
//       {people.map(person =>
//       <li key={person.id}>
//       <img src={getImageUrl(person)} alt={person.name} />
//         <p>
//           <b>{person.name}:</b>
//           {' ' + person.profession + ' '}
//           know for {person.accomplishment}
//         </p>
//         </li>
//         )}
//     </ul>
//     </>
//   )
// }

//  export default function List () {
//   const chemists = people.filter(person =>
//     person.profession === 'chemist'
//     )

//     const everyoneElse = people.filter(person =>
//       person.profession !== 'chemist'
//       )

//       return (
//         <article>
//           <h1>Scientist</h1>
//           <ListSection title='Chemists' people={chemists} />
//           <ListSection title='Everyone Else' people={everyoneElse} />
//         </article>
//       )
// }

//third solution

// let chemists = []
// let everyoneElse = []
// people.forEach(person =>{
//   if(person.profession === 'chemist') {
//     chemists.push(person)
//   } else {
//     everyoneElse.push(person)
//   }
// })

// function ListSection({title, people}) {
//   return(
//     <>
//     <h2>{title}</h2>
//     <ul>
//       {people.map(person =>
//       <li key={person.id}>
//       <img src={getImageUrl(person)} alt={person.name} />
//       <p>
//         <b>{person.name}:</b>
//       {' ' + person.profession + ' '}
//       known for {person.accomplishment}
//       </p>
//       </li>
//         )}
//     </ul>
//     </>
//   )
// }

// export default function List() {
//   return (
//     <article>
//       <h1>Scientists</h1>
//       <ListSection title="Chemists" people={chemists} />
//       <ListSection title='Everyone Else' people={everyoneElse}/>
//     </article>
//   )
// }

//make a list of recipes from recipes array 
//for each recipe in the array display it's name in h2
//and it's ingredients in a ul

// export default function RecipeList() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes.map(recipe =>
//         <div key={recipe.id}>
//       <h2>{recipe.name}</h2>
//         <ul>
//         {recipe.ingredients.map(ingredient =>
//         <li>{ingredient}</li>
//           )}
//           </ul>
//         </div>
//         )}
//     </div>
//   );
// }



// {recipes.map(recipe =>
//   <div key={recipe.id}>
//     <h2>{recipe.name}</h2>
//     <ul>
//       {recipe.ingredients.map(ingredient =>
//         <li key={ingredient}>
//           {ingredient}
//         </li>
//       )}
//     </ul>
//   </div>
// )}



// function List({id, name, ingredients}) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <ul>
//         {ingredients.map(ingredient =>
//         <li key={ingredient}>{ingredient}</li>
//           )}
//       </ul>
//     </div>
//   )
// }



// export default function RecipeList() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes.map(recipe =>
//       <List {...recipe} key={recipe.id}  />
//         )}
//     </div> 
//   );
// }


const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms'
  ]
}

// export default function Poem() {
//   let output = []

//   poem.lines.forEach((line, i) => {
//     output.push(
//       <hr key={i + '-separator'} />
//     )

//     output.push(
//       <p key={line + '-text'}>
//         {line}
//       </p>
//     )
//   })

//   output.shift()

//   return(
//     <article>
//       {output}
//     </article>
//   )
// }

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, i) =>
      <Fragment key={i}>
        {i > 0 && <hr/>}
        <p key={line}>{line}</p>
      </Fragment>
      )}
    </article>
  )
}