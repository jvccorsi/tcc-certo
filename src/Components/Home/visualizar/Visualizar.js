import React, { useEffect, useState } from 'react';
import {
  Container,
  Box,
  Button,
  Paper,
  Grid,
  Divider,
  TextField,
} from '@mui/material';
import { useParams } from 'react-router';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import { Link } from 'react-router-dom';

import styles from './visualizar.module.css';

import { useHttpClient } from '../../Hooks/http-hook';
import LoadingSpinner from '../../IUElements/LoadingSpinner';

const Visualizar = () => {
  const [loadedFicha, setLoadedFicha] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const { id } = useParams();

  useEffect(() => {
    const fetchFichas = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:3000/api/fichas/62893191483925959969a4ba`,
          'GET',
        );
        setLoadedFicha(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFichas();
  }, [sendRequest, id]);

  return (
    <section>
      {isLoading && <LoadingSpinner asOverlay />}

      <Container maxWidth="xl" fixed>
        <Box
          mt={4}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'left',
          }}
        >
          <ReceiptOutlinedIcon color="primary" fontSize="large" />

          <Grid container spacing={2}>
            <Grid item xs={11}>
              <h1 className={styles.titulo_visualizar}>
                Atendimento - {atob(id)}
              </h1>
            </Grid>
            <Grid item xs={1}>
              <Link to="/home/listar">
                <Button variant="contained" color="success">
                  Voltar
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Box mt={4} mb={5}>
          {!isLoading && loadedFicha && (
            <Paper
              elevation={12}
              style={{ maxHeight: '70vh', overflow: 'auto' }}
            >
              <Box m={4}>
                <TextField
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                  disabled
                  value={
                    loadedFicha.defaultValues.atendimento.centro_atendimento
                  }
                />
                <TextField
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                  value={
                    loadedFicha.defaultValues.atendimento.centro_atendimento
                  }
                />
                {loadedFicha.defaultValues.acompanhamento.dados.map(
                  (item, index) => (
                    <div key={index}>
                      <p type="text"> </p>
                      <p type="text">{item.id}</p>
                      <p type="text">{item.informante}</p>
                    </div>
                  ),
                )}
              </Box>
            </Paper>
          )}
        </Box>{' '}
      </Container>
    </section>
  );
};

export default Visualizar;
