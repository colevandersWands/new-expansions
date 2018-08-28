function displayErrors(fb) {
    if(fb.errors.length > 0) {
        alert(fb.errors[0]);
    }
} 

/* config:
        challenge: String
            - The code to study, defined like this:
                "line 1 \n" +
                "  block 1, line 2  \n" +
                "line 3 \n";
        shuffled_id: String
            - id for the div with scrambled code
        sorted_id: String
            - id for the div with sorted code
        reshuffle_id: String
            - id for the reshuffle button in this section
        feedback_id: String
            - id for the feedback button in this section
*/
var config;

function init_section(config){
    var parson = new ParsonsWidget({
        'sortableId': config.sorted_id,
        'trashId': config.shuffled_id,
        'max_wrong_lines': 1,
        'feedback_cb' : displayErrors
    });
    parson.init(config.challenge);
    parson.shuffleLines();
    $("#" + config.reshuffle_id).click(function(event){
        event.preventDefault();
        parson.shuffleLines();
    });
    $("#" + config.feedback_id).click(function(event){
        event.preventDefault();
        parson.getFeedback();
    });
};