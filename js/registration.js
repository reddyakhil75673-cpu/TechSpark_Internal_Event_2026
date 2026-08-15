/* ===========================================================
   TECHSPARK 2026
   REGISTRATION SYSTEM
=========================================================== */


/* ===========================================================
   ELEMENTS
=========================================================== */

const form = document.getElementById("registrationForm");

const steps = document.querySelectorAll(".step");

const progressSteps =
    document.querySelectorAll(".progress-step");

const eventCards =
    document.querySelectorAll(".event-card");

const teamContainer =
    document.getElementById("teamContainer");

const paymentSection =
    document.getElementById("paymentSection");

const reviewContainer =
    document.getElementById("reviewContainer");


/* ===========================================================
   BUTTONS
=========================================================== */

const next1 =
    document.getElementById("next1");

const prevStep2 =
    document.getElementById("prevStep2");

const nextStep2 =
    document.getElementById("nextStep2");

const prevStep3 =
    document.getElementById("prevStep3");

const nextStep3 =
    document.getElementById("nextStep3");

const prevStep4 =
    document.getElementById("prevStep4");

const submitBtn =
    document.getElementById("submitBtn");


/* ===========================================================
   HIDDEN FIELDS
=========================================================== */

const selectedEventInput =
    document.getElementById("selectedEvent");

const teamSizeInput =
    document.getElementById("teamSize");

const registrationFeeInput =
    document.getElementById("registrationFee");


/* ===========================================================
   STATE
=========================================================== */

let currentStep = 0;

let selectedEvent = null;

let teamSize = 1;

let registrationFee = 0;


/* ===========================================================
   SHOW STEP
=========================================================== */

function showStep(index) {

    /* Hide every step */

    steps.forEach(step => {

        step.classList.remove("active");
        step.style.display = "none";

    });


    /* Reset progress */

    progressSteps.forEach(step => {

        step.classList.remove("active");

    });


    /* Safety check */

    if (!steps[index]) {

        console.error(
            "Registration step not found:",
            index
        );

        return;

    }


    /* Show only requested step */

    steps[index].classList.add("active");
    steps[index].style.display = "block";


    /* Activate progress indicators */

    for (let i = 0; i <= index; i++) {

        if (progressSteps[i]) {

            progressSteps[i].classList.add("active");

        }

    }


    currentStep = index;

}


/* ===========================================================
   STEP 1 VALIDATION
=========================================================== */

function validateStep1() {

    const requiredFields = [

        "fullName",
        "rollNumber",
        "college",
        "course",
        "year",
        "mobile",
        "email"

    ];


    let valid = true;


    requiredFields.forEach(id => {

        const input =
            document.getElementById(id);


        if (!input) return;


        input.classList.remove("error");


        if (input.value.trim() === "") {

            valid = false;

            input.classList.add("error");

        }

    });


    const mobile =
        document.getElementById("mobile");


    if (
        mobile &&
        !/^[6-9]\d{9}$/.test(
            mobile.value.trim()
        )
    ) {

        valid = false;

        mobile.classList.add("error");

    }


    const email =
        document.getElementById("email");


    if (
        email &&
        !/^\S+@\S+\.\S+$/.test(
            email.value.trim()
        )
    ) {

        valid = false;

        email.classList.add("error");

    }


    return valid;

}


/* ===========================================================
   EVENT SELECTION
=========================================================== */

eventCards.forEach(card => {

    card.addEventListener("click", function () {

        /* Remove previous selection */

        eventCards.forEach(item => {

            item.classList.remove("selected");

        });


        /* Select clicked card */

        this.classList.add("selected");


        /* Read event data */

        selectedEvent =
            this.dataset.event;


        teamSize =
            Number(this.dataset.team);


        registrationFee =
            Number(this.dataset.fee);


        /* Store selected values */

        if (selectedEventInput) {

            selectedEventInput.value =
                selectedEvent;

        }


        if (teamSizeInput) {

            teamSizeInput.value =
                teamSize;

        }


        if (registrationFeeInput) {

            registrationFeeInput.value =
                registrationFee;

        }


        console.log(
            "Selected Event:",
            selectedEvent
        );

        console.log(
            "Team Size:",
            teamSize
        );

        console.log(
            "Registration Fee:",
            registrationFee
        );

    });

});



