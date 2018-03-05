 var num = 1;
 $(document).ready(function(e) {
     var opt = {
         "speed": "fast", //变换速度,三速度可选 slow,normal,fast;
         "by": "mouseover", //触发事件,click或者mouseover;
         "auto": true, //是否自动播放;
         "sec": 1500 //自动播放间隔;
     };
     $("#demo").IMGDEMO(opt);

     
     $("#top").hover(function() {
         $("#top span").hide();
         $("#top p").show();

     }, function() {
         $("#top span").show();
         $("#top p").hide();
     })

     $('#singleDateRange').DatePicker({
         startDate: moment()
     });

     $("#prev").click(function() {
         var number = num;
         var platform = $("#platform_list li.actived a").attr("id");
             var data = {
                "number":number,
                "platform":platform
             }
             var postData = JSON.stringify(data);
         $.ajax({
             type: 'POST',
             url: '/screen_prev',
             contentType: "application/json",
             dataType: "json",
             data: postData,
             success: function(data) {
                 if (data.length > 0) {
                     num = num + 1;
                     console.log(data);
                     $.each(data, function(index, value) {
                        if(platform == "JD"){
                     var src = "screen-JD/" + value.Name + ".jpg" 
                 }else if(platform == "TB"){
                    var src = "screen-TB/" + value.Name + ".jpg" 
                 }else if(platform == "YHD"){
                    var src = "screen-YHD/" + value.Name + ".jpg" 
                 }else if(platform == "SN"){
                    var src = "screen-SN/" + value.Name + ".jpg" 
                 }else if(platform == "MIA"){
                    var src = "screen-MIA/" + value.Name + ".jpg" 
                 }
                         
                         $('#demo li:eq(' + index + ')').children().children("img").attr("src", src);
                         var y = value.Name.substr(0, 4);
                         var m = value.Name.substr(4, 2);
                         var d = value.Name.substr(6, 2);
                         var date = y + "/" + m + "/" + d;
                         $('#demo li:eq(' + index + ')').children().children("a").text(date);

                     })
                 } else {
                     alert('亲，真的没有了');
                 }
             },

             error: function(e) {
                 console.log(e);
             }
         })
     })

     $("#next").click(function() {
         var number = num - 2;
         var platform = $("#platform_list li.actived a").attr("id");
         if (number >= 0) {
          
             var data = {
                "number":number,
                "platform":platform
             }
             var postData = JSON.stringify(data);
             $.ajax({
                 type: 'POST',
                 url: '/screen_next',
                 contentType: "application/json",
                 dataType: "json",
                 data: postData,
                 success: function(data) {
                     if (data.length > 0) {
                         num = num - 1;
                         console.log(data);
                         $.each(data, function(index, value) {
                            if(platform == "JD"){
                     var src = "screen-JD/" + value.Name + ".jpg" 
                 }else if(platform == "TB"){
                    var src = "screen-TB/" + value.Name + ".jpg" 
                 }else if(platform == "YHD"){
                    var src = "screen-YHD/" + value.Name + ".jpg" 
                 }else if(platform == "SN"){
                    var src = "screen-SN/" + value.Name + ".jpg" 
                 }else if(platform == "MIA"){
                    var src = "screen-MIA/" + value.Name + ".jpg" 
                 }
                             $('#demo li:eq(' + index + ')').children().children("img").attr("src", src);
                             var y = value.Name.substr(0, 4);
                             var m = value.Name.substr(4, 2);
                             var d = value.Name.substr(6, 2);
                             var date = y + "/" + m + "/" + d;
                             $('#demo li:eq(' + index + ')').children().children("a").text(date);
                         })
                     }
                 },

                 error: function(e) {
                     console.log(e);
                 }
             })
         } else {
             alert('亲，真的没有了');
         }

     })


     $("#showP").click(function() {
         var choose = $('#singleDateRange').val().split(".").join("");

         if (choose == "" || choose == undefined || choose == null) {
             alert("请选择日期。");

         } else {
            var platform = $("#platform_list li.actived a").attr("id");
             var data = {
                "choose":choose,
                "platform":platform
             }
             var postData = JSON.stringify(data);

             $.ajax({
                 type: 'POST',
                 url: '/choose',
                 contentType: "application/json",
                 dataType: "json",
                 data: postData,
                 success: function(data) {
                    if(data.length>0){
                       $("#date1").html(choose);
                    $.each(data, function(index, value) {
                   if(platform == "JD"){
                     var src = "screen-JD/" + value.Name + ".jpg" 
                 }else if(platform == "TB"){
                    var src = "screen-TB/" + value.Name + ".jpg" 
                 }else if(platform == "YHD"){
                    var src = "screen-YHD/" + value.Name + ".jpg" 
                 }else if(platform == "SN"){
                    var src = "screen-SN/" + value.Name + ".jpg" 
                 }else if(platform == "MIA"){
                    var src = "screen-MIA/" + value.Name + ".jpg" 
                 }
                    $("#picture").attr("src",src)
                    $("#myModal").modal('hide');
                    $("#photo").modal('show');
                     console.log(data);
                     }) 
                    }else{
                        alert("非常抱歉，没有当天的记录");
                        $("#myModal").modal('hide');
                    }
                    
                 },

                 error: function(e) {
                     console.log(e);
                 }
             })
         }

     })

     $("#platform_list>li").click(function() {
                $("#platform_list>li").removeClass('actived');
                $(this).addClass('actived')
            });

     


    offCanvass();
    mobileMenuOutsideClick();
 });


 function load() {
     offCanvass();
     mobileMenuOutsideClick();
     var Data = {"platform":"JD"};
     var postData = JSON.stringify(Data)
     $.ajax({
         type: 'POST',
         url: '/screen',
         contentType: "application/json",
         data:postData,
         dataType: "json",
         success: function(data) {
             console.log(data);
             $.each(data, function(index, value) {
                 var src = "screen-JD/" + value.Name + ".jpg"
                 $('#demo li:eq(' + index + ')').children().children("img").attr("src", src);
                 var y = value.Name.substr(0, 4);
                 var m = value.Name.substr(4, 2);
                 var d = value.Name.substr(6, 2);
                 var date = y + "/" + m + "/" + d;
                 $('#demo li:eq(' + index + ')').children().children("a").text(date);
             })
         },

         error: function(e) {
             console.log(e);
         }
     })
 }
