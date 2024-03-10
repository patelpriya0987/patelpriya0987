const options1 = {
    series: [
    {
      name: "High - 2013",
      data: [28, 29, 33, 36, 32, 32, 33]
    },
    {
      name: "Low - 2013",
      data: [12, 11, 14, 18, 17, 13, 13]
    }
  ],
    chart: {
    height: 350,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Average High & Low Temperature',
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    title: {
      text: 'Month'
    }
  },
  yaxis: {
    title: {
      text: 'Temperature'
    },
    min: 5,
    max: 40
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  }
  };

  const chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
  chart1.render();


  // chart2
  const options2 = {
    series: [{
      name: "Session Duration",
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
    {
      name: "Page Views",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    },
    {
      name: 'Total Visits',
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
    }
  ],
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [5, 7, 5],
    curve: 'straight',
    dashArray: [0, 8, 5]
  },
  title: {
    text: 'Page Statistics',
    align: 'left'
  },
  legend: {
    tooltipHoverFormatter: function(val, opts) {
      return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
    }
  },
  markers: {
    size: 0,
    hover: {
      sizeOffset: 6
    }
  },
  xaxis: {
    categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
      '10 Jan', '11 Jan', '12 Jan'
    ],
  },
  tooltip: {
    y: [
      {
        title: {
          formatter: function (val) {
            return val + " (mins)"
          }
        }
      },
      {
        title: {
          formatter: function (val) {
            return val + " per session"
          }
        }
      },
      {
        title: {
          formatter: function (val) {
            return val;
          }
        }
      }
    ]
  },
  grid: {
    borderColor: '#f1f1f1',
  }
  };

  const chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
  chart2.render();

  // chart3
  const options3 = {
    series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };

  const chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
  chart3.render();

//   chart4
  const options4 = {
    series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };

  const chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
  chart4.render();
            
//   chart5

const options5 = {
    series: [{
    name: 'Inflation',
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
  }],
    chart: {
    height: 350,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ["#304758"]
    }
  },
  
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    position: 'top',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: true,
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      }
    }
  
  },
  title: {
    text: 'Monthly Inflation in Argentina, 2002',
    floating: true,
    offsetY: 330,
    align: 'center',
    style: {
      color: '#444'
    }
  }
  };

  const chart5 = new ApexCharts(document.querySelector("#chart5"), options5);
  chart5.render();  

//   chat6

const options6 = {
    series: [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
      'United States', 'China', 'Germany'
    ],
  }
  };

  const chart6 = new ApexCharts(document.querySelector("#chart6"), options6);
  chart6.render();

// chart 7
const options7 = {
  series: [{
  name: 'TEAM A',
  type: 'column',
  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
}, {
  name: 'TEAM B',
  type: 'area',
  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
}, {
  name: 'TEAM C',
  type: 'line',
  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
}],
  chart: {
  height: 350,
  type: 'line',
  stacked: false,
},
stroke: {
  width: [0, 2, 5],
  curve: 'smooth'
},
plotOptions: {
  bar: {
    columnWidth: '50%'
  }
},

fill: {
  opacity: [0.85, 0.25, 1],
  gradient: {
    inverseColors: false,
    shade: 'light',
    type: "vertical",
    opacityFrom: 0.85,
    opacityTo: 0.55,
    stops: [0, 100, 100, 100]
  }
},
labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
  '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
],
markers: {
  size: 0
},
xaxis: {
  type: 'datetime'
},
yaxis: {
  title: {
    text: 'Points',
  },
  min: 0
},
tooltip: {
  shared: true,
  intersect: false,
  y: {
    formatter: function (y) {
      if (typeof y !== "undefined") {
        return y.toFixed(0) + " points";
      }
      return y;

    }
  }
}
};

const chart7 = new ApexCharts(document.querySelector("#chart7"), options7);
chart7.render();

//chart8
const options8 = {
  series: [44, 55, 67, 83],
  chart: {
  height: 350,
  type: 'radialBar',
},
plotOptions: {
  radialBar: {
    dataLabels: {
      name: {
        fontSize: '22px',
      },
      value: {
        fontSize: '16px',
      },
      total: {
        show: true,
        label: 'Total',
        formatter: function (w) {
          // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
          return 249
        }
      }
    }
  }
},
labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
};

const chart8 = new ApexCharts(document.querySelector("#chart8"), options8);
chart8.render();

