 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {
    echarts_1();
	echarts_2();
	echarts_3();
	echarts_4();
	echarts_5();
    main_1();
	zb1();
	zb2();
	zb3();
	zb4();
function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
        option = {
                    tooltip : {
                        trigger: 'item',
                        formatter: "{b} : {c} ({d}%)"
                    },
                    legend: {
                        right:10,
                        top:30,
                        height:140,
                        itemWidth:10,
                        itemHeight:10,
                        itemGap:10,
                        textStyle:{
                            color: 'rgba(255,255,255,.6)',
                            fontSize:12
                        },
                        orient:'vertical',
                        data:['GIS地理信息反演','地形分析','地形深度图形成','无人机路径实时规划','环境数据采集优化']
                    },
                   calculable : true,
                    series : [
                        {
                            name:' ',
							color: ['#62c98d', '#2f89cf', '#4cb9cf', '#53b666', '#62c98d', '#205acf', '#c9c862', '#c98b62', '#c962b9', '#7562c9','#c96262'],	
                            type:'pie',
                            radius : [30, 70],
                            center : ['30%', '50%'],
                            roseType : 'radius',
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },

                            lableLine: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: true
                                }
                            },

                            data:[
                                {value:10, name:'GIS地理信息反演'},
                                {value:15, name:'地形分析'},
                                {value:25, name:'地形深度图形成'},
                                {value:30, name:'无人机路径规划'},
                                {value:18, name:'环境数据采集优化'}
                            ]
                        },
                    ]
                };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

        option = {
                    tooltip : {
                        trigger: 'item',
                        formatter: "{b} : {c} ({d}%)"
                    },
                    legend: {
                        right:10,
                        top:30,
                        height:140,
                        itemWidth:10,
                        itemHeight:10,
                        itemGap:10,
                        textStyle:{
                            color: 'rgba(255,255,255,.6)',
                            fontSize:12
                        },
                        orient:'vertical',
                        data:['region','hill','plain','Duanbu','Fold']
                    },
                   calculable : true,
                    series : [
                        {
                            name:' ',
							color: ['#62c98d', '#205acf', '#c9c862', '#c98b62', '#c962b9', '#7562c9','#c96262'],	
                            type:'pie',
                            radius : [30, 70],
                            center : ['40%', '50%'],
                            roseType : 'radius',
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },

                            lableLine: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },

                            data:[
                                {value:50, name:'region'},
                                {value:45, name:'hill'},
                                {value:35, name:'plain'},
                                {value:30, name:'Duanbu'},
                                {value:30, name:'Fold'}
                            ]
                        },
                    ]
                };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_3() {
       
    var chartDom = document.getElementById('echart3');
    var myChart = echarts.init(chartDom);
    var option;

    // 配置图表选项
    option = {
      xAxis: {
        scale: true
      },
      yAxis: {
        scale: true
      },
      series: [
        {
          type: 'effectScatter',
          symbolSize: 20,
          data: [
            [0.78, 423.54],
            [0.56, 266.79]
          ]
        },
        {
          type: 'scatter',
          data: [    
        [0.83, 673.99], [0.82, 658.46], [0.82, 656.27], [0.82, 624.57], [0.82, 635.49], 
          [0.82, 653.10], [0.81, 641.68], [0.81, 649.35], [0.81, 616.58], [0.81, 651.69], 
          [0.81, 656.85], [0.81, 631.69], [0.81, 624.81], [0.81, 618.59], [0.81, 630.54], 
          [0.81, 635.49], [0.81, 631.59], [0.80, 623.55], [0.80, 613.00], [0.80, 613.58], 
          [0.80, 605.13], [0.80, 611.66], [0.80, 608.90], [0.80, 603.80], [0.80, 603.55], 
          [0.80, 624.89], [0.80, 626.88], [0.80, 634.68], [0.80, 583.21], [0.80, 593.55], 
          [0.80, 586.90], [0.79, 596.98], [0.79, 596.88], [0.79, 576.87], [0.79, 539.43], 
          [0.79, 521.60], [0.79, 538.97], [0.79, 529.88], [0.79, 503.47], [0.79, 524.00], 
          [0.79, 514.95], [0.79, 507.81], [0.79, 484.89], [0.78, 465.85], [0.78, 481.80], 
          [0.78, 479.65], [0.78, 459.84], [0.78, 433.60], [0.78, 432.96], [0.78, 419.75], 
          [0.78, 423.54], [0.78, 416.53], [0.78, 403.00], [0.77, 413.66], [0.77, 393.54], 
          [0.77, 376.59], [0.77, 383.57], [0.76, 376.01], [0.76, 373.48], [0.76, 350.13], 
          [0.76, 491.48], [0.75, 474.88], [0.75, 509.90], [0.75, 484.84], [0.75, 496.99], 
          [0.75, 482.65], [0.74, 450.61], [0.74, 462.16], [0.74, 472.55], [0.74, 470.36], 
          [0.73, 461.35], [0.73, 476.55], [0.73, 452.54], [0.73, 456.98], [0.72, 431.53], 
          [0.72, 425.47], [0.72, 430.54], [0.72, 436.49], [0.71, 426.88], [0.71, 406.97], 
          [0.71, 403.55], [0.71, 416.98], [0.70, 410.56], [0.70, 413.55], [0.70, 410.56], 
          [0.70, 411.65], [0.70, 411.22], [0.69, 421.53], [0.69, 395.10], [0.69, 382.47], 
          [0.69, 390.24], [0.68, 352.17], [0.68, 309.52], [0.68, 363.55], [0.68, 363.22], 
          [0.68, 373.55], [0.67, 353.55], [0.67, 36.34], [0.67, 34.00], [0.67, 325.47], 
          [0.67, 350.55], [0.66, 353.54], [0.66, 363.55], [0.66, 373.50], [0.66, 346.68], 
          [0.65, 359.45], [0.65, 351.35], [0.65, 361.69], [0.65, 344.61], [0.65, 339.32], 
          [0.65, 339.14], [0.64, 349.94], [0.64, 335.30], [0.64, 334.68], [0.64, 333.65], 
          [0.64, 299.94], [0.63, 321.39], [0.63, 325.79], [0.63, 335.68], [0.63, 325.88], 
          [0.63, 288.61], [0.62, 328.45], [0.62, 331.47], [0.62, 319.95], [0.62, 321.16], 
          [0.62, 299.99], [0.61, 311.35], [0.61, 306.55], [0.61, 313.58], [0.61, 316.79], 
          [0.60, 313.58], [0.60, 293.25], [0.60, 316.47], [0.60, 302.14], [0.59, 306.58], 
          [0.59, 293.55], [0.59, 296.55], [0.58, 242.25], [0.58, 285.40], [0.58, 296.48], 
          [0.58, 285.79], [0.57, 246.87], [0.57, 286.84], [0.57, 259.24], [0.56, 261.57], 
          [0.56, 266.79], [0.56, 246.46], [0.55, 259.69], [0.55, 258.32], [0.55, 257.14], 
          [0.55, 256.94], [0.54, 248.17], [0.54, 248.12], [0.54, 245.26], [0.53, 243.17], 
          [0.53, 237.06], [0.53, 249.01], [0.52, 256.41], [0.52, 261.38], [0.51, 246.90], 
          [0.51, 221.55], [0.51, 201.38], [0.50, 234.86], [0.50, 193.55], [0.49, 183.55], 
          [0.49, 156.87], [0.48, 154.63], [0.48, 136.75], [0.47, 126.84]
      ]      
        }
      ]
    };

    // 设置图表选项
    option && myChart.setOption(option);
    }


