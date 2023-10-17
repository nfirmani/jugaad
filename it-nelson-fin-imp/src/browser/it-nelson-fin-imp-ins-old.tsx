import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import  { useState } from 'react';

import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';



const InsertImp = () => {

  /*
  

const InsertImp = () => {

  interface IImpegno {
    name: string,
    cognome: string,
    desc: string,
    importo: number
  }
  
  const Impegno: IImpegno = {
    name: '',
    cognome: '',
    desc: '',
    importo: 0
  } 
 
 
  const [Imp, setImp] = useState<IImpegno>(Impegno) ;
  const commands = [
    
    {
      //command: '* is my name',
      command: 'Nome *',
      callback: (name: any) => setImp(Imp => Imp),
      //callback: (name: any) => console.log(`Hi ${name}!`),
      matchInterim: true
    },
    // {
    //   command: 'I miei sport preferiti sono * e *',
    //   callback: (sport1: any, sport2: any) => setMessage(`#1: ${sport1}, #2: ${sport2}`)
    //   //callback: (sport1: any, sport2: any) => console.log(`#1: ${sport1}, #2: ${sport2}`)
    // },




*/
 
  const [message, setMessage] = useState('vuoto') ;
  const commands = [
    
    {
      //command: '* is my name',
      command: 'Nome *',
      callback: (name: any) => setMessage(`Nome= ${name}!`),
      //callback: (name: any) => console.log(`Hi ${name}!`),
      matchInterim: true
    },
    // {
    //   command: 'I miei sport preferiti sono * e *',
    //   callback: (sport1: any, sport2: any) => setMessage(`#1: ${sport1}, #2: ${sport2}`)
    //   //callback: (sport1: any, sport2: any) => console.log(`#1: ${sport1}, #2: ${sport2}`)
    // },
    
    {
      //command: '* is my name',
      command: 'Cognome *',
      callback: (cognome: any) => setMessage(`Cognome= ${cognome}!`),
      //callback: (name: any) => console.log(`Hi ${name}!`),
      matchInterim: true
    },
    {
      //command: '* is my name',
      command: 'Descrizione *',
      callback: (desc: any) => setMessage(`Descrizione= ${desc}!`),
      //callback: (name: any) => console.log(`Hi ${name}!`),
      matchInterim: true
    },
    {
      //command: '* is my name',
      command: 'Importo *',
      callback: (importo: any) => setMessage(`Importo= ${importo}!`),
      //callback: (name: any) => console.log(`Hi ${name}!`),
      matchInterim: true
    },
    {
      //command: '* is my name',
      command: 'Capitolo *',
      callback: (capitolo: any) => setMessage(`Capitolo= ${capitolo}!`),
      //callback: (name: any) => console.log(`Hi ${name}!`),
      matchInterim: true
    },
    {
      command: 'che ora',
      callback: () => setMessage('sono le sedici')
      //callback: () => console.log('eseguito che ora')
    }
  ]

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({commands});


  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
 
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'it-IT' });



  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>

      <p>Microphone: {listening ? 'on' : 'off'}</p>      
      <button onClick={startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      
      <p>{transcript}</p>
      <p>{message}</p>



        <TextField
          label="Nome"
          id="outlined-start-adornment"
          size="small"
          sx={{ m: 1, width: '35ch' }} 
          value={message}         
        />
        <TextField
          label="Cognome"
          id="outlined-start-adornment"
          size="small"
          sx={{ m: 1, width: '40ch' }}          
        />


        <FormControl fullWidth sx={{ m: 1 }}>
        <TextField
          label="Descrizione"
          id="outlined-start-adornment"
          size="small"
          sx={{ m: 0, width: '60ch' }}          
        />
        </FormControl>
      </div>
      <div>
        <TextField
          label="Importo"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">€</InputAdornment>,
          }}
          size="small"
          variant="filled"
        />

        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
        <TextField
          label="Capitolo"
          id="outlined-start-adornment"
          size="small"
          sx={{ m: 0, width: '80ch' }}          
        />
        </FormControl>
      </div>
      <div>
        
       
        <FormControl sx={{ m: 1, width: '35ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        
      </div>
    </Box>
  );
};
export default InsertImp;