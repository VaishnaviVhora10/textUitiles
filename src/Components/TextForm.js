import React from 'react';
import {Container, Box, TextField, Button, Typography} from '@mui/material';
import {useState} from "react";

function TextForm() {

    const [input, setInput] = useState(" ");
    
    function upperCase(){
        let upcase = input.toUpperCase();
        setInput(upcase);
    }

    function lowerCase(){
        let loCase = input.toLowerCase();
        setInput(loCase);
    }

    function clearText(){
        setInput(" ");
    }

    function handleInput(event){
     setInput(event.target.value);
    }

    function copyText(event){
    const copyText = input;   
     const obtainedText =  navigator.clipboard.writeText(copyText);
     console.log(obtainedText);
       }

  const num_words = input.split(" ");
  console.log(num_words.length);

  return (
    <>
    <Container >
        <Box sx={{pt : 20}}>
        <TextField  id="outlined-required"
          defaultValue="Please Enter Some Text Here" value={input} onChange={handleInput}/>
        </Box>
        <Button onClick={upperCase}>Convert To Upper Case</Button>
        <Button onClick={lowerCase}>Convert To Lower Case</Button>
        <Button onClick={copyText}>Copy Text</Button>
        <Button onClick={clearText}>Clear Text</Button>
    </Container>
    <Box>
        <Typography>Number Of Letters: {input.length}</Typography>
    </Box>
    
    <Box>
        <Typography>Number Of Words: {num_words.length}</Typography>
    </Box>

    <Box>
        <Typography>Preview: {input}</Typography>
    </Box>
    </>
    
  )
}

export default TextForm;