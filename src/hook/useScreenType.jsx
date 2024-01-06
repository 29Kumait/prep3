import { useDebugValue } from 'react';
import useWindowSize from './useWindowSize';

const useScreenType = (minWidth, maxWidth, debugLabel) => {
    const { width } = useWindowSize(debugLabel);
    const isWithinRange = width >= minWidth && width <= maxWidth;

    useDebugValue(`${debugLabel}: ${isWithinRange ? 'Active' : 'Inactive'}`);

    return isWithinRange;
};

export default useScreenType;