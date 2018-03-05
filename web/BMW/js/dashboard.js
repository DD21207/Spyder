var net ="https://www.starcompass.net"

	window.onresize = function() {
	    var height = Math.max(document.documentElement.clientHeight,
	        document.body.offsetHeight);
	    document.getElementById('page-wrapper').style.height = height - 100 +
	        'px';
	}

	$(function() {

		$.ajax({
		type: "POST",
		url: net+"/DEMOINTG/SessionControl?action=get&tabName=username|auth&tabValue=null|null",
		error: function(data) {
        	alert("Server internal error, please try again later.");
        	document.location.href="login.html";
		},
		success: function(data) {
			Arr = data.split("|");
			if (Arr[0] == "false") {
	        	alert("Inactivity timeout, please login again.");
	            document.location.href="login.html";
			} else {
				
		            $('#admin').text(Arr[0]);
		            $('#userid').text(Arr[0]);
			
			}
		},
	});


	    var height = Math.max(document.documentElement.clientHeight,
	        document.body.offsetHeight);
	    document.getElementById('page-wrapper').style.height = height - 100 +
	        'px';

	    var url = "container.html";
	    $("#centerFrame").attr("src", url);

	    $("#CI").hover(function() {

	        $("#ull1").show()
	    }, function() {
	        $("#ull1").hide()
	    })

	    $("#ull1").hover(function() {
	    	$("#CI").addClass('actived')
	        $("#ull1").show()
	    }, function() {
	    	$("#CI").removeClass('actived')
	        $("#ull1").hide()
	    })

	    $("#CT").hover(function() {
	        $("#ull2").show()
	    }, function() {
	        $("#ull2").hide()
	    })

	    $("#ull2").hover(function() {
	    	$("#CT").addClass('actived')

	        $("#ull2").show()
	    }, function() {
	    	$("#CT").removeClass('actived')

	        $("#ull2").hide()
	    })


	    $("#MI").hover(function() {
	        $("#ull3").show()
	    }, function() {
	        $("#ull3").hide()
	    })

	    $("#ull3").hover(function() {
	    	$("#MI").addClass('actived')

	        $("#ull3").show()
	    }, function() {
	    	$("#MI").removeClass('actived')

	        $("#ull3").hide()
	    })


	    $("#DB").hover(function() {
	        $("#ull4").show()
	    }, function() {
	        $("#ull4").hide()
	    })

	    $("#ull4").hover(function() {
	    	$("#DB").addClass('actived')

	        $("#ull4").show()
	    }, function() {
	    	$("#DB").removeClass('actived')

	        $("#ull4").hide()
	    })

	    $('.li>a').click(function() {
	    	$('.li>a').removeClass('actived');
	    	$(this).addClass('actived');
	    })

	})


function setData(menu, obj) {

	if (menu == 1) {

		var url = net+"/bi/Viewer?proc=1&action=viewer&hback=true&db=BMW!2f!01_Budget%20Report!2f!01_01%20Budget%20Report.db";
		$("#centerFrame").attr("src", url);
		
	} else if (menu == 2) {

		var url = net+"/bi/Viewer?proc=1&action=viewer&hback=true&db=BMW!2f!02_Competitive%20Intelligence!2f!02_01%20Category%20Landscape.db";
		$("#centerFrame").attr("src", url);

	} else if (menu == 3) {

		var url = net+"/bi/Viewer?proc=1&action=viewer&hback=true&db=BMW!2f!02_Competitive%20Intelligence!2f!02_02_Competitive%20Analysis.db";
		$("#centerFrame").attr("src", url);

	} else if (menu == 4) {

		var url = net+"/bi/Viewer?proc=1&action=viewer&hback=true&db=BMW!2f!02_Competitive%20Intelligence!2f!02_03_Digital%20AD%20Dashboard.db";
		$("#centerFrame").attr("src", url);

	} else if (menu == 5) {
						
		var url = net+"/bi/Viewer?proc=1&action=viewer&hback=true&db=BMW!2f!03_Campaign%20Tracking!2f!03_01%20TV%20Delivery.db";
		$("#centerFrame").attr("src", url);

	} else if (menu == 6) {

		var url = net+"/bi/Viewer?proc=1&action=viewer&hback=true&db=BMW!2f!03_Campaign%20Tracking!2f!03_02%20Digital%20Campaign%20Delivery.db";
		$("#centerFrame").attr("src", url);

	} else if (menu == 7) {

		var url = net+"/bi/Viewer?proc=1&action=viewer&hback=true&db=BMW!2f!04_Media%20%20Intelligence!2f!04_01%20Industry%20Media%20Trend.db";
		$("#centerFrame").attr("src", url);

	} else if (menu == 8) {
	
		var url = "detail/detail_PC.html";
		$("#centerFrame").attr("src", url);

	} else if (menu == 9) {
	
		var url = net+"/bi/Viewer?proc=1&action=viewer&hback=true&db=BMW!2f!05_Data%20Bank!2f!05_01%20Media%20Monitor%20Spending.db";
		$("#centerFrame").attr("src", url);

	} else if (menu == 10) {

		var url = net+"/bi/Viewer?proc=1&action=viewer&hback=true&db=BMW!2f!05_Data%20Bank!2f!05_02%20BMW%20BGT_ACT.db";
		$("#centerFrame").attr("src", url);

	}else if (menu == 11) {

		var url = net+"/bi/Viewer?proc=1&action=viewer&hback=true&db=BMW!2f!05_Data%20Bank!2f!05_03%20Digital%20Postbuy.db";
		$("#centerFrame").attr("src", url);

	}
	else if (menu == 12) {

		var url = net+"/bi/Viewer?proc=1&action=viewer&hback=true&db=BMW!2f!05_Data%20Bank!2f!05_04%20TV%20GRP_RCH.db";
		$("#centerFrame").attr("src", url);

	}

};	