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
			  image={course.course.imageUrl}
			  alt={course.course.title}
			/>
			<CardContent sx={{display:"flex",alignItems:"flex-start",flexDirection:"column"}}>
			  <Typography gutterBottom variant="h6" component="div">
			{course.course.title}
			  </Typography>
			  <Typography gutterBottom variant="body2" component="div">
			{course.course.author}
			  </Typography>
			  <Typography variant="body3" color="text.secondary">
			{course.course.description.length>100?course.course.description.slice(0,100):course.course.description}
			  </Typography>
			</CardContent>
		  </CardActionArea>
		</Card>
	  );
	}


