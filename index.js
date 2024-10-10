document.getElementById('nameButton').addEventListener('click', function(){
    const name = prompt("Enter your name:");
    document.getElementById('nameDisplay').textContent = 'Hello ' + name + '!';
});

document.getElementById('profileImage').addEventListener('click', function(){
    this.classList.toggle('enlarge');
});
