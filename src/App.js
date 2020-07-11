import React, {useEffect, useState} from 'react';
import {Button, CardDeck, Container, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {Modal} from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown'
import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Grid from "./Grid";
import {emptyIndexies, minimax, winning} from "./ticTacToe/minMax";



export const HUMAN_PLAYER = "human";
export const AI_PLAYER = "ai";

export const HUMAN_PLAYER_SYMBOL = "O";
export const AI_PLAYER_SYMBOL = "X";

const mapPlayer = {
    ai: "Computer",
    human: "Human"
};

function App() {

    const [grid, setGrid] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    const [player, setPlayer] = useState(HUMAN_PLAYER); //for by default
    const [depth, setDepth] = useState(1);//for by default
    const [submit, setSubmit] = useState(false);//for by default
    const [win, setWin] = useState("");//for by default
    const [flashIndices, setflashIndices] = useState([]);
    const [move,setmove] = useState("");
   
    const setDepthFn = (evtKey) => {
        setDepth(Number(evtKey));
        setSubmit(false);
    };

    const setPlayerFn = (evtKey) => {
        setPlayer(evtKey);
        setSubmit(false);
        setGrid([0, 1, 2, 3, 4, 5, 6, 7, 8]);
        setflashIndices([]);
    };
    
    
    const onClick = (e) => 
    {
        //to avoid click on already clicked spots
        if(grid[e]=== "X" || grid[e]==="O")
        {
            return;
        }
       
        updateGrid(e, HUMAN_PLAYER_SYMBOL);
        setPlayer(AI_PLAYER);
            //useEffect will be called
       
    };

    const updateGrid = (ind, v) =>
    {
        grid[ind] = v;
       
        if (winning(grid, HUMAN_PLAYER_SYMBOL)) {
            getFlashIndices();
            setWin(HUMAN_PLAYER);
            handleShow();
            setmove("");
           }
        
        if (winning(grid, AI_PLAYER_SYMBOL)) {
            getFlashIndices();
            setWin(AI_PLAYER);
            handleShow();
            setmove("");
        }
    }

    useEffect(() => {
        
        if(player===HUMAN_PLAYER)//to suggest human his/her move
        {
            var tempGrid = JSON.parse(JSON.stringify(grid));
            var p = minimax(tempGrid, HUMAN_PLAYER_SYMBOL, 100);   
            setSuggestMove(p.index);
        }
        
        if (player === AI_PLAYER)//when chance of AI then minimax to update grid acc to ai pos
        {    
            var tempGrid = JSON.parse(JSON.stringify(grid));
            
            var p = minimax(tempGrid, AI_PLAYER_SYMBOL, depth); //p is struct having p.index and p.score
            updateGrid(p.index, AI_PLAYER_SYMBOL);

            if (p.score === 0 && emptyIndexies(grid).length <2) 
            {
                handleDShow(); 
            }
            setPlayer(HUMAN_PLAYER);
        }
    }, [submit, player]);
    
    const setSuggestMove = (value) =>
    {
        //console.log(value);
        if(value===0)
        {
            setmove("1st row 1st col");
        }
        if(value===1)
        {
            setmove("1st row 2nd col");
        }
        if(value===2)
        {
            setmove("1st row 3rd col");
        }
        if(value===3)
        {
            setmove("2nd row 1st col");
        }
        if(value===4)
        {
            setmove("2nd row 2nd col");
        }
        if(value===5)
        {
            setmove("2nd row 3rd col");
        }
        if(value===6)
        {
            setmove("3rd row 1st col");
        }
        if(value===7)
        {
            setmove("3rd row 2nd col");
        }
        if(value===8)
        {
            setmove("3nd row 3nd col");
        }
        if(emptyIndexies(grid).length<1)
        {
            setmove("");
        }
          
    }
    
    function getFlashIndices()
    {
            if(grid[0]===grid[1] && grid[2] === grid[1])
            {
                setflashIndices([0,1,2]);
            }
            else if (grid[3]&& grid[3]=== grid[4]  && grid[5] === grid[4]) 
            {   
                setflashIndices([3,4,5]);
            }
            if(grid[6]&&grid[6]===grid[7] && grid[7] === grid[8]){
                setflashIndices([6,7,8]);
            }
            else if (grid[0]&& grid[3]=== grid[0]  && grid[3] === grid[6]) 
            { 
                setflashIndices([0,3,6]);
            }
            if(grid[1]===grid[4] && grid[4] === grid[7]){
               
                setflashIndices([1,4,7]);
            }
            else if (grid[2]=== grid[5]  && grid[5] === grid[8]) 
            {   
                setflashIndices([2,5,8]);
            }
            if(grid[0]===grid[4] && grid[4] === grid[8]){
                
                setflashIndices([0,4,8]);
            }
            else if (grid[2]=== grid[4]  && grid[4] === grid[6]) 
            {   
                setflashIndices([2,4,6]);
            }
    };
      
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    function winModal() {

        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Game Ends</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {win === HUMAN_PLAYER ? "Congratulations, you won!" : "Oops, you lost!"}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        ) ;
    }
    

    const [showD, setShowD] = useState(false);
    const handleDClose = () => setShowD(false);
    const handleDShow = () => setShowD(true);

    function drawModal() {
        return (
           <Modal show={showD} onHide={handleDClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Game Ends</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Match Drawn!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleDClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }

    const newGame = () => {
        setSubmit(true);
        setDepth(1);
        setGrid([0, 1, 2, 3, 4, 5, 6, 7, 8]);
        setPlayer(HUMAN_PLAYER);
        setflashIndices([]);
    }
  
    const borderLessCard = {
        border: 0, 
        alignItems: 'center'
    };

    return (
        
        <Container className="p-4" style={{backgroundcolor: "black"}}>
            <Jumbotron>
                <h1>Hello, hooman!</h1>
                <p>
                 AI powered Tic-Tac-Toe Game.
                </p>
            </Jumbotron>
            <CardDeck >
                
                <Card  border="secondary" style={{width: '18rem'}} >
                    <Card.Body >
                        <Row >
                            <DropdownButton id="dropdown-basic-button" title="Player" variant="success" size="lg"
                                         style={{marginRight: 10}}>
                                <Dropdown.Item as="button" eventKey={HUMAN_PLAYER} 
                                               onSelect={setPlayerFn}>Human (O)</Dropdown.Item>
                                <Dropdown.Item as="button" eventKey={AI_PLAYER} 
                                               onSelect={setPlayerFn}>Computer (X)</Dropdown.Item>
                            </DropdownButton>
                            
                            <DropdownButton id="dropdown-basic-button" title="Depth/Level" style={{marginRight: 10}} variant="info" size="lg">
                                <Dropdown.Item as="button" eventKey="1" onSelect={setDepthFn}>Easy</Dropdown.Item>
                                <Dropdown.Item as="button" eventKey="5" onSelect={setDepthFn}>Medium</Dropdown.Item>
                                <Dropdown.Item as="button" eventKey="100" onSelect={setDepthFn}>Hard</Dropdown.Item>
                            </DropdownButton>
                        </Row>
                    </Card.Body>
                    <Card.Body >
                        <Card.Title>Selections Made</Card.Title>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Player: {mapPlayer[player]}</ListGroupItem>
                            <ListGroupItem>Depth: {depth !== 100 ? depth : "MAX"}</ListGroupItem>
                            <ListGroupItem>Suggested Move: {move}</ListGroupItem>
                           
                        </ListGroup>
                    </Card.Body>
                    <Button size="lg"
                        variant="warning"
                        onClick={() => newGame()}
                    >
                        New Game
                    </Button>

                </Card>
                <Card style={borderLessCard} >
                
                    <Grid grid={grid} clickHandler={onClick} flashIndices={flashIndices}/>
                    
                </Card>
                
                {show > 0 ? winModal() : null}
                {showD > 0 ? drawModal() : null}
                
            </CardDeck>
        </Container>
    );
}

export default App;


