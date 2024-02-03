import { useEffect, useState } from "react";
//import logo from './logo.svg';
import './App.css';
//importo archivo demo botones bootstrap
import './GrupoBotonesBotstrp';
//import Button from '@mui/material/Button';
import BasicButtons from './DemobotonesMUI';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField'; 
//import BasicExample from './GrupoBotonesBotstrp';
import ColorCheckboxes from './ColorCheckBoxes';
//import TablaPersonas from './TablaPersonas';
//import BasicTable from "./TablaPersonas";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function App() {
    //function ButtonUsage() {
    //    return <Button variant="contained">Hello world</Button>;
    //}
    const [perso, setPerso] = useState([]);
    const makeAPICall = async () => {
        try {
            
            const response = await fetch('http://localhost:8080/personas/traer', { mode: 'cors' });
            const data = await response.json();
            //quiero guardarla como objeto para pasarla a la app
            //const muestra = JSON.stringify(data);
            //let atabla = [];
            //atabla = JSON.parse(muestra);
            setPerso(data);
            
            console.log({ data });


        }
        catch (e) {
            console.log(e)

        }

    }
    useEffect(() => {
        makeAPICall();
        

            })


    return (
       
            
           

            
            <div className="App">
            <CssBaseline />
                <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" />

                    Este contenido que se renderiza "invocado " por index.js, dentro del div "root" que est&aacute; en /public/index.html */}

                    
                    <h3>Muestro datos de la base de datos</h3>
                </header>
                <div id="contenido">
                    {/*//<p>{perso}</p>
                    ahora hagamos una tabla que se llena solita*/}
                <TableContainer id="mitablita" component={Paper}>
                    <Table sx={{ minWidth: 500 }} aria-label="simple table">
                        <TableHead>
                            <TableRow >

                                <TableCell align="right">Id</TableCell>
                                <TableCell align="right">Nombre</TableCell>
                                <TableCell align="right">Clave</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {perso.map((persona) => (
                                <TableRow
                                    key={persona.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >

                                    <TableCell align="right">{persona.idPersona}</TableCell>
                                    <TableCell align="right">{persona.nombre}</TableCell>
                                    <TableCell align="right">{persona.password}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>       
                {/*Otra forma de crear una tabla dinamicamente
                    {perso && perso.length > 0
                        ? <table >
                            <thead>
                                <tr>
                                    {Object.keys(perso[1]).map(x => {
                                        return <th>{x}</th>
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {perso.map(x => {
                                    return <tr>
                                        {Object.values(x).map(y => {
                                            return <td>{y}</td>
                                        })}
                                    </tr>
                                })}
                            </tbody>
                        </table>
                        
                        : <></>}
                        */ }

                {/*    <BasicTable/>    
                    Lo muestro como string que guardo un json completo*/}
                    <br></br>

                    {/*<ButtonUsage> Este boton es un componente de UI de "mui"", ver en </ButtonUsage>*/}
                    <h2>
                        Tipos de botones de MUI librer&iacute;a de Interface de Users
                    </h2>
                    <BasicButtons />
                    <a className="App-link" href="https://mui.com/material-ui/getting-started/usage/" target="_blank"
                        rel="noopener noreferrer">
                        <br></br>
                        link a MUI
                    </a>
                    {/*<h3>Demo de grupo de botones react-bootstrap</h3>*/}
                    {/*<BasicExample />*/}
                



            
            <Container maxWidth="sm">
                <Box sx={{ my: 3 }}>
                    <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
                        Material UI Create React App example
                    </Typography>
                    <Typography variant="h6" component="h1" sx={{ mb: 2 }}>
                        Otro texto variante h6 comp h1 usando <i>typography</i>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                        {'Copyright  '}&copy;
                        <Link color="inherit" href="https://mui.com/">
                            Your Website at MUI
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                    <h4>Un inputbox</h4>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Box>
            </Container>


            </div> 

    {/*<div id="grupo">*/}
    {/*        <h3>Botones usando solo bootstrap (no reactbootstrap)</h3>*/}
    {/*            <div className="btn-group" role="group" aria-label="Ejemplo con solo bootrap" >*/}
    {/*                <button type="button" className="btn btn-primary active">Left</button>*/}
    {/*                <button type="button" className="btn btn-primary">Middle</button>*/}
    {/*            <button type="button" className="btn btn-primary">Right</button>*/}

    {/*            </div>*/}
    {/* </div>*/}

        <h3>
        Checkboxes de colores
        </h3>
        <ColorCheckboxes/>
            
</div>
    );
}
       

export default App;
