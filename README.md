Basic easing functions for JS.

Meant for creating smooth movement in animations.

### Features:
 * Linear
 * Sine
 * Exponental In
 * Exponental Out

### Usage:

```js
<script src="easing.js"></script>
```

```js
const Easing = require("./easing.js");
```

### Arguments:

```js
Linear(currentFrame, startFrame, duration, startPosition, amount);
```

 * `currentFrame`: The current frame of the animation.
 * `startFrame`: The frame to start movement.
 * `duration`: The length of the animation.
 * `startPosition`: The initial position of the animated object.
 * `amount`: The amount of movement.

### Example:

Open up `example.html` to view live examples.