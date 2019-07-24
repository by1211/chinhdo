// jQuery methods go here...
$(document).ready(function () {  
    // Declare CSS Variables ////////////////////////////
    
    $portfolioSection = $('#portfolio');
    
    // Declare JS Variables /////////////////////////////
    
    var myProjects = [
        {
            name: "Traede",
            job: ["branding", "graphic", "prototype"]
        },
        {
            name: "Skytr33",
            job: ["branding", "graphic", "webdesign"]
        },
        {
            name: "FoodGiving",
            job: ["branding", "webdesign", "prototype"]
        },
        {
            name: "WanderSpace",
            job: ["branding"]
        },
        {
            name: "MechanicSMS",
            job: ["branding", "prototype", "illustration"]
        }
    ]
    
    var otherProjects = [
        {
            name: "HeliLabs",
            job: ["logo"]
        },
        {
            name: "NeonSkies",
            job: ["logo"]
        },
        {
            name: "Rush",
            job: ["logo"]
        },
        {
            name: "Dr.Egg Adventure",
            job: ["illustration"]
        },
        {
            name: "BlanketNinja",
            job: ["prototype"]
        }
    ]
    
    // HTML output ///////////////////////////////////// 
    
    // Materialize JS components
    $('.scrollspy').scrollSpy();
    $('.materialboxed').materialbox();
    
    // Look through each project in myProjects array and create individual job badges
    for (i = 0; i < myProjects.length; i++) {   
        // Create banner
        $projectBanner = $('<img>')
        .attr({
            alt: myProjects[i].name + "'s Logo Background",
            src: 'images/backgrounds/' + myProjects[i].name + '.jpg',
        });
        $projectLogo = $('<img>')
        .attr({
            alt: myProjects[i].name + "'s Logo",
            class: 'p-logo',
            src: 'images/logos/' + myProjects[i].name + '.png',
        });       
        $('#' + myProjects[i].name)
        .children('.p-banner') 
        .append($projectLogo)   
        .append($projectBanner); 
        
        for (j = 0; j < myProjects[i].job.length; j++) {
            // Create badge
            $jobBadge = $('<div>')
            .append(myProjects[i].job[j])
            .addClass('chip chip-' + myProjects[i].job[j]);
            // Add contents to its container
            $('#' + myProjects[i].name)
            .children('.chip-container')
            .append($jobBadge);
        }        
    }
    
});