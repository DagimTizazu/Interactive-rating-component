$(function () {

     //color variables for background and hover state of the rating buttons
     let lightGrey = "hsl(217,12%,63%)";
     let lightDarkBlue = "hsl(214, 19%, 26%)";

    //rating number span elements selection into a variable
    $ratingButtons = $('.rating-buttons');

    //bg-color change for hovered element and previous elements (to have a rating feel to it)
    $ratingButtons.hover(function () {

        $(this).css({
            'background-color': lightGrey,
            'color': 'white'
        });
        $(this).prevAll().css({
            'background-color': lightGrey,
            'color': 'white'
        });
    }, function () {
        $(this).css({
            'background-color': lightDarkBlue,
            'color': lightGrey
        });
        $(this).prevAll().css({
            'background-color': lightDarkBlue,
            'color': lightGrey
        });
    }
    );

   
    //for adding and removing a 'selected' class on the clicked element
    $ratingButtons.on('click', function () {
    
        if ($(this).hasClass('selected') && !$(this).next().hasClass('selected')) {
            $(this).removeClass('selected');
            $(this).prevAll().removeClass('selected');
            $(this).nextAll().removeClass('selected');
        } else if ($(this).next().hasClass('selected') || $(this).next().next().hasClass('selected')
            || $(this).next().next().next().hasClass('selected')
            || $(this).next().next().next().next().hasClass('selected')) {
            $(this).nextAll().removeClass('selected');
        } else {
            $(this).nextAll().removeClass('selected');
            $(this).addClass('selected');
            $(this).prevAll().addClass('selected');
        }

    }
    );
    
   //display thankyou section on submit button click, if a rating is selected and display the rating number selected 
    $('.submit-button').on('click', function(e) {
        
        if ($('.selected').length) {
            $selectedNumber = $('.selected:last').text();
            $('.rating-number').text($selectedNumber);
            $('.rating-wrapper').css('display', 'none');
            $('.thankyou').css('display', 'block');
        } else {
            return; 
        }
    });
});