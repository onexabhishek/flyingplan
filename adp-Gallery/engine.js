
$(document).ready(function(){
    for(var i =0;i<$('.gthumbnail').length;i++){
        $('.gthumbnail')[i].setAttribute('rank',[i]);
        
    }
    // $('.gthumbnail').click(function(e){
    //     e.preventDefault();
    //      var parent = $('.gthumbnail').parent();
    //    var gprev = $(this).parent().attr('href');
    //    var cprev = $(this).attr('rank');

    //     //===Video===
    //     var vid = $(this).attr('data-type');
    //     starter(gprev,cprev,vid);
    //   });

//===Click on Vidthumb===
//  $('.vidthumb').click(function(e){
//     e.preventDefault();
    
//     var gprev = $(this).attr('href');
//     var cprev = $(this).index();
//     console.log(cprev);
//     videoFrame(gprev,cprev);
     
// //===End of vidthumb click===
//  });

 
//==End of jquery ready===
});
$(document).ready(function(){
    $('.gbox').click(function(e){
      var timerStart = Date.now();
      // adgLoadInit(timerStart);
      e.preventDefault();

      var c = $(this);
      adgInit(c);
      // console.log($(this));
    
       // e.stopPropagation();
       // return false;
       console.log('hello');

    });

});
function adgInit(c){
    var ind = c.index();
    var m = $('.gthumbnail')[ind];
    var n = m.getAttribute('rank');
    var o = $('.gpreview')[n];
    // console.log();
  var gprev = o.getAttribute('href');
  // var h = c.children();
   var cprev = n;
   var playerType = m.getAttribute('data-type');
   // var k = c.parent().index();
  // var imgVid = $('.gthumbnail')[k];
   // var vid = imgVid.getAttribute('data-type');
  // console.log(imgVid);
  starter(gprev,cprev,playerType);
}
function starter(gprev,cprev,playerType){

        if(playerType=='video'){
          // structure();
          // videoPlay(gprev);
           videoFrame(gprev,cprev);
        }else if(playerType == 'youtube'){
            ytPlyr(gprev,cprev);
            console.log('if working');
        }else{
       structure();

        // Structure
       
       var gimg = `<img id="preview-img" onload="trigger()" class="preview-img" src=""/>`;


       // var loadTime = (Date.now()-timerStart);
       // console.log('Hello'+loadTime);
       //           // if(loadTime<)
       //           $('#loader').fadeIn();
       //           $('#loader').delay(loadTime).fadeOut();


       // $('#preview-body').append(img_container);
       $('.img-control').append(gimg);
       $('#preview-img').attr('src',gprev)
       
       $('#preview-img').attr('rank',cprev);
        $('.shortthumb').click(function(){
            var h = $(this);
            // var a = $(this).parent().attr('href');
           shortThumbClick(h);

        });


       //===highlight====
    trigger();
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
      

      }
        //==End of gthumb click ==

        
    };
function videoFrame(gprev,cprev){
    console.log("VideoFrame:"+gprev + cprev);
  // starting(gprev);
    structure();
    // console.log(gprev);
    videoPlay(gprev,cprev);
    
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
}

// youtube player
function ytPlyr(gprev,cprev){
  // starting(gprev);
    structure();
    // console.log(gprev);
    embededYt(gprev);
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
}
// End of youtube Player

