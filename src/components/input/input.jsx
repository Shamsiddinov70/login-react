import { forwardRef } from "react"

export const Input = forwardRef(({children, ...variables}, ref) => {
    return (
        <>
            <label htmlFor={variables.id}>{children}</label>
            <input ref={ref} {...variables} className={"form-control text-center my-3"}/>
        </>
    );
});