export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  const { name, email, projectType, budget, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' })
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email' })
  }

  const subject = `New portfolio inquiry — ${name} — ${projectType || 'General'} (${budget || 'No budget'})`

  // 1) Try Resend if configured (most reliable, no activation needed)
  // Set RESEND_API_KEY and RESEND_FROM in Vercel env vars
  // Example FROM: "Portfolio <onboarding@resend.dev>" or your verified domain
  if (process.env.RESEND_API_KEY) {
    try {
      const from = process.env.RESEND_FROM || 'Portfolio <onboarding@resend.dev>'
      const to = 'samiula015@gmail.com'
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject,
          html: `
            <h2>New message from portfolio</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Project:</strong> ${projectType || '-'}</p>
            <p><strong>Budget:</strong> ${budget || '-'}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space:pre-wrap;background:#f6f6f6;padding:16px;border-radius:8px">${String(message).replace(/</g, '&lt;')}</p>
            <hr/><p style="font-size:12px;color:#888">Sent from sium-rho.vercel.app contact form — reply directly to ${email}</p>
          `,
        }),
      })
      const data = await r.json().catch(() => ({}))
      if (r.ok) {
        return res.status(200).json({ success: true, via: 'resend', id: data.id })
      }
      console.error('Resend error', data)
      // fall through to FormSubmit
    } catch (e) {
      console.error('Resend exception', e)
    }
  }

  // 2) Fallback: FormSubmit AJAX (free, automatic after one-time activation)
  // First submission to FormSubmit will send activation email to samiula015@gmail.com — click once, then all future messages arrive automatically.
  try {
    const formRes = await fetch('https://formsubmit.co/ajax/samiula015@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name,
        email,
        projectType: projectType || 'Not specified',
        budget: budget || 'Not specified',
        message,
        _subject: subject,
        _template: 'table',
        _captcha: 'false',
        _replyto: email,
        _autoresponse: `Hi ${name}, thanks for reaching out! I received your message and will reply within 4 hours. — Samiul Alim Syium`,
      }),
    })
    const data = await formRes.json().catch(() => ({}))
    if (formRes.ok && data.success !== 'false') {
      return res.status(200).json({ success: true, via: 'formsubmit' })
    }
    console.error('FormSubmit error', data)
    throw new Error(data.message || 'FormSubmit failed')
  } catch (e) {
    console.error('Contact API final error', e)
    return res.status(500).json({ success: false, message: e.message || 'Failed to send' })
  }
}
