/*
==========================================
VIDEO PAGE

Add videos to VIDEOS array.

No HTML changes required.

==========================================
*/

const container =
    document.getElementById("videoContainer");

let html = `<div class="video-grid">`;

VIDEOS.forEach(video => {

    html += `

    <div class="video-card">

        <h3>${video.title}</h3>

        <iframe
        src="https://www.youtube.com/watch?v=7a7sZFl7Gdg&list=PLjZ5fn-714bd6gr04plb3fASrYHgXMqAl${video.youtubeId}"
        allowfullscreen>
        </iframe>

    </div>

    `;

});

html += `</div>`;

container.innerHTML = html;