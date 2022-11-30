function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    const spy = string.toUpperCase();
    console.log(spy);
}

function logWhisper(string) {
    const spy = string.toLowerCase();
    console.log(spy);
}

function sayHiToHeadphonedRoommate(string) {
    console.log(string);
    console.log(string.toLowerCase());
    console.log(string.toUpperCase());
    if (string === string.toLowerCase()) {
        return "I can\'t hear you!";}
    if (string === string.toUpperCase()) {
        return "YES INDEED!";}
    if (string = "Let\'s have dinner together!") {
        return "I would love to!";}
}
 