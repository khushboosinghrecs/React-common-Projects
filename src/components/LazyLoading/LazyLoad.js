import React ,{Suspense, lazy} from 'react'
const Home  = lazy(()=> import('./Home'));
const About = lazy (()=> import('./About'))
// the component which is getting ready phle usko phle load krwa denge jo component bad me ready ho rha hai use bad me load krwa denge
// code splitting the in one component some code is getting ready first and some are on late so the one which is getting ready first will load first and then last
export default function LazyLoad() {
  return (
    <div>
      <h1>Lazy Load</h1>
      <Suspense fallback ={<div>Pls wait.....</div>} >
      <Home />
      </Suspense>
      <Suspense fallback ={<div>Pls wait.....</div>} >
      <About />
      </Suspense>
    </div>
  )
}
