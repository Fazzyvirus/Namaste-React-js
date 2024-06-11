# Namaste React🚀

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - Weitten in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundeling - Support Older Browsers
- Diagnostic
- Good Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod budles


//JSX - is not HTML in JS although it is HTML or Xml -like syntax
//JSX (transpile before it reaches JS) - PARCEL - Babel
// JSX => Babel transpile => React.createElement => ReactElement-JS Object => HTMLElement(render)

const Title = () => (
  <h1 className="heading" tabIndex="1">
    Namaste React Title as component using arrow function 🚀
  </h1>
);

// const Title = function () {
//     return (
//       <h1 className="heading" tabIndex="1">
//         Namaste React Title as component but using normal function 🚀
//       </h1>
//     );
//   };
const elem = <span>React Element</span>;

const titles = (
  <h1 className="heading" tabIndex="1">
    {elem}
    Namaste React Title using element 🚀
  </h1>
);
// React Component
// Class Based Component - OLD
// Functional Component - NEW

//React Functional Component

// Component Composition
const HeadingComponent = () => (
  <div id="container">
    <Title />
    {Title()}
    <Title></Title>
    <h2>
      {console.log("you can write js code using these parenthesis anywhere")}
    </h2>
    <h1 className="heading">Namaste React Functional Component🚀</h1>
  </div>
);

Two types of Export/Import 

- Default Export/Import
export default Component;
import Component from "path";

- Named Export/Import
export const Component;
import {Component} from "path";