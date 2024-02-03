import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    id: Number,
    nombre: string,
    ape: string,
    clave: string
) {
    return {
        id, nombre, ape, clave    };
}
//TODO:recorrer el json del fetch para llenar la tabla, sin harcodear...
const rows = [
    createData( 159, "Juan", "Molina", "dfde334"),
    createData(160, "Ana", "Bplema", "Nfe389"),
    createData(161,"Clara","DeAtraz","HT77"),
    
];

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth:500  }} aria-label="simple table">
                <TableHead>
                    <TableRow >
                        
                        <TableCell align="right">Id</TableCell>
                        <TableCell align="right">Nombre</TableCell>
                        <TableCell align="right">Apellido</TableCell>
                        <TableCell align="right">Pasword</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
   
                            <TableCell align="right">{row.id}</TableCell>
                            <TableCell align="right">{row.nombre}</TableCell>
                            <TableCell align="right">{row.ape}</TableCell>
                            <TableCell align="right">{row.clave}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}