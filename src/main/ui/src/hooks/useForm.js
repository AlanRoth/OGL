import {useState} from "react";
import axios from "axios";


function useForm({form, url}) {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!form) {
            return
        }

        const formData = new FormData(form);
        const object = {};
        formData.forEach((value, key) => object[key] = value);
        const formJson = JSON.stringify(object);

        if(!formJson["id"]) {
            delete formJson["id"];
        }

        const resp = axios.post(url, formJson, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if(response.status !== 200) {
                setError(response.statusText);
                setStatus(response.status);
            }
        }).then(() => {
            setStatus(200);
        }).catch((err) =>  {
            setError(err.toString());
            setStatus(err.status);

        })
    }

    return{handleSubmit, status, error}
}

export default useForm;