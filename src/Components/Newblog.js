import React from 'react'
import { useForm } from "react-hook-form";
import './Newblog.css';

function Newblog() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <div className="newblog_container">
            <div className="newblog_header">
                <h3>Lets Start Our Blog</h3>
            </div>
            <form className="newblog_form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="firstName">Title</label>
                    <input placeholder="lets give a title" {...register("firstName")} />
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <textarea {...register("content", { required: true, maxLength: 100 })} />

                </div>

                <input type="submit" />
            </form>
        </div>
    );
}

export default Newblog
