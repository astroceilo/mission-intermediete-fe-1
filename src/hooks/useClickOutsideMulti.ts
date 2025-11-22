import { useEffect, type RefObject } from "react";


export default function useClickOutsideMulti(refs: RefObject<HTMLElement | null>[] = [], handler: (event: MouseEvent | TouchEvent) => void) {
    useEffect(() => {
        if (!Array.isArray(refs)) return;

        const listener = (event: MouseEvent | TouchEvent) => {
            // jika klik di dalam salah satu ref, abaikan
            if (refs.some((ref) => ref.current && ref.current.contains(event.target as Node))) {
                return;
            }

            handler(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [refs, handler]);
}
