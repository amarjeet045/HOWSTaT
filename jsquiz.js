(function() {
  var questions = [{
    question: "which is first indian cricket tournament?",
    choices: ['none of these','Bombay Triangular','pepsi cup','bombay series'],
    correctAnswer: 1
  }, {
    question: "indian played first test match against?",
    choices: ['Australia',' england ','south Africa','pakistan'],
    correctAnswer: 1
  }],
        var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
                   
