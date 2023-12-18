// export default function Avatar() {
//   return (
//     <img className='avatar' src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara" />
//   )
// }

// export default function Avatar() {
//   const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
//   const description = 'Gregorio Y. Zara';
//   return (
//     <img className='avatar' src={avatar} alt={description}  />
//   );
// }

// export default function TodoList() {
//   const name = 'Gregorio Y. Zara'
//   return (
//     <h1>{name}&apos;s To Do List</h1>
//   )
// }

// const today = new Date()

// function formatDate(date) {
//   return new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date)
// } 

// export default function TodoList() {
//   return (
//     <h1>To Do List for {formatDate(today)}</h1>
//   ) 
// }

// export default function TodoList() {
//   return (
//     <ul style={{
//       backgroundColor: 'black',
//       color: 'pink'
//     }}>
//       <li>Improve the videophone</li>
//       <li>Prepare aeronautics lectures</li>
//       <li>Work on the alcohol-fulled engine</li>
//     </ul>
//   )
// }

// const person = {
//   name: 'Gregorio Y. Zara',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// }

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}&apos;s Todos</h1>
//       <img className='avatar' src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara" />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fulled engine</li>
//       </ul>
//     </div>
//   )
// }

//First challenge

// const person = {
//   name: 'Gregorio Y. Zara',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}&apos;s Todos</h1>
//       <img
//         className="avatar"
//         src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }

//Second challenge

// const person = {
//   name: 'Gregorio Y. Zara',
//   Url: 'https://i.imgur.com/7vQD0fPs.jpg',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}&apos;s Todos</h1>
//       <img
//         className="avatar"
//         src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }

//Third challenge

const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 'b',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}&apos;s Todos</h1>
      <img
        className="avatar"
        //using + or contact to make this into one object 
        src={baseUrl + person.imageId + person.imageSize + '.jpg'}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
