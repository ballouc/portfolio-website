// For some reason, use traditional HTML syntax.
export const windowData = [
    {
        title: "ABOUT",
        content: `<div>
            <p>This is my About Me section.</p>
        </div>`
    },
    {
        title: "WORK",
        content: `<div>
        <p>This is the section detailing my past work.</p>
        </div>`
    },
    {
        title: "CONTACT",
        content: `
        <div id="contact-container">
            <div id="contact-info">
                <h1 id="contact-name">Cam Ballou</h1>
                <p>cmbalbus@gmail.com</p>
            </div>
            <h1 id="form-header">Quick Connect</h1>
            <form id='contact-form'>
                <div id="contact-form-info">
                    <label for="contact-name">Your Name:</label>
                    <input id="contact-name" type="text" required></input>
                    <label for="contact-email">Your Email:</label>
                    <input id="contact-email" type="email" required></input>
                    <label for="contact-subject">Subject:</label>
                    <input id="contact-subject type="text" required></input>
                </div>
                <div id="contact-form-message">
                    <textarea id="contact-text" placeholder="Tell me what's on your mind" required></textarea>
                    <button id="contact-submit" class="large-btn">Send!</button>
                </div>
            </form>
        </div>`
    }
]