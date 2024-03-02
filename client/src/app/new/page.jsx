'use client'
import AuthorForm from "@/components/forms/AuthorForm";
import { Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";

const { Fragment } = require("react")



const NewPage = () => {


    const createNewAuthor = async (data, onSuccess, onFail) => {
        try {
            const response = await axios.post("http://localhost:8000/api/author", data);
            const result = await response.data;
            console.log(result);
            onSuccess(result);
        } catch (error) {
            onFail(error);
        }

    }

    return (
        <Fragment>
            <Typography variant="h4" sx={{ mb: 4 }} >
                <Link href="/">
                    Home
                </Link>
            </Typography>
            <Typography variant="h5">
                Create New Author:
            </Typography>
            <AuthorForm onSubmit={createNewAuthor} />
        </Fragment>
    )
}

export default NewPage;