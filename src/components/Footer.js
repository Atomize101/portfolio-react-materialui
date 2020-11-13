import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
	root: {
		'& .MuiBottomNavigationAction-root': {
			minWidth: 0,
			maxWidth: 250,
		},
		'& .MuiSvgIcon-root': {
			fill: 'tan',
			'&:hover': {
				fill: 'tomato',
				fontSize: '1.8rem',
			},
		},
	},
});

const Footer = () => {
	const classes = useStyles();
	return (
		<BottomNavigation width="auto" style={{ background: '#222' }}>
			<BottomNavigationAction
				className={classes.root}
				style={{ padding: 0 }}
				icon={<GitHubIcon />}
				href="https://github.com/Atomize101"
			/>
			<BottomNavigationAction
				className={classes.root}
				style={{ padding: 0 }}
				icon={<TwitterIcon />}
				href="https://twitter.com/atomize101"
			/>
			<BottomNavigationAction
				className={classes.root}
				style={{ padding: 0 }}
				icon={<LinkedInIcon />}
				href="https://www.linkedin.com/in/chris-patrick-29854138/"
			/>
		</BottomNavigation>
	);
};

export default Footer;
