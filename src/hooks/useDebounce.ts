import { useEffect, useState } from "react";

export const useDebounce = (value: string) => {
    const [debounce, setDebounce] = useState(value)

    useEffect(() => {
        const handle = setTimeout(() => {
            setDebounce(value)
        }, 500);

        return () => {
            clearTimeout(handle)
        }
    }, [debounce, value])

    return debounce;
};