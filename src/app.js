document.querySelector("button").addEventListener("click", function() {
    let name = prompt("What what is your name?");
    let email = prompt("What is your email?");
    let emoji = prompt("What is your favorite emoji");
    alert(
        ` ${emoji} Thank you, ${name}! Check your email for your NeroMap Quiz! `
    );
});