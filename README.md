Basic easing functions for JS.

Meant for creating smooth movement in animations.

### Features:
 * Linear
 * Sine
 * Exponental In
 * Exponental Out
 * Exponental

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
 * `factor`: Controls the intensity of the curve (only for `Exponental`, `ExponentalIn`, `ExponentalOut`)

### Example:

Open up `example.html` to view live examples.

### Function equations:

![Linear](https://cdn.discordapp.com/attachments/660797754271989760/745915695316861010/unknown.png)
![Sine](https://cdn.discordapp.com/attachments/660797754271989760/745915741944938496/unknown.png)
![ExponentalIn](https://cdn.discordapp.com/attachments/660797754271989760/745915783342981227/unknown.png)
![ExponentalOut](https://cdn.discordapp.com/attachments/660797754271989760/745915865354076160/unknown.png)
![Exponental](https://cdn.discordapp.com/attachments/660797754271989760/745915914142220288/unknown.png)