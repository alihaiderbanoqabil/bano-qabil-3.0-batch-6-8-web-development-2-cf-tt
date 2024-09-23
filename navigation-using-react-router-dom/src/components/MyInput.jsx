import { forwardRef } from 'react';

// export const MyInput = forwardRef(function MyInput(props, ref) {
//     const { label, ...otherProps } = props;
//     return (
//         <label>
//             {label}
//             <input {...otherProps} />
//         </label>
//     );
// });

const MyInput = (props, ref) => {
    const { label, ...otherProps } = props;
    console.log(props, ref);
    
    return (
        <label>
            {label}
            <input {...otherProps}  ref={ref} />
        </label>
    );
};

export default forwardRef(MyInput)