var consumer = new Vue({
	el:'#div_body',
	data:{
		items:[],
		lists:""

	},
	mounted:function(){
		  this.$nextTick(function() {
           consumer.load();
        })
	},
	methods:{
		load:function(){
			this.dropdown();
		   	this.$http.get('data.json').then(function(data){
		   		this.items = data.body.data;
		   		this.$nextTick(function() {
		        	$("#4>.a-box>.more").text("COMING SOON").css("color","grey");
		        	$("#5>.a-box>.more").text("COMING SOON").css("color","grey")
		        	$("#6>.a-box>.more").text("COMING SOON").css("color","grey")
		        })
		   		
		   	});
		   	this.$http.get('list.json').then(function(data){
		   		this.lists = data.body.list_data;

		   	});
		},
		url:function(data){
			if(data == 1 || data == 2 || data == 3 || data == 7){
				document.location.href="ConsumerAcademy.html"+"?Rid="+data
			}else{
				alert("Coming soon!")
			}
			
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