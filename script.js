function reservar(){
    let data = document.getElementById ("data").value;
    let horario = document.getElementById ("horario").value;
    let responsavel = document.getElementById ("responsavel").value;

    alert(
        "Reserva foi realiczada com sucesso ! \n\n" +
        "Data: " + data + "\n" +
        "Horário: " + horario + "\n" +
        "Responsável: " + responsavel 
    );

}