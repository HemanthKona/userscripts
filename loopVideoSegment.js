/* loopVideoSegment.js
 *
 *  Get first video element on the page and loop from given start to end time
 *
 * @param start: integer (seconds)
 * @param end: integer (seconds)
 *
 */
var startTime = 0; // (seconds) start time offset
var endTime = 240; // (seconds) end time to restart from startTime

var loopVideoSegment = function (start, end) {
    var video = document.getElementsByTagName("video")[0];

    video.addEventListener("timeupdate", function() {
        if (video.currentTime <= start || video.currentTime >= end) {
            video.currentTime = start;
        }
    }, false);
}

loopVideoSegment(startTime, endTime);
