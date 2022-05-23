import axios from "axios";

const Url = process.env.REACT_APP_URL;

const login = async (usuario) => {
    const URL = `${Url}login`;
    const headers = {
        "Content-Type": "application/json",
    };
    try {
        const { data } = await axios.post(URL, usuario, { headers });
        return data;
    } catch (error) {
        throw error;
    }
};

const validarCorreo = async (correo) => {
    const URL = `${Url}validar-correo`;
    const headers = {
        "Content-Type": "application/json",
    };
    try {
        const { data } = await axios.post(URL, correo, { headers });
        return data;
    } catch (error) {
        throw error;
    }
};

export { login, validarCorreo }