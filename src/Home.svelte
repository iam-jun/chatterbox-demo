<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";

    import { app } from "./stores/app.ts";
    import { auth } from "./stores/auth.js";

    import ChatBox from "./components/ChatBox.svelte";
    import ChatButton from "./components/ChatButton.svelte";

    const signOut = () => {
        auth.set({ user: null });
    };

    // onMount(() => {
    //     // Redirect to login if not authenticated
    //     auth.subscribe(({ user }) => {
    //         if (!user) {
    //             // Logic to redirect to the login page
    //             navigate("/login");
    //         }
    //     });

    //     window.addEventListener("message", (event) => {
    //         const data = event?.data;
    //         console.log(`Received message:`, data);
    //         if (data.type === "MatrixClientReady") {
    //             app.set({ matrixSessionId: data.sessionId });
    //         }
    //     });
    // });
</script>

<main>
    <a href="#" class="btn-sign-out" on:click={signOut}>Sign Out</a>
    <div class="padding center">
        <h1>Welcome to the Home Page</h1>
        <p>This is the public home page of the application.</p>
        <img
            alt="AGIL Logo"
            class="logo"
            src="https://avatars.githubusercontent.com/u/93910532?s=200&v=4"
        />
    </div>
    <!-- <div class="btn-container padding">
        <ChatButton name="James" userId={"@jameslai:matrix.org"} />
        <ChatButton name="Zn" userId={"@blurzade:matrix.org"} />
    </div>
    <ChatBox /> -->
</main>

<style>
    /* CSS styles specific to the home page */
    main {
        margin: 0;
        display: flex;
        height: 100vh;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
    }

    .padding {
        padding: 1rem;
    }

    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .logo {
        width: 200px;
        display: flex;
        align-self: center;
    }

    .btn-container {
        display: flex;
        flex-direction: row;
        align-self: flex-end;
    }

    .btn-sign-out {
        margin-top: 1rem;
        margin-right: 1rem;
        padding: 0.5rem;
        position: absolute;
        display: flex;
        align-self: flex-end;
    }
</style>
