// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css"
// import Avatar from "../../Props"
// import { getImageUrl } from "./utils"

// function Card({children}) {
//   return (
//     <div className='card'>
//       {children}
//     </div>
//   )
// }



// export default function Profile() {
//   return (
//     <Card>
//       <Avatar
//       size={100}
//       person = {{
//         name: "Katsuko Saruhashi",
//         imageId: "YfeOqp2"
//       }}
//       /> 
//     </Card>
//   )
// }


// function Card({ children, info }) {
//   return (
//     <div className="card">
//       <div className='card-content'>
//         <h1>{info}</h1>
//       </div>
//       {children}
//     </div>
//   );
// }

// export default function Profile() {
//   return (
//     <div>
//     <Card info='Photo'>
//       <Avatar
//         size={100}
//         person={{ 
//           name: "Aklilu Lemma",
//           imageId: "OKS67lh"
//         }}
//       />
//     </Card>
//           <Card info='About'>
//           <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
//         </Card>
//         </div>
//   );
// }


//solution 

// function Card({ children }) {
//   return (
//     <div className="card">
//       <div className="card-content">
//         {children}
//       </div>
//     </div>
//   );
// }

// export default function Profile() {
//   return (
//     <div>
//       <Card>
//         <h1>Photo</h1>
//         <img
//           className="avatar"
//           src="https://i.imgur.com/OKS67lhm.jpg"
//           alt="Aklilu Lemma"
//           width={100}
//           height={100}
//         />
//       </Card>
//       <Card>
//         <h1>About</h1>
//         <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
//       </Card>
//     </div>
//   );
// }

//second solution

// function Card({ children, title }) {
//   return (
//     <div className="card">
//       <div className="card-content">
//         <h1>{title}</h1>
//         {children}
//       </div>
//     </div>
//   );
// }

// export default function Profile() {
//   return (
//     <div>
//       <Card title="Photo">
//         <img
//           className="avatar"
//           src="https://i.imgur.com/OKS67lhm.jpg"
//           alt="Aklilu Lemma"
//           width={100}
//           height={100}
//         />
//       </Card>
//       <Card title="About">
//         <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
//       </Card>
//     </div>
//   );
// }