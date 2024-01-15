<script>
    // You can define your iframe source URL here
    //Exp: http://localhost:3000/#/?loginToken=agil.operator+authen+ABCxyz123@

    let iframeSrc =
        "https://hydrogen-chat.vercel.app/#/?loginToken=agil.operator+authen+ABCxyz123@";

    function closeChatBox() {
        // if (window.CHATBOX_LOADED) {
        //   const iframe = document.querySelector("iframe");
        //   iframe.src = baseUrl;
        // }

        const iframContainer = document.getElementById("iframe-container");
        // iframContainer.classList.remove("shown");
        // iframContainer.classList.add("hidden");
        iframContainer.style = "width: 0px; height: 0px; overflow: hidden;";
    }
</script>

<div id="iframe-container" class="chatbox-container">
    <a href="#" class="close-btn" on:click={closeChatBox}>✕</a>
    <iframe
        title="Chat"
        src={iframeSrc}
        allow="microphone; camera; fullscreen;"
    >
        <p>Your browser does not support iframes.</p>
    </iframe>
</div>

<style>
    .chatbox-container {
        position: fixed;
        right: 20px;
        bottom: 100px;
        width: 0px;
        height: 0px;
        border: none;
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

    iframe {
        border: none;
        width: 100%;
        height: 100%;
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
