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
        const jsonObject = {};
        formData.forEach((value, key) => jsonObject[key] = value);

        //Determine Update or Upload
        const method = jsonObject['id'] ? 'put' : 'post';

        axios({
            method: method,
            url: url,
            data: jsonObject,
            config: {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                }
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