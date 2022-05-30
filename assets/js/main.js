
$(document).ready(function(){
    $(".hambuger a").click(function(){
        $(".menu-items").fadeToggle();
        $(this).parent(".hambuger").toggleClass("openMenu")
    });
});