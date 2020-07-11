import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Row } from "react-bootstrap";
import { Col } from 'react-bootstrap';

const useStyles = makeStyles(theme => ({
    root: {
       position:"absolute",
       flexGrow:1,
      
    },
    paper: {
        height: 96.5,
        width: 98,
        backgroundColor: "white",
        borderColor:"black",
        borderRadius:0

    },
    paperFlash: {
        height: 96.5,
        width: 98,
        backgroundColor: "pink",
        borderColor:"black",
        borderRadius:0

    },
    control: {
        margin: theme.spacing(0, 'auto')
    },
    textO: {
        textAlign: 'center',
        fontSize: 50,
        justifyContent: 'centre',
        color: "purple",
        fontStyle: 'roman'
    },
    textX: {
        textAlign: 'center',
        justifyContent: 'centre',
        fontSize: 50,
        color:"red",
        fontStyle: 'roman'
    }
}));

//grid9 as name already "grid" defined so name conflict
const Grid9 = ({grid, clickHandler, flashIndices=[]}) => {

    const classes = useStyles();
   
    const mapGridValue = (e) => {
        if (e === "O" || e === "X") {
            return e;
        }
        return "";
    };
    
    return (
           
        <Grid  className={classes.root} >
            <Grid style={{width: '20rem'} } >
            
                <Row>
                {
                    [0, 1, 2].map(value => (
                    <Col xs={3}>
                        <Paper className={flashIndices.includes(value)? classes.paperFlash : classes.paper}  variant="outlined" onClick={() => clickHandler(value)} >
                                <p className={mapGridValue(grid[value]) === "O" ? classes.textO : classes.textX}>{mapGridValue(grid[value])}</p>
                        </Paper>
                       
                  </Col>
                ))
                }
                </Row>
                <Row>
                {
                    [3, 4, 5].map(value => (
                    <Col xs={3}>
                        <Paper className={flashIndices.includes(value)? classes.paperFlash : classes.paper}  variant="outlined" onClick={() => clickHandler(value)} >
                                <p className={mapGridValue(grid[value]) === "O" ? classes.textO : classes.textX}>{mapGridValue(grid[value])}</p>
                        </Paper>
                       
                  </Col>
                ))}
                </Row>
                <Row>
                {
                    [6, 7, 8].map(value => (
                    <Col xs={3}>
                        <Paper className={flashIndices.includes(value)? classes.paperFlash : classes.paper}  variant="outlined" onClick={() => clickHandler(value)} >
                                <p className={mapGridValue(grid[value]) === "O" ? classes.textO : classes.textX}>{mapGridValue(grid[value])}</p>
                        </Paper>
                       
                  </Col>
                ))}
                </Row>
                
               
            </Grid>
            
        </Grid>
    )
}

export default Grid9;