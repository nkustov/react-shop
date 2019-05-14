import React from 'react';
import withStyles from 'react-jss';
import Block from 'components/Block';

export default withStyles({
	root: {
		top: 0,
		left: 0,
		width: '100%',
		height: 42,
		position: 'fixed',
		display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: '#2e7d32'
	}
})(({ 
	children,
	classes
}) => (
	<Block className={classes.root}>
		{children}
	</Block>
));