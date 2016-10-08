import React from 'react';

class FeedTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div>	
	            <div class="bar">
			      <div class="item">
			        <div class="avatar avatar-cool"></div>
			        <h1>Todos os feeds</h1>
			      </div>
			    </div>
			    <div class="line"></div>
		    </div>
        );
    }
}

export default FeedTitle;