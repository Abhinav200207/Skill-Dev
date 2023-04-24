import React, { useEffect, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
// import NavBar from "../component/Main/Header";
import ResponsiveAppBar from "../Components/Main/Header";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import UserInfo from "../Components/Profile/UserInfo";
import UserCourses from "../Components/Profile/UserCourses";
import { Edit, PersonAdd } from "@mui/icons-material";
import axios from "axios";

function Profile() {
	const [edit, setEdit] = useState(false);
	const [user, setUser] = useState({name:"him",username:"hio",bio:"bhsbs",skills:["Carpainter"],email:"himanishu93@gmail.com",courses:[{title:"wood",author:"himanshu",description:"agjvdkhcfhgvlhgfhx cgjhghgkhcgjv"},{title:"wood",author:"himanshu",description:"agjvdkhcfhgvlhgfhx cgjhghgkhcgjv"},{title:"wood",author:"himanshu",description:"agjvdkhcfhgvlhgfhx cgjhghgkhcgjv"},{title:"wood",author:"himanshu",description:"agjvdkhcfhgvlhgfhx cgjhghgkhcgjv"},{title:"wood",author:"himanshu",description:"agjvdkhcfhgvlhgfhx cgjhghgkhcgjv"},{title:"wood",author:"himanshu",description:"agjvdkhcfhgvlhgfhx cgjhghgkhcgjv"},{title:"wood",author:"himanshu",description:"agjvdkhcfhgvlhgfhx cgjhghgkhcgjv"},{title:"wood",author:"himanshu",description:"agjvdkhcfhgvlhgfhx cgjhghgkhcgjv"},{title:"wood",author:"himanshu",description:"agjvdkhcfhgvlhgfhx cgjhghgkhcgjv"},{title:"wood",author:"himanshu",description:"agjvdkhcfhgvlhgfhx cgjhghgkhcgjv"},{title:"wood",author:"himanshu",description:"agjvdkhcfhgvlhgfhx cgjhghgkhcgjv"},{title:"wood",author:"himanshu",description:"agjvdkhcfhgvlhgfhx cgjhghgkhcgjv"}]});
	const id = window.localStorage.getItem("userId");

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const userInfo = await axios.get(`http://localhost:4000/user/getinfo`,{userId:id});
				console.log(userInfo.data.user);
				setUser(userInfo.data.user);
			} catch (error) {
				console.log(error);
			}
		};
		fetchUser();
	}, [id]);

	const handleChange = (e) => {
		e.preventDefault();
		const { value, name } = e.target;
		
		setUser(() => {
			return {
				...user,
				[name]: value,
			};
		});
	};
	// console.log(user);
	const handleSave = async (e) => {
		e.preventDefault();
		console.log("User to be updated: ", user);
		const updatedUser = await axios.post(`http://localhost:8000/api/auth/updateuser/${id}`, user);
		console.log(updatedUser);
		setEdit(false);
		// setUser(updatedUser.data.userUp);
	};

	return (
		<>
			{user && (
				<div>
					<Box>
						<ResponsiveAppBar/>
						<Container component="main" maxWidth="md">
							<CssBaseline />
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "flex-end",
									alignItems: "center",
								}}
							>
								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
										width: "30%",
									}}
								>
									
									<Avatar alt="" src="" sx={{ width: 100, height: 100, margin: 2,border:"2px solid #4bb543" }} />
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "right",
										width: "70%",
									}}
								>
									<Box
										sx={{
											marginTop: 2,
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
										}}
									>
										<Box
											sx={{
												margin: 1,
												display: "flex",
												flexDirection: "column",
												alignItems: "left",
											}}
										>
											<Box
												sx={{
													width: "100%",
												}}
											>
												<TextField
													id="outlined-static"
													value={user.name}
													name="name"
													label={edit ? "Name" : ""}
													fullWidth={true}
													onChange={handleChange}
													InputProps={{
														readOnly: !edit,
													}}
													sx={{
														fieldset: !edit ? { border: "none" } : {},
														fontWeight: "bold",
														input: {
															fontWeight: "bold",
															paddingX: !edit ? "0" : "",
														},
														label: {
															fontWeight: "bold",
														},
													}}
												/>
											</Box>

										</Box>
										<Box sx={{ marginLeft: "auto", display: "flex", flexDirection: "column" }}>
											{true && (
												<>
													<Button variant="contained" color="success" onClick={() => setEdit(true)}>
														<Edit />
														<Typography color="success" variant="caption">Edit</Typography>
													</Button>
												</>
											)}
										</Box>
									</Box>
									<Box
										sx={{
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
										}}
									>
										<Box
											sx={{
												margin: 1,
												display: "flex",
												flexDirection: "row",
												alignItems: "center",
											}}
										>
											<Typography component="h1" variant="body2" sx={{ fontWeight: "bold" }}>
											Courses:{user.courses.length}
											</Typography>
											
										</Box>
										<Box
											sx={{
												margin: 1,
												display: "flex",
												flexDirection: "row",
												alignItems: "center",
											}}
										>
											
											
										</Box>
										<Box
											sx={{
												margin: 1,
												display: "flex",
												flexDirection: "row",
												alignItems: "center",
											}}
										>
											
										</Box>
									</Box>
									<Box
										sx={{
											margin: 1,
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
										}}
									>
										<Box
											sx={{
												width: "100%",
											}}
										>
											<TextField
												id="outlined-multiline-static"
												name="bio"
												label={edit ? "Bio" : ""}
												multiline
												value={user.bio}
												onChange={handleChange}
												fullWidth={true}
												InputProps={{
													readOnly: !edit,
												}}
												sx={{
													fieldset: !edit ? { border: "none" } : {},
													".MuiInputBase-root": {
														paddingBottom: !edit ? "0" : "",
														paddingX: !edit ? "0" : "",
													},
													label: {
														fontWeight: "bold",
													},
												}}
											/>
										</Box>
									</Box>
								</Box>
							</Box>
							<Box sx={{ marginX: "5%" }}>
								<UserInfo checked={edit} user={user} setUser={setUser} />
							</Box>
							{edit && (
								<>
									<Button variant="outlined" onClick={handleSave}>
										<Typography variant="caption">Save</Typography>
									</Button>
									<Button variant="outlined" onClick={() => setEdit(false)}>
										<Typography variant="caption">Cancel</Typography>
									</Button>
								</>
							)}
							<Divider />
							<Box sx={{width:"100%",marginX:0}}>
								< Box>
							<Typography component="h1" variant="h6" sx={{ fontWeight: "bold" }}>
											Courses
									</Typography>
											</Box>
							<Box sx={{ marginX: "5%" ,display:"flex",justifyContent:"center",alignItems:"center",height:"fit-content",flexWrap:"wrap"}}>
							{user.courses.map((course,index)=>(
								<UserCourses course={course} index={index}/>)
								)
							}
							</Box>
							</Box>
						</Container>
					</Box>
				</div>
			)}
		</>
	);
}

export default Profile;