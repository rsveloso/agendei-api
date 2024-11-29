import repositoryAppointment from "../repositories/repository.appointment.js";

async function Listar(id_user, dt_start, dt_end, id_doctor) {
    
    const appointments = await repositoryAppointment.Listar(id_user, dt_start, dt_end, id_doctor);

    return appointments;
}

// async function ListarId(id_appointment) {

//     const appointments = await repositoryAppointment.ListarId(id_appointment);

//     return appointments;
// }

async function Inserir(id_user, id_doctor, id_service, booking_date, booking_hour) {
    
    const appointment = await repositoryAppointment.Inserir(id_user, id_doctor, id_service, booking_date, booking_hour);

    return appointment;
}

async  function Excluir(id_user, id_appointment) {

    const appointment = await repositoryAppointment.Excluir(id_user, id_appointment);

    return appointment;
}

// async function Editar(id_appointment, id_user,
//     id_doctor, id_service, booking_date, booking_hour) {

//     const appointment = await repositoryAppointment.Editar(id_appointment, id_user,
//         id_doctor, id_service, booking_date, booking_hour);

//     return appointment;
// }

export default { Listar, Inserir, Excluir };