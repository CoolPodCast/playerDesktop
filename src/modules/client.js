import React from 'react';
import ReactDOM from 'react-dom';

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        console.log(this);
    }

    render() {
        return (
	        <div class="item selected">
		        <div class="avatar" style={{backgroundImage:`url(${this.props.imageUrl})`}}></div>
		        <h1>{this.props.description}</h1>
		        <p>Último episódio à 20min</p>
	        </div>
        );
    }
}

class MenuButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
	      <div class="buttons">
	        <button>
	          <i class="flaticon-plus"></i>
	          <div class="text">
	            Novo canal de feed
	          </div>
	        </button>
	      </div>
        );
    }
}

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
		var itensMenu = [ 
			<MenuItem description="NerdCast" image-url="images/channel1.jpg"/>,
			<MenuItem description="Trinity Force Podcast" image-url="images/channel2.jpg"/>,
			<MenuItem description="The One Shot Podcast" image-url="images/channel3.jpg"/>,
			<MenuItem description="Lambda3 Podcast" image-url="images/channel4jpg"/>,
		];

        return (
            <div class="menu">
				<div class="bar">
			    	<div class="item">
			        	<div class="avatar avatar-cool"></div>
				        <div class="actions">
				          <i class="flaticon-musica-searcher"></i>
				          <i class="flaticon-more"></i>
				        </div>
			        	<h1>Todos os feeds</h1>
			      	</div>
			    </div>
			    <div class="line"></div>
			    <div class="channels">
		        </div>
		        <MenuButton />
  			</div>
        );
    }
}

class FeedTitle extends Component {
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

class FeedList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div></div>
        );
    }
}

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FeedTitle />
            <FeedList />
        );
    }
}

class Layout extends React.Component {
    render() {
        return (
        	<Menu/> 
        	<Content/>
    	);
    }
}

const app = document.body;

ReactDOM.render(<Layout/>, app);