/* ===========================================================
   STEP 1 → STEP 2
=========================================================== */

next1.addEventListener("click", () => {


    if (!validateStep1()) {

        alert(
            "Please complete all required fields correctly."
        );

        return;

    }


    showStep(1);

});


/* ===========================================================
   STEP 2 → STEP 1
=========================================================== */

prevStep2.addEventListener("click", () => {

    showStep(0);

});


/* ===========================================================
   STEP 2 VALIDATION
=========================================================== */

function validateStep2() {


    if (!selectedEvent) {

        alert(
            "Please select one competition."
        );

        return false;

    }


    return true;

}


/* ===========================================================
   GENERATE TEAM FIELDS
=========================================================== */

function generateTeamFields() {


    teamContainer.innerHTML = "";


    /* ===========================
       INDIVIDUAL
    =========================== */

    if (teamSize === 1) {

        const card =
            document.createElement("div");


        card.className =
            "team-card";


        card.innerHTML = `

            <h3>Individual Participant</h3>

            <p>
                No additional team members are required.
            </p>

        `;


        teamContainer.appendChild(card);


        return;

    }


    /* ===========================
       TEAM
    =========================== */

    for (
        let i = 2;
        i <= teamSize;
        i++
    ) {


        const card =
            document.createElement("div");


        card.className =
            "team-card";


        card.innerHTML = `

            <h3>Team Member ${i}</h3>

            <div class="form-grid">

                <div class="input-box">

                    <label>
                        Full Name
                    </label>

                    <input
                        type="text"
                        class="member-name"
                        placeholder="Member ${i} Name"
                        required>

                </div>


                <div class="input-box">

                    <label>
                        Roll Number
                    </label>

                    <input
                        type="text"
                        class="member-roll"
                        placeholder="Member ${i} Roll No"
                        required>

                </div>


                <div class="input-box">

                    <label>
                        Mobile Number
                    </label>

                    <input
                        type="tel"
                        maxlength="10"
                        class="member-mobile"
                        placeholder="Member ${i} Mobile"
                        required>

                </div>


                <div class="input-box">

                    <label>
                        Email
                    </label>

                    <input
                        type="email"
                        class="member-email"
                        placeholder="Member ${i} Email"
                        required>

                </div>

            </div>

        `;


        teamContainer.appendChild(card);

    }

}


/* ===========================================================
   STEP 2 → STEP 3
=========================================================== */

nextStep2.addEventListener("click", () => {


    if (!validateStep2()) {

        return;

    }


    generateTeamFields();


    showStep(2);

});


/* ===========================================================
   STEP 3 → STEP 2
=========================================================== */

prevStep3.addEventListener("click", () => {

    showStep(1);

});


/* ===========================================================
   TEAM VALIDATION
=========================================================== */

function validateTeam() {


    if (teamSize === 1) {

        return true;

    }


    const names =
        document.querySelectorAll(
            ".member-name"
        );


    const rolls =
        document.querySelectorAll(
            ".member-roll"
        );


    const mobiles =
        document.querySelectorAll(
            ".member-mobile"
        );


    const emails =
        document.querySelectorAll(
            ".member-email"
        );


    let valid = true;


    /* ===========================
       NAME
    =========================== */

    names.forEach(input => {

        input.classList.remove("error");


        if (
            input.value.trim() === ""
        ) {

            valid = false;

            input.classList.add("error");

        }

    });


    /* ===========================
       ROLL
    =========================== */

    rolls.forEach(input => {

        input.classList.remove("error");


        if (
            input.value.trim() === ""
        ) {

            valid = false;

            input.classList.add("error");

        }

    });


    /* ===========================
       MOBILE
    =========================== */

    mobiles.forEach(input => {

        input.classList.remove("error");


        if (
            !/^[6-9]\d{9}$/.test(
                input.value.trim()
            )
        ) {

            valid = false;

            input.classList.add("error");

        }

    });


    /* ===========================
       EMAIL
    =========================== */

    emails.forEach(input => {

        input.classList.remove("error");


        if (
            !/^\S+@\S+\.\S+$/.test(
                input.value.trim()
            )
        ) {

            valid = false;

            input.classList.add("error");

        }

    });


    return valid;

}


/* ===========================================================
   COLLECT TEAM MEMBERS
=========================================================== */

