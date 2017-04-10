'use strict';	

var obj = {
title: "General knowledge test",
question1: "1. What is the biggest planet in the Solar System?",
set1:{
    answer1: "Jupiter",
    answer2: "Earth",
    answer3: "Saturn"},
  question2:'2. What is the capital of California?',
  set2:{
    answer1:'Los Angeles',
    answer2:'Sacramento',
    answer3:'San-Francisco'},
  question3:'3. How many milliseconds are in one minute?',
  set3:{
    answer1:'3 600',
    answer2:'6 000',
    answer3:'60 000'},
};


localStorage.setItem('questionnaire', JSON.stringify(obj));

var test = localStorage.getItem('questionnaire');

var test2 = JSON.parse(test);


$(function () {
  
  var html = $('#test').html();
     
  var content = tmpl(html, test2);   

  $('body').append(content);
  
});


$(function () {
  $('input[type = "button"]').click(function(event) {
    event.preventDefault();
    $('#overlay').stop().fadeIn(400,
      function() {
        $('#modal_form')
          .css('display', 'block')
          .animate({opacity: 1, top: '50%'}, 200);
    });
  });
  $('#modal_close').click(function () {
    $('#modal_form')
      .animate({opacity: 0, top: '45%'}, 200,
        function() {
          $(this).css('display', 'none');
          $('#overlay').stop().fadeOut(400);
          $('.q1_result').empty();
          $('.q2_result').empty();
          $('.q3_result').empty();
          $('.test_summary').empty();
          $('input[name=radioName]').prop('checked', false);
          var $res1 = "Answer is not provided!";
          $('.q1_result').append($res1);
          var $res2 = "Answer is not provided!";
          $('.q2_result').append($res2);
          var $res3 = "Answer is not provided!";
          $('.q3_result').append($res3);
        }
       );
   });
});

$(function () {
  $('form:nth-of-type(1) label:nth-of-type(1) input').attr('value','1');
  $('form:nth-of-type(1) label:nth-of-type(2) input').attr('value','2');
  $('form:nth-of-type(1) label:nth-of-type(3) input').attr('value','3');
  $('form:nth-of-type(2) label:nth-of-type(1) input').attr('value','4');
  $('form:nth-of-type(2) label:nth-of-type(2) input').attr('value','5');
  $('form:nth-of-type(2) label:nth-of-type(3) input').attr('value','6');
  $('form:nth-of-type(3) label:nth-of-type(1) input').attr('value','7');
  $('form:nth-of-type(3) label:nth-of-type(2) input').attr('value','8');
  $('form:nth-of-type(3) label:nth-of-type(3) input').attr('value','9');

});

$(function () {

  var $res1 = "Answer is not provided!";
  $('.q1_result').append($res1);
  var $res2 = "Answer is not provided!";
  $('.q2_result').append($res2);
  var $res3 = "Answer is not provided!";
  $('.q3_result').append($res3);

  $('form:nth-of-type(1)').on('change', function() {
    
    if ($('input[name=radioName]:checked', 'form:nth-of-type(1)').val() == 1) {
      $('.q1_result').empty();
      $res1 = "That is correct answer!";
      $('.q1_result').append($res1);
    } else {
      $('.q1_result').empty();
      $res1 = "Unfortunately, the answer is not correct";
      $('.q1_result').append($res1);
      }     
  });

  $('form:nth-of-type(2)').on('change', function() {
    
    if ($('input[name=radioName]:checked', 'form:nth-of-type(2)').val() == 5) {
      $('.q2_result').empty();
      $res2 = "That is correct answer!";
      $('.q2_result').append($res2);
    } else {
      $('.q2_result').empty();
      $res2 = "Unfortunately, the answer is not correct";
      $('.q2_result').append($res2);
      }
  });

  $('form:nth-of-type(3)').on('change', function() {
    
    if ($('input[name=radioName]:checked', 'form:nth-of-type(3)').val() == 9) {
      $('.q3_result').empty();
      $res3 = "That is correct answer!";
      $('.q3_result').append($res3);
    } else {
      $('.q3_result').empty();
      $res3 = "Unfortunately, the answer is not correct";
      $('.q3_result').append($res3);
      }
  });

  $('input[type = "button"]').click(function() {

    var $final_res;

    if ($('input[name=radioName]:checked', 'form:nth-of-type(1)').val() == 1) {
      if ($('input[name=radioName]:checked', 'form:nth-of-type(2)').val() == 5) {
        if ($('input[name=radioName]:checked', 'form:nth-of-type(3)').val() == 9) {
          $final_res = "Congratulations, You have passed the test!" }
        else { $final_res = "Unfortunately, You have not passed the test" };
      } else { $final_res = "Unfortunately, You have not passed the test" };
    } else { $final_res = "Unfortunately, You have not passed the test" };    

    $('.test_summary').append($final_res);
  });

});



