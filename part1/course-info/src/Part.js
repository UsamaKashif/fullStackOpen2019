import React from 'react';

function Part (props) {
    return(
        <div>
            <p>
                {props.part} {props.ex}
            </p>
        </div>
    )
}

export default Part