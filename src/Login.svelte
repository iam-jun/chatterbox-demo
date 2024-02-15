<script>
    import auth from "./stores/auth.ts";
    import { navigate } from "svelte-routing";

    let username = "";
    let password = "";

    const handleLogin = () => {
        // Here you would handle the login logic, possibly sending the credentials to a server
        auth.set({ user: { username, password } });
        navigate("/");

        // Prevent the form from submitting if you're handling the login asynchronously
    };
</script>

<div class="login-container">
    <form on:submit|preventDefault={handleLogin}>
        <div class="form-group">
            <label for="username">Username</label>
            <input id="username" type="text" bind:value={username} required />
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input
                id="password"
                type="password"
                bind:value={password}
                required
            />
        </div>
        <button type="submit">Login</button>
    </form>
</div>

<style>
    .login-container {
        max-width: 300px;
        margin: auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .form-group {
        margin-bottom: 1rem;
    }
    label {
        display: block;
        margin-bottom: 0.5rem;
    }
    input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    button {
        width: 100%;
        padding: 0.5rem;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background-color: #0056b3;
    }
</style>
