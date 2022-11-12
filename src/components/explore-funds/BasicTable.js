import * as React from 'react';
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './BasicTable.css'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable({ indexfunds }) {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="labelwhite">Fund</TableCell>
            <TableCell className="labelwhite">Assets</TableCell>
            <TableCell className="labelwhite">Number of Owners</TableCell>
            <TableCell className="labelwhite">30D %</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {indexfunds.map((i) => (
            <TableRow
              key={i.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className="labelwhite" component="th" scope="row">
                <Link to={`/index-funds/${i.id}`}>{i.tokenname}</Link>
              </TableCell>
              <TableCell className="labelwhite">
              <AvatarGroup className='avatargroup' max={4}>
                {i.tokens.map((t, index) => (
                  <Avatar
                    key={t.id}
                    sx={{ width: 30, height: 30 }}
                    style={{ zIndex: index }}
                    alt={t.tokenname}
                    src={t.url} />
                ))}
                
              </AvatarGroup>
              </TableCell>
              <TableCell className="labelwhite">{i.numberofholders}</TableCell>
              <TableCell className="labelwhite">0</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
