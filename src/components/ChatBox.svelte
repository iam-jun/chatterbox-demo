<script>
    import { onMount } from "svelte";
    import { auth } from "../stores/auth";
    import { PUBLIC_CHAT_BASE_URL } from "../constants";

    function closeChatBox() {
        const iframContainer = document.getElementById("iframe-container");
        iframContainer.style = "width: 0px; height: 0px;";
    }

    onMount(() => {
        auth.subscribe(({ user }) => {
            if (user) {
                const iframContainer =
                    document.getElementById("iframe-container");

                if (!iframContainer) return;

                const iframe = document.createElement("iframe");
                iframe.src = `${PUBLIC_CHAT_BASE_URL}?loginToken=${user.username}+authen+${user.password}`;
                iframe.allow = "microphone; camera; fullscreen;";
                iframe.innerHTML =
                    "<p>Your browser does not support iframes.</p>";
                iframe.style = "width: 100%; height: 100%; border: none;";
                iframContainer.appendChild(iframe);
            }
        });
    });
</script>

<div id="iframe-container" class="chatbox-container">
    <a href="#" class="close-btn" on:click={closeChatBox}>✕</a>
</div>

<style>
    .chatbox-container {
        position: fixed;
        right: 20px;
        bottom: 100px;
        width: 0px;
        height: 0px;
        border: none;
        overflow: hidden;
        border-radius: 12px;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 14px 64px -10px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 800px) {
        .chatbox-container {
            bottom: 0;
            right: 0;
        }
    }

    .close-btn {
        position: absolute;
        top: -16px;
        right: -16px;
        width: 32px;
        height: 32px;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 14px 64px -10px rgba(0, 0, 0, 0.2);
    }

    a.close-btn {
        text-decoration: none;
        color: #000;
    }
</style>
