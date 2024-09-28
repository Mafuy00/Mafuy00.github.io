function push_green_down() {
    // Grab the current z-index of the box3
    // push it down by the order of 1 z-index
    var box3 = document.getElementById('box3');
    //Element object
    console.log(box3);
  
    let box3_zindex = getComputedStyle(box3).zIndex;
    console.log(box3_zindex);

    let current_zIndex = Number(box3.style.zIndex);
    console.log("Before: " + current_zIndex);
    current_zIndex--;
    console.log("After: " + current_zIndex);
    box3.style.zIndex = current_zIndex;

}