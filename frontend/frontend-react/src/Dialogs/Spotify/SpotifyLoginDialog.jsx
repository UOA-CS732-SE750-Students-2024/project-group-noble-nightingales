import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import CancelIcon from '@mui/icons-material/Cancel';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function LoginDialog({ open, handleClose }) {
    return (
        <ThemeProvider theme={darkTheme}>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{"Login Required"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To continue using Spotify features, you need to log in. Please authenticate to proceed.
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{ justifyContent: 'space-between', padding: '8px 24px' }}>
                    <Button
                      onClick={() => window.location.href = '/login'}
                      color="primary"
                      startIcon={<LoginIcon />}
                      style={{ color: '#90EE90' }}
                    >
                        Login to Spotify
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

export default LoginDialog;
