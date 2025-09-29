import { Form } from "react-router";

export function Home() {
    return (
        <>
            <h2>Home Page</h2>

            <Form action="/">
                <input placeholder="Email" defaultValue="test@gmail.com"></input>
                <button type="submit">Submit</button>
            </Form>
        </>
    )
}