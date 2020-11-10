import React from 'react';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import avatar from '../avatar2.png';

const Header = () => {
	return (
		<Box>
			<Avatar src={avatar} alt="Chris Patrick" />
		</Box>
	);
};

export default Header;
