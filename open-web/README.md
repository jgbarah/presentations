# Playing with the open web

## Resumen (Spanish)

HTML5 y otras tecnologías relacionadas están incrementando considerablemente las capacidades de los navegadores, extendiendo su uso a ámbitos retringidos hasta hace poco a aplicaciones nativas. Además, la inmensa cantidad de módulos libres dispnible permite construir muchísimas aplicaciones con muy poco código extra. En esta presentación se mostrará de forma práctica cómo, con unas pocas líneas de HTML, y a veces un poquito de JavaScript, se pueden realizar aplicaciones de realidad virtual y aumentada, de videoconferencia, de mapas... Tráete tu navegador preferido y podrás ver los resultados (y el código para construirlos, y punteros para seguir aprendiendo por tu cuenta). Y como no sólo de código vivimos las personas, también se explicará brevemente lo importante que es mantener la web abierta como un ecosistema sano y robusto, frente a las tendencias a limitar lo que puedes hacer con tus dispositivos. (Por cierto: si eres de los que dicen "el web" en lugar de "la web", también puedes venir ;-) )


## Playing with the camera

Browsers provide an API for accessing devices, such as the camera.

Building stuff:

* [Camera demo](examples/camera/camera.html)
  ([code](https://github.com/jgbarah/presentations/tree/master/open-web/examples/camera/camera.html)).

Some links:

* [ASCII camera](https://andrei.codes/ascii-camera/)
  ([code](https://github.com/idevelop/ascii-camera))
  
* [WebRTC Basics in HTML Rocks](https://www.html5rocks.com/en/tutorials/webrtc/basics/)

## Building maps

Browsers provide an API for location.

Building stuff:

* [Yet another map](examples/mymaps/mymaps-1.html)
  ([code](https://github.com/jgbarah/presentations/tree/master/open-web/examples/mymaps/mymaps-1.html)).

* [Click to coordinate](examples/mymaps/mymaps-2.html)
  ([code](https://github.com/jgbarah/presentations/tree/master/open-web/examples/mymaps/mymaps-2.html)).

* [Finding my place in the world](examples/mymaps/mymaps-3.html)
  ([code](https://github.com/jgbarah/presentations/tree/master/open-web/examples/mymaps/mymaps-3.html)).
  Check this one with a mobile.

Some links:

* [Leaflet](https://leafletjs.com/).
    
## Virtual reality

Browsers provide WebVR, based on WebGL.

Building stuff:

* [Geometry](examples/vr/vr-1.html)
  ([code](https://github.com/jgbarah/presentations/tree/master/open-web/examples/vr/vr-1.html)).

* [Robots in the fog](examples/vr/vr-2.html)
  ([code](https://github.com/jgbarah/presentations/tree/master/open-web/examples/vr/vr-2.html)).

Some links:

* [AFrame](https://aframe.io)

* [AFrame Playground](https://jgbarah.github.io/aframe-playground/)

## Augmented reality

Building stuff:

* [Something is moving near you](examples/ar/ar-1.html)
  ([code](https://github.com/jgbarah/presentations/tree/master/open-web/examples/ar/ar-1.html)).
  Check this one with a mobile, be sure you allow the camera to work,
  and point it to the marker.
  
* [There be robots...](examples/ar/ar-2.html)
  ([code](https://github.com/jgbarah/presentations/tree/master/open-web/examples/ar/ar-2.html)).
  Check this one with a mobile, be sure you allow the camera to work,
  and point it to the marker.

Marker: [PNG](examples/ar/pattern-hiro.png),
[PDF](examples/ar/pattern-hiro-2up.pdf)

Some links:

* [AFrame](https://aframe.io)

* [AR.js](https://github.com/jeromeetienne/ar.js)

* [AFrame Playground](https://jgbarah.github.io/aframe-playground/)


## The Open Web

Open standards, open source software (free software),
decentralization, hackability...

* [What is the open web and why is it important?](https://www.yearofopen.org/november-open-perspective-what-is-open-web/what-is-the-open-web-and-why-is-it-important-submitted-by-mark-surman-executive-director-of-the-mozilla-foundation/),
  by Mark Surman (Mozilla).

* [What Is the Open Web and Why Is It Important?](http://codinginparadise.org/weblog/2008/04/whats-open-web-and-why-is-it-important.html),
  by Brad Neuberg.

## Some other (interesting) stuff

All of these are free, open source software HTML5 libraries and applications:


* Games

  * [2048](http://gabrielecirulli.github.io/2048/), with [source code](https://github.com/gabrielecirulli/2048)

  * [PacMan](http://pacman.platzh1rsch.ch/), with [source code](https://github.com/platzhersh/pacman-canvas)

  * [Astray](https://wwwtyro.github.io/Astray/), with [source code](https://github.com/wwwtyro/Astray)

  * [Vue Chess](https://github.com/gustaYo/vue-chess)

  * [FreeCivWeb](https://freecivweb.org/), with [source code](https://github.com/freeciv/freeciv-web)

  * [OpenLara](http://xproger.info/projects/OpenLara/), with [source code](https://github.com/XProger/OpenLara)

* Video

  * [Plyr](https://plyr.io/), with [source code](https://github.com/sampotts/plyr)

  * [Video.js](https://videojs.com/), with [source code](https://github.com/videojs/video.js)
 
* Really cool stuff

  * [Windows 95 in your browser](https://win95.ajf.me/).
  Windows 95 running on [EM-DOSBox](https://github.com/dreamlayers/em-dosbox),
  a JavaScript version of [DOSBox](https://www.dosbox.com/).
  The transpiling from C/C++ (DOSBox) to JavaScript (EM-DOSBox)
  is done with [Emscripten](https://emscripten.org/)
  an [LLVM](http://llvm.org/)-based system to compile to asm.js
  and WebAssembly.
  