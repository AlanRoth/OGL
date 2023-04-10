import {useRef} from "react";
import useForm from "../hooks/useForm";

function ProductForm({endpoint}) {

    const formElement = useRef(null);

    const {handleSubmit, status, error} = useForm({
        form: formElement.current,
        url: endpoint
    })

    if(status === 200) {
        return (
            <>
                <div>Submitted</div>
            </>
        )
    } else if(error) {
        return (
            <>
                <div>
                    {error}
                </div>
            </>
        )
    }

    return (
        <form method="post" onSubmit={handleSubmit} action={endpoint} ref={formElement} target="_blank">
            <label>
                SKU: <input name="sku" required/>
            </label>
            <label>
                PRICE: <input name="price" type="number" required/>
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