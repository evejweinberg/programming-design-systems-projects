myDropzone = new Dropzone("div#myDropzone", { url: "/" });
document.getElementById('myDropzone').setAttribute("style", "border:2px solid red; background-color: rgb(255, 125, 115); position: absolute; right: 22%");
var btn = document.createElement("p"); // Create a <button> element
var t = document.createTextNode("Click Here to add file"); // Create a text node
btn.appendChild(t); // Append the text to <button>
// document.getElementById('parameters').appendChild(document.getElementById('myDropzone'))
document.getElementById('myDropzone').appendChild(btn);

// myDropzone.on("removedfile", function (file){

// })

myDropzone.on("addedfile", function(file, xhr) {
    uploadedFile = file;
    btn.remove()
        // inputImgWidth = file.width
        // inputImgHeight = file.height
});