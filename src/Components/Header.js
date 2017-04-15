import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';

class Header extends React.Component {
	render () {
		return (
		<div>
			<AppBar
        title="Linr Notes"
      	iconElementRight={<IconButton iconClassName="fa fa-github" color={'white'} href="https://github.com/CoreyAR/linr-notes-front"/>}
      />
		</div>
		)
	}
}

export default Header
