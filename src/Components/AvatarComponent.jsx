// AvatarComponent.js
import { useState, useEffect } from 'react';
import { BigHead } from '@bigheads/core';

const getRandomProperty = (options) => {
  return options[Math.floor(Math.random() * options.length)];
};

const AvatarComponent = ({ name, fixedProps }) => {
  const [dynamicProps, setDynamicProps] = useState({});

  useEffect(() => {
    // Define arrays of properties for hat, color, etc.
    const hat = getRandomProperty(['beanie', 'turban', 'none']);
    const hatColor = getRandomProperty(['blue', 'black', 'green']);
    // ... other dynamic properties

    setDynamicProps({ hat, hatColor /* ... other dynamic properties */ });
  }, [name]); // Re-run when name changes, i.e., when screen size changes

  return (
    <div>
      <BigHead {...fixedProps} {...dynamicProps} />
    </div>
  );
};

export default AvatarComponent;




// import useWindowSize from '../hook/useWindowSize'
// import { useState, useEffect } from 'react';
// import { BigHead } from '@bigheads/core'

// const randomProperty = (properties) => properties[Math.floor(Math.random() * properties.length)];

// const hats = ['none', 'beanie', 'cap', 'hijab', 'turban', 'longhair', 'shorthair', 'eyepatch', 'hat'];
// const colors = ['black', 'blue', 'gray', 'green', 'red', 'white', 'yellow'];
// const accessories = ['none', 'kurt', 'prescription01', 'prescription02', 'round', 'sunglasses', 'wayfarers'];
// const clothes = ['blazer', 'sweater', 'shirt', 'hoodie', 'plain'];
// const graphics = ['none', 'skull', 'resist', 'pizza', 'bear', 'diamond', 'hola', 'deer', 'donut', 'robot', 'bike', 'sushi'];


// export const AvatarComponent = () => {
//   const { width, height } = useWindowSize(700, 1000);
//   const [avatarProps, setAvatarProps] = useState({});

//   useEffect(() => {
//     setAvatarProps({
//       hat: randomProperty(hats),
//       hatColor: randomProperty(colors),
//       accessory: randomProperty(accessories),
//       clothing: randomProperty(clothes),
//       clothingColor: randomProperty(colors),
//       graphic: randomProperty(graphics),
//       facialHair: 'none',
//       lipColor: 'red',
//       skinTone: 'light',
//     });
//   }, [width]);

//   const name = width > 1000 ? 'Mithi' : width < 700 ? 'Mikong' : 'Diana';

//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>Height: {height}, Width: {width}</p>
//       {/* <BigHead {...avatarProps} /> */}
//       <BigHead />
//     </div>
//   );
// };