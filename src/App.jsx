// App.jsx
import AvatarComponent from '../src/Components/AvatarComponent';
import useScreenType from '../src/hook/useScreenType';

const App = () => {
  const isBigScreen = useScreenType(1001, Infinity, 'BigScreen');
  const isMediumScreen = useScreenType(701, 1000, 'MediumScreen');
  const isSmallScreen = useScreenType(0, 700, 'SmallScreen');

  // Fixed properties for each avatar
  const fixedPropsMithi = { /* ... */ };
  const fixedPropsDiana = { /* ... */ };
  const fixedPropsMikong = { /* ... */ };

  return (
    <div>
      {isBigScreen && <AvatarComponent name="Mithi" fixedProps={fixedPropsMithi} />}
      {isMediumScreen && <AvatarComponent name="Diana" fixedProps={fixedPropsDiana} />}
      {isSmallScreen && <AvatarComponent name="Mikong" fixedProps={fixedPropsMikong} />}
    </div>
  );
};

export default App;





// import { AvatarComponent } from '../src/Components/AvatarComponent';
// function App() {
//   return (
//     <div className="App">
//       <AvatarComponent />
//     </div>
//   );
// }

// export default App;



// import { AvatarComponent } from '../src/Components/AvatarComponent';
// function App() {
//   return (
//     <div className="App">
//       <AvatarComponent
//         name="Mithi"
//         hat="beanie"
//         hatColor="black"
//         accessory="roundGlasses"
//         clothing="hoodie"
//         clothingColor="black"
//         graphic="none"
//       />

//       <AvatarComponent
//         name="Diana"
//         hat="none"
//         hatColor="black"
//         accessory="sunglasses"
//         clothing="blazer"
//         clothingColor="green"
//         graphic="none"
//       />

//       <AvatarComponent
//         name="Mikong"
//         hat="cap"
//         hatColor="blue"
//         accessory="none"
//         clothing="shirt"
//         clothingColor="red"
//         graphic="cat"
//       />
//     </div>
//   );
// }

// export default App;