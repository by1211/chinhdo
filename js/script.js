// jQuery methods go here...
$(document).ready(function () {  
    // Declare CSS Variables ////////////////////////////
    
    $portfolioSection = $('#portfolio');
    
    // Declare JS Variables /////////////////////////////
    
    var myProjects = [
        {
            name: "Traede",
            job: ["branding", "graphic", "prototype"],
            about: "Træde is a financial blockchain trading platform for real and virtual assets transaction",
            palette: ["#1f2640", "#2d3b60", "#f57921"],
            tool: ["adobe-photoshop", "adobe-illustrator", "adobe-indesign"]
        },
        {
            name: "Skytr33",
            job: ["branding", "webdesign"],
            about: "Previously known as 'Quantum Mechanics', SkyTr33 had completely rebranded itself in hope of capturing world-wide attention of future virtual reality and augmented reality consumers",
            palette: ["black", "white", "#d0f2fb"],
            tool: ["adobe-illustrator", "adobe-indesign", "html-5", "css3"]
        },
        {
            name: "FoodGiving",
            job: ["branding", "webdesign", "prototype"],
            about: "Food Giving is a P2P web application aiming to reduce food waste by connecting people who want to give food away with those who need them.",
            palette: ["#E60073", "#00E676", "#2A2C33"],
            tool: ["adobe-illustrator", "html-5", "css3", "javascript"]
        },
        {
            name: "WanderSpace",
            job: ["branding"],
            about: "Embark on an immersive, simulated journey through the solar system with Alexa, a virtual assistant. Play fetch with the space puppy Enzo, and discover gravitational differences between planet",
            palette: ["#4ad9d9", "#5e646c", "#f22430", "#ffcb05"],
            tool: ["adobe-photoshop", "adobe-illustrator", "blender-3d"]
        }
    ]
    
    var smallProjects = [
        {
            name: "Neon Skies",
            job: ["logo"],
            tool: ["adobe-photoshop"],
            link: ["https://youtu.be/O2VjoI1QUrg", "Youube"]
        },
        {
            name: "Rush",
            job: ["logo"],
            tool: ["adobe-illustrator"],
            link: []
        },
        {
            name: "DrEgg Adventure",
            job: ["illustration"],
            tool: ["adobe-photoshop"],
            link: ["https://www.dreggadventures.com/", "Visit Website"]
        },
        {
            name: "Blanket Ninja",
            job: ["webdesign"],
            tool: ["adobe-photoshop", "html-5", "css3", "javascript"],
            link: ["https://doinby.github.io/BlanketNinja/", "View Demo"]
        }
    ]
    
    var mediaList = ["namecard", "cover", "eventbrite", "mockup", "render", "screenshot", "sketch", "slogan", "tshirt"];
    
    // HTML output ///////////////////////////////////// 
    
    // Generate content for #portfolio
    for (i = 0; i < myProjects.length; i++) {
        // Create banner
        $projectBanner = $('#' + myProjects[i].name).find('.materialboxed')
        .attr({
            alt: myProjects[i].name + "'s Logo",
            'data-caption': myProjects[i].name + "'s Logo",
            src: 'images/' + myProjects[i].name + '/banner.jpg',
        });
        
        // Alternate ripple effect's color
        $('#' + myProjects[i].name).children('.collapsible-header').addClass(function() {
            if (i % 2 === 0) {
                return 'waves-effect waves-pink';
            } else return 'waves-effect waves-blue'
        });
        // Create badge(s)
        for (j = 0; j < myProjects[i].job.length; j++) {
            $jobBadge = $('<mark>')
            .append('<div id="circle" class="chip-' + myProjects[i].job[j] + '"></div>')
            .append(myProjects[i].job[j])
            .addClass('chip')
            .appendTo($('#' + myProjects[i].name).find('.chip-container'));
        }
        $companyProfile = $('<p class="text-flow">')
        .text(myProjects[i].about)
        .insertAfter($('#' + myProjects[i].name).find('.chip-container'))
        .append('<a class="expand-button btn-flat btn-small">view more</a>');
        
        
        // Create image album
        for (j = 0; j < mediaList.length; j++) { 
            // Initiate all images
            $image = $('<img>')
            .attr({
                'data-caption': mediaList[j],
                class: 'materialboxed',
                src: 'images/' + myProjects[i].name + '/' + mediaList[j] + '.jpg',
            });
            // Add all images to thumbnail container
            $thumbnail = $('<li class="thumbnail">')
            .appendTo($projectBanner = $('#' + myProjects[i].name).find('.collection'))
            .append($image);         
        }
        
        // Create palette
        $palette = $('<div class="palette">').insertAfter($('#' + myProjects[i].name + ' #palette'));
        for (j = 0; j < myProjects[i].palette.length; j++) {
            $colorBlock = $('<div class="color-block">')
            .css('background', myProjects[i].palette[j])
            .appendTo($('#' + myProjects[i].name).find('.palette'));
        }
        
        // Create logo mark
        $markContainer = $('<div class="mark-container">').insertAfter($('#' + myProjects[i].name + ' #logomark'));
        for (j = 0; j < 4; j++) {
            $logoMark = $('<img>')
            .attr( 'src', function () {
                switch (j) {
                    default:
                    return 'images/' + myProjects[i].name + '/logomark-s.png';
                    case 0:
                    return 'images/' + myProjects[i].name + '/logomark-n.png';
                    case 1:
                    return 'images/' + myProjects[i].name + '/logomark-i.png';
                    case 2:
                    return 'images/' + myProjects[i].name + '/logomark-bw.png';
                };          
            });
            $markBg = $('<div class="mark-bg">')
            .appendTo($markContainer)
            .append($logoMark)
            .css('background', function() {
                switch (j) {
                    case 1:
                    return 'black';
                    default: 
                    return 'white';
                };
            })
        }
        
        // Create list of tools
        $tool = $('<div class="tool">').insertAfter($('#' + myProjects[i].name + ' #tool'));
        for (j = 0; j < myProjects[i].tool.length; j++) {
            $colorBlock = $('<img>')
            .attr('src', 'images/tool-icons/icons8-' + myProjects[i].tool[j] + '-48.png')
            .appendTo($('#' + myProjects[i].name).find('.tool'));
        }
        
        killEmptyParent();
    }    
    
    // Generate content for #small-projects
    for (i = 0; i < smallProjects.length; i++) {
        currentProjectName = smallProjects[i].name.replace(/\s/g, '');
        $('<div class="card">')
        .attr('id', currentProjectName)
        .append('<div class="card-image">')
        .append('<span class="card-title">' + smallProjects[i].name + '</div>')
        .append('<div class="card-content">')
        .appendTo($('#small-project'));
        
        // Add badge(s)
        for (j = 0; j < smallProjects[i].job.length; j++) {
            $('#' + currentProjectName + ' .card-content')
            .append('<mark class="chip"><div id="circle" class="chip-' + smallProjects[i].job[j] + '"></div>' + smallProjects[i].job[j] +'</mark>');
        }
        
        // Add tool used
        for (j = 0; j < smallProjects[i].tool.length; j++) {
            $('#' + currentProjectName)
            .append('<img src="images/tool-icons/icons8-' + smallProjects[i].tool[j] + '-48.png">');
        }
        // Add link url to project
        $('#' + currentProjectName).append('<div class="card-action"><a class="waves-effect waves-light btn btn-flat" href="' + smallProjects[i].link[0] + 'target="_blank"">' + smallProjects[i].link[1]);
        
        // Add image
        $('#' + currentProjectName).find('.card-image').append('<img src="images/misc/' + currentProjectName + '.png">');
        
        switch (currentProjectName) {
            case "DrEggAdventure":
            // Correct the title
            $('#' + currentProjectName + ' .card-title').text('Dr.Egg Adventure');
            $('#' + currentProjectName)
            .find('.card-image img')
            .addClass('materialboxed')
            .attr('src', 'images/misc/DrEggAdventure.jpg')
            .attr('data-caption', 'Easter Egg poster');
            break;      
            
            case "Rush":
            $('#' + currentProjectName).find('.card-action').remove();
            break;     
            case "BlanketNinja":
                $('#' + currentProjectName).find('.card-image').addClass('materialboxed');
            break; 
        }
        killEmptyParent();
    }
    
    function killEmptyParent() {
        // Hide image bound if not found
        $("img").on("error", function () {
            $(this).parent('.material-placeholder').parent('.thumbnail').remove();
            $(this).parent().remove();
        });   
    }

    // Spawn pug array
    for (i = 0; i < 6; i++) {
        $('.pug-array')
        .append('<img class="pug" src="images/cdPug-rgbPrimary.svg" alt="">');
        
    }
    
    // Materialize JS components
    $('.sidenav').sidenav({
        'edge': 'right'
    });
    $('.materialboxed').materialbox({
        onOpenStart() {
            // return console.log("done");
        }
    });
    $('.slider').slider();
    $('.collapsible').collapsible();
    $('.dropdown-trigger').dropdown();
});