function collectTeamMembers() {


    if (teamSize === 1) {

        return [];

    }


    const names =
        document.querySelectorAll(
            ".member-name"
        );


    const rolls =
        document.querySelectorAll(
            ".member-roll"
        );


    const mobiles =
        document.querySelectorAll(
            ".member-mobile"
        );


    const emails =
        document.querySelectorAll(
            ".member-email"
        );


    const members = [];


    for (
        let i = 0;
        i < names.length;
        i++
    ) {

        members.push({

            name:
                names[i].value.trim(),

            rollNumber:
                rolls[i].value.trim(),

            mobile:
                mobiles[i].value.trim(),

            email:
                emails[i].value.trim()

        });

    }


    return members;

}


/* ===========================================================
   REVIEW
=========================================================== */

function loadReview() {


    const fullName =
        document.getElementById(
            "fullName"
        ).value;


    const rollNumber =
        document.getElementById(
            "rollNumber"
        ).value;


    const college =
        document.getElementById(
            "college"
        ).value;


    const course =
        document.getElementById(
            "course"
        ).value;


    const year =
        document.getElementById(
            "year"
        ).value;


    const mobile =
        document.getElementById(
            "mobile"
        ).value;


    const email =
        document.getElementById(
            "email"
        ).value;


    reviewContainer.innerHTML = `

        <div class="review-card">

            <h3>
                Participant Details
            </h3>


            <div class="review-row">

                <span class="review-label">
                    Name
                </span>

                <span class="review-value">
                    ${escapeHtml(fullName)}
                </span>

            </div>


            <div class="review-row">

                <span class="review-label">
                    Roll No
                </span>

                <span class="review-value">
                    ${escapeHtml(rollNumber)}
                </span>

            </div>


            <div class="review-row">

                <span class="review-label">
                    College
                </span>

                <span class="review-value">
                    ${escapeHtml(college)}
                </span>

            </div>


            <div class="review-row">

                <span class="review-label">
                    Course
                </span>

                <span class="review-value">
                    ${escapeHtml(course)}
                </span>

            </div>


            <div class="review-row">

                <span class="review-label">
                    Year
                </span>

                <span class="review-value">
                    ${escapeHtml(year)}
                </span>

            </div>


            <div class="review-row">

                <span class="review-label">
                    Mobile
                </span>

                <span class="review-value">
                    ${escapeHtml(mobile)}
                </span>

            </div>


            <div class="review-row">

                <span class="review-label">
                    Email
                </span>

                <span class="review-value">
                    ${escapeHtml(email)}
                </span>

            </div>


            <h3>
                Competition Details
            </h3>


            <div class="review-row">

                <span class="review-label">
                    Competition
                </span>

                <span class="review-value">
                    ${escapeHtml(selectedEvent)}
                </span>

            </div>


            <div class="review-row">

                <span class="review-label">
                    Team Size
                </span>

                <span class="review-value">
                    ${teamSize}
                </span>

            </div>


            <div class="review-row">

                <span class="review-label">
                    Registration Fee
                </span>

                <span class="review-value">
                    ${
                        registrationFee === 0
                            ? "FREE"
                            : "₹" + registrationFee + " / Team"
                    }
                </span>

            </div>

        </div>

    `;

}


/* ===========================================================
   ESCAPE HTML
=========================================================== */

function escapeHtml(value) {

    return String(value)

        .replaceAll("&", "&amp;")

        .replaceAll("<", "&lt;")

        .replaceAll(">", "&gt;")

        .replaceAll('"', "&quot;")

        .replaceAll("'", "&#039;");

}


/* ===========================================================
   STEP 3 → STEP 4
=========================================================== */

nextStep3.addEventListener("click", () => {


    if (!validateTeam()) {

        alert(
            "Please complete all team member details correctly."
        );

        return;

    }


    /* ===========================
       PAYMENT CONDITION
    =========================== */

    if (registrationFee > 0) {

        paymentSection.style.display =
            "block";

    } else {

        paymentSection.style.display =
            "none";

    }


    loadReview();


    showStep(3);

});


/* ===========================================================
   STEP 4 → STEP 3
=========================================================== */

prevStep4.addEventListener("click", () => {

    showStep(2);

});


/* ===========================================================
   PAYMENT SCREENSHOT VALIDATION
=========================================================== */

