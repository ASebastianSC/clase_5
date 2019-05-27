const lunes = Boolean("es lunes? si no, dejalo en blanco")
const martes = Boolean("es martes? no, dejalo en blanco")
const miercoles = Boolean("es miercoles? no, dejalo en blanco")
const jueves = Boolean("es jueves? no, dejalo en blanco")
if (lunes) {
    console.log("toca historia!")
} else {
    if (martes) {
        console.log("toca natación!")
    } else {
        if (miercoles) {
            console.log("toca historia!")
        } else {
            if (jueves) {
                console.log("toca esgrima!")
            }else{
                console.log("descansa!")
            }
        }
    }
}