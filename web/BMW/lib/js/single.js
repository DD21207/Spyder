 window.onresize = function() {
            var height = Math.max(document.documentElement.clientHeight,document.body.offsetHeight);
            document.getElementById('app').style.height = height - 35 + 'px';  
}

var app = new Vue({
	el:'#app',
	data:{
		Rid:"",
		item:"",
		lists:""
	},
	mounted:function(){
		  this.$nextTick(function() {
           app.load();
        })
	},
	methods:{
		load:function(){

			var height = Math.max(document.documentElement.clientHeight,document.body.offsetHeight);
                 document.getElementById('app').style.height = height - 35 + 'px'; 
			
			this.Rid = this.getUrlParam("Rid");

			//获取内容
			if(this.Rid == 1){
				
				this.$http.get('data1.json').then(function(data){
	     			this.item=data.body;
	     			console.log(this.item.slides)
	     			this.$nextTick(function(){
						$("#slider1").responsiveSlides({
				        auto: true,
				        pager: true,
				        nav: true,
				        speed: 500,
				        pause:true,
				        namespace: "centered-btns"
		      		});
						$("#think").css('color',this.item.color);
						$('.btn1').css('background',this.item.color);
		            })
     			})
			}else if(this.Rid == 2){		
				this.$http.get('data2.json').then(function(data){
	     			this.item=data.body;
	     			console.log(this.item.slides)
	     			this.$nextTick(function(){
						$("#slider1").responsiveSlides({
				        auto: true,
				        pager: true,
				        nav: true,
				        speed: 500,
				        pause:true,
				        namespace: "centered-btns"
		      		});
						$("#think").css('color',this.item.color);
						$('.btn1').css('background',this.item.color);
		            })
     			})
			}else if(this.Rid == 3){		
				this.$http.get('data3.json').then(function(data){
	     			this.item=data.body;
	     			console.log(this.item.slides)
	     			this.$nextTick(function(){
						$("#slider1").responsiveSlides({
				        auto: true,
				        pager: true,
				        nav: true,
				        speed: 500,
				        pause:true,
				        namespace: "centered-btns"
		      		});
						$("#think").css('color',this.item.color);
						$('.btn1').css('background',this.item.color);
		            })
     			})
			}else if(this.Rid == 7){		
				this.$http.get('data7.json').then(function(data){
	     			this.item=data.body;
	     			console.log(this.item.slides)
	     			this.$nextTick(function(){
						$("#slider1").responsiveSlides({
				        auto: true,
				        pager: true,
				        nav: true,
				        speed: 500,
				        pause:true,
				        namespace: "centered-btns"
		      		});
						$("#think").css('color',this.item.color);
						$('.btn1').css('background',this.item.color);
		            })
     			})
			}

			this.$http.get('list.json').then(function(data){
		   		this.lists = data.body.list_data;
		   		
		   	});   
		   	
			this.dropdown();		
		},
		getUrlParam:function(name){
			var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
			var r = window.location.search.substr(1).match(reg);  //匹配目标参数
			if (r!=null) return unescape(r[2]); return null; //返回参数值
		},

		url:function(data){
			if(data == 1 || data == 2 || data == 3 ){
				document.location.href="ConsumerAcademy.html"+"?Rid="+data
			}else{
				alert("Coming soon!")
			}
			
		},
		alertTxt:function(){
			alert("Welcome to Starcom Consumer Academy. \n This document is not part of your subscription yet. \n Please contact us to know more benj.liang@starcomww.com. \n By doing this will help you find new opportunities for business growth.")
		},
		download:function(fileURL){
	        var fileURL=window.open (fileURL,"_blank","height=0,width=0,toolbar=no,menubar=no,scrollbars=no,resizable=on,location=no,status=no");
	        fileURL.document.execCommand("SaveAs");
	        fileURL.window.close();
	        fileURL.close();
		},
		dropdown:function(){
			$('#ATTITUDES').hover(function() {
            	$('#ul_ATTITUDES').show();
       		}, function() {
            	$('#ul_ATTITUDES').hide();
        	});
	        $('#ul_ATTITUDES').hover(function() {
	            $('#ul_ATTITUDES').show();
	        }, function() {
	            $('#ul_ATTITUDES').hide();
	        });
	        $('#BABYCARE').hover(function() {
            	$('#ul_BABYCARE').show();
       		}, function() {
            	$('#ul_BABYCARE').hide();
        	});
	        $('#ul_BABYCARE').hover(function() {
	            $('#ul_BABYCARE').show();
	        }, function() {
	            $('#ul_BABYCARE').hide();
	        });
	         $('#FEMCARE').hover(function() {
            	$('#ul_FEMCARE').show();
       		}, function() {
            	$('#ul_FEMCARE').hide();
        	});
	        $('#ul_FEMCARE').hover(function() {
	            $('#ul_FEMCARE').show();
	        }, function() {
	            $('#ul_FEMCARE').hide();
	        });

	         $('#LAUNDRY').hover(function() {
            	$('#ul_LAUNDRY').show();
       		}, function() {
            	$('#ul_LAUNDRY').hide();
        	});
	        $('#ul_LAUNDRY').hover(function() {
	            $('#ul_LAUNDRY').show();
	        }, function() {
	            $('#ul_LAUNDRY').hide();
	        });

	         $('#ORALCARE').hover(function() {
            	$('#ul_ORALCARE').show();
       		}, function() {
            	$('#ul_ORALCARE').hide();
        	});
	        $('#ul_ORALCARE').hover(function() {
	            $('#ul_ORALCARE').show();
	        }, function() {
	            $('#ul_ORALCARE').hide();
	        });
		}
	}
})


