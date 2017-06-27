$(function(){
    $('#messageAccordion').accordion({
        heightStyle:"content"
    });
    $('#tabIntroduction').click(tabIntroClick);
    $('#tabAbout').click(tabAboutClick);
    $('#tabFeatures').click(tabFeaturesClick);
    var w=$("#rect").width()-500;
    $(".rect1").css('left',w);
    $(".rect2").css('left',w);
    $(".rect3").css('left',w);
      
    
});
function clearActiveTab(){
        $('.tab').removeClass('tabActive');
        $('.tbCont').css('display','none');
        
    }
function tabAboutClick(){
    clearActiveTab();
    $('#tabAbout').addClass('tabActive');
    $('#AboutContent').css('display','block');
    
    };
 
function tabIntroClick(){
    clearActiveTab();
    $('#tabIntroduction').addClass('tabActive');
    $('#IntroContent').css('display','block');
};
function tabFeaturesClick(){
    clearActiveTab();
    $('#tabFeatures').addClass('tabActive');
    if (screen.width<768){
        $('#FeaturesContent').css('display','flex');
        $('#FeaturesContent').css('flex-direction','column-reverse');
    }else{
        $('#FeaturesContent').css('display','block');
    }
    
};