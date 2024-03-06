<div class="about">
    <div class="welcome-wrapper">
        <h2 class="welcome">Hey beautiful people!</h2>
    </div>
    <div class="description-wrapper">
        <h3>I'm Courtney Noyes.</h3>
        <p>
            <a class="link" target="_blank" href="https://www.linkedin.com/in/courtneynoyes/">
                Software engineer,
            </a>
            <br />
            and founder of Court's Custom Sites.
        </p>
        <p>I build one-of-a-kind websites <br />
            for folks who value bespoke marketing and <br />
            need more pizzazz than the average WordPress template.</p>
        <p>I love using 3D, <br />
            sound effects, <br />
            animations, <br />
            and crazy colors <br />
            to help your unique style stand out.</p>
    </div>

    <div class="headshot-wrapper">
        <img class="headshot" src="/guitar-headshot.jpg" alt="Court playing the guitar"/>
    </div>
</div>

<style>
    .about {
        background-color: #3AB8A9;
        font-size: 1.75rem;
        padding: 6%;
        text-align: center;
        display: flex;
        flex-direction: column;
    }
    .welcome-wrapper {
        order: 1;
    }
    .description-wrapper {
        background-color: #3AB8A9;
        order: 3;
    }
    .description-wrapper h3 {
        margin: 0;
    }
    .welcome {
        background-color: #3AB8A9;
    }
    .link {
        color: #FFF9EB;
    }
    .headshot-wrapper {
        order: 2;
    }
    .headshot {
        width: 75%;
        border-radius: 2%;
    }

    /* Laptop screens and up */
    @media only screen and (min-width: 1224px) {
        .about {
            height: 100%;
            text-align: right;
            position: relative;
        }
        .welcome-wrapper {
            position: absolute;
            top: 5%;
            left: 33%;
        }
        .description-wrapper {
            position: absolute;
            top: 21%;
            left: 0;
        }
        .headshot {
            width: 50%;
        }
    }

    /* Slightly larger Laptop screens and up */
    @media only screen and (min-width: 1300px) {
        .description-wrapper {
            left: 4%;
        }
    }

    /* Large screens and up */
    @media only screen and (min-width: 1500px) {
        .welcome-wrapper {
            top: 10%;
            left: 37%;
        }

        .description-wrapper {
            left: 8%;
        }
    }

    /* Extra-large screens and up */
    @media only screen and (min-width: 1700px) {
        .description-wrapper {
            left: 16%;
        }
    }
</style>