import React from 'react';

import styled from '@emotion/styled';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import { Theme, makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import { ipcRenderer } from 'electron';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
const TextStyle = styled.div`
  min-height: 95vh;
  background-color: white;
  color: black;
`;

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [nspvProcess, setNspvProcess] = React.useState(null);

  React.useEffect(() => {
    ipcRenderer.on('receive-nspvProcess', (event, process) => {
      setNspvProcess(process);
    });

    ipcRenderer.send('get-nspvProcess');

    // Cleanup the listener events so that memory leaks are avoided.
    return function cleanup() {
      ipcRenderer.removeAllListeners('get-nspvProcess');
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TextStyle>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="simple tabs example"
          >
            <Tab
              label="Item One"
              id={a11yProps(0).id}
              aria-controls={a11yProps(0)['aria-controls']}
            />
            <Tab
              label="Item Two"
              id={a11yProps(1).id}
              aria-controls={a11yProps(1)['aria-controls']}
            />
            <Tab
              label="Item Three"
              id={a11yProps(2).id}
              aria-controls={a11yProps(2)['aria-controls']}
            />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
          {nspvProcess}
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </TextStyle>
    </div>
  );
}
