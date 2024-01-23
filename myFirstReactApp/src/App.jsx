import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { puppyList } from './data'

// function App() {
//  // const [count, setCount] = useState(0)
// const [puppies, setPuppies] = useState(puppyList)
// console.log(puppyList);
//   return (
//     <>
//       {<div>
//           { 
//             puppies.map((puppy) => {
//               return <p>{puppy.name}</p>
//             })
//           }
//       </div>
      
      
//       /* <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>
//   )
// }
function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  console.log("puppyList: ", puppyList);
  function handleClick() {
   
    // some logic here
  }
  return (
    <div className="App">
      {
        puppies.map((puppy) => {
              return <p onClick={() => console.log("puppy id:",puppy.id)} key={puppy.id}> 
               {puppy.name}</p>;
            //return <p onClick={handleClick} key={puppy.id}>{puppy.name}</p>
           })
       }
       {/* {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )} */}
    </div>
  );
}

export default App
