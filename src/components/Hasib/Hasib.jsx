import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

const Hasib = () => {
    const ref = useRef();
    return (
        <div ref={ref}  className='my-container'>
            <h1 >This is Hasib</h1>
            <ReactToPrint trigger={() =><button className='btn btn-primary'>Print</button>} content={() => ref.current}></ReactToPrint>
        </div>
    );
};

export default Hasib;