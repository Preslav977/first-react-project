function JSXPractice() {
  return (
    <>
  <h1>Example h1</h1>
  <h2>Example h2</h2>
  </>
  //<> could be replaced with a <div> tag
  )
}


function IncorrectJSXParentElementSyntax() {
  return (
    <h1>Example h1</h1>
    <h2>Example h2</h2>
  )
}

function AllElementsMustHaveClosedTags() {
  return (
    <>
    <input/>
    <li></li>
    </>
  )
}

function IncorrectAllElementsMustHaveClosedTags() {
  return (
    <>
    <input>
    </li>
    </>
  )
}

function camelCaseExample() {
  return (
    <>
    <div className='container'>
    <svg>
      <circle cx="25" cy="25" r="20" stroke='green' strokeWidth="2" />
    </svg>
    </div>
    </>
  )
}

function IncorrectCamelCaseExample() {
  return (
    <>
    <div className='container'>
      <svg>
        <circle cx="25" cy="75" r="20" stroke='green' stroke-width="2" />
      </svg>
    </div>
    </>
  )
}

function convertHTMLToJSX() {
  <div>
  <h1>Test title</h1>
  <ol className='test-list'>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </ol>
  <svg>
    <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
  </svg>
  <form><input type="text" /></form>
  </div>
}