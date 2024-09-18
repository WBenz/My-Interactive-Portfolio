document.addEventListener("DOMContentLoaded", function() { 
    const progressBar = document.getElementById("progress-bar"); 
    const content = document.getElementById("content"); 


if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
				//do your stuff here
				window.open('mobile/index.html', '_self');
			} else {
				window.open('start_menu.html', '_self');
			}
 
    // Simulate loading progress 
    let width = 0; 
    const loadingInterval = setInterval(function() { 
        if (width >= 100) { 
            clearInterval(loadingInterval); 
            progressBar.style.width = '100%'; 
            // Show content after loading 
            setTimeout(() => { 
                progressBar.style.display = 'none'; 
                content.style.display = 'block'; 
            }, 200); 
        } else { 
            width++; 
            progressBar.style.width = width + '%'; 
        } 
    }, 20); // Adjust the interval speed as needed 
}); 