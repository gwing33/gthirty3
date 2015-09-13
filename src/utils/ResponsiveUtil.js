let _minWidth = 740;
let _maxWidth = 1440;

let _minHeight = 300;
let _maxHeight = 720;

const ResponsiveUtil = {
  setMinMaxWidth: (min, max) => {
    _minWidth = min;
    _maxWidth = max;
  },

  setMinMaxHeight: (min, max) => {
    _minHeight = min;
    _maxHeight = max;
  },

  getRatio: (actual, min, max) => {
    return (actual - min) / (max - min);
  },

  getWRatio: (min, max) => {
    const { windowWidth } = ResponsiveUtil.getSize();
    return ResponsiveUtil.getRatio(windowWidth, min, max);
  },

  getHRatio: (min, max) => {
    const { windowHeight } = ResponsiveUtil.getSize();
    return ResponsiveUtil.getRatio(windowHeight, min, max);
  },

  getWidthRatio: () => {
    return ResponsiveUtil.getWRatio(_minWidth, _maxWidth);
  },

  getHeightRatio: () => {
    return ResponsiveUtil.getHRatio(_minHeight, _maxHeight);
  },

  calcOffWidth: (minVal, maxVal) => {
    return ResponsiveUtil.calc(ResponsiveUtil.getWidthRatio(), minVal, maxVal);
  },

  calcOffHeight: (minVal, maxVal) => {
    return ResponsiveUtil.calc(ResponsiveUtil.getHeightRatio(), minVal, maxVal);
  },

  calc: (ratio, minVal, maxVal) => {
    let val = maxVal;

    if (ratio < 0) {
      val = minVal;
    } else if (ratio < 1) {
      val = ratio * (maxVal - minVal) + minVal;
    }

    return Math.round(val);
  },

  getSize: () => {
    const isDefined = ResponsiveUtil.isWindowDefined();

    return {
      windowWidth: isDefined ? window.innerWidth : -1,
      windowHeight: isDefined ? window.innerHeight : -1
    };
  },

  isWindowDefined: () => {
    return typeof window !== 'undefined';
  }
};

export default ResponsiveUtil;
