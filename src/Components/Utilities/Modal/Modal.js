import React from 'react';
import ConfirmButton from '../ConfirmButton/ConfirmButton';
import DenyButton from '../DenyButton/DenyButton';
import ApiService from '../../../services/ApiService';
import './Modal.css';

export default function Modal(props){

    const response = {
                        payrate: props.payrate,
                        dev_id: props.dev_id,
                        offer_detail: props.offer_detail,
                        offer_info: props.offer_info,
                        response: '',
                    }

    const handleAccept = obj =>{
        obj.response = 'Accepted'
        console.log(obj)
        ApiService.acceptOffer(obj)
    }
    const handleDeny = obj =>{
        obj.response = 'Denied';
        obj.dev_id = null;
        console.log(obj)
    }
    return (
        <section className="modal-container" onClick={props.minimize}>
            <article className="modal">
                <h3>Accept Offer?</h3>
                <ConfirmButton onClick={() => handleAccept(response)}/>
                <DenyButton onClick={()=> handleDeny(response)}/>
            </article>
        </section>
    )
}