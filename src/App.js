import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckBox  from '@mui/icons-material/CheckBox';
import { useState } from 'react';
import { Container,FormControlLabel,Typography,TextField,createTheme,colors,ThemeProvider  } from '@mui/material';
import { makeStyles} from '@mui/styles';
import { orange,green } from '@mui/material/colors';
import 'fontsource-roboto';
import EffectComponent from './component/EffectComponent';


const useStyles = makeStyles({
  root:{
    background:'linear-gradient(65deg, #FE6888, #999)',
    border:0,
    marginBottom:15,
    borderRadius:15,
    color:'white' ,
    padding:'5px 30px'
  }
})

const theme = createTheme({
  typography:{
    h2:{
      fontSize:36,
      marginBottom:15
    }
  },
  palette:{
    primary:{
      main:orange[500],
    },
    secondary:{
      main:green[500]
    }
  }
})

function ButtonStyled(){
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}


function CheckboxExample() {
  const [checked,setChecked] = useState(false)
  return (
    <div>
      <FormControlLabel
      control={<CheckBox 
        checked={checked}
        onChange={(e)=>setChecked(e.target.checked)}
        color="primary"
        />} label="Testing Checkbox" />
      
  
    </div>
  )

}


function App() {
  return (
    // <ThemeProvider theme={theme}>
    //   <Container maxWidth="sm">
    // <div className="App">
    //   <header className="App-header">
    //   <Typography variant="h2" component='div'> Welcome to MUI Theme</Typography>
    //   <Typography variant="subtitle1">Learn how to use Material UI</Typography>
    //     <ButtonStyled />
    //     <TextField
    //     variant="filled"
    //     color="secondary"
    //     type="time"
    //     label="Time"
    //     style={{margin:'15px',borderRadius:20}}
    //     />
    //     <CheckboxExample />
    //     <ButtonGroup variant="contained">
    //       <Button
    //         startIcon={<SaveIcon />}
    //         size="small"
    //         style={{ fontSize: 24 }}
    //         onClick={() => alert("Hello")}

    //         color="primary">Save
    //       </Button>
    //       <Button
    //         startIcon={<DeleteIcon />}
    //         size="small"
    //         style={{ fontSize: 24 }}
    //         onClick={() => alert("Hello")}

    //         color="secondary">Discard
    //       </Button>

    //     </ButtonGroup>
    //     <img src={logo} className="App-logo" alt="logo" />
    //   </header>
    // </div>
    // </Container>
    // </ThemeProvider>
    <EffectComponent />
  );
}

export default App;
