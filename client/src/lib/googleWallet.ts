import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";

const credentialsPath = path.join(process.cwd(), "keys/genai-pass.json");
const credentials = JSON.parse(fs.readFileSync(credentialsPath, "utf-8"));

export function generateWalletJWT(userId: string) {
  const issuerId = process.env.GOOGLE_WALLET_ISSUER_ID;
  const classId = process.env.GOOGLE_WALLET_CLASS_ID;

const payload = {
  iss: credentials.client_email,
  aud: "google",
  typ: "savetowallet",
  payload: {
  eventTicketObjects: [
    {
      id: "3388000000022958554.ayush18",
      classId: "3388000000022958554.AYUSHKATRE",
      state: "ACTIVE",
      ticketHolderName: "Ayush Katre",
      ticketNumber: "ayush18",
      barcode: {
        type: "QR_CODE",
        value: "ayush2025"
      }
    }
  ]
}

};




  const token = jwt.sign(payload, credentials.private_key, {
    algorithm: "RS256",
    header: { kid: credentials.private_key_id }
  } as jwt.SignOptions);

  return `https://pay.google.com/gp/v/save/${token}`;
}
