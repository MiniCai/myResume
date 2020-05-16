// 锚点定位
const classList = ['work', 'writing', 'client']
classList.forEach(item => {
  var domList = document.querySelectorAll(`.${item}`)
  domList.forEach(option => {
    option.addEventListener('click', () => {
      document.getElementById(item).scrollIntoView();
    })
  })
});

// canvas
const canvasWrapper = document.getElementById('canvas-wrapper');
const wrapperWidth = canvasWrapper.offsetWidth;
const wrapperHeigth = canvasWrapper.offsetHeight;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = wrapperWidth;
canvas.height = wrapperHeigth;
ctx.font = `bold ${wrapperWidth / 2.8}px Tahoma`;
ctx.strokeText('MINI', 0, wrapperHeigth - 60);

var img = new Image()
img.src = './img/myself.png'
img.onload = function () {
  ctx.drawImage(this, wrapperWidth - 500, wrapperHeigth - 307, 125, 275)
}

// chart
const myChart = echarts.init(document.getElementById('main'));
var pathSymbols = {
  HTML5: 'image://./img/icon/HTML5.svg',
  CSS3: 'image://./img/icon/CSS3.svg',
  JavaScript: 'image://./img/icon/JavaScript.svg',
  Vue: 'image://./img/icon/Vue.svg',
  sass: 'image://./img/icon/sass.svg',
  weApp: 'image://./img/icon/weApp.svg',
  git: 'image://./img/icon/git.svg',
  ES6: 'image://./img/icon/ES6.svg',
  webSocket: 'image://./img/icon/webSocket.svg',
  nodejs: 'image://./img/icon/nodejs.svg'
};

var option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none'
    },
    formatter: function (params) {
      return `${params[0].name}${numFormat(params[0].value)}`;
    }
  },
  xAxis: {
    data: ['HTML5', 'CSS3', 'JavaScript', 'Vue全家桶', 'css预处理器', '小程序', 'git', 'ES6', 'webSocket', 'nodejs'],
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      color: '#C5A5E8',
      fontSize: '14'
    }
  },
  yAxis: {
    boundaryGap: ['20%', '20%'],
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },
  color: ['#C5A5E8'],
  series: [{
    name: 'hill',
    type: 'pictorialBar',
    barCategoryGap: '-130%',
    symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
    itemStyle: {
      opacity: 0.5
    },
    emphasis: {
      itemStyle: {
        opacity: 1
      }
    },
    data: [80, 78, 70, 78, 73, 55, 60, 50, 58, 30],
    z: 10
  }, {
    name: 'glyph',
    type: 'pictorialBar',
    barGap: '-100%',
    label: {
      normal: {
        show: true,
        position: 'top',
        offset: [0, 0],
        textStyle: {
          fontSize: 13
        },
        formatter: function (params) {
          return numFormat(params.value);
        }
      }
    },
    symbolPosition: 'end',
    symbolSize: 50,
    symbolOffset: [0, '-120%'],
    data: [{
        value: 79,
        symbol: pathSymbols.HTML5,
        symbolSize: [30, 30]
      }, {
        value: 78,
        symbol: pathSymbols.CSS3,
        symbolSize: [30, 30]
      }, {
        value: 70,
        symbol: pathSymbols.JavaScript,
        symbolSize: [30, 30]
      }, {
        value: 78,
        symbol: pathSymbols.Vue,
        symbolSize: [30, 30]
      }, {
        value: 73,
        symbol: pathSymbols.sass,
        symbolSize: [30, 30]
      }, {
        value: 55,
        symbol: pathSymbols.weApp,
        symbolSize: [30, 30]
      }, {
        value: 60,
        symbol: pathSymbols.git,
        symbolSize: [30, 30]
      }, {
        value: 50,
        symbol: pathSymbols.ES6,
        symbolSize: [30, 30]
      },
      {
        value: 58,
        symbol: pathSymbols.webSocket,
        symbolSize: [30, 30]
      },
      {
        value: 30,
        symbol: pathSymbols.nodejs,
        symbolSize: [30, 30]
      },
    ]
  }]
};
myChart.setOption(option, window.onresize = myChart.resize);

function numFormat(num) {
  if (num >= 80) {
    return '精通';
  } else if (num < 80 && num >= 60) {
    return '熟练';
  } else if (num < 60 && num >= 40) {
    return '掌握';
  } else if (num < 40 && num >= 20) {
    return '一般';
  } else {
    return '了解'
  }
}