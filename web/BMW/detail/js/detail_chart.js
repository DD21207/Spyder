function charts(data) {

  var myChart1 = echarts.init(document.getElementById('bar_chart1'));
  option1 = {
    title:{
      text:data.bar[0]['media type'],
      left:'center',
    },
    color: ['#E3E2F9'],
    tooltip: {
      show:false,
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      top: 60,
      left: '3%',
      right: '4%',
      bottom:10,
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: data.bar[0].xAxis,
      axisTick: {
        alignWithLabel: true
      },
      axisLabel:{  
        interval:0,//横轴信息全部显示                 
      }  
    }],
    yAxis: [{
      type: 'value',
      name:'UV',
      nameGap:15,
      splitLine: {
        show: false,
        lineStyle: {
          type: 'dashed'
        }
      },
    }],
    textStyle: {
      fontSize: 13,
      color: "#000000",
    },
    series: [{
      name: '直接访问',
      type: 'bar',
      barWidth: '60%',
      label: {
        normal: {
          show: true,
          position: 'top',
          distance: 5,
          formatter: function(data) {
            var value = Math.round(data.value)
            var num = (value || 0).toString(), result = '';
            while (num.length > 3) {
                result = ',' + num.slice(-3) + result;
                num = num.slice(0, num.length - 3);
            }
            if (num) { result = num + result; }
            return  result ;
          },
        }
      },
      data: data.bar[0].data
    }]
  };


  var myChart2 = echarts.init(document.getElementById('bar_chart2'));

  option2 = {
    title:{
      text:data.bar[1]['media type'],
      left:'center',
    },
    color: ['#E3E2F9'],
    tooltip: {
      show:false,
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      top: 60,
      left: '3%',
      right: '4%',
      bottom:10,
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: data.bar[1].xAxis,
      axisTick: {
        alignWithLabel: true
      },
      axisLabel:{  
        interval:0,//横轴信息全部显示                 
      } 
    }],
    yAxis: [{
      type: 'value',
      name:'UV',
      nameGap:15,
      splitLine: {
        show: false,
        lineStyle: {
          type: 'dashed'
        }
      },
    }],
    textStyle: {
      fontSize: 13,
      color: "#000000",
    },
    series: [{
      name: '直接访问',
      type: 'bar',
      barWidth: '60%',
      label: {
        normal: {
          show: true,
          position: 'top',
          distance: 5,
          formatter: function(data) {
            var value = Math.round(data.value)
            var num = (value || 0).toString(), result = '';
            while (num.length > 3) {
                result = ',' + num.slice(-3) + result;
                num = num.slice(0, num.length - 3);
            }
            if (num) { result = num + result; }
            return  result ;
          },
        }
      },
      data: data.bar[1].data
    }]
  };

  var myChart3 = echarts.init(document.getElementById('bar_chart3'));

  option3 = {
    title:{
      text:data.bar[2]['media type'],
      left:'center',
    },
    color: ['#E3E2F9'],
    tooltip: {
      show:false,
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      top: 60,
      left: '3%',
      right: '4%',
      bottom:10,
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: data.bar[2].xAxis,
      axisTick: {
        alignWithLabel: true
      }
    }],
    yAxis: [{
      type: 'value',
      name:'UV',
      nameGap:15,
      splitLine: {
        show: false,
        lineStyle: {
          type: 'dashed'
        }
      },
    }],
    textStyle: {
      fontSize: 13,
      color: "#000000",
    },
    series: [{
      name: '直接访问',
      type: 'bar',
      barWidth: '60%',
      label: {
        normal: {
          show: true,
          position: 'top',
          distance: 5,
          formatter: function(data) {
            var value = Math.round(data.value)
            var num = (value || 0).toString(), result = '';
            while (num.length > 3) {
                result = ',' + num.slice(-3) + result;
                num = num.slice(0, num.length - 3);
            }
            if (num) { result = num + result; }
            return  result ;
          },
        }
      },
      data: data.bar[2].data
    }]
  };

  var myChart4 = echarts.init(document.getElementById('bar_chart4'));

  option4 = {
    title:{
      text:data.bar[3]['media type'],
      left:'center',
    },
    color: ['#E3E2F9'],
    tooltip: {
      show:false,
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      top: 60,
      left: '3%',
      right: '4%',
      bottom:10,
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: data.bar[3].xAxis,
      axisTick: {
        alignWithLabel: true
      }
    }],
    yAxis: [{
      type: 'value',
      name:'UV',
      nameGap:15,
      splitLine: {
        show: false,
        lineStyle: {
          type: 'dashed'
        }
      },
    }],
    textStyle: {
      fontSize: 13,
      color: "#000000",
    },
    series: [{
      name: '直接访问',
      type: 'bar',
      barWidth: '60%',
      label: {
        normal: {
          show: true,
          position: 'top',
          distance: 5,
          formatter: function(data) {
            var value = Math.round(data.value)
            var num = (value || 0).toString(), result = '';
            while (num.length > 3) {
                result = ',' + num.slice(-3) + result;
                num = num.slice(0, num.length - 3);
            }
            if (num) { result = num + result; }
            return  result ;
          },
        }
      },
      data: data.bar[3].data
    }]
  };
  var myChart5 = echarts.init(document.getElementById('scatter_chart1'));

  option5 = {
    title:{
      text:data.scatter[0]['media type'],
      left:'center'
    },
    grid: {
      left: "5%"
    },
    xAxis: {
      name:'UV',
      nameGap:15,
      splitLine: {
        show: false,
        lineStyle: {
          type: 'dashed'
        }
      },

    },
    yAxis: {
      name:'TGI',
      nameGap:15,
      min:60,
      splitLine: {
        show: false,
        lineStyle: {
          type: 'dashed'
        }
      }

    },
    color: ['#6476C0', '#2f4554', '#c23531', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
    textStyle: {
      fontSize: 15,
      color: "#000000",
    },
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      formatter: function(params) {
        if (params.value.length > 1) {
          return params.value[2] + ' :<br/> UV ' +
            params.value[0] + '<br/> TGI ' +
            params.value[1] ;
        } else {
          return params.seriesName + ' :<br/>' +
            params.name + ' : ' +
            params.value ;
        }
      },
    },
    series: [{
      data: data.scatter[0].data,
      type: 'scatter',
      symbolSize: '10',
      label: {
        normal: {
          show: true,
          position: 'top',
          distance: 8,
          fontSize: 20,
          formatter: function(param) {
            return param.data[2];
          },
        }
      },
      markLine: {
        lineStyle: {
          normal: {
            type: 'solid',
            color:'#7f7f7f'
          }
        },
        data: [{
          xAxis: data.scatter[0].average
        }, {
        name: '平均线',
        // 支持 'average', 'min', 'max'
        type: 'average'
    }]
      },

    }]
  };


  var myChart6 = echarts.init(document.getElementById('scatter_chart2'));

  option6 = {
    title:{
      text:data.scatter[1]['media type'],
      left:'center'
    },
    grid: {
      left: "5%"
    },
    xAxis: {
      name:'UV',
      nameGap:15,
      splitLine: {
        show: false,
        lineStyle: {
          type: 'dashed'
        }
      },

    },
    yAxis: {
      name:'TGI',
      nameGap:15,
      min:60,
      splitLine: {
        show: false,
        lineStyle: {
          type: 'dashed'
        }
      }

    },
    color: ['#6476C0', '#2f4554', '#c23531', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
    textStyle: {
      fontSize: 15,
      color: "#000000",
    },
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      formatter: function(params) {
        if (params.value.length > 1) {
          return params.value[2] + ' :<br/> UV ' +
            params.value[0] + '<br/> TGI ' +
            params.value[1] ;
        } else {
          return params.seriesName + ' :<br/>' +
            params.name + ' : ' +
            params.value ;
        }
      },
    },
    series: [{
      data: data.scatter[1].data,
      type: 'scatter',
      symbolSize: '10',
      label: {
        normal: {
          show: true,
          position: 'top',
          distance: 8,
          fontSize: 20,
          formatter: function(param) {
            return param.data[2];
          },
        }
      },
      markLine: {
        lineStyle: {
          normal: {
            type: 'solid',
            color:'#7f7f7f'
          }
        },
        data: [{
          xAxis: data.scatter[1].average
        }, {
        name: '平均线',
        // 支持 'average', 'min', 'max'
        type: 'average'
    }]
      },

    }]
  };


  var myChart7 = echarts.init(document.getElementById('scatter_chart3'));

 option7 = {
    title:{
      text:data.scatter[2]['media type'],
      left:'center'
    },
    grid: {
      left: "5%"
    },
    xAxis: {
      name:'UV',
      nameGap:15,
      splitLine: {
        show: false,
        lineStyle: {
          type: 'dashed'
        }
      },

    },
    yAxis: {
      name:'TGI',
      nameGap:15,
      min:60,
      splitLine: {
        show: false,
        lineStyle: {
          type: 'dashed'
        }
      }

    },
    color: ['#6476C0', '#2f4554', '#c23531', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
    textStyle: {
      fontSize: 15,
      color: "#000000",
    },
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      formatter: function(params) {
        if (params.value.length > 1) {
          return params.value[2] + ' :<br/> UV ' +
            params.value[0] + '<br/> TGI ' +
            params.value[1] ;
        } else {
          return params.seriesName + ' :<br/>' +
            params.name + ' : ' +
            params.value ;
        }
      },
    },
    series: [{
      data: data.scatter[2].data,
      type: 'scatter',
      symbolSize: '10',
      label: {
        normal: {
          show: true,
          position: 'top',
          distance: 8,
          fontSize: 20,
          formatter: function(param) {
            return param.data[2];
          },
        }
      },
      markLine: {
        lineStyle: {
          normal: {
            type: 'solid',
            color:'#7f7f7f'
          }
        },
        data: [{
          xAxis: data.scatter[2].average
        }, {
        name: '平均线',
        // 支持 'average', 'min', 'max'
        type: 'average'
    }]
      },

    }]
  };



  var myChart8 = echarts.init(document.getElementById('scatter_chart4'));


 option8 = {
    title:{
      text:data.scatter[3]['media type'],
      left:'center'
    },
    grid: {
      left: "5%"
    },
    xAxis: {
      name:'UV',
      nameGap:15,
      splitLine: {
        show: false,
        lineStyle: {
          type: 'dashed'
        }
      },

    },
    yAxis: {
      name:'TGI',
      nameGap:15,
      min:60,
      splitLine: {
        show: false,
        lineStyle: {
          type: 'dashed'
        }
      }

    },
    color: ['#6476C0', '#2f4554', '#c23531', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
    textStyle: {
      fontSize: 15,
      color: "#000000",
    },
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      formatter: function(params) {
        if (params.value.length > 1) {
          return params.value[2] + ' :<br/> UV ' +
            params.value[0] + '<br/> TGI ' +
            params.value[1] ;
        } else {
          return params.seriesName + ' :<br/>' +
            params.name + ' : ' +
            params.value ;
        }
      },
    },
    series: [{
      data: data.scatter[3].data,
      type: 'scatter',
      symbolSize: '10',
      label: {
        normal: {
          show: true,
          position: 'top',
          distance: 8,
          fontSize: 20,
          formatter: function(param) {
            return param.data[2];
          },
        }
      },
      markLine: {
        lineStyle: {
          normal: {
            type: 'solid',
            color:'#7f7f7f'
          }
        },
        data: [{
          xAxis: data.scatter[3].average
        }, {
        name: '平均线',
        // 支持 'average', 'min', 'max'
        type: 'average'
    }]
      },

    }]
  };


  //1234为柱状图
  myChart1.setOption(option1);
  myChart2.setOption(option2);
  myChart3.setOption(option3);
  myChart4.setOption(option4);
  myChart5.setOption(option5);
  myChart6.setOption(option6);
  myChart7.setOption(option7);
  myChart8.setOption(option8);
  //5678为散点图


  window.onload = res();

  function res() {

    myChart1.resize();
    myChart2.resize();
    myChart3.resize();
    myChart4.resize();
    myChart5.resize();
    myChart6.resize();
    myChart7.resize();
    myChart8.resize();

  }

  window.onresize = function() {

    myChart1.resize();
    myChart2.resize();
    myChart3.resize();
    myChart4.resize();
    myChart5.resize();
    myChart6.resize();
    myChart7.resize();
    myChart8.resize();


  }

}
