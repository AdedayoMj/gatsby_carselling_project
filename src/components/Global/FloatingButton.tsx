import React, { useState } from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Box, List, ListItem, ListItemButton, Theme } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Tooltip from '@mui/material/Tooltip';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
  root: {
    // [theme.breakpoints.down('md')]: {
    //   display: 'none',
    // },
  },
  conatiner: {
    height: 50,
    width: '50px !important',
    background: 'white',
    borderRadius: 10,
    backgroundColor: '#ff1493',
    marginTop: -20,
    marginRight: 8,
  },
  mediaContainer: {
    height: 200,
    width: '70px !important',
    background: 'white',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#ff1493',
    marginTop: -290,
  },
}));

const FloatingButton = () => {
  const [openMedia, setOpenMedia] = useState(false);
  const classes = useStyles();

  const handleToggle = () => {
    setOpenMedia(!openMedia);
  };

  const arrow = openMedia ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />;

  return (
    <Box display={{ xs: 'none', sm: 'block' }} className={classes.root}>
      <Box display="flex" justifyContent="flex-end">
        <Box
          display="flex"
          onClick={handleToggle}
          className={classes.conatiner}
        >
          <Box
            m="auto"
            style={{ color: 'white', fontSize: '50px', marginTop: 10 }}
          >
            {arrow}
          </Box>
        </Box>
      </Box>
      {openMedia && (
        <Box display="flex" justifyContent="flex-end">
          <Box display="flex" className={classes.mediaContainer}>
            <div>
              <Box
              
                m="auto"
                style={{ color: 'white', marginTop: -10, marginRight: 10 }}
              >
                <List>
                  <Tooltip title="Contact us">
                    <ListItem>
                      <ListItemButton>
                        <ConnectWithoutContactIcon />
                      </ListItemButton>
                    </ListItem>
                  </Tooltip>
                  <Tooltip title="Whatsapp">
                    <ListItem>
                      <ListItemButton>
                        <WhatsAppIcon />
                      </ListItemButton>
                    </ListItem>
                  </Tooltip>
                  <Tooltip title="Instagram">
                    <ListItem>
                      <ListItemButton>
                        <InstagramIcon />
                      </ListItemButton>
                    </ListItem>
                  </Tooltip>
                </List>
              </Box>
            </div>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default FloatingButton;
