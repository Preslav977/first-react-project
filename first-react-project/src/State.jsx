import { useState } from 'react';
/* eslint-disable react/react-in-jsx-scope */
// import { sculptureList } from './first-react-project/src/data';
// import './first-react-project/src/App.css';

// export default function Gallery() {
//   // let index = 0;

//   const [index, setIndex] = useState(0);

//   function handleClick() {
//     setIndex(index + 1);
//   }

//   const sculpture = sculptureList[index];

//   return (
//     <>
//       <button onClick={handleClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name}</i>
//         by
//         {' '}
//         {sculpture.artist}
//       </h2>
//       <h3>
//         (
//         {index + 1}
//         {' '}
//         of
//         {' '}
//         {sculptureList.length}
//         )
//       </h3>
//       <img src={sculpture.url} alt={sculpture.alt} />
//       <p>{sculpture.description}</p>
//     </>
//   );
// }

// two states

// export default function Gallery() {
//   // let index = 0;

//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   function handleClick() {
//     setIndex(index + 1);
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   const sculpture = sculptureList[index];

//   return (
//     <>
//       <button onClick={handleClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name}</i>
//         by
//         {' '}
//         {sculpture.artist}
//       </h2>
//       <h3>
//         (
//         {index + 1}
//         {' '}
//         of
//         {' '}
//         {sculptureList.length}
//         )
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'}
//         {' '}
//         details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img src={sculpture.url} alt={sculpture.alt} />
//     </>
//   );
// }