function changePlatform(a){
    
    var platform = a;
        num = 1;
        var data = {
            "platform":platform
        }
        var postData = JSON.stringify(data);
        $.ajax({
         type: 'POST',
         url: '/screen',
         contentType: "application/json",
         data:postData,
         dataType: "json",
         success: function(data) {
             console.log(data);
             $.each(data, function(index, value) {
                 if(platform == "JD"){
                     var src = "screen-JD/" + value.Name + ".jpg" 
                 }else if(platform == "TB"){
                    var src = "screen-TB/" + value.Name + ".jpg" 
                 }else if(platform == "YHD"){
                    var src = "screen-YHD/" + value.Name + ".jpg" 
                 }else if(platform == "SN"){
                    var src = "screen-SN/" + value.Name + ".jpg" 
                 }else if(platform == "MIA"){
                    var src = "screen-MIA/" + value.Name + ".jpg" 
                 }
                 $('#demo li:eq(' + index + ')').children().children("img").attr("src", src);
                 var y = value.Name.substr(0, 4);
                 var m = value.Name.substr(4, 2);
                 var d = value.Name.substr(6, 2);
                 var date = y + "/" + m + "/" + d;
                 $('#demo li:eq(' + index + ')').children().children("a").text(date);
             })
         },

         error: function(e) {
             console.log(e);
         }
     })
        
     }

 function offCanvass() {
            $('#app').on('click',  function() {
                $('#fh5co-offcanvass').toggleClass('fh5co-awake');
            });
            $('.js-fh5co-offcanvass-close').click(function(){
                  $('#fh5co-offcanvass').toggleClass('fh5co-awake');
            })
        };
        function mobileMenuOutsideClick() {
            $(document).click(function(e) {
                var container = $("#fh5co-offcanvass, .js-fh5co-menu-btn");
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    if ($('#fh5co-offcanvass').hasClass('fh5co-awake')) {
                        $('#fh5co-offcanvass').removeClass('fh5co-awake');
                    }
                }
            });

            // $(window).scroll(function() {
            //     if ($(window).scrollTop() > 500) {
            //         if ($('#fh5co-offcanvass').hasClass('fh5co-awake')) {
            //             $('#fh5co-offcanvass').removeClass('fh5co-awake');
            //         }
            //     }
            // });
        };
