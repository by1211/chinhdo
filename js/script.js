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
            tool: ["adobe-illustrator", "blender-3d"]
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
    
    var mediaList = ["namecard", "cover", "eventbrite", "mockup", "tshirt", "screenshot", "slogan"];
    
    // HTML output ///////////////////////////////////// 
    
    // Look through each project in myProjects array and create individual job badges
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
        // Hide image bound if not found
        $("img").on("error", function () {
            $(this).parent('.material-placeholder').parent('.thumbnail').remove();
            $(this).parent('.mark-bg').remove();
        });   
        
        // Create list of tools
        $tool = $('<div class="tool">').insertAfter($('#' + myProjects[i].name + ' #tool'));
        for (j = 0; j < myProjects[i].tool.length; j++) {
            $colorBlock = $('<img>')
                .attr('src', 'images/tool-icons/icons8-' + myProjects[i].tool[j] + '-48.png')
            .appendTo($('#' + myProjects[i].name).find('.tool'));
        }
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