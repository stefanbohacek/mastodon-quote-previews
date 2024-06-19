let css = "body { background: red; }";
let insertingCSS = browser.tabs.insertCSS({ code: css });
insertingCSS.then(null, onError);
console.log(1);