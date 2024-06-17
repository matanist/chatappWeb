"use client";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { loginRequest } from "@/requests/loginRequest";

export default function Home() {
  const [user, setUser] = useState({});

  function loginButtonClicked(){
    console.log("user:",user);
    loginRequest(user).then((response)=>{
      if(response.data.success){
        localStorage.setItem("token",response.data.data);
      }
      else{
        console.log("Login failed")
      }
    }).catch((error)=>{
      console.log("error:",error);
    })
  }
  return (
    <Grid
      height="100vh"
      direction="column"
      container
      justifyContent="center"
      alignItems="center"
      rowGap={2}
    >
      <Grid xs={3} height={"30vh"} style={{
        textAlign:'center',
        backgroundImage:'url("images/loginBackground.jpeg")',
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        borderRadius:'10px'
      }}>
        
      </Grid>
      <Grid xs={3}>
        <h1>Chat App Login Page</h1>
      </Grid>
      <Grid xs={3}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Username"
          variant="outlined"
          onChange={(e)=>setUser({...user,username:e.target.value})}
        />
      </Grid>
      <Grid xs={3}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          onChange={(e)=>setUser({...user,password:e.target.value})}
        />
      </Grid>
      <Grid xs={3}>
        <Button variant="contained" color='primary' label='Log In' fullWidth onClick={loginButtonClicked}>Log In</Button>
        <a href="/register">Register</a>
      </Grid>
    </Grid>
  );
}
