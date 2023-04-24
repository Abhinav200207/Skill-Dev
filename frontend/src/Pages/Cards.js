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
export default function MultiActionAreaCard(name) {
const [cards,setCards]=useState([])
const [id,setUserId]=useState("")
let r=false
	React.useEffect(()=>{
	const item=window.localStorage.getItem("userId")
	setUserId(item)
	console.log(item)
	},[])
const handleChange=async()=>{
   try {
    const course=await axios.get("http://localhost:4000/course/getcourse")
    console.log(course)
    setCards(course.data.courses)
   } catch (error) {
    alert(error)
   }

}

const handle=async(userId,courseId)=>{
  try {
    const user={userId,courseId}
    const course=await axios.post("http://localhost:4000/user/enroll",user)
    console.log(course)
    alert(course.data.message)
    window.location.reload()
  } catch (error) {
    console.log(error)
  }
}

React.useEffect(()=>{
handleChange()
},[])


  return (<>
  <ResponsiveAppBar name={name.name}/>
  <Box sx={{width:"100%",marginX:0,}}>
< Box>
<Typography component="h1" variant="h6" sx={{ fontWeight: "bold" }}>
											Courses
</Typography>
</Box>
<Box sx={{ marginX: "5%" ,display:"flex",justifyContent:"center",alignItems:"center",height:"fit-content",flexWrap:"wrap"}}>
                            {
    cards.map((cards,index)=>{
      r=false
      for(let i=0;i<cards.students.length;i++){
        if(cards.students[i]===id){
r=true
break;
        }else r=false
      }

        return(
        <Card sx={{ maxWidth: 345,margin:2,boxShadow:"10px 5px 10px #4bb54330,-10px -5px 10px #4bb54330" }} key={cards._id}>
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
           {cards.numberOfEnrollments} enrollements
          </Typography>
          <Typography variant="body3" color="text.secondary" sx={{float:'right'}}>
          {cards.description.length>200?cards.description.slice(0,200):cards.description}

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
       {r&&(<Button size="small" color="primary" disabled>
          ENROLLED
        </Button>)
        }
        {!r&&(<Button size="small" color="primary" onClick={(()=>handle(id,cards._id))}>
          ENROLL
        </Button>)} 
        
      </CardActions>
    </Card>)} )   }
							</Box>
							</Box>
   
    </>
  );
}