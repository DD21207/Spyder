var net ="https://www.starcompass.net"


function login() {
	
var username = $("#adminv").val();
		var password = $("#passv").val();
	
	$.ajax({ 
        type : "POST",
        url : net + "/DEMOINTG/login?adminv="+username+"&passv="+URLencode(password)+"&type=LoginCheck",
        success : function(data){
          var Arr = data.split("|");
          if (Arr[0]=="true"){
            $.ajax({
            	type : "POST",
                url : net + "/bi/api",
                data : {"action":"login","adminv":Arr[1],"passv":Arr[2]},
                dataType : "XML",
                error: function(xml) {
             	   ControlToken("clear","username|auth","null|null");
             	   alert('Server internal error2, please try again later.');
                },
                success : function(xml) {
                    var token=$("message",xml).text();
                    if($("level",xml).text()==6){
                 	   ControlToken("clear","username|auth","null|null");
                        //永洪密码错误
                        alert("The username and password you entered did not match our records. Please double-check and try again.");
                     }else if($("level",xml).text()==1){
                         $.ajax({
                             type : "GET",
                             url :  net + "/DEMOINTG/login?token="+token+"&type=Login",
                             success : function(data) {
                            //$.cookie("num", "", { expires: -1 });
                             	document.location.href='index.html';
                             },
                             error: function(data) {
                             	ControlToken("clear","username|auth|token","null|null|null");
                          	    alert('Server internal error3, please try again later.');
                             },
                         });
	                 }else{
	                    ControlToken("clear","username|auth","null|null");
                        //永洪未知错误
                        alert("The username and password you entered did not match our records. Please double-check and try again.");
	                 }
                },
             });
          } else if (Arr[0]=="network"){
              alert('Please login with the permission network.');
//              if($.cookie("num") > 0 ){
//            	  num = $.cookie("num");
//            	  num++;
//                  $.cookie("num", num, { expires: 7 });
//              }else{
//            	  $.cookie("num", "1", { expires: 7 });
//              }
              window.location.reload();
          } else {
              //自己数据库
              alert('The username and password you entered did not match our records. Please double-check and try again.');
//              if($.cookie("num") > 0 ){
//            	  num = $.cookie("num");
//            	  num++;	
//            	  $.cookie("num", num, { expires: 7 });
//              }else{
//            	  $.cookie("num", "1", { expires: 7 });
//              }
              window.location.reload();
          }
        },
        error: function(){
          alert('Server internal error4, please try again later.');
        },
   });
}

function ControlToken(action,tabName,tabValue){
    $.ajax({
        type:'POST',
        url: net + '/DEMOINTG/SessionControl?action='+action+'&tabName='+tabName+'&tabValue='+tabValue,
        success:function(){
        	return true;
        },
        error:function(){
        	alert("Server internal error1, please try again later.");
        	return false;
        },
    });
}
function URLencode(sStr){
	return escape(sStr).replace(/\+/g, '%2B').replace(/\"/g,'%22').replace(/\'/g, '%27').replace(/\//g,'%2F');
}