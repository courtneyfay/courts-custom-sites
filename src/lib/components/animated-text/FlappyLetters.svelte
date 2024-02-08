<script>
    export let text = ""
</script>

<span class="flap-wrapper">
    {#each text as letter}
        <span class="flap" data-text={letter}>
            { letter }
        </span>
    {/each}
</span>

<style>
    @keyframes flapLetter {
        80% {
            transform: scale(1.1, 1) skew(0deg, 5deg);
        }
        100% {
            transform: scale(1.1, 1) skew(0deg, 20deg);
        }
    }

    @keyframes flapShadow {
        80% {
            transform: rotateY(-10deg);
        }
        100% {
            transform: rotateY(-40deg);
        }
    }

    .flap-wrapper {
        font-family: "Hedvig Letters Sans", sans serif;
        font-weight: 700;
        font-size: 4.5rem;
    }
    .flap {
        display: inline-block;
        position: relative;
        transform-style: preserve-3d;
        perspective: 500px;
        -webkit-font-smoothing: antialiased;
    }
    .flap::before, .flap::after {
        position: absolute;
        top: 0;
        left: -1px;
        transform-origin: left top;
        transition: all ease-out .3s;
        content: attr(data-text);
    }
    .flap::before {
        z-index: 1;
        color: rgba(0, 0, 0, .2);
        transform: scale(1.1, 1) skew(0deg, 20deg);
        animation: flapLetter 0.5s linear 0.75s;
    }
    .flap::after {
        z-index: 2;
        color: var(--color, #3AB8A9);
        text-shadow: -1px 0 1px var(--color, #3AB8A9), 1px 0 1px rgba(0, 0, 0, .8);
        transform: rotateY(-40deg);
        animation: flapShadow 0.5s linear 0.75s;
    }
    .flap:hover::before {
        transform: scale(1.1, 1) skew(0deg, 5deg);
    }
    .flap:hover::after {
        transform: rotateY(-10deg);
    }

    /* Medium screens and up */
    @media only screen and (min-width: 768px) {
        .flap-wrapper {
            font-size: 5.5rem;
        }
    } 
</style>