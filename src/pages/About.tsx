import { Form, useActionData, useLoaderData } from "react-router";

export function About() {
    const loaderData = useLoaderData()
    const actionData = useActionData()
    

    console.log(actionData)


    return (
        <>
            <h2>About Page</h2>

            <Form method="post">
                <input name="email" placeholder="Email" defaultValue="test@gmail.com"></input>
                <input name="name" placeholder="Name"></input>
                <button type="submit">Submit</button>
            </Form>
        </>
    );
}
