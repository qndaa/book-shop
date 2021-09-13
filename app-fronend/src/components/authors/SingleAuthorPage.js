import React from "react";

const SingleAuthorPage = (props) => {

    const { id } = props.match.params;

    return (
        <div>
            {id}
        </div>
    )
}

export default SingleAuthorPage;
