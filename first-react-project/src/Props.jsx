/* eslint-disable react/react-in-jsx-scope */
import { getImageUrl } from "./utils";

// function Button() {
//   return (
//     <button>click Me!</button>
//   )
// }

// function Button2() {
//   return (
//     <button>Don&apos;t Click Me!</button>
//   )
// }

// export default function App() {
//   return (
//     <div>
//       <Button/>
//         <Button2/>
//         <Button/>
//     </div>
//   )
// }

// creating same component using props (properties)

// function Button(props) {
//   const buttonStyle = {
//     color: props.color,
//     fontSize: props.fontSize + 'px'
//   }

//   return (
//       <button style={buttonStyle}>{props.text}</button>
//   )
// }

// export default function App() {
//   return (
//     <div>
//       <Button text='Click Me!' color='blue' fontSize={12} />
//       <Button text='Dont&apos;t Click Me!' color='red' fontSize={12} />
//       <Button text='Click Me!' color='blue' fontSize={20}/>
//     </div>
//   );
// }

// same example but this time using destructing

// function Button({text, color, fontSize}) {
//   const buttonStyle = {
//     color: color,
//     fontSize: fontSize + 'px'
//   }

//   return (
//       <button style={buttonStyle}>{text}</button>
//   )
// }

// export default function App() {
//   return (
//     <div>
//       <Button text='Click Me!' color='blue' fontSize={12} />
//       <Button text='Dont&apos;t Click Me!' color='red' fontSize={12} />
//       <Button text='Click Me!' color='blue' fontSize={20}/>
//     </div>
//   );
// }

// using default props to prevent getting undefined values

// function Button({text, color, fontSize}) {
//   const buttonStyle = {
//     color: color,
//     fontSize: fontSize + 'px'
//   }

//   return <button style={buttonStyle}>{text}</button>
// }

// Button.defaultProps = {
//   text: 'Click Me!',
//   color: 'blue',
//   fontSize: 12
// }

// export default function App() {
//   return (
//     <div>
//       <Button/>
//       <Button text="Don&apos;t Click Me!" color='red'/>
//       <Button fontSize={20}/>
//     </div>
//   )
// }

// combining default props and prop destructing

// function Button({text = 'Click Me!', color = 'blue', fontSize = 12}) {
//   const buttonStyle = {
//     color: color,
//     fontSize: fontSize + 'px'
//   }

//   return <button style={buttonStyle}>{text}</button>
// }

// functions as props

// function Button({text = 'Click Me!', color='blue', fontSize = 12, handleClick}) {
//   const buttonStyle = {
//     color: color,
//     fontSize: fontSize + 'px'
//   }

//   return (
//     <button onClick={handleClick} style={buttonStyle}>
//       {text}
//     </button>
//   )
// }

// export default function App() {
//   const handleButtonClick = () => {
//     window.location.href = 'http://www.google.com'
//   }

//   return (
//     <div>
//       <Button handleClick={handleButtonClick} />
//     </div>
//   )
// }

// function Button({
//   text = 'Click Me!', color = 'blue', fontSize = 12, handleClick,
// }) {
//   const buttonStyle = {
//     color,
//     fontSize: `${fontSize}px`,
//   };

//   return (
//     <button onClick={() => handleClick('https://www.theodinproject.com')} style={buttonStyle}>
//       {text}
//     </button>
//   );
// }

// export default function App() {
//   const handleButtonClick = (url) => {
//     window.location.href = url;
//   };

//   return (
//     <div>
//       <Button handleClick={handleButtonClick} />
//     </div>
//   );
// }

// function Avatar() {
//   return (
//     <img className="avatar" src="https://i.imgur.com/1bX5QH6.jpg" alt="Lin Laying" width={100} height={100} />
//   );
// }

// export default function Profile() {
//   return (
//     <Avatar />
//   );
// }

// pass props to the child component

// export default function Profile() {
//   return (
//     <Avatar person={{ name: 'Lin Laying', imageId: '1bX5QH6' }} />
//   );
// }

// read props inside the child component

// function Avatar({ person, size }) {
//   return (
//     <img className="avatar" src={getImageUrl(person)} alt={person.name}
// width={size} height={size} />
//   );
// }

