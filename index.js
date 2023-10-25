function loadDoc(){
let req = new XMLHttpRequest();
req.open("GET","https://jsonplaceholder.typicode.com/posts/1",true)
req.onprogress =function(){
    console.log ('loading...')
}
req.onload = function(){    
    // alert(req)
    res = req.response
    js = JSON.parse(res)
    alert(js.title)

}
req.send()
}