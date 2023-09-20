import { OAuth2Client } from "google-auth-library";


const OAUTH2_CLIENT_ID = "122781582272-ljevkghh7p0ci5l3eibekgel37uvqvta.apps.googleusercontent.com";
const OAUTH2_CLIENT_SECRET = "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";
const OAUTH2_REDIRECT_URL = "http://localhost:3000/oauth2callback";

const oauth2Client = new OAuth2Client(
    OAUTH2_CLIENT_ID,
    OAUTH2_CLIENT_SECRET,
    OAUTH2_REDIRECT_URL
);

export async function getTokens(code) {
    const { tokens } = await oauth2Client.getToken(code);
    return tokens;
}

export function generateAuthUrl() {
    const authorizeUrl = oauth2Client.generateAuthUrl({
        access_type: "offline",
        scope: "https://www.googleapis.com/auth/spreadsheets",
    });

    return authorizeUrl;
}