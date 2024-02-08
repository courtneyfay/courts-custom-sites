<div class="services-wrapper">
    <h2>Services</h2>
    <div class="card-wrapper">
        <div class="card service-1">
            <div class="icon-wrapper">
                <img src="/moon-icon.svg" alt="icon of the moon"/>
            </div>
            <span class="service-type">Template Site</span>
            <span class="italicize">starting at</span>
            <span class="price">$1500</span>
        </div>
        <div class="card service-2">
            <div class="icon-wrapper">
                <img src="/stars-icon.svg" alt="icon of the stars"/>
            </div>
            <span class="service-type">Custom Site</span>
            <span class="italicize">starting at</span>
            <span class="price">$3000</span>       
        </div>
    </div>
</div>

<style>
    .services-wrapper {
        font-size: 1.75rem;
        text-align: center;
        padding: 6%;
    }

    .card-wrapper {
        width: 100%;
        /* how to keep it from looking pixelated */
        background-image: url("services-background.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        height: 50vh;
        background-blend-mode: multiply;

        position: relative;
    }

    .card {
        width: 20%;
        /* 18 */
        height: 65%;
        /* 62%; */
        border-radius: 50%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .service-1 {
        background-color: #3AB8A9;
        position: absolute;
        top: 17%;
        left: 25%;
    }

    .service-2 {
        background-color: #E63946;
        position: absolute;
        top: 17%;
        right: 25%;
    }

    .service-type {
        font-size: 2.5rem;
    }

    .italicize {
        font-style: italic;
        font-size: 1rem;
    }

    .price {
        font-size: 2rem;
        font-family: "Hedvig Letters Sans", sans-serif;
        font-weight: 700;
        color: #FFF9EB;
    }

    .icon-wrapper {
        width: 25%;
    }

     /* styling for extra-large screens */
    @media only screen and (min-width: 1500px) {
        .card {
            width: 18%;
            height: 62%;
        }

        .service-1 {
            top: 18%;
            left: 27%;
        }

        .service-2 {
            top: 18%;
            right: 27%;
        }
    }
</style>