// export default function Profile() {
//   return (
//     <div>
//       <Avatar
//         size={100}
//         person={{
//           name: 'Katsuko Saruhashi',
//           imageId: 'YfeOqp2',
//         }}
//       />
//       <Avatar
//         size={100}
//         person={{
//           name: 'Akliku Lemma',
//           imageId: 'OKS67lh',
//         }}
//       />
//       <Avatar
//         size={100}
//         person={{
//           name: 'Lin Lanying',
//           imageId: '1bX5QH6',
//         }}
//       />
//     </div>
//   );
// }

// export default function Avatar({ person, size }) {
//   return (
//     <img className="avatar" src={getImageUrl(person)} alt={person.name} width={size} height={size} />
//   );
// }

// export default function Clock({ color, time }) {
//   return (
//     <h1 style={{ color }}>{time}</h1>
//   );
// }

// first challenge

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <section className="profile">
//         <h2>Maria Sklodowska-Curie</h2>
//         <img className="avatar" src={getImageUrl('szV5sdG')} alt="Maria Sklodowska-Curie" width={70} height={70} />
//         <ul>
//           <li>
//             <b>Profession: </b>
//             physicist and chemist
//           </li>
//           <li>
//             <b>Awards: 4 </b>
//             (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
//           </li>
//           <li>
//             <b>Discovered: </b>
//             polonium (chemical element)
//           </li>
//         </ul>
//       </section>
//       <section className="profile">
//         <h2>Katsuko Saruhashi</h2>
//         <img className="avatar" src={getImageUrl('YfeOqp2')} alt="Katsuko Saruhashi" width={70} height={70} />
//         <ul>
//           <li>
//             <b>Profession: </b>
//             geochemist
//           </li>
//           <li>
//             <b>Awards: 2 </b>
//             (Miyake Prize for geochemistry, Tanaka Prize)
//           </li>
//           <li>Discovered: </li>
//           a method for measuring carbon dioxide in seawater
//         </ul>
//       </section>
//     </div>
//   );
// }

// function Profile({
//   person, size,
// }) {
//   return (
//     <div>
//       <section className="profile">
//         <h2>{person.name}</h2>
//         <img className="avatar" src={getImageUrl(person.imageId)} alt={person.name} width={size} height={size} />
//         <ul>
//           <li>
//             <b>Profession: </b>
//             {person.profession}
//           </li>
//           <li>
//             <b>
//               Awards:
//               {' '}
//               {person.awardsNumber}
//               {' '}
//             </b>
//             {person.awardsDescription}
//           </li>
//           <li>
//             <b>Discovered: </b>
//             <br />
//             {person.discovered}
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// }

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <Profile
//         person={{
//           name: 'Maria Sklodowska-Curie',
//           imageId: 'szV5sdG',
//           profession: 'physicist and chemist',
//           awardsNumber: 4,
//           awardsDescription: 'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal',
//           discovered: 'polonium (chemical element)',
//         }}
//         size={70}
//       />
//       <Profile
//         person={{
//           name: 'Katsuko Sarusashi',
//           imageId: 'YfeOqp2',
//           profession: 'geochemist',
//           awardsNumber: 2,
//           awardsDescription: 'Miyake Prize for geochemistry, Tanaka Prize',
//           discovered: 'a method for measuring carbon dioxide in seawater',
//         }}
//         size={70}
//       />
//     </div>
//   );
// }

// first solution

// function Profile({
//   imageId, name, profession, awards, discovery, imageSize = 70,
// }) {
//   return (
//     <section className="profile">
//       <h2>{name}</h2>
//       <img className="avatar" src={getImageUrl(imageId)} alt={name} width={imageSize} height={imageSize} />
//       <ul>
//         <li>
//           <b>Profession: </b>
//           {profession}
//         </li>
//         <li>
//           <b>
//             Awards:
//             {' '}
//             {awards.length}
//           </b>
//           (
//           {awards.join(', ')}
//           )
//         </li>
//         <li>
//           <b>Discovered: </b>
//           {discovery}
//         </li>
//       </ul>
//     </section>
//   );
// }

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <Profile
//         imageId="szV5sdG"
//         name="Maria Sklodowska-Curie"
//         profession="physicist and chemist"
//         discovery="polonium (chemical element)"
//         awards={[
//           'Nobel Prize in Physics',
//           'Nobel Prize in Chemistry',
//           'Davy Medal',
//           'Matteucci Medal',
//         ]}
//       />
//       <Profile
//         imageId="YfeOqp2"
//         name="Katsuko Saruhashi"
//         profession="geochemist"
//         discovery="a method for measuring carbon dioxide in seawater"
//         awards={[
//           'Miyake Prize for geochemistry',
//           'Tanaka Prize',
//         ]}
//       />
//     </div>
//   );
// }

