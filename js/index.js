wind_power_index=0;
loads_index=0;
change=0;
data={
  "line_cost": 14.777,
  "stable_points": 21,
  "stable_point_sum":[
  [10, 32, 27, 29, 30, 25, 28, 33, 26, 25, 29, 32],
  [30, 25, 33, 28, 26, 27, 31, 32, 29, 30, 31, 26]
  ],
  "line_cost_sum":
  [
    [30.34, 17.58, 14.76, 19.23, 22.11, 12.45, 18.92, 23.01, 20.78, 15.67, 11.89, 24.55],
    [13.67, 16.44, 10.99, 25.03, 10.12, 22.78, 20.34, 11.76, 23.89, 14.56, 18.21, 25.12]
  ],
  "wind_power": [
    [
      [151.4, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [74, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ],
    [
      [113, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
      [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
    ],
    [
      [18, 175, 77, 197, 121, 67, 8, 21, 3, 64, 76, 38],
      [143, 131, 15, 13, 78, 21, 82, 64, 4, 60, 19, 34]
    ],
    [
      [11, 175, 112, 19, 21, 67, 98, 21, 43, 64, 6, 38],
      [143, 131, 165, 123, 18, 21, 82, 4, 43, 60, 119, 34]
    ]
  ],
  "loads": [
  [
    [50, 110, 210, 70, 130, 290, 110, 210, 70, 90, 250, 230],
    [180, 20, 90, 230, 210, 230, 120, 230, 210, 120, 250, 230]
  ],
  [
    [190, 250, 230, 180, 20, 90, 230, 210, 230, 120, 230, 210],
    [230, 120, 250, 230, 180, 20, 90, 230, 210, 230, 120, 230]
  ],
  [
    [210, 230, 120, 230, 210, 120, 250, 230, 180, 20, 90, 230],
    [130, 290, 110, 210, 70, 90, 250, 230, 180, 20, 90, 230]
  ],
  [
    [200, 210, 70, 90, 250, 230, 180, 20, 90, 230, 210, 230],
    [50, 230, 210, 120, 230, 210, 120, 250, 230, 180, 20, 90]
  ],
  [
    [130, 290, 110, 210, 70, 90, 250, 230, 180, 20, 90, 230],
    [50, 110, 210, 70, 130, 290, 110, 210, 70, 90, 250, 230]
  ],
  [
    [190, 250, 230, 180, 20, 90, 230, 210, 230, 120, 230, 210],
    [210, 230, 120, 230, 210, 120, 250, 230, 180, 20, 90, 230]
  ],
  [
    [90, 230, 210, 120, 230, 210, 120, 250, 230, 180, 20, 90],
    [110, 210, 70, 90, 250, 230, 180, 20, 90, 230, 210, 230]
  ],
  [
    [230, 120, 250, 230, 180, 20, 90, 230, 210, 230, 120, 230],
    [190, 250, 230, 180, 20, 90, 230, 210, 230, 120, 230, 210]
  ],
  [
    [250, 230, 180, 20, 90, 230, 210, 230, 120, 230, 210, 120],
    [130, 290, 110, 210, 70, 90, 250, 230, 180, 20, 90, 230]
  ],
  [
    [210, 230, 120, 230, 210, 120, 250, 230, 180, 20, 90, 230],
    [110, 210, 70, 90, 250, 230, 180, 20, 90, 230, 210, 230]
  ],
  [
    [90, 230, 210, 120, 230, 210, 120, 250, 230, 180, 20, 90],
    [230, 120, 250, 230, 180, 20, 90, 230, 210, 230, 120, 230]
  ],
  [
    [50, 110, 210, 70, 130, 290, 110, 210, 70, 90, 250, 230],
    [190, 250, 230, 180, 20, 90, 230, 210, 230, 120, 230, 210]
  ],
  [
    [130, 290, 110, 210, 70, 90, 250, 230, 180, 20, 90, 230],
    [110, 210, 70, 90, 250, 230, 180, 20, 90, 230, 210, 230]
  ],
  [
    [210, 230, 120, 230, 210, 120, 250, 230, 180, 20, 90, 230],
    [90, 230, 210, 120, 230, 210, 120, 250, 230, 180, 20, 90]
  ],
  [
    [250, 230, 180, 20, 90, 230, 210, 230, 120, 230, 210, 120],
    [190, 250, 230, 180, 20, 90, 230, 210, 230, 120, 230, 210]
  ],
  [
    [130, 290, 110, 210, 70, 90, 250, 230, 180, 20, 90, 230],
    [210, 230, 120, 230, 210, 120, 250, 230, 180, 20, 90, 230]
  ],
  [
    [110, 210, 70, 90, 250, 230, 180, 20, 90, 230, 210, 230],
    [50, 110, 210, 70, 130, 290, 110, 210, 70, 90, 250, 230]
  ],
  [
    [190, 250, 230, 180, 20, 90, 230, 210, 230, 120, 230, 210],
    [230, 120, 250, 230, 180, 20, 90, 230, 210, 230, 120, 230]
  ],
  [
    [90, 230, 210, 120, 230, 210, 120, 250, 230, 180, 20, 90],
    [130, 290, 110, 210, 70, 90, 250, 230, 180, 20, 90, 230]
  ],
  [
    [210, 230, 120, 230, 210, 120, 250, 230, 180, 20, 90, 230],
    [110, 210, 70, 90, 250, 230, 180, 20, 90, 230, 210, 230]
  ],
  [
    [250, 230, 180, 20, 90, 230, 210, 230, 120, 230, 210, 120],
    [190, 250, 230, 180, 20, 90, 230, 210, 230, 120, 230, 210]
  ],
  [
    [130, 290, 110, 210, 70, 90, 250, 230, 180, 20, 90, 230],
    [210, 230, 120, 230, 210, 120, 250, 230, 180, 20, 90, 230]
  ],
  [
    [110, 210, 70, 90, 250, 230, 180, 20, 90, 230, 210, 230],
    [50, 110, 210, 70, 130, 290, 110, 210, 70, 90, 250, 230]
  ],
  [
    [190, 250, 230, 180, 20, 90, 230, 210, 230, 120, 230, 210],
    [230, 120, 250, 230, 180, 20, 90, 230, 210, 230, 120, 230]
  ],
  [
    [90, 230, 210, 120, 230, 210, 120, 250, 230, 180, 20, 90],
    [130, 290, 110, 210, 70, 90, 250, 230, 180, 20, 90, 230]
  ],
  [
    [210, 230, 120, 230, 210, 120, 250, 230, 180, 20, 90, 230],
    [110, 210, 70, 90, 250, 230, 180, 20, 90, 230, 210, 230]
  ],
  [
    [250, 230, 180, 20, 90, 230, 210, 230, 120, 230, 210, 120],
    [190, 250, 230, 180, 20, 90, 230, 210, 230, 120, 230, 210]
  ],
  [
    [130, 290, 110, 210, 70, 90, 250, 230, 180, 20, 90, 230],
    [210, 230, 120, 230, 210, 120, 250, 230, 180, 20, 90, 230]
  ],
  [
    [110, 210, 70, 90, 250, 230, 180, 20, 90, 230, 210, 230],
    [50, 110, 210, 70, 130, 290, 110, 210, 70, 90, 250, 230]
  ],
  [
    [190, 250, 230, 180, 20, 90, 230, 210, 230, 120, 230, 210],
    [230, 120, 250, 230, 180, 20, 90, 230, 210, 230, 120, 230]
  ],
  [
    [90, 230, 210, 120, 230, 210, 120, 250, 230, 180, 20, 90],
    [130, 290, 110, 210, 70, 90, 250, 230, 180, 20, 90, 230]
  ],
  [
    [210, 230, 120, 230, 210, 120, 250, 230, 180, 20, 90, 230],
    [110, 210, 70, 90, 250, 230, 180, 20, 90, 230, 210, 230]
  ],
  [
    [250, 230, 180, 20, 90, 230, 210, 230, 120, 230, 210, 120],
    [190, 250, 230, 180, 20, 90, 230, 210, 230, 120, 230, 210]
  ]
],
  "topology":
  {"change": 1,
    "nodes":[
    {"id": 0, "label": "0"},
    {"id": 1, "label": "1"},
    {"id": 2, "label": "2"},
    {"id": 3, "label": "3"},
    {"id": 4, "label": "4"},
    {"id": 5, "label": "5"},
    {"id": 6, "label": "6"},
    {"id": 7, "label": "7"},
    {"id": 8, "label": "8"},
    {"id": 9, "label": "9"},
    {"id": 10, "label": "10"},
    {"id": 11, "label": "11"},
    {"id": 12, "label": "12"},
    {"id": 13, "label": "13"},
    {"id": 14, "label": "14"},
    {"id": 15, "label": "15"},
    {"id": 16, "label": "16"},
    {"id": 17, "label": "17"},
    {"id": 18, "label": "18"},
    {"id": 19, "label": "19"},
    {"id": 20, "label": "20"},
    {"id": 21, "label": "21"},
    {"id": 22, "label": "22"},
    {"id": 23, "label": "23"},
    {"id": 24, "label": "24"},
    {"id": 25, "label": "25"},
    {"id": 26, "label": "26"},
    {"id": 27, "label": "27"},
    {"id": 28, "label": "28"},
    {"id": 29, "label": "29"},
    {"id": 30, "label": "30"},
    {"id": 31, "label": "31"},
    {"id": 32, "label": "32"}
    ],
    "edges": [
    {"from": 0, "to": 1},
    {"from": 1, "to": 2},
    {"from": 2, "to": 3},
    {"from": 3, "to": 4},
    {"from": 4, "to": 5},
    {"from": 5, "to": 6},
    {"from": 6, "to": 7},
    {"from": 7, "to": 8},
    {"from": 8, "to": 9},
    {"from": 9, "to": 10},
    {"from": 10, "to": 11},
    {"from": 11, "to": 12},
    {"from": 12, "to": 13},
    {"from": 13, "to": 14},
    {"from": 14, "to": 15},
    {"from": 15, "to": 16},
    {"from": 16, "to": 17},
    {"from": 1, "to": 18},
    {"from": 18, "to": 19},
    {"from": 19, "to": 20},
    {"from": 20, "to": 21},
    {"from": 2, "to": 22},
    {"from": 22, "to": 23},
    {"from": 23, "to": 24},
    {"from": 5, "to": 25},
    {"from": 25, "to": 26},
    {"from": 26, "to": 27},
    {"from": 27, "to": 28},
    {"from": 28, "to": 29},
    {"from": 29, "to": 30},
    {"from": 30, "to": 31},
    {"from": 31, "to": 32},
    {"from": 11, "to": 21},
    {"from": 17, "to": 32},
    {"from": 20, "to": 7, "dashes": "true"},
    {"from": 8, "to": 14, "dashes": "true"},
    {"from": 24, "to": 28, "dashes": "true"}
    ]}

};


head(data);
wind_power(data);
loads(data);

stable_point_sum(data);
line_cost_sum(data);
if(change!=data.topology.change)
{
  change=data.topology.change;
  topology(data);
};
wind_power(data);
loads(data);

stable_point_sum(data);
line_cost_sum(data);

//中间数据

//头部数据
function head(data)
{
  // 更新头部内容
  document.querySelector('.line_cost').innerHTML=data.line_cost;
  document.querySelector('.stable_points').innerHTML=data.stable_points;
}
//网络拓扑
function topology(data) {
  var data = {nodes: new vis.DataSet(data.topology.nodes), edges: new vis.DataSet(data.topology.edges)};
  var container = document.querySelector(".topology .chart");
  var network = new vis.Network(container, data);
  options={
    nodes: {
      size:20,
      font:{
        size:23,
        color:'#FF6347',
        face:'STFangsong'
      },
      color: {
        border: '		#20B2AA',
        background: '	#D4F2E7',
        highlight: {
          border: '		#20B2AA',
          background: '#D2E5FF'
        },
        hover: {
          border: '		#20B2AA',
          background: '#D2E5FF'
        }
      },
      fixed: {
        x:false,
        y:false
      }
    },
    interaction: {zoomView: true},
    edges: {
      width: 4,
      smooth: {
          type: "continuous"
      }
    },
  };
  network.setOptions(options);
};

//左侧数据

//风机功率
function wind_power(data) {

  var wind_power = data.wind_power;

  var myChart = echarts.init(document.querySelector(".wind_power .chart"));

  var option = {
    // 修改两条线的颜色
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis',
      textStyle: {
        fontFamily:'STFangsong',
        fontSize:15
      }
    },
    textStyle: {
      fontFamily:'STFangsong',
      fontSize:15
    },
    // 图例组件
    legend: {
      // 当serise 有name值时， legend 不需要写data
      // 修改图例组件文字颜色
      textStyle: {
        color: '#4c9bfd',
        fontFamily:'STFangsong',
        fontSize:15
      },
      right: '10%',
    },
    grid: {
      top: "20%",
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: true, // 显示边框
      borderColor: '#012f4a' // 边框颜色
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, // 去除轴间距
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: 'value',
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [{
        type: 'line',
        smooth: true, // 圆滑的线
        name: '实时功率',
        data: wind_power[wind_power_index][0]
      },
      {
        type: 'line',
        smooth: true, // 圆滑的线
        name: '预测功率',
        data: wind_power[wind_power_index][1]
      }
    ]
  };

  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })

  // 5.点击切换数据
  $('.wind_power h2 a').on('click', function () {
    wind_power_index=$(this).index();
    var obj = wind_power[wind_power_index];
    option.series[0].data = obj[0];
    option.series[1].data = obj[1];
    // 选中高亮
    $('.wind_power h2 a').removeClass('a-active');
    $(this).addClass('a-active');

    // 需要重新渲染
    myChart.setOption(option);
  })
};

//负载功率
function loads(data) {

  var loads = data.loads;

  var myChart = echarts.init(document.querySelector(".loads .chart"));

  var option = {
    // 修改两条线的颜色
    color: ['#00f2f1', '#ed3f35'],
        textStyle: {
      fontFamily:'STFangsong',
      fontSize:15
    },
    tooltip: {
      trigger: 'axis',
      textStyle: {
        fontFamily:'STFangsong',
        fontSize:15
      }
    },
    // 图例组件
    legend: {
      // 当serise 有name值时， legend 不需要写data
      // 修改图例组件文字颜色
      textStyle: {
        color: '#4c9bfd',
        fontFamily:'STFangsong',
        fontSize:15
      },
      right: '10%',
    },
    grid: {
      top: "20%",
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: true, // 显示边框
      borderColor: '#012f4a' // 边框颜色
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, // 去除轴间距
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: 'value',
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [{
        type: 'line',
        smooth: true, // 圆滑的线
        name: '实时功率',
        data: loads[loads_index][0]
      },
      {
        type: 'line',
        smooth: true, // 圆滑的线
        name: '预测功率',
        data: loads[loads_index][1]
      }
    ]
  };

  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })

  // 5.点击切换数据
  $(document).on('DOMSubtreeModified', '#mainNumber', function() {
    loads_index= document.getElementById("mainNumber").textContent-1;
    var obj = loads[loads_index];
    option.series[0].data = obj[0];
    option.series[1].data = obj[1];

    // 需要重新渲染
    myChart.setOption(option);
  })
};

//右侧数据
//总稳定节点
function stable_point_sum(data) {

  var stable_point_sum = data.stable_point_sum;

  var myChart = echarts.init(document.querySelector(".stable_point_sum .chart"));

  var option = {
    // 修改两条线的颜色
    color: ['#00f2f1', '#ed3f35'],
    textStyle: {
      fontFamily:'STFangsong',
      fontSize:15
    },
    tooltip: {
      trigger: 'axis',
      textStyle: {
        fontFamily:'STFangsong',
        fontSize:15
      }
    },
    // 图例组件
    legend: {
      // 当serise 有name值时， legend 不需要写data
      // 修改图例组件文字颜色
      textStyle: {
        color: '#4c9bfd',
        fontFamily:'STFangsong',
        fontSize:15
      },
      right: '10%',
    },
    grid: {
      top: "20%",
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: true, // 显示边框
      borderColor: '#012f4a' // 边框颜色
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, // 去除轴间距
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: 'value',
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [{
        type: 'line',
        smooth: true, // 圆滑的线
        name: '实时稳定节点',
        data: stable_point_sum[0]
      },
      {
        type: 'line',
        smooth: true, // 圆滑的线
        name: '优化稳定节点',
        data: stable_point_sum[1]
      }
    ]
  };

  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
};
//总线路耗散
function line_cost_sum(data) {

  var line_cost_sum = data.line_cost_sum;

  var myChart = echarts.init(document.querySelector(".line_cost_sum .chart"));

  var option = {
    // 修改两条线的颜色
    color: ['#00f2f1', '#ed3f35'],
    textStyle: {
      fontFamily:'STFangsong',
      fontSize:15
    },
    tooltip: {
      trigger: 'axis',
      textStyle: {
        fontFamily:'STFangsong',
        fontSize:15
      }
    },
    // 图例组件
    legend: {
      // 当serise 有name值时， legend 不需要写data
      // 修改图例组件文字颜色
      textStyle: {
        color: '#4c9bfd',
        fontFamily:'STFangsong',
        fontSize:15
      },
      right: '10%',
    },
    grid: {
      top: "20%",
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: true, // 显示边框
      borderColor: '#012f4a' // 边框颜色
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, // 去除轴间距
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: 'value',
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [{
        type: 'line',
        smooth: true, // 圆滑的线
        name: '实时耗散',
        data: line_cost_sum[0]
      },
      {
        type: 'line',
        smooth: true, // 圆滑的线
        name: '优化耗散',
        data: line_cost_sum[1]
      }
    ]
  };

  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
};

//下拉栏设计

function showSelect() {
  var selectDiv = document.getElementById("numberSelect");
  if (selectDiv.style.display === "none") {
    selectDiv.style.display = "block";
  } else {
    selectDiv.style.display = "none";
  }
}

function changeNumber(selectedNumber) {
  document.getElementById("mainNumber").innerHTML = selectedNumber;
  document.getElementById("numberSelect").style.display = "none";
}
