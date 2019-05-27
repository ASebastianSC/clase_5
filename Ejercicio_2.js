const nivel = parseFloat(22)
if (nivel <= 9) {
    console.log("Eres novato!")
} else {
    if (nivel <= 19) {
        console.log("eres acrobata!")
    } else {
        if (nivel >= 20) {
            console.log("eres ninja!")
        } else {
            console.log("error!")
        }
    }
}