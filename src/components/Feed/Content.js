import React from 'react';
import FeedTitle from './Title';
import FeedList from './List';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div>
	            <FeedTitle />
	            <FeedList />
            </div>
        );
    }
}

export default Content;