import React from 'react'
import MenuItem from './Item';
import MenuButton from './Button';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
		var itensMenu = [ 
			<MenuItem key="1" description="NerdCast" imageUrl="images/channel1.jpg"/>,
			<MenuItem key="2" description="Trinity Force Podcast" imageUrl="images/channel2.jpg"/>,
			<MenuItem key="3" description="The One Shot Podcast" imageUrl="images/channel3.jpg"/>,
			<MenuItem key="4" description="Lambda3 Podcast" imageUrl="images/channel4.jpg"/>,
			<MenuItem key="5" description="Calibre Lordal" imageUrl="images/channel5.jpg"/>,
		];

        return (
            <div class="menu">
				<div class="bar">
			    	<div class="item selected">
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
			        {itensMenu}

					<div class="buttons">
			        	<MenuButton />
		        	</div>
		        </div>
  			</div>
        );
    }
}

export default Menu;