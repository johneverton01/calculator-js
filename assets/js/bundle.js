"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Operations = /*#__PURE__*/function () {
  function Operations() {
    _classCallCheck(this, Operations);
  }

  _createClass(Operations, null, [{
    key: "sum",
    value: function sum(a, b) {
      return a + b;
    }
  }, {
    key: "sub",
    value: function sub(a, b) {
      return a - b;
    }
  }, {
    key: "division",
    value: function division(a, b) {
      return a / b;
    }
  }, {
    key: "multiplication",
    value: function multiplication(a, b) {
      return a * b;
    }
  }, {
    key: "multiplication",
    value: function multiplication(a, b) {
      return a * b;
    }
  }, {
    key: "power",
    value: function power(a, b) {
      return Math.pow(a, b);
    }
  }, {
    key: "square",
    value: function square(a) {
      return Math.sqrt(a);
    }
  }]);

  return Operations;
}();

console.log(Operations.square(4));
