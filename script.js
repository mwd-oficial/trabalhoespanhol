var teste = true
function bio1() {
    var bio = document.getElementById("bio")
    var parbio = document.getElementById("parbio")
    var parbio1 = document.getElementById("parbio1")
    var parbio2 = document.getElementById("parbio2")
    var titbio = document.getElementById("titbio")

    if (teste == true) {
        if (window.matchMedia("(max-width: 600px)").matches) {
            bio.style.height = "180vh"

        } else if (window.matchMedia("(max-width: 850px)").matches) {
            bio.style.height = "140vh"
        } else {
            bio.style.height = "100vh"
        }
        bio.style.maxWidth = "80vw"
        bio.style.display = "block"
        bio.style.pointerEvents = "none"
        teste = false

        setTimeout(() => {
            parbio.style.display = "block"
            parbio1.style.display = "block"
            parbio2.style.display = "block"
            bio.style.pointerEvents = "auto"
        }, "2000")
        setTimeout(() => {
            titbio.style.fontSize = "25px"
            bio.style.padding = "20px 0px"
        }, "1500")

    } else {
        bio.style.maxWidth = "100px"
        bio.style.height = "50px"
        bio.style.display = "flex"
        bio.style.padding = "0px"
        parbio.style.display = "none"
        parbio1.style.display = "none"
        parbio2.style.display = "none"
        titbio.style.fontSize = "14px"
        teste = true
    }

}

function pais1() {
    var pais = document.getElementById("pais")
    var parpais = document.getElementById("parpais")
    var imgpais = document.getElementById("imgpais")
    var titpais = document.getElementById("titpais")

    if (teste == true) {
        if (window.matchMedia("(max-width: 600px)").matches) {
            pais.style.height = "50vh"

        } else if (window.matchMedia("(max-width: 900px)").matches) {
            pais.style.height = "70vh"

        } else if (window.matchMedia("(max-width: 1200px)").matches) {
            pais.style.height = "80vh"

        } else {
            pais.style.height = "90vh"
        }
        pais.style.maxWidth = "80vw"
        pais.style.display = "block"
        imgpais.style.marginTop = "25px"
        pais.style.pointerEvents = "none"
        teste = false

        setTimeout(() => {
            imgpais.style.display = "block"
            parpais.style.display = "block"
            pais.style.pointerEvents = "auto"
        }, "2000")
        setTimeout(() => {
            titpais.style.fontSize = "25px"
            pais.style.padding = "20px 0px"
        }, "1500")

    } else {
        pais.style.maxWidth = "100px"
        pais.style.height = "50px"
        pais.style.display = "flex"
        pais.style.padding = "0px"
        imgpais.style.display = "none"
        parpais.style.display = "none"
        titpais.style.fontSize = "14px"
        teste = true
    }
}
function disc1() {
    var disc = document.getElementById("disc")
    var pardisc = document.getElementById("pardisc")
    var titdisc = document.getElementById("titdisc")

    if (teste == true) {
        disc.style.maxWidth = "80vw"
        disc.style.height = "60vh"
        disc.style.display = "block"
        pardisc.style.marginTop = "50px"
        disc.style.pointerEvents = "none"
        teste = false

        setTimeout(() => {
            pardisc.style.display = "block"
            disc.style.pointerEvents = "auto"
        }, "2000")
        setTimeout(() => {
            titdisc.style.fontSize = "25px"
            disc.style.padding = "20px 0px"
        }, "1500")

    } else {
        disc.style.maxWidth = "100px"
        disc.style.height = "50px"
        disc.style.display = "flex"
        disc.style.padding = "0px"
        pardisc.style.display = "none"
        titdisc.style.fontSize = "14px"
        teste = true
    }
}
function mus1() {
    var mus = document.getElementById("mus")
    var parmus = document.getElementById("parmus")
    var titmus = document.getElementById("titmus")

    if (teste == true) {
        mus.style.maxWidth = "80vw"
        if (window.matchMedia("(max-width: 600px)").matches) {
            mus.style.height = "180vh"

        } else if (window.matchMedia("(max-width: 850px)").matches) {
            mus.style.height = "140vh"
        } else {
            mus.style.height = "100vh"
        }
        mus.style.display = "block"
        parmus.style.marginTop = "50px"
        mus.style.pointerEvents = "none"
        teste = false

        setTimeout(() => {
            parmus.style.display = "block"
            mus.style.pointerEvents = "auto"
        }, "2000")
        setTimeout(() => {
            titmus.style.fontSize = "25px"
            mus.style.padding = "20px 0px"
        }, "1500")

    } else {
        mus.style.maxWidth = "100px"
        mus.style.height = "50px"
        mus.style.display = "flex"
        mus.style.padding = "0px"
        parmus.style.display = "none"
        titmus.style.fontSize = "14px"
        teste = true
    }
}
