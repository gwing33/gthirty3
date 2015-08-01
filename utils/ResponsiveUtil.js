'use strict';
var _minWidth = 740;
var _maxWidth = 1440;

var _minHeight = 300;
var _maxHeight = 720;

var ResponsiveUtil = {
  setMinMaxWidth: (min, max) => {
    _minWidth = min;
    _maxWidth = max;
  },

  getRatio: (actual, min, max) => {
    return (actual - min) / (max - min);
  },

  getWRatio: (min, max) => {
    let { windowWidth } = ResponsiveUtil.getSize();
    return ResponsiveUtil.getRatio(windowWidth, min, max);
  },

  getHRatio: (min, max) => {
    let { windowHeight } = ResponsiveUtil.getSize();
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
    var val = maxVal;

    if(ratio < 0) {
      val = minVal;
    } else if(ratio < 1) {
      val = ratio * (maxVal - minVal) + minVal
    }

    return Math.round(val);
  },

  getSize: () => {
    let is_defined = ResponsiveUtil.isWindowDefined();

    return {
      windowWidth: is_defined ? window.innerWidth : -1,
      windowHeight: is_defined ? window.innerHeight : -1
    };
  },

  isWindowDefined: () => {
    return typeof window !== 'undefined';
  }
}

export default ResponsiveUtil;
