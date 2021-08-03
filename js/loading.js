function startLoading(){
document.getElementsByClassName("ltext").innerHtml = "Loading Status..."

  $.get(`https://api.bybilly.uk/api/players/${ip}/${port}`, (result) => {
        if (result.hasOwnProperty('online')) {
           var proxystatus = "Online"
           var proxyonline = true
        } else {
           var proxystatus = "Offline"
           var proxyonline = false

}
 
startLoading()
