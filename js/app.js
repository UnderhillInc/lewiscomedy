/*
==========================================
HOME PAGE INITIALISATION

Maintenance:

Update content through config.js

No HTML changes required.

==========================================
*/

document.getElementById("siteTitle").textContent =
    CONFIG.siteTitle;

document.getElementById("tagline").textContent =
    CONFIG.tagline;

/*
==========================================
FEATURED VIDEO

Replace youtubeId in config.js

==========================================
*/

document.getElementById("featuredVideo").innerHTML = `

<iframe
width="100%"
height="600"
src="https://www.youtube.com/embed/${CONFIG.featuredVideo.youtubeId}"
title="Featured Video"
allowfullscreen>
</iframe>

`;

/*
==========================================
SOCIAL LINKS

Update URLs in config.js

==========================================
*/

document.getElementById("socialLinks").innerHTML = `

<a class="btn" href="${CONFIG.socials.youtube}">
YouTube
</a>

<a class="btn" href="${CONFIG.socials.instagram}">
Instagram
</a>

<a class="btn" href="${CONFIG.socials.tiktok}">
TikTok
</a>

<a class="btn" href="${CONFIG.socials.x}">
X
</a>

`;