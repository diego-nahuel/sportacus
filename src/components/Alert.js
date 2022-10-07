import Swal from 'sweetalert2'

export default async function Alert(icon,title) {

    const alert = Swal.mixin({
        toast: true,
        position: 'top-end',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false
    });

    await alert.fire({
        icon: icon,
        title: title
    });
}