// Generated by CoffeeScript 1.3.1
(function() {
  var trim,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  trim = function(string) {
    return string.replace(/^\s.*\s$/, "");
  };

  Formwatcher.Validators.push((function(_super) {

    __extends(_Class, _super);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.prototype.name = "Integer";

    _Class.prototype.description = "Makes sure a value is an integer";

    _Class.prototype.classNames = ["validate-integer"];

    _Class.prototype.validate = function(value) {
      if (value.replace(/\d*/, "") !== "") {
        return "Has to be a number.";
      }
      return true;
    };

    _Class.prototype.sanitize = function(value) {
      return trim(value);
    };

    return _Class;

  })(Formwatcher.Validator));

  Formwatcher.Validators.push((function(_super) {

    __extends(_Class, _super);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.prototype.name = "Required";

    _Class.prototype.description = "Makes sure the value is not blank (nothing or spaces).";

    _Class.prototype.classNames = ["required"];

    _Class.prototype.validate = function(value, input) {
      if ((input.attr("type") === "checkbox" && !input.is(":checked")) || !trim(value)) {
        return "Can not be blank.";
      }
      return true;
    };

    return _Class;

  })(Formwatcher.Validator));

  Formwatcher.Validators.push((function(_super) {

    __extends(_Class, _super);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.prototype.name = "NotZero";

    _Class.prototype.description = "Makes sure the value is not 0.";

    _Class.prototype.classNames = ["not-zero"];

    _Class.prototype.validate = function(value) {
      var intValue;
      intValue = parseInt(value);
      if (!isNaN(intValue) && intValue === 0) {
        return "Can not be 0.";
      }
      return true;
    };

    return _Class;

  })(Formwatcher.Validator));

  Formwatcher.Validators.push((function(_super) {

    __extends(_Class, _super);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.prototype.name = "Email";

    _Class.prototype.description = "Makes sure the value is an email.";

    _Class.prototype.classNames = ["validate-email"];

    _Class.prototype.validate = function(value) {
      var emailRegEx;
      emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!value.match(emailRegEx)) {
        return "Must be a valid email address.";
      }
      return true;
    };

    _Class.prototype.sanitize = function(value) {
      return trim(value);
    };

    return _Class;

  })(Formwatcher.Validator));

  Formwatcher.Validators.push((function(_super) {

    __extends(_Class, _super);

    function _Class() {
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.prototype.name = "Float";

    _Class.prototype.description = "Makes sure a value is a float";

    _Class.prototype.classNames = ["validate-float"];

    _Class.prototype.defaultOptions = {
      decimalMark: ","
    };

    _Class.prototype.validate = function(value) {
      var regex;
      regex = new RegExp("\\d+(\\" + this.options.decimalMark + "\\d+)?");
      if (value.replace(regex, "") !== "") {
        return "Has to be a number.";
      }
      return true;
    };

    _Class.prototype.sanitize = function(value) {
      if (value.indexOf(".") >= 0 && value.indexOf(",") >= 0) {
        if (value.lastIndexOf(",") > value.lastIndexOf(".")) {
          value = value.replace(/\./g, "");
        } else {
          value = value.replace(/\,/g, "");
        }
      }
      if (value.indexOf(",") >= 0) {
        value = value.replace(/\,/g, ".");
      }
      if (value.indexOf(".") !== value.lastIndexOf(".")) {
        value = value.replace(/\./g, "");
      }
      value = value.replace(/\./g, this.options.decimalMark);
      return trim(value);
    };

    return _Class;

  })(Formwatcher.Validator));

}).call(this);