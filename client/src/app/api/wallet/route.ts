import { NextResponse } from "next/server";
import { generateWalletJWT } from "@/src/lib/googleWallet";

export async function POST(req: Request) {
  const { userId } = await req.json();

  if (!userId) {
    return NextResponse.json({ error: "Missing userId" }, { status: 400 });
  }

  try {
    const saveUrl = generateWalletJWT(userId);
    return NextResponse.json({ saveUrl });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to generate Wallet pass" }, { status: 500 });
  }
}
