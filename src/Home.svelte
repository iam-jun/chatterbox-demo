<script>
    import { matrixSessionId } from "./../stores/app.js";
    import ChatButton from "./components/ChatButton.svelte";
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
    import { isAuthenticated } from "../stores/auth";
    import ChatBox from "./components/ChatBox.svelte";

    onMount(() => {
        // Redirect to login if not authenticated
        isAuthenticated.subscribe((value) => {
            if (!value) {
                // Logic to redirect to the login page
                navigate("/login");
            }
        });

        window.addEventListener("message", (event) => {
            const data = event?.data;
            console.log(`Received message:`, data);
            if (data.type === "MatrixClientReady")
                matrixSessionId.set(data.sessionId);
        });
    });
</script>

<main>
    <h1>Welcome to the Home Page</h1>
    <p>This is the public home page of the application.</p>
    <ChatButton name="James" roomId={"!vItKLiveJxzwiDjAEl:matrix.org"} />
    <ChatButton name="Zn" roomId={"!YqbFfpfckwkARoUfYc:matrix.org"} />
    <ChatBox />
</main>

<style>
    /* CSS styles specific to the home page */
    main {
        padding: 1rem;
    }
</style>
