const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

/* SANIA AI TEST BACKEND */

app.post("/chat", (req, res) => {

    const message = (req.body.message || "").trim();

    if (!message) {
        return res.json({
            reply: "Radhey Radhey 🙏 Please type your message."
        });
    }

    let reply;

    const text = message.toLowerCase();

    if (text.includes("website") || text.includes("web")) {
        reply =
        "Radhey Radhey 🙏 Algorithm Pulse creates professional business websites. Our starting package is ₹10,000. Tell me what kind of business you have.";
    }

    else if (
        text.includes("social") ||
        text.includes("instagram") ||
        text.includes("facebook")
    ) {
        reply =
        "Radhey Radhey 🙏 Our social media management starts from ₹5,000/month. We can discuss your content and management requirements.";
    }

    else if (
        text.includes("price") ||
        text.includes("cost") ||
        text.includes("pricing") ||
        text.includes("kitna")
    ) {
        reply =
        "Radhey Radhey 🙏 Our starting prices are ₹5,000/month for social media management and ₹10,000 for business websites. Custom projects are quoted according to requirements.";
    }

    else if (
        text.includes("founder") ||
        text.includes("aaditya") ||
        text.includes("owner")
    ) {
        reply =
        "Radhey Radhey 🙏 Algorithm Pulse was founded by Aaditya Tiwari, Founder & CEO.";
    }

    else if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {
        reply =
        "Radhey Radhey 🙏 Welcome to Algorithm Pulse! I'm Sania AI. How can I help you today?";
    }

    else {
        reply =
        "Radhey Radhey 🙏 Thanks for contacting Algorithm Pulse! You can ask me about websites, social media management, branding, AI solutions, pricing, or our Founder.";
    }

    res.json({ reply });

});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Algorithm Pulse server running on http://localhost:${PORT}`);
});