function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2023年', '2024年'],
        align: 'right',
        right: '40%',
		top:'0%',
        textStyle: {
            color: "#fff",
		    fontSize: '16',

        },
        itemWidth: 16,
        itemHeight: 16,
        itemGap: 35
    },
    grid: {
        left: '0%',
		top:'40px',
        right: '0%',
        bottom: '2%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '16',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '16',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [{
        name: '2023年',
        type: 'bar',
        data: [0.1, 0.8, 1, 3, 4, 7, 10, 6, 12, 9, 10, 14],
        barWidth:'15', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'#2f89cf',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    }, {
        name: '2024年',
        type: 'bar',
		data: [13, 18, 23, 4],
		barWidth:'15',
       // barGap: 1,
        itemStyle: {
            normal: {
                color:'#62c98d',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    },
	]
};

        /*   */
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));
option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['GIS地理信息反演','无人机路径规划'],
        align: 'right',
        right: '40%',
		top:'0%',
        textStyle: {
            color: "#fff",
		    fontSize: '16',

        },
 
        itemGap: 35
    },
    grid: {
        left: '0%',
		top:'40px',
        right: '0%',
        bottom: '2%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['2025年', '2026年', '2027年', '2028年', '2029年', '2030年','2031年','2032年'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '16',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '16',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [{
        name: 'GIS地理信息反演',
        type: 'line',
		
        data: [2, 6, 3, 8, 5, 8, 10, 13, 8, 5, 6, 9],
       
        itemStyle: {
            normal: {
                color:'#2f89cf',
                opacity: 1,
				
				barBorderRadius: 5,
            }
        }
    }, {
        name: '无人机路径规划',
        type: 'line',
        data: [5, 2, 6, 4, 5, 12, 5, 17, 9, 2, 6, 3],
		barWidth:'15',
       // barGap: 1,
        itemStyle: {
            normal: {
                color:'#62c98d',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    },
	]
};
       

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

