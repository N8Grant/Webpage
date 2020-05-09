window.addEventListener('scroll', function() {
    var value = window.scrollY;
    var image_top = document.getElementById("intro-fade");
    //console.log(value + 'px');
    image_top.style.bottom = value *.5 + 'px';
    image_top.style.opacity = (350-value)/350;
    var logos_top = document.getElementById("logo-fade");
    logos_top.style.opacity = (100-value)/100;
    logos_top.style.top = value *.5 + 'px';
    //console.log(image.style.top);
    //image.style.opacity = imageOpacity.toString();
});

window.addEventListener('scroll', function() {
    var value = window.scrollY;
    var about_back = document.getElementById("about");
    if (value < 730) {
        about_back.style.opacity = (value)/730;
    } else {
        about_back.style.opacity = (2200-value)/730;
    }
    var about_title = document.getElementById('about-title');
    about_title.style.opacity = (value)/730;
    
    //var logos_top = document.getElementById("logo-fade");
    //logos_top.style.opacity = (100-value)/100;
    //logos_top.style.top = value *.5 + 'px';
    //console.log(image.style.top);
    //image.style.opacity = imageOpacity.toString();
});

window.addEventListener('scroll', function() {
    var value = window.scrollY;
    var project_back = document.getElementById("projects");
    if (value < 3000) {
        project_back.style.opacity = (value)/2400;
    } 

    if (value <2080) {
        var pac_text = document.getElementById('pac-text');
        pac_text.style.right = (2040-value) *.1 + '%';
        //pac_text.style.opacity = (value)/2400;
        var pac_img = document.getElementById('pac-img');
        pac_img.style.left = (2040-value) *.1 + '%';
    } 
    if (value < 2500) {
        var pac_text = document.getElementById('covid-text');
        pac_text.style.left = (2430-value) *.1 + '%';
        
        pac_text.style.opacity = (value-2050)/200;
        var pac_img = document.getElementById('covid-vid');
        pac_img.style.right = (2430-value) *.1 + '%';
        pac_img.style.opacity = (value-2050)/200;
    }
    if (value < 2650) {
        console.log((value-2450)/200);
        var pac_text = document.getElementById('cancer-text');
        pac_text.style.right = (2550-value) *.1 + '%';
        pac_text.style.opacity = (value-2450)/200;
        var pac_img = document.getElementById('cancer-img');
        pac_img.style.left = (2750-value) *.1 + '%';
        pac_img.style.opacity = (value-2450)/200;
    }

    //var about_title = document.getElementById('about-title');
    //about_title.style.opacity = (value)/730;
    
});
