// Answer the questions here:

// - What do you think is going to happen?
// The string "Delegated Button#5 Handler" will be printed to the console.

// - What happened?
// The string "Delegated Button#5 Handler" was printed to the console.

// - Why?
// The button is a child of the ul of id list, which delegated a click-handler
// for all of its children buttons, present or future.

//========== Write your code below ===========//
document.addEventListener("DOMContentLoaded", function(event)
{
    console.log("Loaded");

    /* FEATURE SET 1 */
    $('#list').on('click', 'button', function()
    {
        console.log($(this).text());
    });

    /* FEATURE SET 2 */
    $('#list').append($("<li><button style='margin-top: 10px'>Delegated Button#5 Handler</button></li>"));

    /* FEATURE SET 3 */
    $('#list').on('click', '.new-button', function()
    {
        console.log($(this).text() + " is a brand new button!");
    });

    $('#list').append($("<li><button class='new-button' style='margin-top: 10px'>Button #6</button></li>"));
    $('#list').append($("<li><button class='new-button' style='margin-top: 10px'>Button #7</button></li>"));
    $('#list').append($("<li><button class='new-button' style='margin-top: 10px'>Button #8</button></li>"));
    $('#list').append($("<li><button class='new-button' style='margin-top: 10px'>Button #9</button></li>"));

    /* ADDITIONAL CHALLENGE #1 */
    $('#list').on('click', '.google-button', function()
    {
        window.open("http://google.com");
    });

    $('#list').append($("<li><button class='google-button' style='margin-top: 10px'>Googly!</button></li>"));

    /* ADDITIONAL CHALLENGE #2 */
    $('#list').on('click', 'button:contains(\'Poopy\')', function()
    {
        console.log("This is a special button!!!");
    });

    $('#list').append($("<li><button class='new-button' style='margin-top: 10px'>Poopy #10</button></li>"));
    $('#list').append($("<li><button class='new-button' style='margin-top: 10px'>Button #11</button></li>"));
    $('#list').append($("<li><button class='new-button' style='margin-top: 10px'>Poopy #12</button></li>"));
    $('#list').append($("<li><button class='new-button' style='margin-top: 10px'>Button #13</button></li>"));
});