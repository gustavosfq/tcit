import { useState } from "react";

const useForm = (initialState = {}, onSubmit) => {
    const [form, setForm] = useState(initialState);

    const onInputChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const reset = () => {
        setForm(initialState);
    };

    return { form, onInputChange, reset };
};

export default useForm;
