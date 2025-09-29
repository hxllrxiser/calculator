import { Form, useActionData, useLoaderData } from "react-router";

export function About() {
    const loaderData = useLoaderData()
    const actionData = useActionData()
    

    console.log(actionData)


    return (
        <>
            <h2>About Page</h2>

            <Form encType="multipart/form-data">
                <input placeholder="Email" defaultValue="test@gmail.com"></input>
                <button type="submit">Submit</button>
            </Form>
        </>
    );
}
