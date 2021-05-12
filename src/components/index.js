import {Box, Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import AccordionOfForecasts from "./AccordionOfForecasts";
import forecasts from '../config/db';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    heading: {
        flexBasis: '50%',
        flexShrink: 0,
    },
    accordionDetails: {
        paddingTop: '0'
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary
    },
    details: {
        alignItems: 'center',
    },
    topDivider: {
        padding: '0 0 10px'
    },
    detailHeading: {
        padding: '0 20px 10px'
    },
    gridItems: {
        padding: '10px 15px',
    },
    bottomDivider: {
        padding: '10px 0'
    },
    column: {
        flexBasis: '33.33%',
    },
    map: {
        height: '80%',
    }
}));

function App() {
    const classes = useStyles();

    return (
        <Box m={1}>
            <Container maxWidth='sm' className={classes.root}>
                <AccordionOfForecasts classes={classes} forecasts={forecasts.data} />
            </Container>
        </Box>
    );
}

export default App;
