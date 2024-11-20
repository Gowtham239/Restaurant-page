// aboutUsPage.js

const leftDiv = [
    {
        timings: "Mon & Tue CLOSED"
    },
    {
        timings: "Wednesday 10.00 - 24.00"
    },
    {
        timings: "Thursday 10:00 - 24:00"
    }
];

const rightDiv = [
    {
        timings: "Mon & Tue CLOSED"
    },
    {
        timings: "Wednesday 10.00 - 24.00"
    },
    {
        timings: "Thursday 10:00 - 24:00"
    }
];


function aboutUs(content) {
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    document.body.style.background = "none";
    document.body.style.backgroundColor = "#f44336";

    content.innerHTML = "";

    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("aboutDiv");
    content.appendChild(aboutDiv);

    const aboutTitle = document.createElement("h1");
    aboutTitle.classList.add("aboutTitle")
    aboutTitle.textContent = "ABOUT US";
    aboutDiv.appendChild(aboutTitle);

    const aboutusEl = document.createElement("p");
    aboutusEl.classList.add("aboutUsEl");
    aboutusEl.textContent = "The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    content.appendChild(aboutusEl);

    const openingHours = document.createElement("h1");
    openingHours.classList.add("openingHors");
    openingHours.textContent = "Opening Hours";
    content.appendChild(openingHours);

    const timingsDiv = document.createElement("div");
    timingsDiv.classList.add("timingsDiv");
    content.appendChild(timingsDiv);

    const left = document.createElement("div");
    left.classList.add("left");
    timingsDiv.appendChild(left);

    leftDiv.forEach(days => {
        const day = document.createElement("p");
        day.classList.add("day");
        day.textContent = days.timings;
        left.appendChild(day);
    });

    const right = document.createElement("div");
    right.classList.add("right");
    timingsDiv.appendChild(right);

    rightDiv.forEach(days => {
        const day = document.createElement("p");
        day.classList.add("day");
        day.textContent = days.timings;
        right.appendChild(day);
    });


}

export default aboutUs;