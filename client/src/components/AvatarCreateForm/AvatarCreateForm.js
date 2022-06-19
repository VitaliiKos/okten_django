import React from "react";
import {useForm} from "react-hook-form";

import authHeader from "../../services/auth-header";

function AvatarCreateForm() {
    const {register, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        const formData = new FormData();
        formData.append("avatar", data.avatar[0]);

        const res = await fetch("http://localhost/api/v1/users/avatar", {
            method: "PATCH",
            body: formData,
            headers: authHeader(),
        }).then((res) => res.json());
        console.log((JSON.stringify(`${res.message}, status: ${res.status}`)));
        console.log(res);
        console.log(res.message);
        console.log(res.status);
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="file" {...register("avatar")} />

                <input type="submit"/>
            </form>
        </div>
    );
}

export {AvatarCreateForm};