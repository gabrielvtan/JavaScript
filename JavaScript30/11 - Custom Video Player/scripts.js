/* Get Our Elements */
const player = document.querySelector('.player');
/* we use player.querySelector in this instance because the following
variables fall under the div container of player. i.e. buttons within 
the actual video player */
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


/* Build out functions */
/* function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause()
    }
}*/
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

/* function updates the button from start to pause whenever the screen is clicked
'this' takes on the the variable 'video' since we hooked it up in 'addEventListener'
for toggle - this way we don't have to build the function within togglePlay*/
function updateButton() {
    const icon = this.paused? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
}

/* skip function - in the html file we use data-skip to define the amount of seconds
passed whenever the skip function is invoked
our skip function applies to the button 'data-skip' attribute
we can access the value of the button by using 'this.dataset.skip'
since it comes out as a string, we need to parse it out as a float in order to
set the time of the video. */
function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

/* range update function - this function will handle the adjustment of both 
the volume and playbackRate ranges */
function handleRangeUpdate(){
    console.log(this.name);
    console.log(this.value);
    video[this.name] = this.value;
}

/* handle time progress function - we will be adjusting the flex-basis attribute
of the time progress bar. currentTime and duration are just properties on the video.
We need to change the flex-basis based on the change of the progess bar*/
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

/* scrub function - this will allow us to change the progress of the video.
we will be using the offsetX style of the bar to get the exact location when 
it is clicked then we divide it by the total length of the bar to get a percentage
which is then multiplied by the video duration to get the currentTime*/
function scrub(e) {
    console.log(e);
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}


/* Hook up the event listeners */
//this toggles the video to play whenever the video div is clicked
video.addEventListener('click', togglePlay);
// event listeners for changing the play to stop icon
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
// wait for video to emit a time update which then runs the handle progress function
video.addEventListener('timeupdate', handleProgress);



// this toggles from play to pause when the screen or button are clicked 
toggle.addEventListener('click', togglePlay);
// class "player button" , button data-skip
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

// Event listeners for scrub
let mousedown = false;
progress.addEventListener('click', scrub);
//Create event listeners for scrolling in addition to clicking on the mouse for the progress bar
/* this event listener means that if the mousedown is true and scrub has been envoked
then you will change the progress bar based on the location of the mouse click*/
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);