ng-slider [![NPM version](https://badge.fury.io/js/ng-slider.png)](http://badge.fury.io/js/ng-slider) [![Build Status](https://travis-ci.org/darul75/ng-slider.png?branch=master)](https://travis-ci.org/darul75/ng-slider) [![Total views](https://sourcegraph.com/api/repos/github.com/darul75/ng-slider/counters/views.png)](https://sourcegraph.com/github.com/darul75/ng-slider)
=====================

Angular directive slider control.

**No JQUERY dependency needed anymore**

Welcome to a fork from awesome job of Egor Khmelev https://github.com/egorkhmelev/jslider

Why
-------------

Original implementation provides very nice features but too much for my needs, this one just simplified.

Source files were divided in several files, and not angular integrated.

Sceenshot
-------------

![angular slider demo](http://darul75.github.io/ng-slider/images/screenshot.png "angular slider demo screenshot")

Demo
-------------
http://darul75.github.io/ng-slider/

How to use it
-------------

You should already have script required for Angular.

```html
<script type="text/javascript" src="angular.min.js"></script>
```

to the list above, you should add:

```html
<link rel="stylesheet" type="text/css" href="ng-slider.min.css">
```

```html
<script type="text/javascript" src="ng-slider.min.js"></script>
```
in case you want to use your own template, omit the last line and instead add some template code
to your project:
```html
<script type="text/ng-template" id="aw-select.tmpl.html">
    ....
</script>
```

Then, inject `ngSlider` in your application module:

```javascript
angular.module('myApp', ['ngSlider']);
```

and then just add an `input` with `slider` directive name attribute, `value` and `options` scope variable attribute.

```html
<input ng-model="value" type="text" id="mySlider1" slider options="options" />
```

'value' your slider scope end value, as string.
'options' slider scope options value as json.
'ng-disabled' angular common attribute.

```javascript
$scope.value = "10";
// $scope.value = "10;15"; FOR DOUBLE VIEW
```

### Options

Options for your slider in json format {from:.....}

* `from`: start value
* `to`: end value
* `step`: step value
* `dimension`: string, example " $"
* `scale`: array for scale
* `round`: how many numbers allowed after comma
* `smooth`: true/false; false snaps the button to value
* `vertical`: true/false; vertical slider, default false
* `callback` : function triggering current value, can be useful

Installation
------------

Using npm:

```
npm install ng-slider
```

Using bower:

```
bower install ng-slider
```

### Build

You can run the tests by running

```
npm install
```
or
```
npm test
```

assuming you already have `grunt` installed, otherwise you also need to do:

```
npm install -g grunt-cli
```

### Issue

To help me on reproducing any issues, please feel free to modify/fork this fiddle: http://jsfiddle.net/darul75/g9e9n8xc/

## Metrics

[![NPM](https://nodei.co/npm/ng-slider.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ng-slider/)

## License

The MIT License (MIT)

Copyright (c) 2013 Julien Valéry

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.




