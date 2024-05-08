import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate } from 'react-router-dom';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function BackToLoginDialog({ open, handleClose }) {

    const navigate = useNavigate();

    return (
        <ThemeProvider theme={darkTheme}>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{"Login Required"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To continue using this feature, you need to log in.
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{ justifyContent: 'space-between', padding: '15px 30px' }}>
                    <Button
                      onClick={() => {
                        handleClose();
                        navigate('/explore/login')
                    }}
                      color="primary"
                      startIcon={<LoginIcon />}
                      style={{ color: '#90EE90' }}
                    >
                        Login
                    </Button>
                    <Button
                      onClick={handleClose}
                      color="primary"
                      startIcon={<CancelIcon />}
                      style={{ color: '#90EE90' }}  
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
}

export default BackToLoginDialog;
