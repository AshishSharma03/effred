import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Call Supabase REST API directly
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    const response = await fetch(`${supabaseUrl}/rest/v1/contact_submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${serviceRoleKey}`,
        apikey: serviceRoleKey!,
      },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        company: body.company,
        phone: body.phone,
        message: body.message,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Failed to save message" }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
