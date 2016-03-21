module.exports = {
    writeStuff: function () {
        document.write("Hello!");
    },
    alertMe: function (a) {
        if (a) {
            alert(a);
        } else {
            alert('nothing here');
        }
    }
}