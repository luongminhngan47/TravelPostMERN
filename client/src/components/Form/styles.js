import { createTheme } from '@mui/material/styles';

const theme = createTheme();

const styles = {
      form: {
        '& .MuiTextField-root': {
          marginTop: theme.spacing(1),
          marginBottom: theme.spacing(1),
        },
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      paper: {
        padding: theme.spacing(2),
      },
      fileInput: {
        width: '97%',
        margin: '10px 0',
      },
      buttonSubmit: {
        marginBottom: '10px',
      },
};

export default styles;