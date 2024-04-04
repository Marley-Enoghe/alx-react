import $ from 'jquery';

$(document).ready(function(){
  $('<p>').text('Holberton Dashboard').appendTo('body');

    $("<p>").text("Dashboard data for the students").appendTo("body");

    $("<button>").text("Click here to get started").appendTo("body");

     $("<p>").attr("id", "count").appendTo("body");

        $("<p>").text("Copyright - Holberton School").appendTo("body");
})

const updateCounter = () =>{
 let  count = $('#count').html() || 0;
  $('button').on('click', () => {
    count++;
    $('#count').html(`${count} clicks on the button`);
  });

  ALGO
  // every time you click increase the value 

};

_.debounce(updateCounter, 500);
updateCounter();