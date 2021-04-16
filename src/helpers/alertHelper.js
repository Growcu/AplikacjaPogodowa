import Swal from 'sweetalert2';

const alertHelper = (titleAlert, textAlert, iconAlert, buttonTextAlert) => (
    Swal.fire({
        title: titleAlert,
        text: textAlert,
        icon: iconAlert,
        confirmButtonText: buttonTextAlert,
    })
);

export default alertHelper;