//chart9
const options9 = {
  series: [44, 55, 13, 43, 22],
  chart: {
  width: 380,
  type: 'pie',
},
labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

const chart9 = new ApexCharts(document.querySelector("#chart9"), options9);
chart9.render();

//chart10

var options10 = {
  series: [44, 55, 41, 17, 15],
  chart: {
  type: 'donut',
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart10 = new ApexCharts(document.querySelector("#chart10"), options10);
chart10.render();

//   chart13

const options13 = {
  series: [{
  colors: ['#5A66F1', '#60A5FA'] ,
  data: [{
      x: new Date(1538778600000),
      y: [6629.81, 6650.5, 6623.04, 6633.33]
    },
    {
      x: new Date(1538780400000),
      y: [6632.01, 6643.59, 6620, 6630.11]
    },
    {
      x: new Date(1538782200000),
      y: [6630.71, 6648.95, 6623.34, 6635.65]
    },
    {
      x: new Date(1538784000000),
      y: [6635.65, 6651, 6629.67, 6638.24]
    },
    {
      x: new Date(1538785800000),
      y: [6638.24, 6640, 6620, 6624.47]
    },
    {
      x: new Date(1538787600000),
      y: [6624.53, 6636.03, 6621.68, 6624.31]
    },
    {
      x: new Date(1538789400000),
      y: [6624.61, 6632.2, 6617, 6626.02]
    },
    {
      x: new Date(1538791200000),
      y: [6627, 6627.62, 6584.22, 6603.02]
    },
    {
      x: new Date(1538793000000),
      y: [6605, 6608.03, 6598.95, 6604.01]
    },
    {
      x: new Date(1538794800000),
      y: [6604.5, 6614.4, 6602.26, 6608.02]
    },
    {
      x: new Date(1538796600000),
      y: [6608.02, 6610.68, 6601.99, 6608.91]
    },
    {
      x: new Date(1538798400000),
      y: [6608.91, 6618.99, 6608.01, 6612]
    },
    {
      x: new Date(1538800200000),
      y: [6612, 6615.13, 6605.09, 6612]
    },
    {
      x: new Date(1538802000000),
      y: [6612, 6624.12, 6608.43, 6622.95]
    },
    {
      x: new Date(1538803800000),
      y: [6623.91, 6623.91, 6615, 6615.67]
    },
    {
      x: new Date(1538805600000),
      y: [6618.69, 6618.74, 6610, 6610.4]
    },
    {
      x: new Date(1538807400000),
      y: [6611, 6622.78, 6610.4, 6614.9]
    },
    {
      x: new Date(1538809200000),
      y: [6614.9, 6626.2, 6613.33, 6623.45]
    },
    {
      x: new Date(1538811000000),
      y: [6623.48, 6627, 6618.38, 6620.35]
    },
    {
      x: new Date(1538812800000),
      y: [6619.43, 6620.35, 6610.05, 6615.53]
    },
    {
      x: new Date(1538814600000),
      y: [6615.53, 6617.93, 6610, 6615.19]
    },
    {
      x: new Date(1538816400000),
      y: [6615.19, 6621.6, 6608.2, 6620]
    },
    {
      x: new Date(1538818200000),
      y: [6619.54, 6625.17, 6614.15, 6620]
    },
    {
      x: new Date(1538820000000),
      y: [6620.33, 6634.15, 6617.24, 6624.61]
    },
    {
      x: new Date(1538821800000),
      y: [6625.95, 6626, 6611.66, 6617.58]
    },
    {
      x: new Date(1538823600000),
      y: [6619, 6625.97, 6595.27, 6598.86]
    },
    {
      x: new Date(1538825400000),
      y: [6598.86, 6598.88, 6570, 6587.16]
    },
    {
      x: new Date(1538827200000),
      y: [6588.86, 6600, 6580, 6593.4]
    },
    {
      x: new Date(1538829000000),
      y: [6593.99, 6598.89, 6585, 6587.81]
    },
    {
      x: new Date(1538830800000),
      y: [6587.81, 6592.73, 6567.14, 6578]
    },
    {
      x: new Date(1538832600000),
      y: [6578.35, 6581.72, 6567.39, 6579]
    },
    {
      x: new Date(1538834400000),
      y: [6579.38, 6580.92, 6566.77, 6575.96]
    },
    {
      x: new Date(1538836200000),
      y: [6575.96, 6589, 6571.77, 6588.92]
    },
    {
      x: new Date(1538838000000),
      y: [6588.92, 6594, 6577.55, 6589.22]
    },
    {
      x: new Date(1538839800000),
      y: [6589.3, 6598.89, 6589.1, 6596.08]
    },
    {
      x: new Date(1538841600000),
      y: [6597.5, 6600, 6588.39, 6596.25]
    },
    {
      x: new Date(1538843400000),
      y: [6598.03, 6600, 6588.73, 6595.97]
    },
    {
      x: new Date(1538845200000),
      y: [6595.97, 6602.01, 6588.17, 6602]
    },
    {
      x: new Date(1538847000000),
      y: [6602, 6607, 6596.51, 6599.95]
    },
    {
      x: new Date(1538848800000),
      y: [6600.63, 6601.21, 6590.39, 6591.02]
    },
    {
      x: new Date(1538850600000),
      y: [6591.02, 6603.08, 6591, 6591]
    },
    {
      x: new Date(1538852400000),
      y: [6591, 6601.32, 6585, 6592]
    },
    {
      x: new Date(1538854200000),
      y: [6593.13, 6596.01, 6590, 6593.34]
    },
    {
      x: new Date(1538856000000),
      y: [6593.34, 6604.76, 6582.63, 6593.86]
    },
    {
      x: new Date(1538857800000),
      y: [6593.86, 6604.28, 6586.57, 6600.01]
    },
    {
      x: new Date(1538859600000),
      y: [6601.81, 6603.21, 6592.78, 6596.25]
    },
    {
      x: new Date(1538861400000),
      y: [6596.25, 6604.2, 6590, 6602.99]
    },
    {
      x: new Date(1538863200000),
      y: [6602.99, 6606, 6584.99, 6587.81]
    },
    {
      x: new Date(1538865000000),
      y: [6587.81, 6595, 6583.27, 6591.96]
    },
    {
      x: new Date(1538866800000),
      y: [6591.97, 6596.07, 6585, 6588.39]
    },
    {
      x: new Date(1538868600000),
      y: [6587.6, 6598.21, 6587.6, 6594.27]
    },
    {
      x: new Date(1538870400000),
      y: [6596.44, 6601, 6590, 6596.55]
    },
    {
      x: new Date(1538872200000),
      y: [6598.91, 6605, 6596.61, 6600.02]
    },
    {
      x: new Date(1538874000000),
      y: [6600.55, 6605, 6589.14, 6593.01]
    },
    {
      x: new Date(1538875800000),
      y: [6593.15, 6605, 6592, 6603.06]
    },
    {
      x: new Date(1538877600000),
      y: [6603.07, 6604.5, 6599.09, 6603.89]
    },
    {
      x: new Date(1538879400000),
      y: [6604.44, 6604.44, 6600, 6603.5]
    },
    {
      x: new Date(1538881200000),
      y: [6603.5, 6603.99, 6597.5, 6603.86]
    },
    {
      x: new Date(1538883000000),
      y: [6603.85, 6605, 6600, 6604.07]
    },
    {
      x: new Date(1538884800000),
      y: [6604.98, 6606, 6604.07, 6606]
    },
  ]
  
}],
  chart: {
  type: 'candlestick',
  height: 350
},
title: {
  text: 'CandleStick Chart',
  align: 'left'
},
xaxis: {
  type: 'datetime'
},
yaxis: {
  tooltip: {
    enabled: true
  }
}
};

const chart13 = new ApexCharts(document.querySelector("#chart13"), options13);
chart13.render();

// chart 14
const options14 = {
  series: [{
  name: 'Series 1',
  data: [80, 50, 30, 40, 100, 20],
}, {
  name: 'Series 2',
  data: [20, 30, 40, 80, 20, 80],
}, {
  name: 'Series 3',
  data: [44, 76, 78, 13, 43, 10],
}],
  chart: {
  height: 350,
  type: 'radar',
  dropShadow: {
    enabled: true,
    blur: 1,
    left: 1,
    top: 1
  }
},
title: {
  text: 'Sales last 6 months'
},
stroke: {
  width: 2
},
fill: {
  opacity: 0.1
},
markers: {
  size: 0
},
xaxis: {
  categories: ['2011', '2012', '2013', '2014', '2015', '2016']
}
};

const chart14 = new ApexCharts(document.querySelector("#chart14"), options14);
chart14.render();