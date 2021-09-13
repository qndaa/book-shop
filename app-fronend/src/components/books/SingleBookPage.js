import React from "react";


const SingleBookPage = (props) => {

    const { id } = props.match.params;

    return (
        <div>
            {id}
        </div>
    )

}

export default SingleBookPage;
