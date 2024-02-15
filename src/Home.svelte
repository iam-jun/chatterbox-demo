<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";

    import auth from "./stores/auth.js";
    import app from "./stores/app.js";
    import ChatButton from "./components/ChatButton.svelte";

    const signOut = () => {
        auth.set({ user: null });
    };

    onMount(() => {
        window.postMessage({ action: "init-chatterbox" });

        // Redirect to login if not authenticated
        auth.subscribe(({ user }) => {
            if (!user) {
                // Logic to redirect to the login page
                navigate("/login");
            }
        });

        window.addEventListener("message", (event) => {
            console.log("parent received message", event.data);
            const data = event?.data;
            if (data.action === "chatterbox-loaded") {
                app.set({ isChatterboxLoaded: true });
            }
        });
    });
</script>

<main>
    <div class="header">
        <div class="btn-container padding">
            <ChatButton name="James Lai" userId={"@jameslai:matrix.org"} />
            <ChatButton name="Zn Lai" userId={"@blurzade:matrix.org"} />
            <ChatButton name="Jun Diep" userId={"@jun.coder:matrix.org"} />
        </div>
    </div>
    <a href="#" class="btn-sign-out" on:click={signOut}>Sign Out</a>
    <div class="padding center">
        <img
            alt="AGIL Logo"
            class="logo"
            src="https://avatars.githubusercontent.com/u/93910532?s=200&v=4"
        />

        <h1>Welcome to the Home Page</h1>
        <p>This is the public home page of the application.</p>
    </div>
</main>

<style>
    /* CSS styles specific to the home page */
    main {
        margin: 0;
        display: flex;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        background-color: rgb(27 30 49);
    }

    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
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
        flex: 1;
        flex-direction: row;
    }

    .btn-sign-out {
        margin-top: 1rem;
        margin-right: 1rem;
        padding: 0.5rem;
        position: absolute;
        display: flex;
        align-self: flex-end;
        color: #fff;
    }
</style>
