import { Webhooks } from "@octokit/webhooks";

if (!process.env.WEBHOOK_SECRET) {
    throw new Error("Missing WEBHOOK_SECRET in .env");
}

export const webhooks = new Webhooks({
    secret: process.env.WEBHOOK_SECRET,
});

webhooks.on("pull_request.opened", async ({ payload }) => {
    console.log(`[PR opened] ${payload.pull_request.html_url}`);
});

webhooks.onError((error) => {
    console.log("Webhooks error:", error.message);
});