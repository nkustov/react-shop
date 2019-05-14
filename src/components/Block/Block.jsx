import React from 'react';
import withStyles from 'react-jss';

export default withStyles({
	root: {
		padding: 6,
		overflow: 'hidden',
		position: 'relative',
		transition: 'all 0.2s ease-out'
	}
})(({
	children,
	className = '',
	classes
}) => (
	<div className={classes.root +' '+ className}>
		{children}
	</div>
));