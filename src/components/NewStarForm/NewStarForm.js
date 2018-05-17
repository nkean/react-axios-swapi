import React from 'react';

const NewStarForm = props => (
        <form onSubmit={props.handleSubmit}>
            <input value={props.newStar.name} onChange={props.handleChangeFor('name')} placeholder="Star Name" />
            <input value={props.newStar.diameter} onChange={props.handleChangeFor('diameter')} placeholder="Diameter in suns" />
            <input type="submit" value="Click me to submit form!" />
        </form>
    );

export default NewStarForm;