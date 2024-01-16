<script>
    import { onMount } from "svelte";
    import { app } from "../stores/app";
    import { PUBLIC_CHAT_BASE_URL } from "../constants";

    let sessionId = null;

    export let userId = null;
    export let name = "";

    function openChatBox() {
        if (!userId) {
            alert("Please select a room first");
            return;
        }

        if (!sessionId) {
            alert("Please wait for the chat to load");
            return;
        }

        const iframe = document.querySelector("iframe");
        iframe.src = `${PUBLIC_CHAT_BASE_URL}/session/${sessionId}/user/${userId}`;
        const iframContainer = document.getElementById("iframe-container");
        iframContainer.style = "width: 400px; height: 70vh; overflow: visible;";
    }

    let text = "Loading...";

    onMount(() => {
        app.subscribe(({ matrixSessionId }) => {
            if (matrixSessionId) {
                sessionId = matrixSessionId;
                text = `Chat to ${name}`;
            }
        });
    });
</script>

<button class="open-chat-btn" on:click={openChatBox}>{text}</button>

<style>
    .open-chat-btn {
        width: 164px;
        height: 64px;
        margin-left: 20px;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        color: rgb(255, 255, 255);
        background-color: rgb(101, 13, 13);
        /* background: no-repeat center url('../ui/res/chat-bubbles.svg'), linear-gradient(180deg, #7657F2 0%, #5C56F5 100%); */
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 12px 32px -2px rgba(0, 0, 0, 0.2);
    }
</style>
