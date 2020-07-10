import {HUMAN_PLAYER_SYMBOL, AI_PLAYER_SYMBOL} from "../App";

export function minimax(newBoard, player, depth) 
{
        //available spots array
        var availSpots = emptyIndexies(newBoard);

        // checks for the terminal states such as win, lose, and tie and returning a value accordingly
        if (winning(newBoard, HUMAN_PLAYER_SYMBOL)) 
        {
            return {score: -10};
        } 
        else if (winning(newBoard, AI_PLAYER_SYMBOL))
        {
            return {score: 10};
        } 
        else if (availSpots.length === 0) 
        {
            return {score: 0};
        }
        if (depth === 0) 
        {
            return {score: 0};
        }

        // an array to collect all the objects
        var moves = [];

        // loop through available spots
        for (var i = 0; i < availSpots.length; i++)
        {
            //create an object for each and store the index of that spot that was stored as a number in the object's index key
                var move = {};
                move.index = newBoard[availSpots[i]];

                // set the empty spot to the current player
                newBoard[availSpots[i]] = player;

                //if collect the score resulted from calling minimax on the opponent of the current player
                if (player === AI_PLAYER_SYMBOL) 
                {
                    var result = minimax(newBoard, HUMAN_PLAYER_SYMBOL,depth--);
                    move.score = result.score;
                } 
                else 
                {
                    var result = minimax(newBoard, AI_PLAYER_SYMBOL,depth--);
                    move.score = result.score;
                }

                //reset the spot to empty
                newBoard[availSpots[i]] = move.index;

                // push the all possible like out of 4 nodes 2 are  objects to the array
                moves.push(move);
        }

        // if it is the computer's turn loop over the moves and choose the move with the highest score
        var bestMove;
        if (player === AI_PLAYER_SYMBOL) 
        {
            var bestScore = -10000;
            for (var i = 0; i < moves.length; i++) 
            {
                if (moves[i].score > bestScore)
                {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        } 
        // else loop over the moves and choose the move with the lowest score
        else
         {
            var bestScore = 10000;
            for (var i = 0; i < moves.length; i++) 
            {
                if (moves[i].score < bestScore) 
                {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }

        // return the chosen move (object) from the array to the higher depth
        return moves[bestMove];
}

// //1.returns the available spots on the board/grid
export function emptyIndexies(board) {
    return board.filter(s => s !== "O" && s !== "X");
}

// winning combinations using the board indexies for instance the first win could be 3 xes in a row
export function winning(board, player)
{
    if (
        (board[0] === player && board[1] === player && board[2] === player) ||
        (board[3] === player && board[4] === player && board[5] === player) ||
        (board[6] === player && board[7] === player && board[8] === player) ||
        (board[0] === player && board[3] === player && board[6] === player) ||
        (board[1] === player && board[4] === player && board[7] === player) ||
        (board[2] === player && board[5] === player && board[8] === player) ||
        (board[0] === player && board[4] === player && board[8] === player) ||
        (board[2] === player && board[4] === player && board[6] === player)
    ) 
    {
      return true;
    } 
    else {
        return false;
    }
}