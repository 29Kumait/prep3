import { useState, useEffect, useDebugValue } from 'react';

const useWindowSize = (debugLabel, minWidth, maxWidth) => {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [isInRange, setIsInRange] = useState(window.innerWidth >= minWidth && window.innerWidth <= maxWidth);

    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;
            setSize({ width: newWidth, height: newHeight });
            setIsInRange(newWidth >= minWidth && newWidth <= maxWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [minWidth, maxWidth]);

    useDebugValue(`${debugLabel}: ${size.width}x${size.height}`);

    return { ...size, isInRange };
};

export default useWindowSize;


// import { useState, useEffect, useDebugValue } from 'react';

// const useWindowSize = (debugLabel) => {
//     const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

//     useEffect(() => {
//         const handleResize = () => {
//             setSize({ width: window.innerWidth, height: window.innerHeight });
//         };
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     useDebugValue(`${debugLabel}: ${size.width}x${size.height}`);

//     return size;
// };

// export default useWindowSize;



// // const { width, height } = useWindowSize('ComponentName');