export function Titleize(name) {

    const userNameHere = name.split(' ')

    function tranform(text) {
        var words = text.toLowerCase().split(" ");
        for (var a = 0; a < words.length; a++) {
          var w = words[a];
          words[a] = w[0].toUpperCase() + w.slice(1);
        }
        return words.join(" ");
    }

    return name && userNameHere[1]?.length > 3 ? tranform(userNameHere[0]) + ' ' + tranform(userNameHere[1])
    : tranform(userNameHere[0]) + ' ' + String(userNameHere[1]).toLowerCase() + ' ' + tranform(userNameHere[2])

}