// var app = new Vue({
//     el: '#app',
//     data: {
//         items: [],
//         num:1,
//         platform_selected:'',
//         Brand:'',
//         selectBrand:'Brand',
//         date:'',
//         scroll:true,
//         toggleBrand:true,
//         toggleDate:false,
//     },
//     mounted: function() {
//         window.addEventListener('scroll', this.handleScroll);
//         this.$nextTick(function() {
//             app.load();

//         })
//     },
//     watch:{
//         platform_selected:function(){
//             this.num = 1;
//         },
//     },
//    filters: {
//             formatterTime: function(value) {
//                     var time = moment(value);
//                     var date = new Date(time);
//                     var Y = date.getFullYear() + '-';
//                     M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
//                     D = date.getDate() ;
//                     return value = Y + M + D;
//             }
//         },
//     computed:{
//          filteredItems: function () {
//             var end = this.num * 10
//             return this.items.slice(0, end)
//   }
//     },
//     methods: {
//         handleScroll() {
//             if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
//                  this.num++; 
//                  this.$nextTick(function() {
//                                     this.magnifPopup();
//                                     this.offCanvass();
//                                     this.mobileMenuOutsideClick();
//                                     this.animateBoxWayPoint();
//                                 })
//                 if(this.scroll == true){
//                 this.$http.post('/scrollLoad',{"number":this.num,"platform_selected":this.platform_selected}).then((data) => {
//                                 this.items = this.items.concat(data.body)
//                                 this.$nextTick(function() {
//                                     this.magnifPopup();
//                                     this.offCanvass();
//                                     this.mobileMenuOutsideClick();
//                                     this.animateBoxWayPoint();
//                                 })
//                             })
//                 this.$nextTick(function() {
//                     this.magnifPopup();
//                     this.offCanvass();
//                     this.mobileMenuOutsideClick();
//                     this.animateBoxWayPoint();
//                 })
//                 }
//             }
//         },
//         load() {
//              $("#platform_list>li").click(function() {
//                 $("#platform_list>li").removeClass('actived');
//                 $(this).addClass('actived')
//             });
//             $("#top").click(function() {

//             $("html,body").animate({
//                 scrollTop: "0px"
//             }, 200);

//         });

//           $("#top").hover(function(){
//             $("#top span").hide();
//             $("#top p").show();

//           },function(){
//             $("#top span").show();
//             $("#top p").hide();
//           })
//             $('#singleDateRange').DatePicker({
//                 startDate: moment()
//             });
//             this.$http.get('/jdmb1').then((data) => {
//                 this.items = data.body;
//                 this.platform_selected = 'JDMB';
//                 console.log(data.body)
//                 this.$nextTick(function() {
//                     this.magnifPopup();
//                     this.offCanvass();
//                     this.mobileMenuOutsideClick();
//                     this.animateBoxWayPoint();
//                 })
//             })
//         },
//         changePlatform(data){
//             this.items = []
//             this.scroll = true;
//             $("html,body").animate({
//                 scrollTop: "0px"
//             }, 200);
//             $('#singleDateRange').DatePicker({
//                 startDate: moment()
//             });
//             this.num = 1;
//             this.platform_selected = data;
//             this.selectBrand = "Brand"
//             this.$http.post('/platform',{"platform_selected":this.platform_selected}).then((data) => {
//                 this.items = data.body;
//                 console.log(data.body)
//                 this.$nextTick(function() {
//                     this.magnifPopup();
//                     this.offCanvass();
//                     this.mobileMenuOutsideClick();
//                     this.animateBoxWayPoint();
//                 })
//             })
//         },
//         changeBrand(id){
//             var Brand=$("input[brand_id='"+id+"']").val();
//             if(Brand == ""){
//                 Brand = "None"
//             }
//             this.$http.post('/updateBrand',{"Brand":Brand,"id":id,"platform_selected":this.platform_selected}).then((data) => {
              
