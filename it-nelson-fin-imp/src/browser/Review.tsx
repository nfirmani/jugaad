import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    name: 'Prodotto 1',
    desc: 'Descrizione 1',
    price: '€ 9.99',
  },
  {
    name: 'Product 2',
    desc: 'Descrizione 2',
    price: '€ 3.45',
  },
  {
    name: 'Prodotto 3',
    desc: 'Descrizione 3',
    price: '€ 6.51',
  },
  {
    name: 'Prodotto 4',
    desc: 'Descrizione 4',
    price: '€ 14.11',
  },
  { name: 'Spedizione', desc: '', price: '€ 3.00' },
];
const addresses = ['Indirizzo', 'Città', 'Provincia', 'cap', 'Nazione'];
const payments = [
  { name: 'Tipo card', detail: 'Visa' },
  { name: 'Intestatario', detail: 'Nome Cognome' },
  { name: 'Numero card', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Data scadenza', detail: 'mm/aaaa' },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dettaglio
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            € 37.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Spedizione
          </Typography>
          <Typography gutterBottom>Nome Cognome</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Dettaglio pagamento
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
