
$(document).ready(function(){
    for(var i =0;i<$('.gthumbnail').length;i++){
        $('.gthumbnail')[i].setAttribute('rank',[i]);
    }
    $('.gthumbnail').click(function(e){
        e.preventDefault();
        var parent = $('.gthumbnail').parent();
       var gprev = $(this).parent().attr('href');
       structure();

        // Structure
       
       var gimg = `<img id="preview-img" onload="trigger()" class="preview-img" src=""/>`
       // $('#preview-body').append(img_container);
       $('.img-control').append(gimg);
       $('#preview-img').attr('src',gprev)
       var cprev = $(this).parent().index();
       $('#preview-img').attr('rank',cprev);
        $('.shortthumb').click(function(){
            var h = $(this);
            // var a = $(this).parent().attr('href');
           shortThumbClick(h);

        });

       
        //===Video===
        var vid = $(this).attr('data-type');
        

        if(vid=='video'){
            videoPlay(gprev);
                      
        }
        

       //===highlight====
  
       //===highlight===
      
      // $('.shortarea').on('mouseenter',function(){
      //   $('.shortpreview').show(500);

      // });
      // $('.shortarea,.footer').on('mouseleave',function(){
      //   $('.shortpreview').hide(500);
        

      // });
      $('#leftshort').click(function(e){
            // var et =  $('.shortpreview');
            leftShort(e);
        });
        $('#Rightshort').click(function(){
            // $('.shortpreview').animate({ right : '+100px' });
            rightShort();

        });
      


        //==End of gthumb click ==

        
    });


//===Click on Vidthumb===
 $('.vidthumb').click(function(e){
    e.preventDefault();
    
    var gprev = $(this).attr('href');
    var cprev = $(this).index();
    console.log(cprev);
       
    // starting(gprev);
    structure();
    // console.log(gprev);
    videoPlay(gprev);
    $('#preview-img').attr('rank',cprev);
    $('.shortarea').on('mouseenter',function(){
        $('.shortpreview').show(500);

      });
      $('.shortarea,.footer').on('mouseleave',function(){
        $('.shortpreview').hide(500);
        

      });
      $('.shortpreview img').click(function(){
            var h = $(this);
            // var a = $(this).parent().attr('href');
           shortThumbClick(h);

        });
        $('#leftshort').click(function(e){
            // var et =  $('.shortpreview');
            leftShort(e);
        });
        $('#Rightshort').click(function(){
            // $('.shortpreview').animate({ right : '+100px' });
            rightShort();

        });

      
      
//===End of vidthumb click===
 });

 
//==End of jquery ready===
});

function structure(){
     var parent = $('.gthumbnail').parent();
       // var gprev = $('.gpreview').attr('href');
       // var gprev = $(this).parent().attr('href');

        // Structure
        var preview = `<div id="preview" class="preview"></div>`;
       var previewBody = `<div id="preview-body" class="preview-body"></div>`;
       $('body').prepend(preview);
       $('#preview').show().append(previewBody);
       var img_container = `<div class="img-control"></div>`
       // var gimg = `<img id="preview-img" onload="trigger()" class="img-control" src=""/>`
       $('#preview-body').append(img_container);
       // $('.img-control').append(gimg);
       // $('#preview-img').attr('src',gprev)
        var prevHead = `<div class="pre-head">
                            <div class="toolbox float-right">
                                &times;
                            </div>
                        </div>`;
                        
        

        $('#preview-body').prepend(prevHead);
     
        var prevFoot = `<div class="footer">
                        <div class="nav-box float-left">
                            <div id="prev" onclick="prev()" class="nboxl">
                                left
                            </div>
                        </div>
                        <div class="nav-box float-right text-right">
                            <div onclick="next()" id="nex" class="nboxr">
                                right
                            </div>
                        </div>
                    </div>`;

        $('#preview-body').append(prevFoot);

        var capText = `<div class="captext"></div>`;
        $('#preview-body').append(capText);

        $('.toolbox').click(function(){
            $('#preview').remove();

        });
        
        $('*').click(function(){
            // console.log(this.getAttribute('id'));
            if(this.getAttribute('id')=='preview')
            {
                
            $('#preview').remove();
            }
            //break;
            return false;
            
        });
        //===fullscreen====
         var zBtn = `<div class="z-btn1">
             <a id="zplus" onclick="fullWidth()" href="#" class="zbtn-control">+</a>
         </div>`
        $('#preview-body').append(zBtn);
   
        
        //===fullscreen====
        //====Zoom-Button===
        var zBtn = `<div class="z-btn">
            <a id="zPlus1" onclick="zoomIn()" href="#" class="zbtn-control">+</a>
            <a id="zminus" onclick="zoomOut()" href="#" class="zbtn-control">-</a>
        </div>`
        $('#preview-body').append(zBtn);
       
        

        //====Zoom-Button===
        shortPrev();



}



 function shortThumbClick(h){

        var a = h.index();

    console.log(h.attr('data-type'));
            var b = $('.gpreview')[a].getAttribute("href");
                gprev = b;
            if(h.attr('data-type')=='video'){
                videoPlay(gprev);
                console.log('hello');
                // var smr = h.parent().index();
                 $('#preview-img').attr('rank',a);
            }else{
            // var c = b.attr('href');
            $('#preview-img').attr('src',b);
            // var f = $('#preview-img').attr('src');
            // if(a==$(''))
             $('#preview-img').attr('rank',a);
            }
            $('.shortpreview img').removeClass('gactive');
            $(this).attr('class','gactive');
            // var cap = $(this).attr('alt');
            // $('.captext').html(cap);
 }
  //==special opration =====

