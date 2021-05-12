import {Accordion, AccordionDetails, AccordionSummary, Divider, Grid, Typography} from "@material-ui/core";
import Map from '../api/mapAPI';

const AccordionOfForecasts = ({classes, forecasts}) => {
    return (
        <Grid container direction='column' alignItems='center'>
            {forecasts.map(el => {
                const date = new Date(el.date);
                const dateStr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

                return (
                    <Accordion className={classes.root} key={el.name}>
                        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                            <Grid container direction='column'>
                                <Typography className={classes.heading}>
                                    {el.name}
                                </Typography>
                                <Typography className={classes.secondaryHeading}>
                                    {el.forecast}
                                </Typography>
                            </Grid>
                        </AccordionSummary>
                        <AccordionDetails className={classes.accordionDetails}>
                            <Grid container alignItems='center'>
                                <Grid item sm={12} className={classes.topDivider}>
                                    <Divider/>
                                </Grid>
                                <Grid item sm={12} className={classes.detailHeading}>
                                    <Typography variant='h6' align='center'>
                                        {el.name}
                                    </Typography>
                                </Grid>
                                <Grid item sm={4} className={classes.gridItems}>
                                    <Typography align='center'>
                                        {el.forecast}
                                    </Typography>
                                </Grid>
                                <Divider orientation="vertical" flexItem style={{marginRight: "-1px"}}/>
                                <Grid item sm={3} className={classes.gridItems}>
                                    <Typography align='center'>
                                        Due Date:
                                        <br/>
                                        {dateStr}
                                    </Typography>
                                </Grid>
                                <Divider sm={12} orientation="vertical" flexItem style={{marginRight: "-1px"}}/>
                                <Grid item sm={5} className={classes.gridItems}>
                                    <Typography align='center'>
                                        Number of forecasts made: {el.countOfForecasts}
                                        <br/>
                                        Current forecast: ${el.currentForecast}
                                        <br/>
                                        PROBABILITY: {el.probability}
                                    </Typography>
                                </Grid>
                                <Grid item md={12} xs={12} className={classes.bottomDivider}>
                                    <Divider/>
                                </Grid>
                                <Grid item md={12} xs={12} className={classes.map}>
                                    <Map coordinates={el.coordinates}/>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </Grid>
    )
}
export default AccordionOfForecasts;