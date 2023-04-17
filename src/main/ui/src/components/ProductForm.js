import {useRef} from "react";
import useForm from "../hooks/useForm";
import useStatusHandler from "../hooks/useStatusHandler";
import '../assets/css/Form.css';

function ProductForm({endpoint}) {

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
                SKU: <input name="sku" required/>
            </label>
            <label>
                PRICE: <input name="price" type="number" step=".01" required/>
            </label>
            <label>
                DESCRIPTION: <input name="description"/>
            </label>
            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
        </form>
    )
}

export default ProductForm;