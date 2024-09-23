import { useRef } from "react";
import MyInput from "./MyInput";

export function Form() {
    const ref = useRef(null);

    function handleClick() {
        ref.current.focus();
        ref.current.style.backgroundColor = "yellow";
    }

    return (
        <form>
            <MyInput label="Enter your name:" ref={ref} />
            <button type="button" onClick={handleClick}>
                Edit
            </button>
        </form>
    );
}