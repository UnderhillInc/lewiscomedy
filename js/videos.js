/*
====================================================

VIDEOS PAGE

Add entries to VIDEOS array.

The page updates automatically.

====================================================
*/

const container =
document.getElementById("videoContainer");

let html =
`<div class="video-grid">`;

VIDEOS.forEach(video => {

html += `

<div class="video-card">

<h3>${video.title}</h3>

<iframe
src="https://www.youtube.com/embed/${video.youtubeId}"
allowfullscreen>
</iframe>

</div>

`;

});

html += "</div>";

container.innerHTML = html;