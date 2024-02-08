<script>
    import CTAButton from '$lib/components/CTAButton.svelte'

    const year = new Date().getFullYear()
</script>

<div class="footer">
    <CTAButton />
    <div class="social">
        <a target="_blank" href="https://www.linkedin.com/in/courtneynoyes/">
            <div class="icon-wrapper">
                <img src="/linked-in-icon.svg" alt="icon of linked in"/>
            </div>
        </a>
        <p>© { year } Court's Custom Sites. Website by Courtney Noyes.</p>
    </div>
</div>

<style>
    .footer {
        text-align: center;
        margin: 0 10%;
        font-size: 2rem;
    }
    .social {
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
    }
    .icon-wrapper {
        width: 45px;
    }

    /* Tablet screens and up */
    @media only screen and (min-width: 768px) {
        .social {
            flex-direction: row;
        }
    } 
</style>