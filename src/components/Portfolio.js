import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Box,
	Grid,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	Link,
} from '@material-ui/core';
import Navbar from './Navbar';
import project1 from '../images/html-css-javascript-lg.jpg';
import project2 from '../images/mern-stack.jpg';
import project3 from '../images/react-redux.jpg';
import project4 from '../images/react.png';

const useStyles = makeStyles({
	mainContainer: {
		background: '#233',
		height: '300%',
	},
	cardContainer: {
		maxWidth: 500,
		margin: '5rem auto',
	},
	buttonPadding: {
		padding: '30px',
	},
});

const Portfolio = () => {
	const classes = useStyles();

	return (
		<Box component="div" className={classes.mainContainer}>
			<Navbar />
			<Grid container spacing={2} justify="center" className={classes.cardContainer}>
				{/*Project 1*/}
				<Grid item xs={12} sm={8} md={6}>
					<Card>
						<CardActionArea>
							<CardMedia component="img" alt="Project 1" height="140" image={project2} />
							<CardContent>
								<Typography gutterBottom variant="h5">
									MemoryBank
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Ea cupidatat Lorem sit exercitation eu excepteur id Lorem eiusmod est sit duis. Anim
									anim Lorem duis ea deserunt aliquip ex sunt enim. Mollit laboris elit et adipisicing
									elit. Dolore aliquip magna ex nostrud mollit laboris in non reprehenderit Lorem
									nostrud quis veniam. Tempor aute Lorem cupidatat proident excepteur consequat.
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
								<Button size="small" color="primary">
									Live Demo
								</Button>
							</CardActions>
						</CardActionArea>
					</Card>
				</Grid>
				{/*Project 2*/}
				<Grid item xs={12} sm={8} md={6}>
					<Card>
						<CardActionArea>
							<CardMedia component="img" alt="Project 2" height="140" image={project4} />
							<CardContent>
								<Typography gutterBottom variant="h5">
									Recipe Search
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									This is a Recipe search app that is made with React.
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
								<a href="https://quizzical-lumiere-f9335b.netlify.app/">Demo</a>
							</CardActions>
						</CardActionArea>
					</Card>
				</Grid>
				{/*Project 3*/}
				<Grid item xs={12} sm={8} md={6}>
					<Card>
						<CardActionArea>
							<CardMedia component="img" alt="Project 3" height="140" image={project1} />
							<CardContent>
								<Typography gutterBottom variant="h5">
									COVID-19 Tracker
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Covid-19 tracking app. This is created with React. It allows the user to select
									different countries and shows the data with a bar graph
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
								<a href="https://infallible-wright-c4d11e.netlify.app/">Demo</a>
							</CardActions>
						</CardActionArea>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Portfolio;
