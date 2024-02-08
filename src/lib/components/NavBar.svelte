<script>
    import CTAButton from '$lib/components/CTAButton.svelte'
</script>

<div class="nav-bar">
    <div class="logo-wrapper">
        <img src="/logo.svg" alt="court's custom sites logo" />
    </div>
    <div class="cta-button-wrapper">
        <CTAButton />
    </div>
</div>


<style>
    .nav-bar {
        /* styles */
        z-index: 3;
        background-color: #FFF9EB;

        /* organizes the logo and CTA button */
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;

        /* makes it a sticky nav bar */
        position: fixed;
        top: 0;
        width: 100%;
    }

    .logo-wrapper {
        width: 150px;
        padding: 1.25% 0 1.25% 1.75%;
    }

    .cta-button-wrapper {
        padding-right: 2%;
    }
</style>