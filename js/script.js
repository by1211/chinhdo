$('body').scrollspy({ target: '#navbar' })

// jQuery methods go here...
$(document).ready(function () {  
    // Declare CSS Variables ////////////////////////////
    $portfolioSection = $('#portfolio');
    
    // Declare JS Variables /////////////////////////////
    var myProjects = [
        {
            name: "traede",
            job: ["branding", "graphic", "prototype"]
        },
        {
            name: "skytr33",
            job: ["branding", "graphic", "webdesign"]
        }
    ]
    
    // HTML output ///////////////////////////////////// 
    // Look through each project in myProjects array and create individual job badges
    for (i = 0; i < myProjects.length; i++) {       
        var $badgeContainer = $('<div class="badge-container">');        
        $('#' + myProjects[i].name).append($badgeContainer);
        for (j = 0; j < myProjects[i].job.length; j++) {
            var $jobBadge = $('<span>');
            $jobBadge
            .appendTo($badgeContainer)
            .append(myProjects[i].job[j])
            .addClass('badge badge-' + myProjects[i].job[j]);
        }        
    }
    
});