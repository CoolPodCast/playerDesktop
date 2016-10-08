import React from 'react';

class MenuButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
	        <button>
	          <i class="flaticon-plus"></i>
	          <div class="text">
	            Novo canal de feed
	          </div>
	        </button>
        );
    }
}

export default MenuButton;