import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { routes } from "../routes/Routes";


export default function NavBar() {
  console.log(routes);
  return (
    <BrowserRouter>
      <AppBar>
        <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
          <Box>
            {routes.map((route) => (
            <Button key={route.to}>
              <NavLink to={route.to}>
                <Typography color={"white"}>{route.name}</Typography>
              </NavLink>
            </Button>
          ))}
          </Box>
          <Box>
            <Button color="inherit">Log-out</Button>
          </Box>
          
        </Toolbar>
      </AppBar>

      <Routes>
        {routes.map((route) => (
          <Route
            key={route.to}
            path={route.path}
            element={<route.Component />}
          />
        ))}

        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
      </Routes>
    </BrowserRouter>
  );
}
