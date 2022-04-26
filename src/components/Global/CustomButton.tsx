import React from 'react';
import { makeStyles } from "@mui/styles"
import {  Box,Theme } from '@mui/material';


const useStyles = makeStyles((theme:Theme) => ({
    conatiner: {
        height:50,
        marginTop:70,
        width: '170px !important',
        background: 'white',
        borderRadius: 10,
        "&:hover": {
            backgroundColor: '#ff1493', color: 'white'
          }
    },
    name:{
        display:"flex" , 
        textTransform:'capitalize', 
        padding:11, 
        justifyContent:"center",
        fontSize:20,
    }
 
}))


interface ButtonName {
    name: string;
}


const CustomButton: React.FC<ButtonName> = ({name}:ButtonName) => {
    const classes=useStyles()

    return(
        <Box className={classes.conatiner}>
                <Box className={classes.name}>{name}</Box>       
        </Box>
  
    )
}

export default CustomButton

