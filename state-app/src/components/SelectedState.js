import React from 'react';

const SelectedState = (props) => {
    console.log(props)
    return (
        <div>
            <h1> { props.selectedState } </h1>
        </div>
    );
};

export default SelectedState;