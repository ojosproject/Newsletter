// newsletter.ts
// Ojos Project
// 
// A very simple script to update contributers of our project.

// Recipient metadata
interface Recipient {
    name: string,
    joined: Number,
    email: string,
    group: "TEAM"
}

interface Draft {
    recipient: string,
    subject: string,
    body: string,
    send(): number
}

// A sample class to make TypeScript happy.
class GmailApp {
    public static createDraft(recipient: string, subject: string, body: string): Draft {
        // Google does stuff in App Scripts

        return {"body": "", "recipient": "", "subject": "", send: () => 0}
    }
}

// Everything below here is what should go on the App Script.

const SUBSCRIBERS: Recipient[] = [
    {
        "name": "Carlos Valdez",
        "email": "cvaldezh@uci.edu",
        "joined": 0,
        "group": "TEAM"
    }
]

const NEWSLETTER_TITLE = "";
const NEWSLETTER_BODY = "";

function main() {
    SUBSCRIBERS.forEach(recipient => {
        let personalized_body = `Hi ${recipient.name}! We've got an update for you!\n\n${NEWSLETTER_BODY}`;

        GmailApp.createDraft(recipient.email, NEWSLETTER_TITLE, personalized_body).send();
    })
}