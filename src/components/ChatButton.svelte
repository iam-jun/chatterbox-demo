<script>
    import { onMount } from "svelte";
    import app from "../stores/app";

    export let userId = null;
    export let name = "";

    // let disabled = true;

    // onMount(() => {
    //     app.subscribe(({ isChatterboxLoaded }) => {
    //         if (isChatterboxLoaded) {
    //             disabled = !isChatterboxLoaded;
    //         }
    //     });
    // });
</script>

<div class="container">
    <div class="header">
        <img
            class="avatar"
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707868800&semt=ais"
            alt="avatar"
        />
        <span>{name}</span>
    </div>
    <a id={`chatterbox-button-${userId}`} class="chat-button">
        <img
            class="chat-icon"
            src="https://e7.pngegg.com/pngimages/952/46/png-clipart-text-bubble-brand-logo-blue-font-chat-icon-angle-text.png"
            alt="chat"
        />
    </a>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        width: 164px;
        height: 64px;
        margin-left: 20px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        color: rgb(27 30 49);
        background-color: rgb(255, 255, 255);
        /* background: no-repeat center url('../ui/res/chat-bubbles.svg'), linear-gradient(180deg, #7657F2 0%, #5C56F5 100%); */
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 12px 32px -2px rgba(0, 0, 0, 0.2);
    }

    .header {
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: flex-start;
        padding: 8px;
    }

    .avatar {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin-right: 8px;
    }

    .chat-button {
        display: flex;
        flex: 1;
        align-self: flex-start;
        position: relative;
    }

    .disabled {
        pointer-events: none;
        opacity: 0.5;
    }
    .chat-icon {
        height: 16px;
        margin: 0px 0px 0px 8px;
    }
</style>
