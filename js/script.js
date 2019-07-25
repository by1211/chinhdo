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
            palette: ["#1f2640", "#2d3b60", "#f57921"]
        }
        // {
        //     name: "Skytr33",
        //     job: ["branding", "webdesign"]
        // },
        // {
        //     name: "FoodGiving",
        //     job: ["branding", "webdesign", "prototype"]
        // },
        // {
        //     name: "WanderSpace",
        //     job: ["branding"]
        // },
        // {
        //     name: "MechanicSMS",
        //     job: ["branding", "prototype", "illustration"]
        // }
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
    
    var mediaList = ["bcard", "cover", "eventbrite", "mockup", "tshirt"];
    
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
        
        // Create badge(s)
        for (j = 0; j < myProjects[i].job.length; j++) {
            $jobBadge = $('<mark>')
            .append(myProjects[i].job[j])
            .addClass('chip chip-' + myProjects[i].job[j])
            .appendTo($('#' + myProjects[i].name).children('.chip-container'));
        }
        
        // Add comapny's profile text AFTER badges are generated
        $('#' + myProjects[i].name).children('.chip-container').append('<p class="text-flow">' + myProjects[i].about + '</p>');
        
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
            // Hide image bound if not found
            $("img").on("error", function () {
                $(this).hide();
            });            
        }
        
        // Create palette
        $palette = $('<div class="palette">').insertAfter($('#palette'));
        for (j = 0; j < myProjects[i].palette.length; j++) {
            $colorBlock = $('<div class="color-block">')
            .css('background', myProjects[i].palette[j])
            .appendTo($palette);
        }
        
        // Create logo mark
        $markContainer = $('<div class="mark-container">').insertAfter($('#logomark'));
        for (j = 0; j < 4; j++) {
            $logoMark = $('<img>')
            .attr( 'src', function () {
                switch (j) {
                    case 0:
                    return 'images/' + myProjects[i].name + '/logomark-n.png';
                    case 1:
                    return 'images/' + myProjects[i].name + '/logomark-i.png';
                    case 2:
                    return 'images/' + myProjects[i].name + '/logomark-bw.png';
                };          
            });
            $markBg = $('<div>')
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
    }    
    
    // Materialize JS components
    $('.scrollspy').scrollSpy();
    $('.materialboxed').materialbox({
        onOpenStart() {
            // return console.log("done");
        }
    });
    $('.slider').slider();
    $('.collapsible').collapsible();
});