$(function(){
    count = 0;
    /*$('li.dropdown').on('mouseover', function(e){
        $(this).find("ul:first").show();
        //$(this).addClass('active');
    }).on('mouseout', function(e){
        $(this).find("ul:first").hide();
        //$(this).removeClass('active');
    });*/
/*    $('li.dropdown li').on('mouseover',function(e){
        if($(this).has('ul').length) {
        $(this).parent().addClass('expanded');
        }
        $('ul:first',this).parent().find('> a').addClass('active');
        $('ul:first',this).show();
    }).on('mouseout',function(e){
    $(this).parent().removeClass('expanded');
        $('ul:first',this).parent().find('> a').removeClass('active');
        $('ul:first', this).hide();
    });*/

    //$('ul.navbar-nav li:first').addClass('active');
    $('ul.navbar-nav li').click(function() {
        $('ul.navbar-nav li').removeClass('active');
        $(this).addClass('active');
    }); 

    $('.click-menu').on('click', function(){
        $('.nav-click').slideToggle('slow');
    });
}); 