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

//creating same component using props (properties)

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

//same example but this time using destructing

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

//using default props to prevent getting undefined values

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

//combining default props and prop destructing

// function Button({text = 'Click Me!', color = 'blue', fontSize = 12}) {
//   const buttonStyle = {
//     color: color,
//     fontSize: fontSize + 'px'
//   }

//   return <button style={buttonStyle}>{text}</button>
// }

//functions as props

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

function Button({text = 'Click Me!', color = 'blue', fontSize = 12, handleClick}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + 'px'
  }

  return (
    <button onClick={() => handleClick('https://www.theodinproject.com')}style={buttonStyle}>
    {text}
     </button>
  )
}

export default function App() {
  const handleButtonClick = (url) => {
    window.location.href = url
  }

  return (
    <div>
      <Button handleClick={handleButtonClick}/>
    </div>
  )
}