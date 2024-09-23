import React, { FC } from 'react'
import { Spinner, SpinnerProps } from 'react-bootstrap'
interface LoaderProps extends SpinnerProps {
    color: string;

}

const Loader: FC<LoaderProps> = ({ color, ...restProps }) => {
    return (
        <div style={{ width: "100vw", height: '100vh', backgroundColor: color }}>
            <Spinner animation={"border"} {...restProps}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>

    )
}

export default Loader