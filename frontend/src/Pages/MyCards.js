import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import axios from "axios"
import ResponsiveAppBar from '../Components/Main/Header';
import { useState } from 'react';
import { Box } from '@mui/material';

export default function MultiAreaCard(name) {
const [cards,setCards]=useState([])
const [id,setUserId]=useState("")
React.useEffect(()=>{
const item=window.localStorage.getItem("userId")
setUserId(item)
console.log(item)
},[])
const handleChange=async()=>{
   try {
    const user={userId:"64441a1966d873db95d8a2cb"}
    const course=await axios.post("http://localhost:4000/course/getmycourse",user)
    console.log(course.data.courses[0].courses)
    setCards(course.data.courses[0].courses)
   } catch (error) {
    alert(error)
   }

}

React.useEffect(()=>{
handleChange()
},[])

console.log("cards",cards)
  return (<>
  <ResponsiveAppBar name={name.name}/>
  <Box sx={{width:"100%",marginX:0}}>
< Box>
<Typography component="h1" variant="h6" sx={{ fontWeight: "bold" }}>
											Courses
</Typography>
</Box>
<Box sx={{ marginX: "5%" ,display:"flex",justifyContent:"center",alignItems:"center",height:"fit-content",flexWrap:"wrap",minHeight:"300px"}}>
                            {
                              
    cards.map((cards,index)=>{
        return(
        <Card sx={{ maxWidth: 345,margin:2 }} key={cards._id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={cards.imageUrl}
          alt={cards.title}
        />
        <CardContent sx={{display:"flex",alignItems:"flex-start",flexDirection:"column"}}>
          <Typography gutterBottom variant="h6" component="div">
            {cards.title}
          </Typography>
          <Typography  variant="body2" component="div">
            {cards.author}
          </Typography>
          <Typography variant="body3" color="text.secondary">
           {cards.numberOfEnrollments}
          </Typography>
          <Typography variant="body3" color="text.secondary">
          {cards.description.length>200?cards.description.slice(0,200):cards.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>)} )   }
							</Box>
							</Box>
   
    </>
  );
}