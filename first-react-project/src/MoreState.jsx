import { useState } from 'react';

// export default function Form() {
//   const [isSent, setIsSent] = useState(false);
//   const [message, setMessage] = useState('Hi!');
//   if (isSent) {
//     return <h1>Your message is on its way!</h1>;
//   }

//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       setIsSent(true);
//       sendMessage(message);
//     }}
//     >
//       <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
//       <button type="submit">Send</button>
//     </form>
//   );
// }

// function sendMessage(message) {
//   console.log(message);
// }

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(number + 1);
//         setNumber(number + 1);
//         setNumber(number + 1);
//       }}
//       >
//         +3

//       </button>
//     </>
//   );
// }

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(number + 5);
//         alert(number);
//       }}
//       >
//         +5

//       </button>
//     </>
//   );
// }

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(number + 5);
//         setTimeout(() => {
//           alert(number);
//         }, 3000);
//       }}
//       >
//         +5

//       </button>
//     </>
//   );
// }

// export default function Form() {
//   const [to, setTo] = useState('Alice');
//   const [message, setMessage] = useState('Hello');

//   function handleSubmit(e) {
//     e.preventDefault();
//     setTimeout(() => {
//       alert(`You said ${message} to ${to}`);
//     }, 5000);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         To:
//         {' '}
//         <select value={to} onChange={(e) => setTo(e.target.value)}>
//           <option value="Alice">Alice</option>
//           <option value="Bob">Bob</option>
//         </select>
//       </label>
//       <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.validationMessage)} />
//       <button type="submit">Send</button>
//     </form>
//   );
// }

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    // alert(walk ? 'Stop is next' : 'Walk is next');
    setWalk(!walk);
    alert(walk ? 'Stop is next' : 'Walk is next');
  }

  return (
    <>
      <button onClick={handleClick}>
        Change to
        {' '}
        {walk ? 'Stop' : 'Walk'}
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred',
      }}
      >
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  );
}
