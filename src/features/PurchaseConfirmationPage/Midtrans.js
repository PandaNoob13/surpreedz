import React from 'react'
import swal from 'sweetalert';

const Midtrans = (token) => {
    return (
        window.snap.pay(token, {
            onSuccess: function(result){
                /* You may add your own implementation here */
                console.log(result);
                swal({
                    title:'Payment success!',
                    text:'Relax and brew some coffee',
                    icon:'success',
                    buttons: false,
                    timer: 2750,
                }) 
            },
            onPending: function(result){
                /* You may add your own implementation here */
                console.log(result);
                swal({
                    title:'Waiting your payment!',
                    text:'Take as much time as you need ...',
                    icon:'info',
                    buttons: false,
                    timer: 2750,
                }) 
            },
            onError: function(result){
                /* You may add your own implementation here */
                console.log(result);
                swal({
                    title:'Payment failed!',
                    text:'There must be something ...',
                    icon:'error',
                    buttons: false,
                    timer: 2750,
                }) 
            },
            onClose: function(){
                /* You may add your own implementation here */
                swal({
                    title:'OOPS!?',
                    text:'you closed the popup without finishing the payment?',
                    icon:'warning',
                    buttons: false,
                    timer: 2750,
                }) 
            }
        })
    )
}

export default Midtrans