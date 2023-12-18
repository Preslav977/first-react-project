// function Item({name, isPacked}) {
//   return <li className='item'>{name}</li>
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride&apos;s Packing List</h1>
//       <ul>
//         <Item isPacked={true} name="Space suit"/>
//         <Item isPacked={true} name='Helmet with golden leaf' />
//         <Item isPacked={true} name='Photo of Tam' />
//       </ul>
//     </section>
//   )
// }

//using if statement to add is the checked is packed

// function Item({name, isPacked}) {
//   if(isPacked) {
//     return <li className='item'>{name} ✔</li>
//   }
//   return <li className='item'></li>
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride&apos;s Packing List</h1>
//       <ul>
//         <Item isPacked={true} name="Space suit"/>
//         <Item isPacked={true} name='Helmet with golden leaf' />
//         <Item isPacked={true} name='Photo of Tam' />
//       </ul>
//     </section>
//   )
// }

//using null to not render anything for example if the item is not packed

// function Item({name, isPacked}) {
//   if(isPacked) {
//     return null
//   }
//   return <li className='item'>{name}</li>
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride&apos;s Packing List</h1>
//       <ul>
//         <Item isPacked={true} name="Space suit"/>
//         <Item isPacked={true} name='Helmet with golden leaf' />
//         <Item isPacked={false} name='Photo of Tam' />
//       </ul>
//     </section>
//   )
// }

//using ternary operator

// function Item({name, isPacked}) {
//   return (
//     <li className='item'>
//       {isPacked ? (
//         <del>
//           {name + " ✔"}
//         </del>
//       ) : (
//         name
//       )
//     }
//     </li>
//   )
//   }
  
//   export default function PackingList() {
//     return (
//       <section>
//         <h1>Sally Ride&apos;s Packing List</h1>
//         <ul>
//           <Item isPacked={true} name="Space suit"/>
//           <Item isPacked={true} name='Helmet with golden leaf' />
//           <Item isPacked={false} name='Photo of Tam' />
//         </ul>
//       </section>
//     )
//   }

  //using && operator

  // function Item({name, isPacked}) {
  //   return (
  //     <li className='item'>
  //       {name} {isPacked && "✔"}
  //     </li>
  //   )
  // }



  //   export default function PackingList() {
  //   return (
  //     <section>
  //       <h1>Sally Ride&apos;s Packing List</h1>
  //       <ul>
  //         <Item isPacked={true} name="Space suit"/>
  //         <Item isPacked={true} name='Helmet with golden leaf' />
  //         <Item isPacked={false} name='Photo of Tam' />
  //       </ul>
  //     </section>
  //   )
  // }


  //condition assigning JSX to variable

  // function Item({name,isPacked}) {
  //   let itemContent = name

  //   if(isPacked) {
  //     itemContent = name + " ✔"
  //   }

  //   return (
  //     <li className='item'>
  //       {itemContent}
  //     </li>
  //   )
  // }


  //   export default function PackingList() {
  //   return (
  //     <section>
  //       <h1>Sally Ride&apos;s Packing List</h1>
  //       <ul>
  //         <Item isPacked={true} name="Space suit"/>
  //         <Item isPacked={true} name='Helmet with golden leaf' />
  //         <Item isPacked={false} name='Photo of Tam' />
  //       </ul>
  //     </section>
  //   )
  // }

  //same example but wrapping the itemContent in del element

  // function Item({name,isPacked}) {
  //   let itemContent = name

  //   if(isPacked) {
  //     itemContent = (
  //       <del>
  //       {name + " ✔"}
  //       </del>
  //     )
  //   }

  //   return (
  //     <li className='item'>
  //       {itemContent}
  //     </li>
  //   )
  // }


  //   export default function PackingList() {
  //   return (
  //     <section>
  //       <h1>Sally Ride&apos;s Packing List</h1>
  //       <ul>
  //         <Item isPacked={true} name="Space suit"/>
  //         <Item isPacked={true} name='Helmet with golden leaf' />
  //         <Item isPacked={false} name='Photo of Tam' />
  //       </ul>
  //     </section>
  //   )
  // }


  //First Challenge

  // function Item({ name, isPacked }) {
  //   return (
  //     <li className="item">
  //       {/* {name} {isPacked ? name + ' ✔' : name + '❌'} */}
  //       {name} {isPacked ? ' ✔' : '❌' }
  //     </li>
  //   );
  // }
  
  // export default function PackingList() {
  //   return (
  //     <section>
  //       <h1>Sally Ride's Packing List</h1>
  //       <ul>
  //         <Item 
  //           isPacked={true} 
  //           name="Space suit" 
  //         />
  //         <Item 
  //           isPacked={true} 
  //           name="Helmet with a golden leaf" 
  //         />
  //         <Item 
  //           isPacked={false} 
  //           name="Photo of Tam" 
  //         />
  //       </ul>
  //     </section>
  //   );
  // }

  //Second challenge

  // function Item({ name, importance }) {
  //   return (
  //     <li className="item">
  //       {name} {importance > 0 &&  " "}
  //       {importance > 0 && <i>(Importance: {importance})</i>  }
  //     </li>
  //   );
  // }
  
  // export default function PackingList() {
  //   return (
  //     <section>
  //       <h1>Sally Ride's Packing List</h1>
  //       <ul>
  //         <Item 
  //           importance={9} 
  //           name="Space suit" 
  //         />
  //         <Item 
  //           importance={0} 
  //           name="Helmet with a golden leaf" 
  //         />
  //         <Item 
  //           importance={6} 
  //           name="Photo of Tam" 
  //         />
  //       </ul>
  //     </section>
  //   );
  // }
  
  //Third challenge

  // <dt>Part of plant</dt>
  // <dd>{name === 'tea' ? 'leaf' : 'bean'}</dd>
  // <dd>{name === 'tea' ? '15–70 mg/cup' : '80–185 mg/cup'}</dd>
  // <dt>Age</dt>
  // <dd>{name === 'tea' ? '4,000+ years' : '1,000+ years'}</dd>

  function Drink({ name, type }) {

    if(name === 'tea' && type === 'leaf') {
      return (
        <section>
          <h1>{name}</h1>
          <dl>
            <dt>Part of plant</dt>
            <dd>{type}</dd>
            <dt>Caffeine content</dt>
            <dd>{'17-70 mg/cup'}</dd>
            <dt>Age</dt>
            <dd>{'4000+ years'}</dd>
          </dl>
        </section>
      )
  }
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{type}</dd>
        <dt>Caffeine content</dt>
        <dd>{'80-185 mg/cup'}</dd>
        <dt>Age</dt>
        <dd>{'1000+ years'}</dd>
      </dl>
    </section>
  )
}

//solution 

function Drink({name}) {
  let part, caffeine, age;
  if(name === 'tea') {
    part = 'leaf'
    caffeine = '15-70 mg/cup'
    age = '4,000+ years'
  } else if (name === 'coffee') {
    part = 'bean'
    caffeine = '80-185 mg/cup'
    age = '1,000+ years'
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plan</dt>
        <dd>{part}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeine}</dd>
        <dt>{Age}</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  )
}

  
  export default function DrinkList() {
    return (
      <div>
        <Drink name="tea" />
        <Drink name="coffee" />
      </div>
    );
  }