//             })

//         },
//         custom(){
//             this.scroll = false;
//             this.items=[]
//             this.num = 1;
//             if( this.toggleBrand == true && this.toggleDate == true){
//                 if($('#selectBrand').val() == '' || $('#selectBrand').val() == "Brand"){
//                     this.selectBrand = "None"
//                 }else{
//                     this.selectBrand = $('#selectBrand').val();
//                 }
//                 if($('#singleDateRange').val() != ""){
//                    this.date = $('#singleDateRange').val(); 
//                 }else{
//                     this.date = ""
//                 }
//                 this.$http.post('/custom',{"selectBrand":this.selectBrand,"date":this.date,"platform_selected":this.platform_selected}).then((data) => {
//                     console.log(data.body)
//                     this.items = data.body;
//                     this.$nextTick(function() {
//                         this.magnifPopup();
//                         this.offCanvass();
//                         this.mobileMenuOutsideClick();
//                         this.animateBoxWayPoint();
//                     })
//                 })

//             }else if(this.toggleBrand == false && this.toggleDate == true){
//                 if($('#singleDateRange').val() != ""){
//                    this.date = $('#singleDateRange').val(); 
//                 }else{
//                     this.date = ""
//                 }
//                 this.$http.post('/custom_Date',{"date":this.date,"platform_selected":this.platform_selected}).then((data) => {
//                     console.log(data.body)
//                     this.items = data.body;
//                     this.$nextTick(function() {
//                         this.magnifPopup();
//                         this.offCanvass();
//                         this.mobileMenuOutsideClick();
//                         this.animateBoxWayPoint();
//                     })
//                 })
//             }else if(this.toggleBrand == true && this.toggleDate == false){
//                 if($('#selectBrand').val() == '' || $('#selectBrand').val() == "Brand"){
//                     this.selectBrand = "None"
//                 }else{
//                     this.selectBrand = $('#selectBrand').val();
//                 }
//                 this.$http.post('/custom_Brand',{"selectBrand":this.selectBrand,"platform_selected":this.platform_selected}).then((data) => {
//                     console.log(data.body)
//                     this.items = data.body;
//                     this.$nextTick(function() {
//                         this.magnifPopup();
//                         this.offCanvass();
//                         this.mobileMenuOutsideClick();
//                         this.animateBoxWayPoint();
//                     })
//                 })
//             }else{
//                 alert("输入错误！！！")
//             }


//         },
//         magnifPopup() {
//             $('.image-popup').magnificPopup({
//                 type: 'image',
//                 removalDelay: 300,
//                 mainClass: 'mfp-with-zoom',
//                 titleSrc: 'title',
//                 gallery: {
//                     enabled: true
//                 },
//                 zoom: {
//                     enabled: true, // By default it's false, so don't forget to enable it
//                     duration: 300, // duration of the effect, in milliseconds
//                     easing: 'ease-in-out', // CSS transition easing function
//                     // The "opener" function should return the element from which popup will be zoomed in
//                     // and to which popup will be scaled down
//                     // By defailt it looks for an image tag:
//                     opener: function(openerElement) {
//                         // openerElement is the element on which popup was initialized, in this case its <a> tag
//                         // you don't need to add "opener" option if this code matches your needs, it's defailt one.
//                         return openerElement.is('img') ? openerElement : openerElement.find('img');
//                     }
//                 }
//             })
//         },
       
//         animateBoxWayPoint() {
//             if ($('.animate-box').length > 0) {
//                 $('.animate-box').waypoint(function(direction) {

//                     if (direction === 'down' && !$(this).hasClass('animated')) {
//                         $(this.element).addClass('bounceIn animated');
//                     }

//                 }, { offset: '75%' });
//             }
//         },


//     }
// })
