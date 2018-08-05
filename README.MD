# JavaScript 30 Day Challenge
---
Repo for my solutions to Wes Bos' 30 Day Vanilla JS Challenge https://JavaScript30.com

## Day 1 - Drum Machine
[Drum Machine](https://tristanmarsh.github.io/JavaScript-30-challenge/1-drum-machine/)
My solution is not as succinct, but keeps the separation of concerns clearer and lets the function names reflect the functionality.

## Day 2 - CSS + JS Clock
[CSS + JS Clock](https://tristanmarsh.github.io/JavaScript-30-challenge/2-clock/)
This was fun! Challenging to represent the final degrees subsisting of the component time units in a readible way.

## Day 3 - CSS VARIABLES
[CSS Variables](https://tristanmarsh.github.io/JavaScript-30-challenge/3-css-variables/)
Continuing to learn programmatic JS controlled style, which despite IMO being more prone than css to becoming unmanageable, is undeniably handy. Fan of the `<HTMLElement>.dataset` proprty mechanism! 👏

## Day 4 - Array Cardio 1
[Array Cardio 1](https://tristanmarsh.github.io/JavaScript-30-challenge/4-array-cardio-1/)
Fun times concreting recent attempts to take initial steps towards writing "functionally", `reduce` is still quite foregin and really seems to require the spread operator to be even remotely useful and not become as verbose as a for loop. Realised I have a lot to learn about XRH and CORS when attempting to `fetch` data from wikipedia.

## Day 5 - Flex Panel Gallery
[Flex Panel Gallery](https://tristanmarsh.github.io/JavaScript-30-challenge/5-flex-panel-gallery/)
This is my jam! The JS was very basic class togglers (with the newly learnt `transitionend` event). But it's high impact thanks to Flexbox, thoughtful and queued transitions, and my new favourite API...  source.unsplash.com. This isn't very useful but it's beautiful.

## Day 6 - AJAX Type Ahead
[AJAX Type Ahead](https://tristanmarsh.github.io/JavaScript-30-challenge/6-type-ahead/)
Pretty neat demo project. This answered some of my questions about the fetch API that I attempted to add to (Day 4 - Array Cardio 1)[https://tristanmarsh.github.io/JavaScript-30-challenge/4-array-cardio-1/; need to interpret the blob objects stream according to it's file type. I attempted to structure the functionality with a clearer seperation of concerns and to optimise for readability/maintenance/extensibility. I wrote functions instead of using copy pasted regex, and added localStorage caching of the cities data API.

## Day 7 - Array Cardio 2
[Array Cardio 2](https://tristanmarsh.github.io/JavaScript-30-challenge/7-array-cardio-2/)
Super quick demo to express helpful predicates with array methods `some`, and `every`. Also was not aware of the handy lambda based `findIndex` method.

## Day 8 - HTML5 Canvas
[HTML5 Canvas](https://tristanmarsh.github.io/JavaScript-30-challenge/8-html5-canvas/)
Cool demo to learn a little about the canvas object. 👨‍🎨 I can't imagine myself investing the time required to get into the docs and become proficient anytime too soon as the pragmatic applications seem limited. Would certainly learn a library if future projects required such functionality.

## Day 9 - Dev Tool Domination
[Dev Tool Domination](https://tristanmarsh.github.io/JavaScript-30-challenge/9-dev-tool-domination/)
Learnt of the `assert`, `dir`, `dirxml`, `group`, `count`, `clear` console methods and their variations. Not likely to start using much of them anytime too soon as I'm in the habit of stipping out console output before comitting or deploying to production.

## Day 10 - Hold Shift Check Boxes
[Hold Shift Check Boxes](https://tristanmarsh.github.io/JavaScript-30-challenge/10-hold-shift-check-boxes/)
Watched the first 2 minutes of the video to get the idea and went and implemented. Not perfect but will finish video later tonight. Realised you can of course use querySelector on any DOM node, not just the document.

## Day 11 - Custom Video Player
[Custom Video Player](https://tristanmarsh.github.io/JavaScript-30-challenge/11-custom-video-player/)
Similar event handling and internal state management to the [Day 8 - HTML5 Canvas](https://tristanmarsh.github.io/JavaScript-30-challenge/8-html5-canvas/) demo. Interesting learning the method and properties of a video object. 👍


## Day 12 - Key Sequence Detection
[Key Sequence Detection](https://tristanmarsh.github.io/JavaScript-30-challenge/12-key-sequence-detection/)
So pretty

## Day 13 - Slide In On Scroll
[Slide In On Scroll](https://tristanmarsh.github.io/JavaScript-30-challenge/13-slide-in-on-scroll/)
Nothing new here for me. I'm familiar with implementing this with [ScrollMagic](https://github.com/janpaepke/ScrollMagic) and know how error prone this kind of effect can be. Definitely use a library.

## Day 14 - JavaScript Reference vs Copy
[JavaScript Reference vs Copy](https://tristanmarsh.github.io/JavaScript-30-challenge/14-javascript-reference-vs-copy/)
Learnt about the less recommended technique of cloning an array with the Array.slice() method. First time ever using the `Array.from()` (presumably iterable) method. Learnt that the object spread method I've being using in JSX is now standardised in JavaScript.

## Day 15 - Reminders List Local Storage
[Reminders List Local Storage](https://tristanmarsh.github.io/JavaScript-30-challenge/15-reminders-list-local-storage/)
GOOD TIMES! 🌮 Nothing new, got to use the <element>.dataset attribute, added a strikethrough and as always, an unsplash randomised landscape background. Entire form clearable too.

## Day 16 - Mouse Move Shadow
[Mouse Move Shadow](https://tristanmarsh.github.io/JavaScript-30-challenge/16-mouse-move-shadow/)
Good opportunity to learn about the quirks of tracking mouse location over the client vs relative to the triggered element. Added some transform 3D effects which were fun, but there's nothing pretty about the math involved.

## Day 17 - Sorting Band Names Without Articles
[Sorting Band Names Without Articles](https://tristanmarsh.github.io/JavaScript-30-challenge/17-sort-without-articles/)
Once again I opted for a non regex, slightly longer solution using map, reduce and sort. Fairly straight forward solution and nothing new in regards to this 30 day challenge, but still a good exercise of bringing a few concepts together.

## Day 18 - Adding Up Times With Reduce
[Adding Up Times With Reduce](https://tristanmarsh.github.io/JavaScript-30-challenge/18-adding-up-times-with-reduce/)
Reduce is nice. Time is okay. This was acceptable.

## Day 19 - Unreal Webcam Fun
[Unreal Webcam Fun](https://tristanmarsh.github.io/JavaScript-30-challenge/19-unreal-webcam-fun/)
That was intense. Must be highly inefficient way to process massive amounts of data - as in raw pixels. I suppose is why GPU's need to run in parallel. Super handy learning how to request access to the webcam, being able to generate photos in the browser and have a user download them.

## Day 20 - Speech Detection
[Speech Detection](https://tristanmarsh.github.io/JavaScript-30-challenge/20-speech-detection/)
VERY COOL! 👏 Could be fun for some experiments, or browser games, but speech recognition is always flaky, so I can't see this in any serious projects anytime soon. Also privacy concerns are a thing.

## Day 21 - Geolocation
[Geolocation](https://tristanmarsh.github.io/JavaScript-30-challenge/21-geolocation/)
Nice, handy to know it's so simple to request location data and have updates triggered on the device. Added a lat/long and Google maps link for testing.

## Day 22 - Follow Along Link Highlighter
[Follow Along Link Highlighter](https://tristanmarsh.github.io/JavaScript-30-challenge/22-follow-along-link-highlighter/)
Neat little demo of how to create a morphing menu or object, shows how simple it can be at it's most basic implementation. Learnt about the `getBoundingClientRect` function.

## Day 23 - Speech Synthesis
[Speech Synthesis](https://tristanmarsh.github.io/JavaScript-30-challenge/23-speech-synthesis/)
Handy to know, the only way I've seen this used is for April Fools pranks, but of course the application for accessibility is a potential. Still not sure about the benefits or overall user experience in adding speech to a website or app...

## Day 24 - Sticky Nav
[Sticky Nav](https://tristanmarsh.github.io/JavaScript-30-challenge/24-sticky-nav/)
Common effect, so often broken - especially on mobile devices with dynamic window heights. Vanilla implementation is much nicer than something like ScrollMagic for basic use cases that don't require serious animation tweening.

## Day 25 - Event Capture Propagation, Bubbling and Once
[Event Capture Propagation, Bubbling and Once](https://tristanmarsh.github.io/JavaScript-30-challenge/25-event-capture-propagation-bubbling-and-once/)
Nice to learn of the config object with `capture` and `once` props underneath the jQuery equivalents. <MouseEvent>.`stopPropagation()` is handy to know too, I suppose - although I would feel pretty hacky actually having to use it.

## Day 26 - Stripe Follow Along Nav
[Stripe Follow Along Nav](https://tristanmarsh.github.io/JavaScript-30-challenge/26-stripe-follow-along-nav/)
Nice effect and revisiting of the `transitionend` event to queue up class and transitions toggles. Would want to make it much more robust and prevent content from overflowing the container. But this was specifically designed to work with uncontrolled html perhaps being generated by a CMS.

## Day 27 - Click and Drag
[Click and Drag](https://tristanmarsh.github.io/JavaScript-30-challenge/27-click-and-drag/)

## Day 28 - Video Speed Controller
[Video Speed Controller](https://tristanmarsh.github.io/JavaScript-30-challenge/28-video-speed-controller/)

## Day 29 - Countdown Timer
[Countdown Timer](https://tristanmarsh.github.io/JavaScript-30-challenge/29-countdown-timer/)
Good point about the unreliability of the `setInterval` or `setTimeout` methods, storing timestamps and doing comparisons when allowed to is a nice solution. Also the document.`{form name value}`.`{input name value}` is a nice shortcut to using querySelectors.

## Day 30 - Whack A Mole
[Whack A Mole](https://tristanmarsh.github.io/JavaScript-30-challenge/30-whack-a-mole/)