// first challenge

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   function handleNextClick() {
//     if (index > 10) {
//       return setIndex;
//     }
//     setIndex(index + 1);
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   function handlePreviousClick() {
//     if (index <= 0) {
//       return setIndex;
//     }
//     setIndex(index - 1);
//   }

//   const sculpture = sculptureList[index];

//   return (
//     <>
//       <button onClick={handleNextClick}>
//         Next
//       </button>
//       <button onClick={handlePreviousClick}>
//         Previous
//       </button>
//       <h2>
//         <i>
//           {sculpture.name}
//           {' '}
//         </i>
//         by
//         {' '}
//         {sculpture.artist}
//       </h2>
//       <h3>
//         (
//         {index + 1}
//         {' '}
//         of
//         {' '}
//         {sculptureList.length}
//         )
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'}
//         {' '}
//         details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }

// solution

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   const hasPrev = index > 0;
//   const hasNext = index < sculptureList.length - 1;

//   function handlePrevClick() {
//     if (hasPrev) {
//       setIndex(index - 1);
//     }
//   }

//   function handleNextClick() {
//     if (hasNext) {
//       setIndex(index + 1);
//     }
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   const sculpture = sculptureList[index];
//   return (
//     <>
//       <button
//         onClick={handlePrevClick}
//         disabled={!hasPrev}
//       >
//         Previous
//       </button>
//       <button
//         onClick={handleNextClick}
//         disabled={!hasNext}
//       >
//         Next
//       </button>
//       <h2>
//         <i>
//           {sculpture.name}
//           {' '}
//         </i>
//         by
//         {' '}
//         {sculpture.artist}
//       </h2>
//       <h3>
//         (
//         {index + 1}
//         {' '}
//         of
//         {' '}
//         {sculptureList.length}
//         )
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'}
//         {' '}
//         details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }

// second challenge

// export default function Form() {
//   // let firstName = '';
//   // let lastName = '';

//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   function handleFirstNameChange(e) {
//     // firstName = e.target.value;
//     // setFirstName(firstName = e.target.value);
//     // solution
//     setFirstName(e.target.value);
//   }

//   function handleLastNameChange(e) {
//     // lastName = e.target.value;
//     // setLastName(lastName = e.target.value);
//     // solution
//     setLastName(e.target.value);
//   }

//   function handleReset() {
//     // firstName = '';
//     // lastName = '';
//     // if (firstName !== '' ** lastName) {
//     //   setFirstName(firstName = '');
//     //   setLastName(lastName = '');
//     // }

//     // solution
//     setFirstName('');
//     setLastName('');
//   }

//   return (
//     <form onSubmit={(e) => e.preventDefault()}>
//       <input placeholder="First name" value={firstName} onChange={handleFirstNameChange} />
//       <input placeholder="Last name" value={lastName} onChange={handleLastNameChange} />
//       <h1>
//         Hi,
//         {' '}
//         {firstName}
//         {' '}
//         {lastName}
//       </h1>
//       <button onClick={handleReset}>Reset</button>
//     </form>
//   );
// }

// export default function FeedbackForm() {
//   const [isSent, setIsSent] = useState(false);
//   // hooks should only be called on top of component function
//   const [message, setMessage] = useState('');

//   if (isSent) {
//     return <h1>Thank you!</h1>;
//   }

//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       alert(`Sending
//       "${message}"
//       `);
//       setIsSent(true);
//     }}
//     >

//       <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
//       <br />
//       <button type="submit">Send</button>
//     </form>
//   );
// }

// export default function FeedbackForm() {
//   // const [name, setName] = useState('');

//   function handleClick() {
//     // setName(('What is your name'));
//     const name = prompt('What is your name');
//     alert(`Hello ${name}:`);
//   }

//   return (
//     <button onClick={handleClick}>
//       Greet
//     </button>
//   );
// }

// const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple'];

// export default function App() {
//   const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
//   // const [countChangedBackgroundColor, setCountChangedBackgroundColor] = useState(0);

//   const onButtonClick = (color) => () => {
//     setBackgroundColor(color);
//   };

//   function handleCountingBackgroundChanges() {
//     setBackgroundColor(backgroundColor + 1);
//   }

//   return (
//     <div
//       className="App"
//       style={{
//         backgroundColor,
//       }}
//     >
//       {COLORS.map((color) => (
//         <button type="button" key={color} onClick={onButtonClick(color)} className={backgroundColor === color ? 'selection' : ''}>
//           {color}
//         </button>
//       ))}
//       <div onClick={handleCountingBackgroundChanges}>{setBackgroundColor}</div>
//     </div>
//   );
// }

// export default function Person() {
//   const [person, setPerson] = useState({ name: 'John', age: 100 });

//   // BAD, since it's mutating the current state object
//   // const handleIncreaseAge = () => {
//   //   person.age += 1;
//   //   setPerson(person);
//   // };

//   // GOOD, because it's copying the object into a new one
//   // while updating the property
//   const handleIncreaseAge = () => {
//     const newPerson = { ...person, age: person.age + 1 };
//     setPerson(newPerson);
//   };

//   return (
//     <>
//       <h1>{person.name}</h1>
//       <h2>{person.age}</h2>
//       <button onClick={handleIncreaseAge}>Increase Age</button>
//     </>
//   );
// }

// export default function Person() {
//   const [person, setPerson] = useState({ name: 'John', age: 100 });

//   const handleIncreaseAge = () => {
//     console.log('in handleIncreaseAge (before setPerson call): ', person);
//     // setPerson({ ...person, age: person.age + 1 });
//     // setPerson({ ...person, age: person.age + 1 });

//     setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
//     setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));

//     console.log('in handleIncreaseAge (after setPerson call): ', person);
//   };

//   console.log('during render: ', person);

//   return (
//     <>
//       <h1>{person.name}</h1>
//       <h2>{person.age}</h2>
//       <button onClick={handleIncreaseAge}>Increase Age</button>
//     </>
//   );
// }

// export default function Time() {
//   const [time, setTime] = useState(new Date());

//   setTime(new Date());

//   return (
//     <h1>{time.toLocaleTimeString()}</h1>
//   );
// }

// export default function CustomInput() {
//   const [value, setValue] = useState('');

//   return (
//     <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
//   );
// }
