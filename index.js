const btn = document.getElementById('btn');
const activity = document.getElementById('activity');
const p = document.getElementById('p');


btn.addEventListener("click", function(){
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => activity.textContent = data.activity)
})
