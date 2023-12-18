// export default function TodoList() {
//   return (
//     <h1>Hedy Lamarr&apos; Todos</h1>
// <img src="https://i.imgur.com/yXOVd0Ss.jpg" alt="Hedy Lamarr" class='photo' />
// <ul>
//   <li>Invert new traffic lights</li>
//   <li>Rehearse a moves scene</li>
//   <li>Improve the spectrum technology</li>
// </ul>

//   )
// }


//JSX rule expect to have one parent element
//could be either div tag or <>
{/* <div>
<h1>Hedy Lamarr&apos; Todos</h1>
<img src="https://i.imgur.com/yXOVd0Ss.jpg" alt="Hedy Lamarr" class='photo' />
<ul>
  <li>Invert new traffic lights</li>
  <li>Rehearse a moves scene</li>
  <li>Improve the spectrum technology</li>
</ul>
</div> */}



//this empty tag is called a fragment that lets to group multiple elements
//without leaving any trace in the browser HTML tree
//  <>
// <h1>Hedy Lamarr&apos; Todos</h1>
// <img src="https://i.imgur.com/yXOVd0Ss.jpg" alt="Hedy Lamarr" class='photo' />
// <ul>
//   <li>Invert new traffic lights</li>
//   <li>Rehearse a moves scene</li>
//   <li>Improve the spectrum technology</li>
// </ul>
// </> 

//All tags must be close even input which is self closing element
{/* <>
<h1>Hedy Lamarr&apos; Todos</h1>
<img src="https://i.imgur.com/yXOVd0Ss.jpg" alt="Hedy Lamarr" class='photo' />
<ul>
  <li>Invert new traffic lights</li>
  <li>Rehearse a moves scene</li>
  <li>Improve the spectrum technology</li>
</ul>
</>  */}

//use camelCase for most of the things, to prevent using reversed words
//dont use dash
{/* <img src="https://i.imgur.com/yXOvdOSs.jpg"  alt="Hedy Lamarr" className='photo' /> */}

// export default function TodoList() {
//   return (
//     <>
//     <h1>Hedy Lamarr&apos; Todos</h1>
// <img src="https://i.imgur.com/yXOvdOSs.jpg"  alt="Hedy Lamarr" className='photo' />
// <ul>
//   <li>Invert new traffic lights</li>
//   <li>Rehearse a moves scene</li>
//   <li>Improve the spectrum technology</li>
// </ul>
// </>
//   )
// }

//Challenge convert HTML to JSX

// export default function Bio() {
//   return (
//     <>
//     <div class="intro">
//       <h1>Welcome to my website!</h1>
//     </div>
//     <p class="summary">
//       You can find my thoughts here.
//       <br></br>
//       <b>And <i>pictures<br/><i/>of scientists!
//     </p>
//     </>
//   );
// }

export default function Bio() {
  return (
    <>
    <div className='intro'>
      <h1>Welcome to my website</h1>
      <p className='summary'>
        You can find my thoughts here.
        <br></br>
        <b>And <i>pictures</i></b> of scientists: 
      </p>
    </div>
    </>
  )
}