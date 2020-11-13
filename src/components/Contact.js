import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Navbar from './Navbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
	form: {
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		position: 'absolute',
	},
	button: {
		justifyContent: 'center',
		marginTop: '1rem',
		color: 'tomato',
		borderColor: 'tomato',
	},
}));

const InputField = withStyles({
	root: {
		'& label.Mui-focused': {
			color: 'tomato',
		},
		'& label': {
			color: 'tan',
		},
		'&.MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'tan',
			},
			'&:hover fieldset': {
				borderColor: 'tan',
			},
			'&.Mui-focused fieldset': {
				borderColor: 'tan',
			},
		},
	},
})(TextField);

const Contact = () => {
	const classes = useStyles();

	return (
		<Box component="div" style={{ background: '#233', height: '100vh' }}>
			<Navbar />
			<Grid container justify="center">
				<Box component="form" className={classes.form}>
					<Typography
						variant="h5"
						style={{ color: 'tomato', textAlign: 'center', textTransform: 'uppercase' }}
					>
						Contact me...
					</Typography>
					{/*
					<InputField
						fullwidth={true}
						label="Name"
						variant="outlined"
						inputProps={{ style: { color: 'white' } }}
						margin="dense"
						size="medium"
					/>
					<br />
					<InputField
						fullwidth={true}
						label="Email"
						variant="outlined"
						inputProps={{ style: { color: 'white' } }}
						margin="dense"
						size="medium"
					/>
					<br />
					<InputField
						fullwidth={true}
						label="Company Name"
						variant="outlined"
						inputProps={{ style: { color: 'white' } }}
						margin="dense"
						size="medium"
					/>
					*/}
					<Button
						className={classes.button}
						variant="outlined"
						fullWidth={true}
						sendIcon={<SendIcon />}
						href="mailto:atomize101@gmail.com"
					>
						Contact Me
					</Button>
					<Button
						className={classes.button}
						variant="outlined"
						fullWidth={true}
						icon={<GitHubIcon />}
						href="https://github.com/Atomize101"
					>
						Github
					</Button>
					<Button
						className={classes.button}
						variant="outlined"
						fullWidth={true}
						icon={<TwitterIcon />}
						href="https://twitter.com/atomize101"
					>
						Twitter
					</Button>
					<Button
						className={classes.button}
						variant="outlined"
						fullWidth={true}
						icon={<LinkedInIcon />}
						href="https://www.linkedin.com/in/chris-patrick-29854138/"
					>
						LinkedIn
					</Button>
				</Box>
			</Grid>
		</Box>
	);
};

export default Contact;