function zb1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb1'));
		var v1=60//结算数
		var v2=40//未结算数
		var v3=v1+v2//总订单数
option = {	
    series: [{
        type: 'pie',
        radius: ['60%', '70%'],
        color:'#49bcf7',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: v1,
            name: '数量结算率',
            label: {
                normal: {
                    formatter:Math.round( v1/v3*100)+ '%',
                    textStyle: {
                        fontSize: 30,
						color:'#fff',
                    }
                }
            }
        }, 
			   {
            value: v2,
            label: {
                normal: {
                 formatter : function (params){
                return '数量结算率'
            },
                    textStyle: {
                        color: '#aaa',
                        fontSize: 16
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,.2)'
                },
                emphasis: {
                    color: '#fff'
                }
            },
        }]
    }]
};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function zb2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb2'));
 		var v1=80//结算数
		var v2=20//未结算数
		var v3=v1+v2//总订单数
      option = {
	
//animation: false,
    series: [{	
        type: 'pie',
       radius: ['60%', '70%'],
        color:'#49bcf7',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: v1,
            name: '数量结算率',
            label: {
                normal: {
                    formatter:Math.round( v1/v3*100)+ '%',
                    textStyle: {
                        fontSize: 24,
						color:'#fff',
                    }
                }
            }
        }, {
            value: v2,
            label: {
                normal: {
                 formatter : function (params){
                return '数量结算率'
            },
                    textStyle: {
                        color: '#aaa',
                        fontSize: 16
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,.2)'
                },
                emphasis: {
                    color: '#fff'
                }
            },
        }]
    }]
};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function zb3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb3'));
		var v1=30//结算金额
		var v2=70//未结算
		var v3=v1+v2
option = {	
    series: [{
		
        type: 'pie',
       radius: ['60%', '70%'],
        color:'#62c98d',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: v1,
            name: '金额结算率',
            label: {
                normal: {
                    formatter:Math.round( v1/v3*100)+ '%',
                    textStyle: {
                        fontSize: 24,
						color:'#fff',
                    }
                }
            }
        }, {
            value: v2,
            label: {
                normal: {
                 formatter : function (params){
                return '金额结算率'
            },
                    textStyle: {
                        color: '#aaa',
                        fontSize: 16
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,.2)'
                },
                emphasis: {
                    color: '#fff'
                }
            },
        }]
    }]
};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function zb4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb4'));
		var v1=90//结算金额
		var v2=10//未结算
		var v3=v1+v2
option = {	
    series: [{
		
        type: 'pie',
       radius: ['60%', '70%'],
        color:'#29d08a',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: v1,
            name: '金额结算率',
            label: {
                normal: {
                    formatter:Math.round( v1/v3*100)+ '%',
                    textStyle: {
                        fontSize: 24,
						color:'#fff',
                    }
                }
            }
        }, {
            value: v2,
            label: {
                normal: {
                 formatter : function (params){
                return '金额结算率'
            },
                    textStyle: {
                        color: '#aaa',
                        fontSize: 16
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,.2)'
                },
                emphasis: {
                    color: '#fff'
                }
            },
        }]
    }]
};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
})

function main_1() {
    // var chartDom = document.getElementById('main_1');
    // var myChart = echarts.init(chartDom);
    // var option;
    var myChart = echarts.init(document.getElementById('main_1'));

    // 配置图表选项
    option = {
      xAxis: {
        scale: true
      },
      yAxis: {
        scale: true
      },
      series: [
        {
          type: 'effectScatter',
          symbolSize: 20,
          data: [
            [172.7, 105.2],
            [153.4, 42]
          ]
        },
        {
          type: 'scatter',
          data: [
            [161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
            [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
            [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
            [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
            [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
            [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0]
          ]
        }
      ]
    };
     // 设置图表选项
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
}


		
		
		


		









