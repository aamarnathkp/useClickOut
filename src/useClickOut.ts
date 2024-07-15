import { useEffect, useRef } from "react";

/**
 * This custom hook is used to handle the click event outside of a referenced component.
 * @param {Function} callback - The function to be called when click event outside of the referenced component occurs
 * @returns {React.RefObject} - The reference variable to be assigned to the component
 */

const useClickOut = (callback: () => void) => {
    const contentRef: React.RefObject<any> = useRef(null);

    useEffect(() => {
        const handleClickOutside = ({ target }: MouseEvent) => {
            if (!contentRef?.current?.contains(target as Node)) {
                callback();
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [callback, contentRef]);

    return contentRef;
};

export default useClickOut;