function structure(){
     var parent = $('.gthumbnail').parent();
       // var gprev = $('.gpreview').attr('href');
       // var gprev = $(this).parent().attr('href');

        // Structure
        var preview = `<div id="preview" class="preview"></div>`;
       var previewBody = `<div id="preview-body" class="preview-body"></div>`;
       $('body').prepend(preview);
       $('#preview').show().after(previewBody);
       var img_container = `<div class="img-control"></div>`
       //<img id="loader" src="images/load.gif" >
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
            $('#preview,.preview-body').remove();

        });
        
        $('#preview').click(function(){
            $('#preview,.preview-body').remove();
            return false;
            
        });
        //===fullscreen====
         var zBtn = `<div class="z-btn1">
             <a id="zplus" onclick="fullWidth()" href="#" class="zbtn-control">+</a>
         </div>`
        $('#preview-body').append(zBtn);
   
        
        //===fullscreen====
        //====Zoom-Button===
        // var zBtn = `<div class="z-btn">
        //     <a id="zPlus1" onclick="zoomIn()" href="#" class="zbtn-control">+</a>
        //     <a id="zminus" onclick="zoomOut()" href="#" class="zbtn-control">-</a>
        // </div>`
        // $('#preview-body').append(zBtn);
       
        

        //====Zoom-Button===
        shortPrev();

        // $('.shortpreview img').on('mouseenter',function(){
        // 	$(this).addClass('adg-focus');
        // 	$(this).on('mouseleave',function(){
        // 		$(this).removeClass('gactive');
        // 	});
        // });

}



 function shortThumbClick(h){

        var a = h.index();

    console.log(h.attr('data-type'));
            var b = $('.gpreview')[a].getAttribute("href");
                gprev = b;
            if(h.attr('data-type')=='video'){
                videoPlay(gprev);
                console.log('hello'+gprev);
                // var smr = h.parent().index();
                 $('#preview-img').attr('rank',a);
            }else if(h.attr('data-type')=='youtube'){
              embededYt(gprev);
              $('#preview-img').attr('rank',a);
            }else{
            $('#preview-img').attr('src',b);
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

        var thumb = $('.gpreview');
       
         
        $('.img-control').after(`<div class="shortarea"><div id="id2" class='shortpreview' style="left:0;">`);
        for(i = 0;i<thumb.length;i++){
        var a = thumb.eq(i).html();

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
            $('.shortpreview img').eq(parseInt(m)).attr('class','gactive');
            var cap = $('.shortpreview img').eq(parseInt(m)).attr('alt');
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
            }else if(vr=='youtube'){
              gprev = prc;
              embededYt(gprev);
              $('#preview-img').attr('rank',parseInt(m)+1);
              trigger();
            }else if($('#preview-img').attr('data-type')=='youtube'){
               afterVideoPlayBack(prc);
                $('#preview-img').attr('rank',parseInt(m)+1);
                trigger();

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
            }else if(vr=='youtube'){
              gprev = prc;
              embededYt(gprev);
              $('#preview-img').attr('rank',m-1);
            }else if($('#preview-img').attr('data-type')=='youtube'){
               afterVideoPlayBack(prc);
                $('#preview-img').attr('rank',parseInt(m)-1);
                trigger();

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
    $('#preview,.preview-body').remove();
}
function videoPlay(gprev,cprev){
    var vidSyn = `<video id="vidControl" width="100%" height="100%" controls>
                          <source id="preview-img" src="" type="video/mp4" data-type="video">
                        </video>`
            $('.img-control').html(vidSyn);
            $('#preview-img').attr('src',gprev);
            $('#preview-img').attr('rank',cprev);
            var video = document.getElementById('vidControl');
            video.play();
            
          
            //===Click on Vidthumb===
        $('.shortthumb').click(function(){
            var h = $(this);
            // var a = $(this).parent().attr('href');
           shortThumbClick(h);

        });
        // trigger();
        $('#fullWidthImg').hide();
            $('.z-btn').hide();
            $('.shortarea').hide();

}
function embededYt(gprev){

  var embedYt = '<iframe id="preview-img" onload="trigger()" width="100%" height="100%" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen data-type="youtube"></iframe>';
     $('.img-control').html(embedYt);
            $('#preview-img').attr('src',gprev+"?autoplay=1");
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
     var gimg = `<img id="preview-img" onload="trigger()" class="preview-img" src=""/>`;
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
	// e.preventDefault();
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
    var exW = parseInt(mexr1)*parseInt(mex);
    
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
   // console.log(adp);

var adpg = $('.gbox').css('width');


var adpGrid = true;
if(adpGrid){
   var adgHeight = $('#admins-gallery').attr('adg-height');
   var adgCol = $('#admins-gallery').attr('adg-col');
   var adgPad = $('#admins-gallery').attr('adg-padding');
   var adgColMargin = $('#admins-gallery').attr('adg-margin');
   // console.log(parseInt(adpg)-adpg);

   // console.log(parseInt(adpg)/parseInt(adp)*100);
   var widthControl = (parseInt(adp)/adgCol)-adgColMargin*2;
   // var widthControl = adp/adg-col
    // $('.gpreview').css({
    //     'float':'left',
    //     'width':100/adgCol+'%',
    //     'height':adgHeight+'px',
    //     'padding':adgPad+'px',
    //     'display':'block'
    // });
    $('.gbox').css({
        'float':'left',
        'width':widthControl+'px',
        'height':adgHeight+'px',
        'padding':adgPad+'px',
        'display':'block',
        'margin':adgColMargin+'px'
    });
}
// $('.gthumbnail').parent().before('<span>');
