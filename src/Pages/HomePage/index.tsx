import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  ListItemButton,
} from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";

export const HomePage = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const open = Boolean(anchorEl);

  const isMobile = useMediaQuery("(max-width:900px)");

  const handleClickAuth = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseAuth = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => (): void => {
    setDrawerOpen(open);
  };

  return (
    <AppBar variant="outlined">
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <DevicesIcon fontSize="large" />

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <List>
                  <ListItem>
                    <ListItemButton>
                      <ListItemText primary="Contact" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      <ListItemText primary="About" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton onClick={handleClickAuth}>
                      <ListItemText primary="Auth" />
                    </ListItemButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleCloseAuth}
                    >
                      <MenuItem onClick={handleCloseAuth}>Login</MenuItem>
                      <MenuItem onClick={handleCloseAuth}>Register</MenuItem>
                    </Menu>
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <>
              <Box>
                <Button color="inherit">Contact</Button>
                <Button color="inherit">About</Button>
                <Button
                  color="inherit"
                  onClick={handleClickAuth}
                  sx={{ textTransform: "none" }}
                >
                  Auth
                </Button>
                <Menu anchorEl={anchorEl} open={open} onClose={handleCloseAuth}>
                  <MenuItem onClick={handleCloseAuth}>Login</MenuItem>
                  <MenuItem onClick={handleCloseAuth}>Register</MenuItem>
                </Menu>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <FavoriteBorderIcon sx={{ fontSize: 28, cursor: "pointer" }} />
                <PersonIcon sx={{ fontSize: 28, cursor: "pointer" }} />
                <NotificationsIcon sx={{ fontSize: 28, cursor: "pointer" }} />
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
