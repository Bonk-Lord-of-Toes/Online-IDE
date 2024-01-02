const iFrame = document.getElementById("frame")
var textBox = document.getElementById("HTMLTextBox")
iFrame.width = window.innerWidth
iFrame.height = window.innerHeight/2

var edit = (DOM) => {
    //parse and initialize serializer
    var parser = new DOMParser()
    var serializer = new XMLSerializer()
    DOM = parser.parseFromString(DOM,"text/html")

    //Adds it script tag. More edits you wish to make go here!
    const scriptTag = document.createElement("script");
    scriptTag.innerHTML = document.getElementById("JavascriptTextBox").value
    DOM.body.appendChild(scriptTag);

    //serialize
    DOM = serializer.serializeToString(DOM)
    return DOM
}

function run(){
    var HTMLinput = textBox.value
    var compiledOutput = edit(HTMLinput)
    iFrame.srcdoc = compiledOutput
}
