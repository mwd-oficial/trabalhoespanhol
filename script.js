var teste = true
function bio1() {
    var bio = document.getElementById("bio")
    var titbio = document.getElementById("titbio")

    if (teste == true) {
        if (window.matchMedia("(max-width: 600px)").matches) {
            titbio.style.padding = "10px"
            titbio.style.fontSize = "14px"
            titbio.style.width = "150px"
        } else {
            titbio.style.padding = "20px"
            titbio.style.fontSize = "20px"
            titbio.style.width = "280px"
        }
        bio.style.maxHeight = "300vh"
        bio.style.opacity = 1
        bio.style.marginBottom = "50px"
        bio.style.padding = "30px"
        titbio.style.borderBottom = "0px"
        titbio.style.borderRadius = "20px 20px 0px 0px"
        teste = false
    } else {
        bio.style.maxHeight = 0
        bio.style.opacity = 0
        bio.style.padding = 0
        titbio.style.padding = "10px"
        titbio.style.fontSize = "14px"
        titbio.style.width = "150px"
        bio.style.marginBottom = 0
        titbio.style.borderBottom = "5px solid white"
        titbio.style.borderRadius = "20px"
        teste = true
    }
    
}

function pais1() {
    var pais = document.getElementById("pais")
    var imgpais = document.getElementById("imgpais")
    var titpais = document.getElementById("titpais")
    
    if (teste == true) {
        if (window.matchMedia("(max-width: 600px)").matches) {
            titpais.style.padding = "10px"
            titpais.style.fontSize = "14px"
            titpais.style.width = "150px"
        } else {
            titpais.style.padding = "20px"
            titpais.style.fontSize = "20px"
            titpais.style.width = "280px"

        }
        pais.style.maxHeight = "300vh"
        pais.style.opacity = 1
        pais.style.padding = "30px"
        pais.style.marginBottom = "50px"
        titpais.style.borderBottom = "0px"
        titpais.style.borderRadius = "20px 20px 0px 0px"
        teste = false
        
    } else {
        pais.style.maxHeight = 0
        pais.style.opacity = 0
        pais.style.padding = 0
        titpais.style.padding = "10px"
        titpais.style.fontSize = "14px"
        titpais.style.width = "150px"
        pais.style.marginBottom = 0
        titpais.style.borderBottom = "5px solid white"
        titpais.style.borderRadius = "20px"
        teste = true
    }
}
function disc1() {
    var disc = document.getElementById("disc")
    var pardisc = document.getElementById("pardisc")
    var titdisc = document.getElementById("titdisc")

    if (teste == true) {
        if (window.matchMedia("(max-width: 600px)").matches) {
            titdisc.style.padding = "10px"
            titdisc.style.fontSize = "14px"
            titdisc.style.width = "150px"
            pardisc.style.maxWidth = "80vw"
        } else {
            titdisc.style.padding = "20px"
            titdisc.style.fontSize = "20px"
            titdisc.style.width = "280px"
            pardisc.style.maxWidth = "67.5vw"

        }
        disc.style.maxHeight = "300vh"
        disc.style.opacity = 1
        disc.style.padding = "30px"
        disc.style.marginBottom = "50px"
        titdisc.style.borderBottom = "0px"
        titdisc.style.borderRadius = "20px 20px 0px 0px"
        teste = false
        
    } else {
        disc.style.maxHeight = 0
        disc.style.opacity = 0
        disc.style.padding = 0
        titdisc.style.padding = "10px"
        titdisc.style.fontSize = "14px"
        titdisc.style.width = "150px"
        disc.style.marginBottom = 0
        titdisc.style.borderBottom = "5px solid white"
        titdisc.style.borderRadius = "20px"
        teste = true
    }
}
function mus1() {
    var mus = document.getElementById("mus")
    var titmus = document.getElementById("titmus")
    var audiomus = document.getElementById("audiomus")

    if (teste == true) {
        if (window.matchMedia("(max-width: 600px)").matches) {
        titmus.style.padding = "10px"
        titmus.style.fontSize = "14px"
        titmus.style.width = "150px"
        audiomus.style.width = "240px"
    } else {
        titmus.style.padding = "20px"
        titmus.style.fontSize = "20px"
        titmus.style.width = "280px"
        audiomus.style.width = "300px"
    }
    mus.style.maxHeight = "300vh"
    mus.style.opacity = 1
        mus.style.padding = "30px"
        mus.style.marginBottom = "50px"
        titmus.style.borderBottom = "0px"
        titmus.style.borderRadius = "20px 20px 0px 0px"
        teste = false
        
    } else {
        mus.style.maxHeight = 0
        mus.style.opacity = 0
        mus.style.padding = 0
        titmus.style.padding = "10px"
        titmus.style.fontSize = "14px"
        titmus.style.width = "150px"
        mus.style.marginBottom = 0
        titmus.style.borderBottom = "5px solid white"
        titmus.style.borderRadius = "20px"
        teste = true
    }
}
