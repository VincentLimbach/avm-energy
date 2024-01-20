import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import GoldenBox from './GoldenBox';
import { useState, useEffect } from 'react';
// Define an interface for the offer
interface Offer {
  id: number;
  type: string;
  size: string;
  cost: string;
}

const ECTable: React.FC = () => {
  const [offers, setOffers] = useState<Offer[]>([
    { id: 1, type: 'Schiefer Pultdach', size: '400 Quadratmeter', cost: '€5000' },
    { id: 2, type: 'Schiefer Pultdach', size: '80 Quadratmeter', cost: '€2000'},
  ]);

  useEffect(() => {
    fetch('https://www.avm-energy.de/offers')  // Replace with your backend URL
      .then(response => response.json())
      .then(data => setOffers(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="offers table">
        <TableHead>
          <TableRow>
          <TableCell>
              <Typography variant="subtitle1"><strong>Flächengröße</strong></Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1"><strong>Kosten</strong></Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1"><strong>Weitere Beschreibung</strong></Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1"><strong></strong></Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {offers.map((offer, index) => (
            <TableRow key={index}>
              <TableCell style={{ borderRight: '1px solid #ccc' }}>{offer.size}</TableCell>
              <TableCell style={{ borderRight: '1px solid #ccc' }}>{offer.cost}</TableCell>
              <TableCell style={{ borderRight: '1px solid #ccc' }}>{offer.type}</TableCell>
              <TableCell>{<GoldenBox text='Angebot anschauen'></GoldenBox>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ECTable;
