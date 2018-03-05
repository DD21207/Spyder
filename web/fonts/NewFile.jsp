<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>


<script type="text/javascript">  
  
			function check(){  
  
			if(event.keyCode==13){alert("ENTRY");}}  
  
		</script>  
		
<body onload="check()">  
  
<input type="text" id="t1" onkeydown="if(event.keyCode==13){document.getElementById('bt').click();return false;}" /><button id="bt" onclick="alert('回车单击了按钮!!')">确  认</button>  
  
</body>  


</body>
</html>