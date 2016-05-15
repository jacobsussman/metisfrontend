///*jslint browser: true*/
///*global $, jQuery, alert*/

$(document).ready(function () {

    $( ".signUp" ).click(function() {
        location.assign("signUp.html");
    });
    
    $( ".logIn" ).click(function() {
        location.assign("logIn.html");
    });
    $( ".start" ).click(function() {
        location.assign("welcome.html");
    });
    
    $( ".logo" ).click(function() {
        location.assign("client.html");
    });
    
    $( ".chat" ).click(function() {
        location.assign("chat.html");
    });
});
	

//
//<textarea rows="4" cols="50" placeholder="Write Nancy a message...">
//                
//            </textarea>

//<div class="chatForm">
//            <form class="chatInput" action="action_page.php">
//                <input type="text" name="message" placeholder="Write Nancy a message..."><br>
//            </form>
//            <div class="buttons">
//                <h5 class="blue start">Submit</h5>
//            </div>
//        </div>