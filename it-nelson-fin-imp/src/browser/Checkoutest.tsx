import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
//import Switch from '@mui/material/Switch';
import MenuIcon from '@mui/icons-material/Menu'

import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import IconButton from '@mui/material/IconButton';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Tinn (Srl)
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Dati anagrafici', 'Dettaglio pagamento', 'Dettaglio importo'];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Passo sconosciuto');
  }
}

//const label = { inputProps: { 'aria-label': 'Size switch demo' } };

const theme = createTheme();

export default function Checkout() {

  //speech  
  const commands = [   
    
    {      
      command: 'annulla',
      callback: () => {        
        
        resetTranscript();
        console.log('annulla');
    
      },
      //callback: (name: any) => console.log(`Hi ${name}!`),
      matchInterim: true
    },
   
    {
      
      command: 'avanti',
      callback: () => {      
      console.log('comando: avanti');
      handleNext();
     } ,
      //callback: (name: any) => console.log(`Hi ${name}!`),
      //matchInterim: true
    },
  
    {
      
      command: 'indietro',
      callback: () =>  {
      
      handleBack();
      console.log('comando: indietro')
    
    },
      //callback: (name: any) => console.log(`Hi ${name}!`),
     // matchInterim: true
    },

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

 //fine speech


  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Microfono: {listening ? 'on' : 'off'}
          {transcript}
          </Typography>
          


          {/* <Switch {...label} defaultChecked /> */}      
          <IconButton  onClick={startListening}>
            <MicIcon/>
          </IconButton>
          <IconButton  onClick={SpeechRecognition.stopListening}>
            <MicOffIcon/>
          </IconButton>
          <IconButton  onClick={resetTranscript}>
            <RotateLeftIcon/>
          </IconButton>
          

        </Toolbar>
      </AppBar>
    </Box>



      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Ordine
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Ordine di pagamento inserito
              </Typography>
              <Typography variant="subtitle1">
                L'ordine numero x è stato correttamente inserito.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Indietro
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Invia ordine' : 'Avanti'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