function shortPrev(){
     // shortpreview

        var thumb = $('.gthumbnail').parent();
       
         
        $('.img-control').after(`<div class="shortarea"><div id="id2" class='shortpreview' style="left:0;">`);
        for(i = 0;i<thumb.length;i++){
        var a = thumb[i].innerHTML;
            
            $('.shortpreview').append(a);
     
        }
        $('.shortpreview img').attr('class','shortthumb');
        $('.footer').before('</div></div>');
        var shortrtl = `<div class="rtl-control"><span id="leftshort">&copy;</span><span id="Rightshort">&times;</span></div>`;
        $('.shortpreview').after(shortrtl);

}       

function trigger(){
    var m = $('#preview-img').attr('rank');
    var r = $('.gpreview');

    // for(var m =0;m<r.length;m++){

    //     if(d==$('.gpreview')[m].getAttribute('rank')){
            $('.shortpreview img').removeClass('gactive');
            $('.shortpreview img')[parseInt(m)].setAttribute('class','gactive');
            var cap = $('.shortpreview img')[parseInt(m)].getAttribute('alt');
            // $('.captext').html(cap);
            var xdr = parseInt(m);
            indexing(xdr,cap);
            // console.log(m);
            // }
    // }

    //===Highliter===
        var mexr = $('.shortpreview img').css('width');
        var mexr1 = $('.shortpreview img').css('margin-left');
        var xcr = $('.gactive').attr('rank');
        var xcr1 = parseInt(mexr) + parseInt(mexr1);
        var t = xcr * xcr1 - 200;
        var et = document.getElementById('id2');
        et.style.left = -t+'px';
        console.log(t);
    //===Highlighter===
        
    
}
          

function next(){

    var m = $('#preview-img').attr('rank');
        var r = $('.gpreview');
        
        $('.shortpreview').show(500);
   
        // var ab = document.getElementsByClassName('gpreview');
            var prc = $('.gpreview')[parseInt(m)+1].getAttribute('href');
            console.log(prc);
            var vr = $('.gthumbnail')[parseInt(m)+1].getAttribute('data-type');
            
            if(vr=="video"){
                gprev = prc;
                videoPlay(gprev);
                $('#preview-img').attr('rank',parseInt(m)+1);
            }else if($('#preview-img').attr('data-type')=='video'){
               afterVideoPlayBack(prc);
                $('#preview-img').attr('rank',parseInt(m)+1);
                trigger();

            }else{
            $('#preview-img').attr('src',prc);
            $('#preview-img').attr('rank',parseInt(m)+1);
            trigger();
            }
      
    
}
function prev(){

    var m = $('#preview-img').attr('rank');
        var r = $('.gpreview');
        
        $('.shortpreview').show(500);
   
        console.log(m);
            var prc = $('.gpreview')[m-1].getAttribute('href');
            var vr = $('.gthumbnail')[m-1].getAttribute('data-type');
            
            if(vr=="video"){
                gprev = prc;
                videoPlay(gprev);
                $('#preview-img').attr('rank',m-1);
            }else if($('#preview-img').attr('data-type')=='video'){
               afterVideoPlayBack(prc);
                $('#preview-img').attr('rank',m-1);
                trigger();
            }else{
            $('#preview-img').attr('src',prc);
            $('#preview-img').attr('rank',m-1);
            trigger();
            }
      
}
function fullWidth(){
    var d = $('#preview-img').attr('src');
    var e = `<img id="fullWidthImg" src="" />`
    $('#preview-body').addClass('fullWidthControl');
    $('#preview-body').html(e);
    $('#fullWidthImg').attr('src',d);
    $('#fullWidthImg').before(`<div onclick="removFrame()" class="tools shift-right">
                                &times;
                            </div>`);
    }
