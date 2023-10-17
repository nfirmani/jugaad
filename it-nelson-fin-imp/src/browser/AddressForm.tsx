import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import  { useState } from 'react';

import 'regenerator-runtime/runtime';
//import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import  { useSpeechRecognition } from 'react-speech-recognition';

export default function AddressForm() {


  const [Values, setValues] = useState(    
    {
      nome: '', 
      cognome: '', 
      indirizzo1: '', 
      indirizzo2: '',
      citta: '',
      prov: '',
      cap:'',
      nazione:'',
      flagPag: false
    }) ;

  const commands = [
    
    {      
      command: 'Nome *',
      callback: (name: any) => setValues({ ...Values, nome: name }),
      //callback: (name: any) => console.log(`Hi ${name}!`),
      matchInterim: true
    },

    {      
      command: 'Cognome *',
      callback: (cogn: any) => setValues({ ...Values, cognome: cogn }),      
      matchInterim: true
    },
    {      
      command: 'Indirizzo *',
      callback: (ind1: any) => setValues({ ...Values, indirizzo1: ind1 }),      
      matchInterim: true
    },
    {      
      command: 'Altro indirizzo *',
      callback: (ind2: any) => setValues({ ...Values, indirizzo2: ind2 }),      
      matchInterim: true
    },
    {      
      command: 'Città *',
      callback: (vcitta: any) => setValues({ ...Values, citta: vcitta }),      
      matchInterim: true
    },
    {      
      command: 'Provincia *',
      callback: (vprov: any) => setValues({ ...Values, prov: vprov }),      
      matchInterim: true
    },
    {      
      command: 'Cap *',
      callback: (vcap: any) => setValues({ ...Values, cap: vcap }),      
      matchInterim: true
    },
    {      
      command: 'Nazione *',
      callback: (vnazione: any) => setValues({ ...Values, nazione: vnazione }),      
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
        Anagrafica
        <p>{transcript}</p>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nome"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={Values.nome} 
            onChange={(e) => setValues({ ...Values, nome: e.target.value })}
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Cognome"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={Values.cognome}
            onChange={(e) => setValues({ ...Values, cognome: e.target.value })} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Indirizzo"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={Values.indirizzo1} 
            onChange={(e) => setValues({ ...Values, indirizzo1: e.target.value })} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Altro indirizzo"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={Values.indirizzo2} 
            onChange={(e) => setValues({ ...Values, indirizzo2: e.target.value })} 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Città"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={Values.citta} 
            onChange={(e) => setValues({ ...Values, citta: e.target.value })} 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Stato/Provincia/Regione"
            fullWidth
            variant="standard"
            value={Values.prov} 
            onChange={(e) => setValues({ ...Values, prov: e.target.value })} 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="CAP"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={Values.cap}
            onChange={(e) => setValues({ ...Values, cap: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Nazione"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            value={Values.nazione}
            onChange={(e) => setValues({ ...Values, nazione: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Usa questo indirizzo per il dettaglio pagamento"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
