document.addEventListener("DOMContentLoaded", function () {
    const buttonProjects = document.getElementById("button-projects");
    const buttonGithub = document.getElementById("button-github");
    buttonProjects.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission
      
        // Get the URL you want to navigate to
        var url = 'projects.html'; // Replace with your desired URL
      
        // Navigate to the URL
        window.location.href = url;

    
      });

      buttonGithub.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission
      
        // Get the URL you want to navigate to
        var url = 'https://github.com/ethanhinkle'; // Replace with your desired URL
      
        // Navigate to the URL
        window.location.href = url;

    
      });
});


  