$('body').scrollspy({ target: '#navbar' })

// jQuery methods go here...
$(document).ready(function () {  
    // Declare CSS Variables ////////////////////////////
    $portfolioSection = $('#portfolio');
    
    // Declare JS Variables /////////////////////////////
    var traede = ["branding", "graphic", "prototype"];
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
    
    function addJobBadge(project) {
        var $badgeContainer = $('<div class="badge-container">');       
        $portfolioSection.append($badgeContainer);        
        for (i = 0; i < project.job.length; i++) {            
            $jobBadge = $('<span>');
            $jobBadge
            .appendTo($badgeContainer)
            .append(project.job[i])
            .addClass('badge badge-' + project.job[i]);
        }
    }
    
    for (i = 0; i < myProjects.length; i++) {
        addJobBadge(myProjects[i]);
    }
});