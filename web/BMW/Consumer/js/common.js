var net = "https://www.starcompass.net"

$(function(){
	$("#btnLogout").click(function () {
		$.ajax({
			type: "GET",
			url: net+"/login?type=Logout",
			success: function(data) {
				var Arr = data.split("|");
	            if (Arr[0]=="true"){
	            	location.href ="login.html";
	            }else{
	                alert('Server internal error, please try again later.');
	                location.href ="login.html"
	            }
			},
			error: function(data) {
				alert('Server internal error, please try again later.');
				location.href = "login.html";
			},
		});
	});

	$('#myPsw').on('show.bs.modal', function() {
		 $('#inputPassword1').val("");
		 $('#inputPassword2').val("");
		 $('#inputPassword3').val("");
		 $('#msg').text("");
		 $('#msg2').text("");
		 $('#msg3').text("");
		});

	setTimeout(function() {$.ajax({
				type: "GET",
				url: "login?type=Logout",
				success: function(data) {
					var Arr = data.split("|");
		            if (Arr[0]=="true"){
		            	 alert('Session timeout, please try again later.');
			                	 location.href ="login.html"
			       	 
		            }else{
		                alert('Server internal error1, please try again later.');
		                location.href ="login.html"
		            }
				},
				error: function(data) {
					alert('Server internal error2, please try again later.');
					location.href = "login.html";
				},
			});}, 3600000);
})
function auth(page,callback){
		$.ajax({
		type: "POST",
     	async:false,
		url: net+"/SessionControl?action=get&tabName=username|auth|group&tabValue=null|null|null",
		error: function(data) {
        	alert("Server internal error, please try again later.");
        	document.location.href="login.html";
		},
		success: function(data) {
			Arr = data.split("|");
			var group = Arr[2];
			if (Arr[0] == "false") {
	        	alert("Inactivity timeout, please login again.");
	            document.location.href="login.html";
			} else {
				$('#admin').text(Arr[0]);
		        $('#userid').text(Arr[0]);
				switch(page)
					{
					case "Index":
					  if( group == "Admin" ){
		                 $("#One").attr('href','Onereport.html')
					  }else if(group == "PG_MO_All"||group == "SC_All"){
					  	 $("#One").attr('href','Onereport-MO.html')
					  }else if(group == "SC_CPA_All"||group == "SC_CPA_OC_PGCI"||group == "SC_CPA_FC_PGCI"||group == "SC_CPA_LC&AC_PGCI"||group == "SC_CPA_BC_PGCI"){
					  	 $("#One").attr('href','Onereport-SC.html')
					  }else{
	            		document.location.href="login.html";
					  }
					  break;
					case "SEM":
					  if( group == "SC_AOR_SEM"||group == "Admin"||group == "PG_MO_All"||group == "SC_All"||group == "SC_CPA_All"||group == "SC_CPA_OC_PGCI"||group == "SC_CPA_FC_PGCI"||group == "SC_CPA_LC&AC_PGCI"||group == "SC_CPA_BC_PGCI" ){
		                 
					  }else{
	            		document.location.href="login.html";
					  }
					  break;
					case "One-AD":
					  if( group == "SC_AOR_SEM" ){
		                 document.location.href="login.html";
					  }else if(group != "Admin"||group != "PG_BO_All"||group != "SC_AOR_All"){

					  }else{
		                 document.location.href="login.html";
					  }
					  break;
					case "One-SC":
					  if( group == "SC_AOR_SEM" ){
		                 document.location.href="login.html";
					  }else if(group == "SC_CPA_All" || group == "PG_RBU_BC&FC_One report"||group == "SC_CPA_OC_PGCI"||group == "SC_CPA_FC_PGCI"||group == "SC_CPA_LC&AC_PGCI"||group == "SC_CPA_BC_PGCI"||group == "PG_RBU_OC" ||group == "SC_CPA_OC_One report" ||group == "SC_CPA_FC_One report" ||group == "SC_CPA_LC&AC_One report" ||group == "SC_CPA_BC_One report" ){
					  	 
					  }else{
					  	document.location.href="login.html";
					  }
					  break;
					case "One-MC":
					  if( group == "SC_AOR_SEM" ){
		                 document.location.href="login.html";
					  }else if(group == "MC_All" ||group == "MC_CPA_PC" ||group == "MC_CPA_SC" ||group == "MC_CPA_HC" ||group == "MC_CPA_SA" ||group == "MC_CPA_PC & RC_One report" ||group == "PG_RBU_HC&SC_One report" ){
					  	 
					  }else{
					  	document.location.href="login.html";
					  }
					  break;
					case "One-MD":
					  if( group == "SC_AOR_SEM" ){
		                 document.location.href="login.html";
					  }else if(group == "PG_MO_Digital" ||group == "SC_AOR_Digital"){
					  	 
					  }else{
					  	document.location.href="login.html";
					  }
					  break;
					case "One-MO":
					  if( group == "SC_AOR_SEM" ){
		                 document.location.href="login.html";
					  }else if(group == "PG_MO_All"||group == "SC_All"){
					  	 
					  }else{
					  	document.location.href="login.html";
					  }
					  break;
					case "TV":
					  if( group == "SC_AOR_TV" ){
		                 
					  }else{
					  	document.location.href="login.html";
					  }
					  break;
					}
				callback(group);
			}
		},
	});
}
