const toggleButton = document.querySelector(".toggle-btn");

toggleButton.addEventListener('click',()=>{
    document.getElementById("navbar-div").classList.toggle('active');
})
