import {useRef} from "react";
import useForm from "../hooks/useForm";
import useStatusHandler from "../hooks/useStatusHandler";

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
        <form method="post" onSubmit={handleSubmit} action={endpoint} ref={formElement}>
            <label>
                ID: <input name="id" />
            </label>
            <label>
                NAME: <input name="name" required/>
            </label>
            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CustomerForm;