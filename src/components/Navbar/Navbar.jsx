import { useContext } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { MenuContext } from "../../context/Context";
import { MiscellaneousServices } from "@mui/icons-material";

export const Navbar = () => {
  const { isMenuOpen, toogleMenu } = useContext(MenuContext);
  return (
    <>
      {/* Botón de menú hamburguesa */}
      <IconButton
        edge="start"
        color="inherit"
        onClick={toogleMenu}
        aria-label="menu"
      >
        <MiscellaneousServices />
      </IconButton>

      {/* Drawer deslizante */}
      <Drawer anchor="left" open={isMenuOpen} onClose={toogleMenu}>
        <List>
          <ListItem button onClick={toogleMenu}>
            <ListItemText primary="Inicio" />
          </ListItem>
          <ListItem button onClick={toogleMenu}>
            <ListItemText primary="Servicios" />
          </ListItem>
          <ListItem button onClick={toogleMenu}>
            <ListItemText primary="Contacto" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};
