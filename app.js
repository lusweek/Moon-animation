// download anime-master here:
// https://github.com/juliangarnier/anime/

// Youtube tutorial here: 
// https://www.youtube.com/watch?v=bfaPnlYE8Jo&list=PLDyQo7g0_nsXEOxGlAgccV8fu-cHZnI5B&index=1



// got thise from fiver. save as SVG and copy into the html. 
const sunPath = "M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5Z"

const moonPath = "M44 76.5C44 118.75 76.5 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C76.5 0 44 34.2502 44 76.5Z"


const darkMode = document.querySelector("#darkMode")

let toggle = false ;

document.querySelector("#godmorgon").innerHTML="Godmorgon"

darkMode.addEventListener("click", () => {
    // use anime
    // here we set upp the timeline
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    })
    // Add diffrent animations to the timeline
    timeline.add({
        targets: ".sun",
        d: [
             {value: toggle ? sunPath : moonPath}
        ] 
        
    })
    .add({
        targets: "#darkMode",
        rotate: toggle ? 0 : 320
        //We deside WHEN on the timeline this will happen, sinse the duration is 750 and we say -= 350 that 
        // means this animation will happen 300 miliseconds after start. 
    }, '-= 350')
    .add({
        targets: ".day",
        // toggle ? and : means if (true) { } else { }. It's like a short if statmement 
        backgroundColor: toggle? 'rgb(206, 206, 206)' : "rgb(128, 128, 128)",
        color: toggle ? 'rgb(21, 21, 21)' : 'rgb(255,255,255)'
    }, `-= ${350+350}` )

   document.querySelector("#godmorgon").innerHTML=   toggle? 'Godmorgon!' : 'Godnatt!'

    // changes toggle to be true if false or to false if true 
    toggle= !toggle
})