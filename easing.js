function Linear(frame, start, duration, startpos, amount) {
    /**
     * @name Linear
     * @author HJfod
     * @param frame The current frame
     * @param start The frame to begin the animation on
     * @param duration The length of the animation
     * @param startpos The initial position
     * @param amount The amount to add on the initial position
     */
    return frame <= start ? startpos : frame < start + duration ? ((frame-start) / duration) * amount + startpos : amount + startpos;
}

function Sine(frame, start, duration, startpos, amount) {
    /**
     * @name Sine
     * @author HJfod
     * @param frame The current frame
     * @param start The frame to begin the animation on
     * @param duration The length of the animation
     * @param startpos The initial position
     * @param amount The amount to add on the initial position
     */
    return frame <= start ? startpos : frame < start + duration ? (Math.cos((Math.PI/duration) * (frame - start - duration)) * (amount / 2) + startpos + amount / 2) : amount + startpos;
}

function ExponentalIn(frame, start, duration, startpos, amount) {
    /**
     * @name ExponentalIn
     * @author HJfod
     * @param frame The current frame
     * @param start The frame to begin the animation on
     * @param duration The length of the animation
     * @param startpos The initial position
     * @param amount The amount to add on the initial position
     */
    return frame <= start ? startpos : frame < start + duration ? ( amount * Math.pow((frame - start), 2) / Math.pow(duration, 2) ) + startpos : amount + startpos;
}

function ExponentalOut(frame, start, duration, startpos, amount) {
    /**
     * @name ExponentalOut
     * @author HJfod
     * @param frame The current frame
     * @param start The frame to begin the animation on
     * @param duration The length of the animation
     * @param startpos The initial position
     * @param amount The amount to add on the initial position
     */
    return frame <= start ? startpos : frame < start + duration ? ( (amount * -Math.pow(-frame + start + duration, 2)) / Math.pow(duration, 2) ) + startpos + amount : amount + startpos;
}

function Exponental(frame, start, duration, startpos, amount, factor) {
    /**
     * @name Exponental
     * @author HJfod
     * @param frame The current frame
     * @param start The frame to begin the animation on
     * @param duration The length of the animation
     * @param startpos The initial position
     * @param amount The amount to add on the initial position
     * @param factor The steepness of the curve (must be an odd number!!)
     */
    return frame <= start ? startpos : frame > start && frame < start + duration / 2 ? Math.pow(( (frame - start) / (duration / 2) ), factor) * amount / 2 + startpos : frame >= start + duration / 2 && frame < start + duration ? Math.pow(( (frame - start - duration) / (duration / 2) ), factor) * amount / 2 + startpos + amount : startpos + amount;
}

try {
    module.exports = {
        Linear,
        Sine
    }
} catch(e) {}