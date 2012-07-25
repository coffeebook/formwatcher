// Generated by CoffeeScript 1.3.3
(function(){var e,t={}.hasOwnProperty,n=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new 
i,e.__super__=n.prototype,e};e=function(e){return e.replace(/^\s.*\s$/,"")},Formwatcher.validators.push(function(t){function r(){return r.__super__.constructor.apply(this,arguments)}return n(r,t),r.prototype
.name="Integer",r.prototype.description="Makes sure a value is an integer",r.prototype.classNames=["validate-integer"],r.prototype.validate=function(e){return e.replace(/\d*/,"")!==""?"Has to be a number."
:!0},r.prototype.sanitize=function(t){return e(t)},r}(Formwatcher.Validator)),Formwatcher.validators.push(function(t){function r(){return r.__super__.constructor.apply(this,arguments)}return n(r,t),r.prototype
.name="Required",r.prototype.description="Makes sure the value is not blank (nothing or spaces).",r.prototype.classNames=["required"],r.prototype.validate=function(t,n){return n.attr("type")==="checkbox"&&!
n.is(":checked")||!e(t)?"Can not be blank.":!0},r}(Formwatcher.Validator)),Formwatcher.validators.push(function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return n(t,e),t.prototype
.name="NotZero",t.prototype.description="Makes sure the value is not 0.",t.prototype.classNames=["not-zero"],t.prototype.validate=function(e){var t;return t=parseInt(e),!isNaN(t)&&t===0?"Can not be 0."
:!0},t}(Formwatcher.Validator)),Formwatcher.validators.push(function(t){function r(){return r.__super__.constructor.apply(this,arguments)}return n(r,t),r.prototype.name="Email",r.prototype.description="Makes sure the value is an email."
,r.prototype.classNames=["validate-email"],r.prototype.validate=function(e){var t;return t=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
,e.match(t)?!0:"Must be a valid email address."},r.prototype.sanitize=function(t){return e(t)},r}(Formwatcher.Validator)),Formwatcher.validators.push(function(t){function r(){return r.__super__.constructor
.apply(this,arguments)}return n(r,t),r.prototype.name="Float",r.prototype.description="Makes sure a value is a float",r.prototype.classNames=["validate-float"],r.prototype.defaultOptions={decimalMark:","
},r.prototype.validate=function(e){var t;return t=new RegExp("\\d+(\\"+this.options.decimalMark+"\\d+)?"),e.replace(t,"")!==""?"Has to be a number.":!0},r.prototype.sanitize=function(t){return t.indexOf
(".")>=0&&t.indexOf(",")>=0&&(t.lastIndexOf(",")>t.lastIndexOf(".")?t=t.replace(/\./g,""):t=t.replace(/\,/g,"")),t.indexOf(",")>=0&&(t=t.replace(/\,/g,".")),t.indexOf(".")!==t.lastIndexOf(".")&&(t=t.replace
(/\./g,"")),t=t.replace(/\./g,this.options.decimalMark),e(t)},r}(Formwatcher.Validator))}).call(this);