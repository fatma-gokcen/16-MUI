import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MUISelect from '../MUISelect'; // MUISelect bileşenini doğru şekilde içe aktarın

export function UserForm() {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '24px',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="name"
        label="Adınız"
        variant="outlined"
      />
      <TextField
        required
        id="surname"
        label="Soyadınız"
        variant="outlined"
      />
      <TextField
        required
        id="e-posta"
        label="E-posta adresiniz"
        variant="outlined"
      />

      {/* MUISelect bileşenini buraya ekliyoruz */}
      <MUISelect />

      <Button variant="contained" color="primary" type="submit">
        Gönder
      </Button>
    </Box>
  );
}