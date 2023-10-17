import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import  { useState } from 'react';

import 'regenerator-runtime/runtime';
//import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import  { useSpeechRecognition } from 'react-speech-recognition';

export default function PaymentForm() {


  const [Values, setValues] = useState(    
    {
      intestatario: '', 
      numero: '', 
      data_expire: '', 
      cvv: ''
     
    }) ;

  const commands = [
    
    {      
      command: 'Intestatario carta *',
      callback: (intest: any) => setValues({ ...Values, intestatario: intest }),
      //callback: (name: any) => console.log(`Hi ${name}!`),
      matchInterim: true
    },

    {      
      command: 'Numero carta *',
      callback: (ncarta: any) => setValues({ ...Values, numero: ncarta }),      
      matchInterim: true
    },
    {      
      command: 'Data scadenza *',
      callback: (dscad: any) => setValues({ ...Values, data_expire: dscad }),      
      matchInterim: true
    },
    {      
      command: 'CVV *',
      callback: (codice: any) => setValues({ ...Values, cvv: codice }),      
      matchInterim: true
    },
    
  
  ];

  const {
    transcript,
   // listening,
   // resetTranscript,
   // browserSupportsSpeechRecognition
  } = useSpeechRecognition({commands});


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Pagamento <p>{transcript}</p>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Intestatario carta"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={Values.intestatario}
            onChange={(e) => setValues({ ...Values, intestatario: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Numero carta"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={Values.numero}
            onChange={(e) => setValues({ ...Values, numero: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Data scadenza"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            value={Values.data_expire}
            onChange={(e) => setValues({ ...Values, data_expire: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Ultime tre cifre di controllo"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={Values.cvv}
            onChange={(e) => setValues({ ...Values, cvv: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Memorizza i dati per il prossimo pagamento"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
