import { getTitle, getDescription } from './splash/splash'; // code authored by you in this project

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('title').innerHTML = getTitle();
    document.getElementById('description').innerHTML = getDescription();
});
