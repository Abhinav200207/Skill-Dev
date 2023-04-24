import React  from "react";
// import * as React from 'react';
	import Card from '@mui/material/Card';
	import CardContent from '@mui/material/CardContent';
	import CardMedia from '@mui/material/CardMedia';
	import Typography from '@mui/material/Typography';
	import { CardActionArea } from '@mui/material';
export default function UserCourses(course){
	console.log(course)
	

return (
		<Card sx={{ maxWidth: 200,marginX:"20px",marginY:"10px",boxShadow:"10px 5px 10px #4bb54330,-10px -5px 10px #4bb54330" }}>
		  <CardActionArea>
			<CardMedia
			key={course.index}
			  component="img"
			  height="140"
			  image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
			  alt="green iguana"
			/>
			<CardContent>
			  <Typography gutterBottom variant="h6" component="div">
			{course.course.title}
			  </Typography>
			  <Typography gutterBottom variant="body1" component="div">
			{course.course.author}
			  </Typography>
			  <Typography variant="body2" color="text.secondary">
			{course.course.description}
			  </Typography>
			</CardContent>
		  </CardActionArea>
		</Card>
	  );
	}


