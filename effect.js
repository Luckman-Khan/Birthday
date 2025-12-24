$(window).load(function(){
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});
$('document').ready(function(){
        var vw;
        $(window).resize(function(){
             vw = $(window).width()/2;
            $('#b1,#b2,#b3,#b4,#b5,#b6').stop();
            $('#b11').animate({top:240, left: vw-250},500);
            $('#b22').animate({top:240, left: vw-150},500);
            $('#b33').animate({top:240, left: vw-50},500);
            $('#b44').animate({top:240, left: vw+50},500);
            $('#b55').animate({top:240, left: vw+150},500);
            $('#b66').animate({top:240, left: vw+250},500);
        });

    $('#turn_on').click(function(){
        $('#bulb_yellow, #bulb_red, #bulb_blue, #bulb_green, #bulb_pink, #bulb_orange').addClass(function(){
            return $(this).attr('id').replace('bulb_', 'bulb-glow-');
        });
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(5000).promise().done(function(){
            $('#play').fadeIn('slow');
        });
    });

    $('#play').click(function(){
        $('.song')[0].play();
        $('#bulb_yellow, #bulb_red, #bulb_blue, #bulb_green, #bulb_pink, #bulb_orange').addClass(function(){
            return $(this).attr('id').replace('bulb_', 'bulb-glow-') + '-after';
        });
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#bannar_coming').fadeIn('slow');
        });
    });

    $('#bannar_coming').click(function(){
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#balloons_flying').fadeIn('slow');
        });
    });

    function loopBalloon(id) {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $(id).animate({left:randleft,bottom:randtop},10000,function(){
            loopBalloon(id);
        });
    }

    $('#balloons_flying').click(function(){
        $('.balloon-border').animate({top:-500},8000);
        $('#b1,#b3,#b5').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b4,#b6').addClass('balloons-rotate-behaviour-two');
        // Loop for 6 balloons
        for(var i=1; i<=6; i++){ loopBalloon('#b'+i); }
        $(this).fadeOut('slow').delay(5000).promise().done(function(){
            $('#cake_fadein').fadeIn('slow');
        });
    }); 

    $('#cake_fadein').click(function(){
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').delay(3000).promise().done(function(){
            $('#light_candle').fadeIn('slow');
        });
    });

    $('#light_candle').click(function(){
        $('.fuego').fadeIn('slow');
        $(this).fadeOut('slow').promise().done(function(){
            $('#wish_message').fadeIn('slow');
        });
    });
        
    $('#wish_message').click(function(){
        // Trigger Confetti Cannon
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            zIndex: 1000
        });

         vw = $(window).width()/2;
        $('#b1,#b2,#b3,#b4,#b5,#b6').stop();
        // Renaming IDs for positioning
        for(var i=1; i<=6; i++){ $('#b'+i).attr('id','b'+i+i); }

        $('#b11').animate({top:240, left: vw-250},500);
        $('#b22').animate({top:240, left: vw-150},500);
        $('#b33').animate({top:240, left: vw-50},500);
        $('#b44').animate({top:240, left: vw+50},500);
        $('#b55').animate({top:240, left: vw+150},500);
        $('#b66').animate({top:240, left: vw+250},500);

        $('.balloons').css('opacity','0.9');
        $('.balloons h2').fadeIn(3000);
        $(this).fadeOut('slow').delay(3000).promise().done(function(){
            $('#story').fadeIn('slow');
        });
    });
    
    $('#story').click(function(){
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').promise().done(function(){
            $('.message').fadeIn('slow');
        });
        
        function msgLoop (i) {
            $("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
                i=i+1;
                $("p:nth-child("+i+")").fadeIn('slow').delay(1000);
                if(i==50){
                    $("p:nth-child(49)").fadeOut('slow').promise().done(function () {
                        $('.cake').fadeIn('fast');
                    });
                } else { msgLoop(i); }          
            });
        }
        msgLoop(0);
    });
});