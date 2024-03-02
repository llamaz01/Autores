'use client'
import AuthorForm from "@/components/forms/AuthorForm";
import { Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";

const { Fragment, useEffect, useState } = require("react")



const EditPage = () => {

    const { id } = useParams();

    const [author, setAuthor] = useState({});

    const updateAuthor = async (data, onSuccess, onFail) => {
        try {
            const response = await axios.put(`http://localhost:8000/api/author/${id}`, data);
            const result = await response.data;
            console.log(result);
            onSuccess(result);
        } catch (error) {
            onFail(error);
        }

    }

    const getAuthorInfo = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/author/${id}`);
            const result = await response.data;
            console.log(result);
            setAuthor(result);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAuthorInfo();
    }, []);




    return (
        <Fragment>
            <Typography variant="h4" sx={{ mb: 4 }} >
                <Link href="/">
                    Home
                </Link>
            </Typography>

            {
                author !== null ?
                    <Fragment>
                        <Typography variant="h5">
                            Edit This Author:
                        </Typography>
                        <AuthorForm onSubmit={updateAuthor} preset={author} />
                    </Fragment>
                    :
                    <Typography variant="h5">
                        "Lo sentimos, pero no pudimos encontrar el autor que estás buscando.
                        <Link href="/new">¿Deseas agregar este autor a nuestra base de datos?"</Link>
                    </Typography>
            }



        </Fragment>
    )
}

export default EditPage;