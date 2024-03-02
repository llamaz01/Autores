'use client'
import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const { Fragment, useState, useEffect } = require("react")




const AuthorForm = ({ onSubmit, preset = {} }) => {

    const [name, setName] = useState("");
    const [error, setError] = useState({});
    const router = useRouter();

    const handleCancel = () => {
        router.push("/");
    }

    const createdOk = () => {
        router.push("/");
    };
    const createdFail = (errorMsg) => {
        console.log(errorMsg.response.data.errors);
        setError(errorMsg.response.data.errors);
    }

    const handleCreateAuthor = () => {
        const data = {
            name: name
        }
        onSubmit(data, createdOk, createdFail);
    }

    useEffect(() => {
        if (preset.name) {
            setName(preset.name);
        }
    }, [preset])


    return (
        <Fragment>
            <Paper elevation={2} sx={{ padding: 2 }}>
                <Stack direction="column" spacing={2}>
                    <Typography variant="h6" component="label" htmlFor="nameInput" >Name:</Typography>
                    <TextField
                        variant="outlined"
                        id="nameInput"
                        type="text"
                        autoComplete="off"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        error={error.name ? true : false}
                        helperText={error.name?.message}
                    />
                    <Stack direction="row" spacing={2} >
                        <Button variant="contained" color="error" onClick={handleCancel}>Cancel</Button>
                        <Button variant="contained" color="success" onClick={handleCreateAuthor}>Submit</Button>
                    </Stack>
                </Stack>
            </Paper>
        </Fragment>
    )
}

export default AuthorForm;