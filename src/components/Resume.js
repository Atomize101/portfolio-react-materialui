import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		background: '#233',
	},
	timeLine: {
		position: 'relative',
		padding: '1rem',
		margin: '0 auto',
		'&:before': {
			content: "''",
			position: 'absolute',
			height: '100%',
			border: '1px solid tan',
			right: '40px',
			top: 0,
		},
		'&:after': {
			content: "''",
			display: 'table',
			clear: 'both',
		},
		[theme.breakpoints.between('sm', 'lg')]: {
			padding: '2rem',
			'&:before': {
				left: 'calc(50% - 1px)',
				right: 'auto',
			},
		},
	},
	timeLineItem: {
		padding: '1rem',
		borderBottom: '2px solid tan',
		position: 'relative',
		margin: '1rem 3rem 1rem 1rem',
		clear: 'both',
		'&:after': {
			content: "''",
			position: 'absolute',
		},
		'&:before': {
			content: "''",
			position: 'absolute',
			right: '0.625rem',
			top: 'calc(50% - 5px)',
			borderStyle: 'solid',
			borderColor: 'tomato tomato transparent transparent',
			borderWidth: '0.625rem',
			transform: 'rotate(45deg)',
		},
		[theme.breakpoints.between('sm', 'lg')]: {
			width: '44%',
			margin: '1rem',
			'&:nth-of-type(2n)': {
				float: 'right',
				margin: '1rem',
				borderColor: 'tan',
			},
			'&:nth-of-type(2n):before': {
				right: 'auto',
				left: '-0.625rem',
				borderColor: 'transparent transparent tomato tomato',
			},
		},
	},

	timeLineYear: {
		textAlign: 'center',
		maxWidth: '9.375rem',
		margin: '0 3rem 0 auto',
		fontSize: '1.8rem',
		background: 'tomato',
		color: 'white',
		lineHeight: 1,
		padding: '0.5rem 0 1rem',
		'&:before': {
			display: 'none',
		},
		[theme.breakpoints.between('sm', 'lg')]: {
			textAlign: 'center',
			margin: '0 auto',
			'&:nth-of-type(2n)': {
				float: 'none',
				margin: '0 auto',
			},
			'&:nth-of-type(2n):before': {
				display: 'none',
			},
		},
	},
	heading: {
		color: 'tomato',
		padding: '3rem 0',
		textTransform: 'uppercase',
	},
	subHeading: {
		color: 'white',
		padding: '0',
		textTransform: 'uppercase',
	},
}));

const Resume = () => {
	const classes = useStyles();
	return (
		<>
			<div>
				<Navbar />
				<Box component="header" className={classes.mainContainer}>
					<Typography variant="h4" align="center" className={classes.heading}>
						Work Experience
					</Typography>
					<Box component="div" className={classes.timeLine}>
						<Box component="div" className={classes.timeLineItem}>
							<Typography variant="h5" align="center" className={classes.subHeading}>
								Skills
							</Typography>
							<Typography variant="body1" align="center" style={{ color: 'tomato' }}>
								Javascript | HTML | CSS | Python | React | Git | GitHub | JQuery | Web Development | QA
								| Software Development | Agile | MySQL | API's | Node | Express | Bootstrap | Jira |
								Test Cases | Web Services
							</Typography>
						</Box>
					</Box>
					<Box component="div" className={classes.timeLine}>
						<Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
							2020
						</Typography>
						<Box component="div" className={classes.timeLineItem}>
							<Typography variant="h5" align="center" className={classes.subHeading}>
								Quality Assurance Analyst
							</Typography>
							<Typography variant="body1" align="center" style={{ color: 'tomato' }}>
								North American Bancard
							</Typography>
							<Typography variant="subtitle1" align="center" style={{ color: 'tan' }}>
								Executed various testing methods such as black box, functional, regression and user
								acceptance testing to validate requirements are met.
							</Typography>{' '}
							<Typography align="center" style={{ color: 'tan' }}>
								Strong understanding of the software development life cycle. Provided consistent and
								accurate testing results as to improve the company's newest software/hardware.
							</Typography>{' '}
							<Typography align="center" style={{ color: 'tan' }}>
								Helped manage different processes and streamline their effectiveness. Support the
								terminal engineering department by gaining knowledge of file builds, back end procedures
								and creating knowledge documents.
							</Typography>
						</Box>
					</Box>
					<Box component="div" align="right" className={classes.timeLine}>
						<Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
							2017
						</Typography>
						<Box component="div" className={classes.timeLineItem}>
							<Typography variant="h5" align="center" className={classes.subHeading}>
								Quality Control of Terminal Deployment
							</Typography>
							<Typography variant="body1" align="center" style={{ color: 'tomato' }}>
								North American Bancard
							</Typography>
							<Typography variant="subtitle1" align="center" style={{ color: 'tan' }}>
								Ensure all orders are QC’d in the Microsoft Dynamics GP inventory system.
							</Typography>{' '}
							<Typography align="center" style={{ color: 'tan' }}>
								Ensure equipment is properly inspected before shipping to the customers.
							</Typography>{' '}
							<Typography align="center" style={{ color: 'tan' }}>
								Act as a liaison between the terminal download team and order fulfillment.
							</Typography>
							<Typography align="center" style={{ color: 'tan' }}>
								Responsible for transferring equipment batch files to the finance team.
							</Typography>
							<Typography align="center" style={{ color: 'tan' }}>
								Utilize knowledge from prior positions to correct file builds before deploying
								equipment.
							</Typography>
						</Box>
					</Box>
					<Box component="div" className={classes.timeLine}>
						<Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
							2015
						</Typography>
						<Box component="div" className={classes.timeLineItem}>
							<Typography variant="h5" align="center" className={classes.subHeading}>
								Escalations Support
							</Typography>
							<Typography variant="body1" align="center" style={{ color: 'tomato' }}>
								North American Bancard
							</Typography>
							<Typography variant="subtitle1" align="center" style={{ color: 'tan' }}>
								Support for various technical issues regarding credit card processing.
							</Typography>
						</Box>
					</Box>
				</Box>
			</div>
		</>
	);
};

export default Resume;
