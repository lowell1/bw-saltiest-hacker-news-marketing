console.clear();

let mouse_event_counter = 0;
let current_trail_images_index = 0;
let trail_images = document.getElementsByClassName("salt-trail");
// let mouse_has_moved = false;

trail_images[0].style.visibility = "visible";

document.addEventListener("mousemove", function(event) {
    if(mouse_event_counter == 25) {
        // if(!mouse_has_moved)
        //     for(let i = 0; i < trail_images.length; i++) {
        //         trail_images[i].style.visibility = "visible";
        //         mouse_has_moved = true;
        //     }

        mouse_event_counter = 1;

        trail_images[current_trail_images_index].style.left = event.clientX - 5 + "px";
        trail_images[current_trail_images_index].style.top = event.clientY - 5 + "px";

        // trail_images[current_trail_images_index].style.visibility = "visible";

        if(current_trail_images_index == (trail_images.length - 1))
            current_trail_images_index = 0;
        else
            current_trail_images_index++;
    } else
        mouse_event_counter++;
});

// function CreateTrail() {
//     var count = 0;

//     console.log("elsj");
//     // return function() {
//     //     // if(count++ == 4) {
//     //         console.log(count++);
//     //     // }
//     // }
// };