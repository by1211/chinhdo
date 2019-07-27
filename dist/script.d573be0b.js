// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/script.js":[function(require,module,exports) {
// jQuery methods go here...
$(document).ready(function () {
  // Declare CSS Variables ////////////////////////////
  $portfolioSection = $('#portfolio'); // Declare JS Variables /////////////////////////////

  var myProjects = [{
    name: "Traede",
    job: ["branding", "graphic", "prototype"],
    about: "Træde is a financial blockchain trading platform for real and virtual assets transaction",
    palette: ["#1f2640", "#2d3b60", "#f57921"],
    tool: ["adobe-photoshop", "adobe-illustrator", "adobe-indesign"]
  }, {
    name: "Skytr33",
    job: ["branding", "webdesign"],
    about: "Previously known as 'Quantum Mechanics', SkyTr33 had completely rebranded itself in hope of capturing world-wide attention of future virtual reality and augmented reality consumers",
    palette: ["black", "white", "#d0f2fb"],
    tool: ["adobe-illustrator", "adobe-indesign", "html-5", "css3"]
  }, {
    name: "FoodGiving",
    job: ["branding", "webdesign", "prototype"],
    about: "Food Giving is a P2P web application aiming to reduce food waste by connecting people who want to give food away with those who need them.",
    palette: ["#E60073", "#00E676", "#2A2C33"],
    tool: ["adobe-illustrator", "html-5", "css3", "javascript"]
  }, {
    name: "WanderSpace",
    job: ["branding"],
    about: "Embark on an immersive, simulated journey through the solar system with Alexa, a virtual assistant. Play fetch with the space puppy Enzo, and discover gravitational differences between planet",
    palette: ["#4ad9d9", "#5e646c", "#f22430", "#ffcb05"],
    tool: ["adobe-photoshop", "adobe-illustrator", "blender-3d"]
  }];
  var smallProjects = [{
    name: "Neon Skies",
    job: ["logo"],
    tool: ["adobe-photoshop"],
    link: ["https://youtu.be/O2VjoI1QUrg", "Watch Demo"]
  }, {
    name: "Rush",
    job: ["logo"],
    tool: ["adobe-illustrator"],
    link: []
  }, {
    name: "DrEgg Adventure",
    job: ["illustration"],
    tool: ["adobe-photoshop"],
    link: ["https://www.dreggadventures.com/", "Visit Website"]
  }, {
    name: "Blanket Ninja",
    job: ["webdesign"],
    tool: ["adobe-photoshop", "html-5", "css3", "javascript"],
    link: ["https://doinby.github.io/BlanketNinja/", "View Demo"]
  }];
  var mediaList = ["namecard", "cover", "eventbrite", "mockup", "render", "screenshot", "sketch", "slogan", "tshirt"]; // HTML output ///////////////////////////////////// 
  // Generate content for #portfolio

  for (i = 0; i < myProjects.length; i++) {
    // Create banner
    $projectBanner = $('#' + myProjects[i].name).find('.p-banner').append('<img class="materialboxed">').children().attr({
      alt: myProjects[i].name + "'s Logo",
      'data-caption': myProjects[i].name + "'s Logo",
      src: 'images/' + myProjects[i].name + '/banner.jpg' // class: 'materialboxed',

    }); // Alternate clicking ripple effect's color

    $('#' + myProjects[i].name).children('.collapsible-header').addClass(function () {
      if (i % 2 === 0) {
        return 'waves-effect waves-pink';
      } else return 'waves-effect waves-blue';
    }); // Create badge(s)

    for (j = 0; j < myProjects[i].job.length; j++) {
      $jobBadge = $('<mark>').append('<div id="circle" class="chip-' + myProjects[i].job[j] + '"></div>').append(myProjects[i].job[j]).addClass('chip').appendTo($('#' + myProjects[i].name).find('.chip-container'));
    }

    $companyProfile = $('<p class="text-flow">').text(myProjects[i].about).insertAfter($('#' + myProjects[i].name).find('.chip-container')).append('<a class="expand-button btn-flat btn-small">view more</a>'); // Create image album

    for (j = 0; j < mediaList.length; j++) {
      // Initiate all images
      $image = $('<img>').attr({
        'data-caption': mediaList[j],
        class: 'materialboxed',
        src: 'images/' + myProjects[i].name + '/' + mediaList[j] + '.jpg'
      }); // Add all images to thumbnail container

      $thumbnail = $('<li class="thumbnail">').appendTo($projectBanner = $('#' + myProjects[i].name).find('.collection')).append($image);
    } // Create palette


    $palette = $('<div class="palette">').insertAfter($('#' + myProjects[i].name + ' #palette'));

    for (j = 0; j < myProjects[i].palette.length; j++) {
      $colorBlock = $('<div class="color-block">').css('background', myProjects[i].palette[j]).appendTo($('#' + myProjects[i].name).find('.palette'));
    } // Create logo mark


    $markContainer = $('<div class="mark-container">').insertAfter($('#' + myProjects[i].name + ' #logomark'));

    for (j = 0; j < 4; j++) {
      $logoMark = $('<img>').attr('src', function () {
        switch (j) {
          default:
            return 'images/' + myProjects[i].name + '/logomark-s.png';

          case 0:
            return 'images/' + myProjects[i].name + '/logomark-n.png';

          case 1:
            return 'images/' + myProjects[i].name + '/logomark-i.png';

          case 2:
            return 'images/' + myProjects[i].name + '/logomark-bw.png';
        }

        ;
      });
      $markBg = $('<div class="mark-bg">').appendTo($markContainer).append($logoMark).css('background', function () {
        switch (j) {
          case 1:
            return 'black';

          default:
            return 'white';
        }

        ;
      });
    } // Create list of tools


    $tool = $('<div class="tool">').insertAfter($('#' + myProjects[i].name + ' #tool'));

    for (j = 0; j < myProjects[i].tool.length; j++) {
      $colorBlock = $('<img>').attr('src', 'images/tool-icons/icons8-' + myProjects[i].tool[j] + '-48.png').appendTo($('#' + myProjects[i].name).find('.tool'));
    }

    killEmptyParent();
  } // Generate content for #small-projects


  for (i = 0; i < smallProjects.length; i++) {
    currentProjectName = smallProjects[i].name.replace(/\s/g, '');
    $('<div class="card">').attr('id', currentProjectName).append('<div class="card-image">').append('<div class="card-title">' + smallProjects[i].name + '</div>').append('<div class="card-content">').appendTo($('#small-project')); // Add badge(s)

    for (j = 0; j < smallProjects[i].job.length; j++) {
      $('#' + currentProjectName + ' .card-content').append('<mark class="chip"><div id="circle" class="chip-' + smallProjects[i].job[j] + '"></div>' + smallProjects[i].job[j] + '</mark>');
    } // Add tool used


    for (j = 0; j < smallProjects[i].tool.length; j++) {
      $('#' + currentProjectName + ' .card-content').append('<img src="images/tool-icons/icons8-' + smallProjects[i].tool[j] + '-48.png">');
    } // Add link url to project


    $('#' + currentProjectName).append('<div class="card-action"><a class="waves-effect waves-light btn btn-flat" href="' + smallProjects[i].link[0] + '"target="_blank">' + smallProjects[i].link[1]); // Add image

    $('#' + currentProjectName).find('.card-image').append('<img src="images/misc/' + currentProjectName + '.png">');

    switch (currentProjectName) {
      case "DrEggAdventure":
        // Correct the title
        $('#' + currentProjectName + ' .card-title').text('Dr.Egg Adventure').css('font-size', '17px');
        $('#' + currentProjectName).find('.card-image img').addClass('materialboxed').attr('src', 'images/misc/DrEggAdventure.jpg').attr('data-caption', 'Easter Egg poster');
        break;

      case "Rush":
        $('#' + currentProjectName).find('.card-action').remove();
        break;

      case "BlanketNinja":
        $('#' + currentProjectName).find('.card-image').addClass('materialboxed');
        break;
    }

    killEmptyParent();
  }

  function killEmptyParent() {
    // Hide image bound if not found
    $("img").on("error", function () {
      $(this).parent('.material-placeholder').parent('.thumbnail').remove();
      $(this).parent().remove();
    });
  } // Spawn pug array


  for (i = 0; i < 6; i++) {
    $('.pug-array').append('<img class="pug" src="images/cdPug-rgbPrimary.svg" alt="">');
  } // Materialize JS components


  $('.sidenav').sidenav({
    'edge': 'right'
  });
  $('.materialboxed').materialbox({
    onOpenStart: function onOpenStart() {// return console.log("done");
    }
  });
  $('.slider').slider();
  $('.collapsible').collapsible();
  $('.dropdown-trigger').dropdown();
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "6024" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/script.js"], null)
//# sourceMappingURL=/script.d573be0b.js.map