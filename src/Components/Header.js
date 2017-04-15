import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class Header extends React.Component {
	render () {
		return (
		<div>
			<AppBar
          		title="Linr Notes"
          		iconElementRight={<IconButton iconClassName="fa fa-github" color={'white'} href="https://github.com/CoreyAR/community-mapping-hackathon/tree/legal-hack"/>}
        	/>
		</div>
		)
	}
}

export default Header