var app = new Vue({
    el: '#app',
    data: {
        items: [],
		num:1,
		platform_selected:'',
        Brand:'',
        selectBrand:'Brand',
        selectCategory:'Category',
        date:'',
        scroll:true,
        toggleBrand:"",
        toggleCategory:"",
        toggleDate:"",
    },
    mounted: function() {
        window.addEventListener('scroll', this.handleScroll);
        this.$nextTick(function() {
            app.load();

        })
    },
    watch:{
    	platform_selected:function(){
    		this.num = 1;
    	},
    },
   filters: {
            formatterTime: function(value) {
                    var time = moment(value);
                    var date = new Date(time);
                    var Y = date.getFullYear() + '-';
                    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                    D = date.getDate() ;
                    return value = Y + M + D;
            }
        },
    computed:{
         filteredItems: function () {
            var end = this.num * 10
            return this.items.slice(0, end)
  }
    },
    methods: {
        handleScroll() {
            if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
                 this.num++; 
                 this.$nextTick(function() {
                                    this.magnifPopup();
                                    this.offCanvass();
                                    this.mobileMenuOutsideClick();
                                    this.animateBoxWayPoint();
                                })
                if(this.scroll == true){
                this.$http.post('/scrollLoad',{"number":this.num,"platform_selected":this.platform_selected}).then((data) => {

                                this.items = this.items.concat(data.body)
                                this.$nextTick(function() {
                                     if(this.platform_selected == "JDPC"){
                    $("#fh5co-board img").css("height","169px")
                }       
                                    this.magnifPopup();
                                    this.offCanvass();
                                    this.mobileMenuOutsideClick();
                                    this.animateBoxWayPoint();
                                })
                            })
                this.$nextTick(function() {
                    this.magnifPopup();
                    this.offCanvass();
                    this.mobileMenuOutsideClick();
                    this.animateBoxWayPoint();
                })
                }
            }
        },
        load() {
             $("#platform_list>li").click(function() {
                $("#platform_list>li").removeClass('actived');
                $(this).addClass('actived')
            });
            $("#top").click(function() {

            $("html,body").animate({
                scrollTop: "0px"
            }, 200);

        });

          $("#top").hover(function(){
            $("#top span").hide();
            $("#top p").show();

          },function(){
            $("#top span").show();
            $("#top p").hide();
          })
            $('#singleDateRange').DatePicker({
                startDate: moment()
            });
            this.$http.get('/jdmb1').then((data) => {
              	this.items = data.body;
              	this.platform_selected = 'JDMB';
                console.log(data.body)
                this.$nextTick(function() {
                    this.magnifPopup();
                    this.offCanvass();
                    this.mobileMenuOutsideClick();
                    this.animateBoxWayPoint();
                })
            })
        },
        changePlatform(data){
            this.items = []
            this.scroll = true;
        	$("html,body").animate({
                scrollTop: "0px"
            }, 200);
            $('#singleDateRange').DatePicker({
                startDate: moment()
            });
            this.num = 1;
        	this.platform_selected = data;
            this.selectBrand = "Brand"
            this.$http.post('/platform',{"platform_selected":this.platform_selected}).then((data) => {
                if(this.platform_selected == "JDPC"){
                    $("#fh5co-board img").css("height","169px")
                }
                this.items = data.body;
                console.log(data.body)
                this.$nextTick(function() {
                    this.magnifPopup();
                    this.offCanvass();
                    this.mobileMenuOutsideClick();
                    this.animateBoxWayPoint();
                })
            })
        },
        changeBrand(id){
            var Brand=$("input[brand_id='"+id+"']").val();
            if(Brand == ""){
                Brand = "None"
            }
            this.$http.post('/updateBrand',{"Brand":Brand,"id":id,"platform_selected":this.platform_selected}).then((data) => {
              
            })

        },
        changeCategory(id){
            var Category=$("input[Category_id='"+id+"']").val();
            if(Category == ""){
                Category = "None"
            }
            this.$http.post('/updateCategory',{"Category":Category,"id":id,"platform_selected":this.platform_selected}).then((data) => {
              
            })

        },
        custom(){
            this.scroll = false;
            this.items=[]
            this.num = 1;
            this.toggleCategory = $("input[name='Category']").is(':checked');
            this.toggleBrand = $("input[name='Brand']").is(':checked');
            this.toggleDate = $("input[name='Date']").is(':checked');
            if( this.toggleCategory == true && this.toggleBrand == true && this.toggleDate == true){
                if($('#selectCategory').val() == '' || $('#selectCategory').val() == "Category"){
                    this.selectCategory = "None"
                }else{
                    this.selectCategory = $('#selectCategory').val();
                }
                if($('#selectBrand').val() == '' || $('#selectBrand').val() == "Brand"){
                    this.selectBrand = "None"
                }else{
                    this.selectBrand = $('#selectBrand').val();
                }
                if($('#singleDateRange').val() != ""){
                   this.date = $('#singleDateRange').val(); 
                }else{
                    this.date = ""
                }
                this.$http.post('/custom',{"selectCategory":this.selectCategory,"selectBrand":this.selectBrand,"date":this.date,"platform_selected":this.platform_selected}).then((data) => {
                    // console.log(data.body)
                    this.items = data.body;
                   
                    this.$nextTick(function() {
                        this.magnifPopup();
                        this.offCanvass();
                        this.mobileMenuOutsideClick();
                        this.animateBoxWayPoint();
                    })
                })

            }else if(this.toggleCategory == true && this.toggleBrand == true && this.toggleDate == false){
                if($('#selectCategory').val() == '' || $('#selectCategory').val() == "Category"){
                    this.selectCategory = "None"
                }else{
                    this.selectCategory = $('#selectCategory').val();
                }
                if($('#selectBrand').val() == '' || $('#selectBrand').val() == "Brand"){
                    this.selectBrand = "None"
                }else{
                    this.selectBrand = $('#selectBrand').val();
                }
                this.$http.post('/custom_CB',{"selectCategory":this.selectCategory,"selectBrand":this.selectBrand,"platform_selected":this.platform_selected}).then((data) => {
                    // console.log(data.body)
                    this.items = data.body;
                    
                    this.$nextTick(function() {
                        this.magnifPopup();
                        this.offCanvass();
                        this.mobileMenuOutsideClick();
                        this.animateBoxWayPoint();
                    })
                })
            }else if(this.toggleCategory == true && this.toggleBrand == false && this.toggleDate == false){
                if($('#selectCategory').val() == '' || $('#selectCategory').val() == "Category"){
                    this.selectCategory = "None"
                }else{
                    this.selectCategory = $('#selectCategory').val();
                }
               
                this.$http.post('/custom_Category',{"selectCategory":this.selectCategory,"platform_selected":this.platform_selected}).then((data) => {
                    // console.log(data.body)
                    this.items = data.body;
                    
                    this.$nextTick(function() {
                        this.magnifPopup();
                        this.offCanvass();
                        this.mobileMenuOutsideClick();
                        this.animateBoxWayPoint();
                    })
                })
            }else if(this.toggleCategory == false && this.toggleBrand == true && this.toggleDate == true){
                if($('#selectBrand').val() == '' || $('#selectBrand').val() == "Brand"){
                    this.selectBrand = "None"
                }else{
                    this.selectBrand = $('#selectBrand').val();
                }
                if($('#singleDateRange').val() != ""){
                   this.date = $('#singleDateRange').val(); 
                }else{
                    this.date = ""
                }
                this.$http.post('/custom_BT',{"selectBrand":this.selectBrand,"date":this.date,"platform_selected":this.platform_selected}).then((data) => {
                    // console.log(data.body)
                    this.items = data.body;
                    
                    this.$nextTick(function() {
                        this.magnifPopup();
                        this.offCanvass();
                        this.mobileMenuOutsideClick();
                        this.animateBoxWayPoint();
                    })
                })
            }else if(this.toggleCategory == false && this.toggleBrand == true && this.toggleDate == false){
                if($('#selectBrand').val() == '' || $('#selectBrand').val() == "Brand"){
                    this.selectBrand = "None"
                }else{
                    this.selectBrand = $('#selectBrand').val();
                }
                this.$http.post('/custom_Brand',{"selectBrand":this.selectBrand,"platform_selected":this.platform_selected}).then((data) => {
                    // console.log(data.body)
                    this.items = data.body;
                    //  if(data.body = []){
                    //     alert("The query result is empty, please change the search criteria.");
                    //     location.reload() 

                    // }
                    this.$nextTick(function() {
                        this.magnifPopup();
                        this.offCanvass();
                        this.mobileMenuOutsideClick();
                        this.animateBoxWayPoint();
                    })
                })
            }else if(this.toggleCategory == false && this.toggleBrand == false && this.toggleDate == true){
                if($('#singleDateRange').val() != ""){
                   this.date = $('#singleDateRange').val(); 
                }else{
                    this.date = ""
                }
                this.$http.post('/custom_Date',{"date":this.date,"platform_selected":this.platform_selected}).then((data) => {
                    // console.log(data.body)
                    this.items = data.body;
                    
                    this.$nextTick(function() {
                        this.magnifPopup();
                        this.offCanvass();
                        this.mobileMenuOutsideClick();
                        this.animateBoxWayPoint();
                    })
                })
            }else if(this.toggleCategory == true && this.toggleBrand == false && this.toggleDate == true){
                if($('#selectCategory').val() == '' || $('#selectCategory').val() == "Category"){
                    this.selectCategory = "None"
                }else{
                    this.selectCategory = $('#selectCategory').val();
                }
                if($('#singleDateRange').val() != ""){
                   this.date = $('#singleDateRange').val(); 
                }else{
                    this.date = ""
                }
                this.$http.post('/custom_CT',{"selectCategory":this.selectCategory,"date":this.date,"platform_selected":this.platform_selected}).then((data) => {
                    // console.log(data.body)
                    this.items = data.body;
                    //  if(data.body = []){
                    //     alert("The query result is empty, please change the search criteria.");
                    //     location.reload() 

                    // }
                    this.$nextTick(function() {
                        this.magnifPopup();
                        this.offCanvass();
                        this.mobileMenuOutsideClick();
                        this.animateBoxWayPoint();
                    })
                })
            }else{
                alert("The query result is empty, please change the search criteria.");
                location.reload() 
            }


        },
        magnifPopup() {
            $('.image-popup').magnificPopup({
                type: 'image',
                removalDelay: 300,
                mainClass: 'mfp-with-zoom',
                titleSrc: 'title',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true, // By default it's false, so don't forget to enable it
                    duration: 300, // duration of the effect, in milliseconds
                    easing: 'ease-in-out', // CSS transition easing function
                    // The "opener" function should return the element from which popup will be zoomed in
                    // and to which popup will be scaled down
                    // By defailt it looks for an image tag:
                    opener: function(openerElement) {
                        // openerElement is the element on which popup was initialized, in this case its <a> tag
                        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            })
        },
        offCanvass() {
            $('#app').on('click',  function() {
                $('#fh5co-offcanvass').toggleClass('fh5co-awake');
            });
            $('.js-fh5co-offcanvass-close').click(function(){
            	  $('#fh5co-offcanvass').toggleClass('fh5co-awake');
            })
        },
        mobileMenuOutsideClick() {
            $(document).click(function(e) {
                var container = $("#fh5co-offcanvass, .js-fh5co-menu-btn");
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    if ($('#fh5co-offcanvass').hasClass('fh5co-awake')) {
                        $('#fh5co-offcanvass').removeClass('fh5co-awake');
                    }
                }
            });

            $(window).scroll(function() {
                if ($(window).scrollTop() > 500) {
                    if ($('#fh5co-offcanvass').hasClass('fh5co-awake')) {
                        $('#fh5co-offcanvass').removeClass('fh5co-awake');
                    }
                }
            });
        },
        animateBoxWayPoint() {
            if ($('.animate-box').length > 0) {
                $('.animate-box').waypoint(function(direction) {

                    if (direction === 'down' && !$(this).hasClass('animated')) {
                        $(this.element).addClass('bounceIn animated');
                    }

                }, { offset: '75%' });
            }
        },


    }
})