function validatePayment() {


    /* FREE COMPETITIONS */

    if (registrationFee === 0) {

        return true;

    }


    const screenshot =
        document.getElementById(
            "paymentScreenshot"
        );


    if (
        !screenshot ||
        !screenshot.files ||
        screenshot.files.length === 0
    ) {

        alert(
            "Please upload the payment screenshot."
        );

        return false;

    }


    const file =
        screenshot.files[0];


    if (
        !file.type.startsWith("image/")
    ) {

        alert(
            "Please upload a valid image file."
        );

        return false;

    }


    const maxSize =
        5 * 1024 * 1024;


    if (file.size > maxSize) {

        alert(
            "Payment screenshot must be less than 5 MB."
        );

        return false;

    }


    return true;

}


/* ===========================================================
   SUCCESS PAGE
=========================================================== */

const successPage =
    document.getElementById(
        "successPage"
    );


const registrationIdElement =
    document.getElementById(
        "registrationId"
    );


const qrCodeContainer =
    document.getElementById(
        "qrCode"
    );


/* ===========================================================
   REGISTRATION ID
=========================================================== */

function generateRegistrationId() {


    const random =
        Math.floor(
            1000 +
            Math.random() * 9000
        );


    return `TS2026-${random}`;

}


/* ===========================================================
   QR CODE
=========================================================== */

function generateQRCode(id) {


    qrCodeContainer.innerHTML = "";


    if (
        typeof QRCode === "undefined"
    ) {

        console.error(
            "QRCode library is not loaded."
        );

        return;

    }


    QRCode.toCanvas(

        id,

        {

            width: 220,

            margin: 2

        },


        function(error, canvas) {


            if (error) {

                console.error(error);

                return;

            }


            qrCodeContainer.appendChild(
                canvas
            );

        }

    );

}


/* ===========================================================
   FORM SUBMIT
=========================================================== */

form.addEventListener(
    "submit",
    async function(e) {


        e.preventDefault();


        if (!validatePayment()) {

            return;

        }


        submitBtn.classList.add(
            "btn-loading"
        );


        submitBtn.disabled = true;


        const registrationId =
            generateRegistrationId();


        const teamMembers =
            collectTeamMembers();


        const data = {

            registrationId,

            fullName:
                document.getElementById(
                    "fullName"
                ).value.trim(),

            rollNumber:
                document.getElementById(
                    "rollNumber"
                ).value.trim(),

            college:
                document.getElementById(
                    "college"
                ).value.trim(),

            course:
                document.getElementById(
                    "course"
                ).value.trim(),

            year:
                document.getElementById(
                    "year"
                ).value.trim(),

            mobile:
                document.getElementById(
                    "mobile"
                ).value.trim(),

            email:
                document.getElementById(
                    "email"
                ).value.trim(),

            event:
                selectedEvent,

            teamSize,

            fee:
                registrationFee,

            teamMembers

        };


        try {


            /* ===========================
               GOOGLE SHEETS
            =========================== */

            if (
                typeof submitRegistration ===
                "function"
            ) {

                await submitRegistration(
                    data
                );

            }


            /* ===========================
               SUCCESS
            =========================== */

            registrationIdElement.textContent =
                registrationId;


            generateQRCode(
                registrationId
            );


            /* ===========================
               RESET
            =========================== */

            form.reset();


            eventCards.forEach(card => {

                card.classList.remove(
                    "selected"
                );

            });


            teamContainer.innerHTML = "";

            reviewContainer.innerHTML = "";


            selectedEvent = null;

            teamSize = 1;

            registrationFee = 0;


            if (selectedEventInput) {

                selectedEventInput.value =
                    "";

            }


            if (teamSizeInput) {

                teamSizeInput.value =
                    "";

            }


            if (registrationFeeInput) {

                registrationFeeInput.value =
                    "";

            }


            paymentSection.style.display =
                "none";


            /* ===========================
               SHOW SUCCESS
            =========================== */

            successPage.classList.add(
                "show"
            );


            successPage.style.display =
                "flex";


        }


             catch (error) {

            console.error(
                "Registration Error:",
                error
            );

            alert(
                "Registration failed.\n\n" +
                "Please try again."
            );

        } finally {

            submitBtn.classList.remove(
                "btn-loading"
            );

            submitBtn.disabled = false;

        }
    }
); 