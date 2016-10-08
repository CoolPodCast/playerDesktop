import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu/SideBar';
import Content from './components/Feed/Content';

class Layout extends React.Component {
    render() {
        return (
        	<div>
	        	<Menu/> 
	        	<Content/>
        	</div>
    	);
    }
}

const app = document.getElementById("app");
ReactDOM.render(<Layout/>, app);