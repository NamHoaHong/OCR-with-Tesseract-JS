function readme() {
    vcl = document.getElementById("url").value;
    display = document.getElementById("textdisplay");
    Tesseract.recognize(
      vcl,
      'eng',
      { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
    console.log(text);
    display.innerHTML = text;
    });
  };
// testing image: https://tesseract.projectnaptha.com/img/eng_bw.png