import {useRef} from "react";
import useForm from "../hooks/useForm";
import useStatusHandler from "../hooks/useStatusHandler";
import {json} from "react-router-dom";
import '../assets/css/Form.css';

function CustomerForm({endpoint}) {

    const formElement = useRef(null);

    const {handleSubmit, status, error} = useForm({
        form: formElement.current,
        url: endpoint
    })

    const handler = useStatusHandler(status, error);
    if(handler) {
        return handler;
    }

    return (
        <form onSubmit={handleSubmit} action={endpoint} ref={formElement}>
            <label>
                ID: <input name="id" />
            </label>
            <label>
                NAME: <input name="name" required/>
            </label>
            <br/>
            <label>
                STREET: <input name="street" required/>
            </label>
            <label>
                CITY: <input name="city" required/>
            </label>
            <label>
                COUNTY: <input name="county"/>
            </label>
            <label>
                POSTCODE: <input name="postcode" required/>
            </label>
            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CustomerForm;