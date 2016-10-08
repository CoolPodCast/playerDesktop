import React from 'react';

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
	        <div class="item">
		        <div class="avatar" style={{backgroundImage:`url(${this.props.imageUrl})`}}></div>
		        <h1>{this.props.description}</h1>
		        <p>Último episódio à 20min</p>
	        </div>
        );
    }
}

export default MenuItem;