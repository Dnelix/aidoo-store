import { signInWithGooglePopup, createUserFromAuth } from "../../utilities/firebase/firebase";

const Login = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        //console.log(response);
        createUserFromAuth(response.user);
    }

    return (
        <div>
            <h1>Login To your Page</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google
            </button>
        </div>
    )
}

export default Login;