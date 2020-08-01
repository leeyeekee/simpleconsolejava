function foo() {

    var a = NaN;
    
    if (a !== NaN) {
        console.log("Always true");
    }

    for (var i = 0; i < strings.length; i--) {
        console.log("Infinite loop");
        alert("Always false");
    }
}