function removFrame(){
    $('#preview').remove();
}
function videoPlay(gprev){
    var vidSyn = `<video id="vidControl" width="100%" height="100%" controls>
                          <source id="preview-img" src="" type="video/mp4" data-type="video">
                        </video>`
            $('.img-control').html(vidSyn);
            $('#preview-img').attr('src',gprev);
            var video = document.getElementById('vidControl');
            video.play();
            
          
            //===Click on Vidthumb===
        $('.shortthumb').click(function(){
            var h = $(this);
            // var a = $(this).parent().attr('href');
           shortThumbClick(h);

        });
        $('#fullWidthImg').hide();
            $('.z-btn').hide();
            $('.shortarea').hide();

}
function afterVideoPlayBack(prc){
     var gimg = `<img id="preview-img" onload="trigger()" class="preview-img" src=""/>`
                $('.img-control').html(gimg);
                $('#preview-img').attr('src',prc);
                $('#fullWidthImg').show();
            $('.shortarea').show();
                $('.z-btn').show();
                // trigger();
    }
function indexing(xdr,cap){
     //==index==
          var xdr1 = $('.gpreview').length;
          var s1 = '<span class="adp-bottom-left">'+cap+'</span>';
          var s2 = '<span id="indexofimg" class="adp-bottom-right"></span>';
        $('.captext').html(s1+s2);
        var si = document.getElementById('indexofimg');
          si.innerHTML =  xdr + 1 +' of '+xdr1;
        //===Caption==
}
// $(".gthumbnail[data-type='video']").getAttribute('class','vidthumb');
      $(".gthumbnail[data-type='video']").parent().addClass('vidthumb');
// $("[data-type='video']").setAttribute('class','vidthumb');
 //==special opration =====}}
var cd = $(".gthumbnail[data-type='video']").css('width');
// console.log(cd);
function leftShort(e){
    e.preventDefault();
    var et = document.getElementById('id2');
    var cr = 100;
    cr += 100;

    

    var ce = et.style.left;
    // ce += cr;
    var mr = parseInt(ce)+cr;
    if(parseInt(ce)< 70){
    et.style.left = mr+'px';
    }
    console.log(parseInt(ce)+cr);
    // et.style.right= 0;
}
function rightShort(){
   var et = document.getElementById('id2');
    var cr = 50;
    cr += 50;
    var ce = et.style.left;
    // ce += cr;
    var mr = parseInt(ce)-cr;
    // console.log($('.shortpreview img').outerWidth());
    var mex = $('.shortpreview img').length;
    var mexr = $('.shortpreview img').css('width');
    var mexr1 = $('.shortpreview img').css('margin-left');
    var exW = parseInt(mexr1)*parseInt(mexr);
    
    var eW = mex*parseInt(mexr) + exW;
    var eL = parseInt(eW) - 100;
    if(parseInt(ce)> -eL){
        console.log(eW);
        et.style.left = mr+'px';

    }

}
function zoomIn(){
           
           var abc = $('#preview-img').css('width');
           var abc1 = $('#preview-img').css('height');
           

           abc = parseInt(abc)*110/100;
           abc1 = parseInt(abc1)*110/100;
           $('#preview-img').css('width',abc);
           $('#preview-img').css('height',abc1);
           var c =  document.getElementById('preview-img');
           c.scrollLeft = 500;
           // console.log();
}
function zoomOut(){
           
           var abc = $('#preview-img').css('width');
           var abc1 = $('#preview-img').css('height');
           console.log(parseInt(abc1)*parseInt(abc)*110/100);

           abc = parseInt(abc)*90/100;
           abc1 = parseInt(abc1)*90/100;
           $('#preview-img').css('width',abc)
           $('#preview-img').css('height',abc1)
}
// var gallery = {};
// console.log(fruits.number);
// console.log(gallery.Defaults.items);
var adp = $('#admins-gallery').css('width');
var adpGrid = true;
if(adpGrid){
   var adgHeight = $('#admins-gallery').attr('adg-height');
   var adgCol = $('#admins-gallery').attr('adg-col');
   var adgPad = $('#admins-gallery').attr('adg-padding');
   
    $('.gpreview').css({
        'float':'left',
        'width':100/adgCol+'%',
        'height':adgHeight+'px',
        'padding':adgPad+'px',
        'display':'block'
    });
}
console.log(adp);