$(document).ready(function () {
    console.log('i am in the new file now')
    // your jquery code here

    console.log("we are using jquery");
    // $('selector').action();
    // clicks on all the p elements. 
    //$('p').click(); //click on p
    $('p').click(function () {
        console.log('you clicked on p', this);
        // $(this).hide();
        //$('#id').hide();
        //$('.class').hide;
    }); //do this when we click on p

    // $('p').dblclick(function () {
    //   console.log('you dbl clicked on p', this);
    //});

    //$('p').mouseenter(function () {
    //  console.log('you Enterd:', this);
    //});

    //$('p').hover(function () {
    // console.log('you hoverd on', this);
    // }, 
    //function () {
    //  console.log('thanks for coming')
    //});

    // there are three main types of selctor
    // 1. element 2. id(#) selector 3. class(.)selector

    // 1 Elements selector - this is an example of elements selector which clicks on all p
    //$('p').click();

    // 2. id selector - this is an example of id selector
    //$('#second').click();

    // 3. class selector - this is an example of class selector
    //$('.odd').click();

    //other selector
    //$('*').click(); clicks on all the elements
    //$('p.odd').click();
    //$('p:first').click();

    //Events in jquery

    //MouseEvent = click, dblclick, mouseenter, mouseleave
    //KeyboardEvent = keypress, keydown, keyup 
    //form Event = submit, change, focus, blur
    //document/window events = load, unload, resize, scroll

    //demoing the on mathod
    $('p').on(
        {
            click: function () {
                console.log('thanks for clicking');
            },

            mouseleave: function () {
                console.log('mouseleave')
            }
        }
    )
    //$('#wiki').show(1000, function () {
        //console.log('show');
   // });
   // $('#wiki').hide(1000, function () {
        //console.log('hiden');
    //});

    $('#but').click(function(){
      $('#wiki').fadeOut(1000);$('#wiki').addClass('myclass');
    })

    //fadeOut()
    //fadeIn()
    //fadeToggle()
    //fadeTo()

    // slide mathod - speed and callback parameters are optionl
   // $('#wiki').slideUp(1000, function(){
     //   console.log("done");
    //});

    //$('#wiki').slideDown(1000);
    //$('#wiki').slideToggle(1000);

    //animate function in jquery

    //$('#wiki').animate({
      //  opacity:0.3,        
        //height:'150px',
      //  width:'350px'
    //},4000)

    //$('#wiki').animate({opacity:3.0},4000);
    //$('#wiki').animate({opacity:0.9},1000);
    //$('#wiki').animate({widht:'300px'},1000);

    $('#wiki').addClass('myclass');
    $('#wiki').addClass('myclass2');
    $('#wiki').removeClass('myclass');
    $('#wiki').css('background-color','red');



})

