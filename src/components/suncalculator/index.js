import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import SunInfo from './../sunInfo/';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    button: {
        margin: '0 0 0 auto',
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
      },
});

class SunCalculator extends React.Component {
    state = {
        zipcode: '',
        zipcodeError: false,
        sunInfoSearchValue: null,
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Paper className={classes.root} elevation={1}>
                    <Typography variant="h5" component="h3">
                        Your zipcode
                    </Typography>
                    <Typography component="p">
                        Fill in your zipcode and we give you information about the average of sun you got there.
                    </Typography>
                    <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                        <TextField
                            error={this.state.zipcodeError}
                            id="zipcode"
                            label="Zipcode"
                            value={this.state.zipcode}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                        <Button disabled={(this.state.zipcodeError || this.state.zipcode.length === 0)} type="submit" variant="contained" color="primary" className={classes.button}>
                            Send <Icon className={classes.rightIcon}>send</Icon>
                        </Button>
                    </form>
                    <SunInfo zipcode={this.state.sunInfoSearchValue} />
                </Paper>
            </div>
        );
    }

    handleChange = (event) => {
        const valid = this.validateZipCode(event.target.value);

        this.setState({ zipcode: event.target.value, zipcodeError: !valid });   
    }

    validateZipCode = (zipcode) => {
        const regexZipcodeValidation = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i;

        if (!regexZipcodeValidation.test(zipcode) && zipcode.length > 0) {
            return false;
        }
        return true;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const valid = this.validateZipCode(this.state.zipcode);
        if (valid) {
            this.setState({ sunInfoSearchValue: this.state.zipcode });
        }
        console.log('submit');
    }
}

SunCalculator.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SunCalculator);