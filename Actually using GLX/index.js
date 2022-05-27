import {

    start,
    vr,
    styles,
    font,
    color,
    p,
    html,
    head,
    nullify

} from "../compile.js";
import {
    writeFileSync
} from "fs";
// All functions used.
const info = {
    name: "Transcript for xXNoobSlayerXx",
    info: [
        "xXNoobSlayerXx: Hello!",
        "User: Hi!",
        "xXNoobSlayerXx: How are you?",
        "User: Fine, thanks! How are you?",
        "xXNoobSlayerXx: I'm good, thanks!",
        "User: How was your day?",
        "xXNoobSlayerXx: I had McDonald's for lunch today.",
        "User: Must've tasted good."
    ]
}
let transcript = '';
for(let i = 0; i < info.info.length; i++) {
    transcript += await start({}, {
        0: vr("stylses", styles({
            0: font("Arial, sans-serif"),
            1: color("black"),
        })),
        1: p(info.info[i], vr("stylses")),
    }, {
        "noTemplate": true,
    })
    nullify();
}
let endhtml = start({
    0: head("<title>" + info.name + "</title>"),
}, {
    0: html(transcript)
})
nullify();

writeFileSync("./transcript.html", endhtml);
