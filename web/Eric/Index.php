<!DOCTYPE html>
<html>
	<meta charset="utf-8">
	<title>Index</title>
	<style type="text/css">
		body,html{
			width: 100%;
			height: auto;
			padding: 0;margin: 0;

		}
		#model{
			background: rgba(0,0,0,0.65);
			width: 100%;
			height: 100%;
			z-index: 10;
			position: absolute;
			display: none;
		}
		#tooltip{
			width: 200px;
			height: 150px;
			position: absolute;
			top: 50%;
			left: 50%;
			margin-left: -100px;
			margin-top: -75px;
			display: none;
			background: white;
			border: 1px solid lightgrey;
			z-index: 100;
		}
		.close_box{
			width: 100%;
			height: 30px;
			line-height: 30px;
			margin: 0 ;
		}

		.close_box>p{
			float: left;
			margin-top: 0;
			margin-bottom: 0;
			margin-left: 20px;
		}
		.close_box>a{
			text-decoration: none;
			float: right;
			color: grey;
			margin-right: 20px;
		}
		.input_box{
			text-align: center;
			margin-top: 20px; 
		}
	</style>
	<script  src="https://code.jquery.com/jquery-2.2.4.js"></script>
	
	<script type="text/javascript">
		$(function(){
			$('#close').click(function(){
				$("#model").hide();
				$("#tooltip").hide();
			})
			$("#open").click(function(){
				$(window).scrollTop(0);
				$("#model").show();
				$("#tooltip").show();
			})
		})

		function submit(){
			var Version= $('#Version').val();
			var totalbox=[];
			for(var y = 0;y<$('table').length;y++){
				for (var i = 0; i < $("#table_"+y).find('tr').length-1; i++) {
					var num = y; 	//table的数量
					var num1 = i;	//table里面的行数
					var num2 = num.toString() +'a'+num1.toString();	//行的id
					var total ="";
					for(var z = 0;z<$("#"+num2+">td").length-1;z++)
					{
						// total += num2+"|"+z
						if( z == $("#"+num2+">td").length-2)
						{
							total += "'"+$("#"+num2+">td:gt("+z+")").children('input').val()+"'"
						}
						else
						{
							total += "'"+$("#"+num2+">td:gt("+z+")").children('input').val()+"'"+","
						}
						
					}

					totalbox.push(total)

				}
			}
			$.ajax({
		        type:"POST",  //默认值: "GET")。请求方式 ("POST" 或 "GET")， 默认为 "GET"
		        url:"Insert.php",  //当前页地址。发送请求的地址
		        data:{
		        	Version:Version,
		            numList:totalbox
		        },
		            success:function(data){
		                $("#model").hide();
						$("#tooltip").hide();
						alert(data);
		               
		            },
		            async:true,   //true为异步请求，false为同步请求
		            error:function(){
		                alert("请求失败");
		            }
		    });
		}		

		function validation()
		{
			var name = $('#Choose').val();
			var name2 = $('#Version_choose').val();
			$.ajax({
		        type:"POST",  //默认值: "GET")。请求方式 ("POST" 或 "GET")， 默认为 "GET"
		        url:"Display.php",  //当前页地址。发送请求的地址
		        data:{
		            Choose:name,
		            Version_choose:name2
		        },
	            success:function(data){
	                $("#info").html(data)
	            },
	            async:true,   //true为异步请求，false为同步请求
	            error:function(){
	                alert("请求失败");
	            }
		    });

		    $.ajax({
		        type:"POST",  //默认值: "GET")。请求方式 ("POST" 或 "GET")， 默认为 "GET"
		        url:"Demo.php",  //当前页地址。发送请求的地址
		        data:{
		            Choose:name,
		            Version_choose:name2
		        },
	            success:function(result){
	                data = $.parseJSON(result);  
                	console.log(data);  
	            },
	            async:true,   //true为异步请求，false为同步请求
	            error:function(){
	                alert("请求失败");
	            }
		    });
		}	
	</script>

	<!-- 将页面上的表格存在用于计算的数据表中。先删除表中的数据，再插入数据，最后计算。-->
	<script type="text/javascript">
		function jisuan(){
			var totalbox=[];
			for(var y = 0;y<$('table').length;y++){
				for (var i = 0; i < $("#table_"+y).find('tr').length-1; i++) {
					var num = y; 	//table的数量
					var num1 = i;	//table里面的行数
					var num2 = num.toString() +'a'+num1.toString();	//行的id
					var total ="";
					for(var z = 0;z<$("#"+num2+">td").length-1;z++)
					{
						// total += num2+"|"+z
						if( z == $("#"+num2+">td").length-2)
						{
							total += "'"+$("#"+num2+">td:gt("+z+")").children('input').val()+"'"
						}
						else
						{
							total += "'"+$("#"+num2+">td:gt("+z+")").children('input').val()+"'"+","
						}
						
					}

					totalbox.push(total)

				}
			}
			$.ajax({
		        type:"POST",  //默认值: "GET")。请求方式 ("POST" 或 "GET")， 默认为 "GET"
		        url:"jisuan.php",  //当前页地址。发送请求的地址
		        data:{
		            numList:totalbox
		        },
		            success:function(jisuan){
		                data = $.parseJSON(jisuan);  
                		console.log(data.Data);
                		alert('Done!');
		            },
		            async:true,   //true为异步请求，false为同步请求
		            error:function(){
		                alert("请求失败");
		            }
		    })
		    ;

		}		
	</script>

	<script type="text/javascript">
		function export_excel(){
			var totalbox=[];
			for(var y = 0;y<$('table').length;y++){
				for (var i = 0; i < $("#table_"+y).find('tr').length-1; i++) {
					var num = y; 	//table的数量
					var num1 = i;	//table里面的行数
					var num2 = num.toString() +'a'+num1.toString();	//行的id
					var total ="";
					for(var z = 0;z<$("#"+num2+">td").length-1;z++)
					{
						// total += num2+"|"+z
						if( z == $("#"+num2+">td").length-2)
						{
							total += "'"+$("#"+num2+">td:gt("+z+")").children('input').val()+"'"
						}
						else
						{
							total += "'"+$("#"+num2+">td:gt("+z+")").children('input').val()+"'"+","
						}
						
					}

					totalbox.push(total)

				}
			}
			$.ajax({
		        type:"POST",  //默认值: "GET")。请求方式 ("POST" 或 "GET")， 默认为 "GET"
		        url:"Export.php",  //当前页地址。发送请求的地址
		        data:{
		            numList:totalbox
		        },
		            success:function(jisuan){
		                data = $.parseJSON(jisuan);  
                		console.log(data.Data);
                		alert('Done!');
		            },
		            async:true,   //true为异步请求，false为同步请求
		            error:function(){
		                alert("请求失败");
		            }
		    })
		    ;

		}		
	</script>

	<body>

		<div id="model">
		</div>
		<div id="tooltip">
			<div class="close_box">
			<p>请输入版本号：</p>
				<a href="javascript:;;" id="close">X
				</a>
			</div>
			<div class="input_box">
				<div><input type="text" name="" id="Version" style="width:150px;height:30px;padding: 2px"></div>
				<div style="margin-top: 10px;"><input type="button" name="button" value="Submit" style="width:150px;height:30px;padding: 2px" onclick="submit()"/></div>
			</div>
		</div>
		<center>
			<font size="4"><b>请选择需要修改的版本号:</b></font>
			<select id="Version_choose">
				<?php 
					include "Connect-info.php";
					$conn = mysqli_connect($Server,$User,$Pwd);
					$result = mysqli_query($conn,"Select Distinct `Status` from `ecom`.`ecom_budgeting` order by `Status` asc");
					while($row = mysqli_fetch_array($result))
					{
						echo '<option>'.$row[Status].'</option>';
					}
				?>
			</select>
			<font size="4"><b>及Platform:</b></font>
			<select id="Choose" >
				<?php 
					include "Connect-info.php";
					$conn = mysqli_connect($Server,$User,$Pwd);
					$result = mysqli_query($conn,"Select Distinct `Platform` from `ecom`.`ecom_budgeting` order by `Platform` asc");
					while($row = mysqli_fetch_array($result))
					{
						echo '<option>'.$row[Platform].'</option>';
					}
				?>
			</select> 

			
			<input type="button" name="button" value="Select" style="width:80px;height:20px; " onclick="validation()"/>
			
			</br></br>

			<div id="info"></div>
			<input type="button" name="button" value="保存该版本默认值" style="width:200px;height:30px; " id="open"/>
			<input type="button" name="button_jisuan" value="计算" style="width:200px;height:30px;" id="jisuan" onclick="jisuan()" />
			<input type="button" name="button_export" value="导出" style="width:200px;height:30px;" id="export" onclick="export_excel()"/>
			</br>
			</br>

		</center>


	</body>



</html>

