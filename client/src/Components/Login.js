import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Google from './Icons/Google'
import GitHub from './Icons/Github'
import Facebook from './Icons/Facebook'
import LinkedIn from './Icons/LinkedIn'
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        background: 'linear-gradient(to left, #0d47a1 ,#90caf9)',
        color: "white",
        borderRadius: 50
    },
    gridpaper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        marginTop:"50%",
        borderRadius: 50,
        fontSize: 1,

      },
}));



export default function Login() {
    const classes = useStyles();

    const handleGoogle = ()=>{
        axios.get('http://localhost:2020/google')
        .then((Response) => {
          console.log(Response,"This is google handle data ..:)");
        })
    }
    const handleFacebook = ()=>{
     
    }
    const handleGithub = ()=>{
     
    }
    const handleLinkedin = ()=>{
     
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
        </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        margin="normal"
                        type="password"
                        name="password"
                        fullWidth
                        required
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                        className={classes.submit}
                    >
                        Sign In
          </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
              </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <Paper className={classes.gridpaper} ><IconButton onClick={handleGoogle}><Google style={{ color: "#DB4437" }}/></IconButton></Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.gridpaper}><IconButton onClick={handleFacebook}><Facebook color="primary"/></IconButton></Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.gridpaper}><IconButton onClick={handleGithub}><GitHub/></IconButton></Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.gridpaper}><IconButton onClick={handleLinkedin}><LinkedIn color="primary"/></IconButton></Paper>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}