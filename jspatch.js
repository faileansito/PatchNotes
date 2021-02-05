function devolverNotes() {
    var ajax = new XMLHttpRequest()
    var URL = "https://api-patchnotes.herokuapp.com/"
    ajax.open("GET", URL)
    ajax.send()
    ajax.onreadystatechange = () => {
        if (ajax.readyState == 4){
            var objeto = JSON.parse (ajax.responseText)
            armarPagina(objeto)
        }      
    }
}
function armarPagina(objetoPatchNotes){
    console.log(objetoPatchNotes)
    document.getElementById("header-version").innerText=objetoPatchNotes.nombreVersion
    var fecha = new Date(Date.parse(objetoPatchNotes.fechaVersion))
    document.getElementById("fecha").innerText=fecha.toDateString()    

generarTabla(objetoPatchNotes.cambios)
}
function generarTabla(cambios){
    var elementoTbody = document.getElementById("tabla-notes")  
    var Resultado = ""
    for (cambio in cambios) {
        Resultado += "<tr>"
        for (propiedad in cambios[cambio]){
            Resultado += `<td>${cambios[cambio][propiedad]}</td>`
        }
        Resultado += "</tr>"
    }          
    elementoTbody.innerHTML = Resultado
}
