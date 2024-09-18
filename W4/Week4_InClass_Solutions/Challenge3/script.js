function show(button_element) {
    /*
        TAs' photo files are inside the subfolder "photos/"
        - brandon.jpg
        - darryl.jpg
        - nick.jpg
        - yinkit.jpg
    */

    // Fun Facts of TAs
    const facts = {
        "brandon": "Outside of his time at SMU, Brandon plays in the English Premier League, where fans affectionately refer to him as 'Sonny.' Be sure to cheer for him the next time you catch him on TV!",

        "darryl": "Well, it's not Darryl's fault he was born handsome! Fans everywhere just can't resist him. If you spot him on campus, don't forget to shout 'Oppa Darryl!'",

        "nick": "Nick is a man of many talents and many secrets. As a freelance nuclear physicist for North Korea, the number of weapons of mass destruction he's been involved with... well, let's just say it's off the charts.",

        "yinkit": "Once upon a time, a kind-looking woman wandered the streets of Pyongyang, offering free water bottles to unsuspecting residents. Little did they know, the 'water' was actually poison. Now living in secret in Singapore, she once tried to poison her professor's kittens - who, against all odds, miraculously survived."
    }

    // Option 1: Using getAttribute() method
    // let ta_name_lower = button_element.getAttribute('id');

    // Option 2: Directly accessing element's public attribute
    let ta_name_lower = button_element.id;
    console.log(ta_name_lower);

    // Reset all buttons background and text color to default
    reset_buttons();

    // Change the background of the selected TA's button
    button_element.style.backgroundColor = 'aqua';
    button_element.style.color = 'black';

    // Asssemble the relative URL of the selected TA's photo
    let photo_url = 'photos/' + ta_name_lower + '.jpg';

    document.getElementById('ta-fun-fact').innerText = facts[ta_name_lower];
    document.getElementById('ta-photo').src = photo_url;
}

function reset_buttons() {
    let button_elements = document.getElementsByTagName('button');

    for(elem of button_elements) {
        elem.style.backgroundColor = 'darkblue';
        elem.style.color = 'white';
    }
}