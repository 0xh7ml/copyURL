// creating context menu
browser.contextMenus.create({
    id: "cpurl",
    title: "CopyURL",
    contexts: ["all"]
});


// context menu action handling
browser.contextMenus.onClicked.addListener((info,tab)=>{
    if(info.menuItemId === "cpurl"){
        // get the current tab hostname 
        // example www.google.com
       let taburl = new URL(tab.url).hostname;

       // send the current tab hostname to getDomain function
       let domain = getDomain(taburl);

       // copy the domain name to clipboard
       // final output
       navigator.clipboard.writeText(domain);
    }
});

// get the domain name
function getDomain(url){
    let domain = url.replace(/^www\./, '');
    return domain;
}