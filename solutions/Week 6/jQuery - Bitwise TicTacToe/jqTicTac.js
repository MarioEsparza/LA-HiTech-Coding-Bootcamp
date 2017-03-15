/* 
 * Complete the functions below to create a functioning tic tac toe game. 
 * Then include the script in the html file and play.
 */


$(document).ready(function () {

    var squares = [],
        SIZE = 3,
        EMPTY = "&nbsp;",
        score,
        moves,
        turn = "X";

    
    /*
     * To determine a win condition, each square is "tagged" from left
     * to right, top to bottom, with successive powers of 2.  Each cell
     * thus represents an individual bit in a 9-bit string, and a
     * player's squares at any given time can be represented as a
     * unique 9-bit value. A winner can thus be easily determined by
     * checking whether the player's current 9 bits have covered any
     * of the eight "three-in-a-row" combinations.
     *
     *     273                 84
     *        \               /
     *          1 |   2 |   4  = 7
     *       -----+-----+-----
     *          8 |  16 |  32  = 56
     *       -----+-----+-----
     *         64 | 128 | 256  = 448
     *       =================
     *         73   146   292
     *
     */

    var wins = [273, 84, 7, 56, 448, 73, 146, 292];

    /*
     * Clears the score and move count, erases the board, and makes it
     * X's turn.
     */
    var startNewGame = function () {
        console.log("Game On Sucka");
        turn = "X";
        score = { "X": 0, "O": 0 };
        moves = 1;
        $(".tbl-cell").empty();
        $("#msg").empty();
        $("#btn").empty();
    };

    $("body").on("click", "button", function () {
        startNewGame();
    });

    /*
     * Returns whether the given score is a winning score.
     */
    var win = function (score) {
        for (var z = 0; z < squares.length; z++) {
            if ((wins[z] & score) == wins[z]) { // Or wins[z] == score?
                return true;
            }
        }
        return false;
    };

    /*
     * Sets the clicked-on square to the current player's mark,
     * then checks for a win or cats game.  Also changes the
     * current player.
     */
    $("#tictactoe").on("click", "td.tbl-cell", function () {
        if ($(this).html()) {
            console.log("SQUARE IN USE");
        } else {
            //console.log($(this).attr("bitValue"));
            $(this).html(turn);
            score[turn] += ($(this).attr("bitValue") * 1);
            //console.log(score[turn]);
            if (win(score[turn])) {
                $("#msg").html("<h2 class='content-header'>" + turn + " Wins!</h2>");
                //startNewGame();
            }
            if (moves == 9 && !(win(score[turn]))) {
                $("#msg").html("<h2 class='content-header'> Cat's Game</h2>")
            }
            turn == "X" ? turn = "O" : turn = "X";
            moves++;
        }
    });

    /*
     * Creates and attaches the DOM elements for the board as an
     * HTML table, assigns the indicators for each cell, and starts
     * a new game.
     */
    var play = function () {    
        $("#tictactoe").append("<table id='tbl'> <tr><td class='tbl-cell' >&nbsp;</td><td class='tbl-cell'>&nbsp;</td><td class='tbl-cell'>&nbsp;</td></tr><tr><td class='tbl-cell'>&nbsp;</td><td class='tbl-cell'>&nbsp;</td><td class='tbl-cell'>&nbsp;</td></tr><tr><td class='tbl-cell'>&nbsp;</td><td class='tbl-cell'>&nbsp;</td><td class='tbl-cell'>&nbsp;</td></tr> </table>");
        var cells = $(".tbl-cell");
        var value = 1;
        cells.each(function (i, obj) {
            $(this).val($(this).attr("bitValue", value));
            value += value;
            squares.push(this);
        });
        startNewGame();
    };

    play();
});
