
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { routes } from '../routes/routes';
import { BrowserRouter, NavLink,Routes,Navigate,Route } from 'react-router-dom';

export default function NavBar() {
    console.log(routes);
  return (
    <Box sx={{ width:'100vw' }}>
        <BrowserRouter>
        
        <AppBar position="static">

      


        <Toolbar>
            <NavLink to={routes[0].to}> {routes[0].name}</NavLink>
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
            Usuarios
          </Typography>
          
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Deportes
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Promos
          </Typography>
          <Button color="inherit">Log-out</Button>
        </Toolbar>
      </AppBar>
        
        </BrowserRouter>
      
    </Box>
  );
}