// second solution

// function Profile({ person, imageSize = 70 }) {
//   const imageSrc = getImageUrl(person);

//   return (
//     <section className="profile">
//       <h2>{person.name}</h2>
//       <img className="avatar" src={imageSrc} alt={person.name} width={imageSize} height={imageSize} />
//       <ul>
//         <li>
//           <b>Profession: </b>
//           {' '}
//           {person.profession}
//         </li>
//         <li>
//           <b>
//             Awards:
//             {' '}
//             {person.awards.length}
//           </b>
//           (
//           {person.awards.join(', ')}
//           )
//         </li>
//         <li>
//           <b>Discovered: </b>
//           {person.discovery}
//         </li>
//       </ul>
//     </section>
//   );
// }

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <Profile person={{
//         imageId: 'szV5sdG',
//         name: 'Maria Skłodowska-Curie',
//         profession: 'physicist and chemist',
//         discovery: 'polonium (chemical element)',
//         awards: [
//           'Nobel Prize in Physics',
//           'Nobel Prize in Chemistry',
//           'Davy Medal',
//           'Matteucci Medal',
//         ],
//       }}
//       />
//       <Profile person={{
//         imageId: 'YfeOqp2',
//         name: 'Katsuko Saruhashi',
//         profession: 'geochemist',
//         discovery: 'a method for measuring carbon dioxide in seawater',
//         awards: [
//           'Miyake Prize for geochemistry',
//           'Tanaka Prize',
//         ],
//       }}
//       />
//     </div>
//   );
// }

// function Avatar({ person, size }) {
//   if (size < 90) {
//     return (
//       <img className="avatar" src={getImageUrl(person, 's')} alt={person.name} width={size} height={size} />
//     );
//   }
//   return (
//     <img className="avatar" src={getImageUrl(person, 'b')} alt={person.name} width={size} height={size} />
//   );
// }

// export default function Profile() {
//   return (
//     <Avatar
//       size={90}
//       person={{
//         name: 'Gregorio Y. Zara',
//         imageId: '7vQD0fP',
//       }}
//     />
//   );
// }

// solution

// function Avatar({ person, size }) {
//   let thumbnailSize = 's';
//   if (size > 90) {
//     thumbnailSize = 'b';
//   }

//   return (
//     <img className="avatar" src={getImageUrl(person, thumbnailSize)} alt={person.name} width={size} height={size} />
//   );
// }

// export default function Profile() {
//   return (
//     <>
//       <Avatar
//         size={40}
//         person={{
//           name: 'Gregorio Y. Zara',
//           imageId: '7vQD0fP',
//         }}
//       />
//       <Avatar
//         size={120}
//         person={{
//           name: 'Gregorio Y. Zara',
//           imageId: '7vQD0fP',
//         }}
//       />
//     </>
//   );
// }

// second solution

// const ratio = window.devicePixelRatio;

// function Avatar({ person, size }) {
//   let thumbnailSize = 's';
//   if (size * ratio > 90) {
//     thumbnailSize = 'b';
//   }

//   return (
//     <img className="avatar" src={getImageUrl(person, thumbnailSize)} alt={person.name} width={size} height={size} />
//   );
// }

// export default function Profile() {
//   return (
//     <>
//       <Avatar
//         size={40}
//         person={{
//           name: 'Gregorio Y. Zara',
//           imageId: '7vQD0fP',
//         }}
//       />
//       <Avatar
//         size={70}
//         person={{
//           name: 'Gregorio Y. Zara',
//           imageId: '7vQD0fP',
//         }}
//       />
//       <Avatar
//         size={120}
//         person={{
//           name: 'Gregorio Y. Zara',
//           imageId: '7vQD0fP',
//         }}
//       />
//     </>
//   );
// }

// third challenge

// export default function Avatar({ person, size }) {
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }
