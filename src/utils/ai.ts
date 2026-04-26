import { Groq } from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export type BOSTier = "M" | "X" | "Z" | "WORKFORCE";

const ANTIGRAVITY_PROTOCOL = `
TACTICAL CONVERSATIONAL FLOW (ANTIGRAVITY):
1. QUESTION-FIRST RULE: Every response MUST end with a sharp, strategic question to extract the user's "Pain Point". 
2. CONCISION CONSTRAINT: Be concise. Be suave. Be lethal. Max 3 sentences during discovery. Cut text volume to 25%.
3. THE 007 APPROACH:
   - Phase 1 (Intent): Ask what their business is and what automation problem they want to solve.
   - Phase 2 (Value): Provide a one-line McKinsey-style value prop (e.g., "We can reduce your lead response time by 90%").
   - Phase 3 (Soft Close): Once intent is clear, ask for Name/Number to "escalate to a human strategist for a tailored ROI projection."
4. LEAD SCORING LOGIC:
   - Budget/Deadline mentioned -> Label as [HOT].
   - Pricing only -> Label as [WARM].
   - "Just looking" -> Label as [COLD].
5. TONE: Intellectual superior, matte, business-focused. No generic AI enthusiasm.
`;

const SYSTEM_PROMPTS: Record<BOSTier, string> = {
  M: `You are the Lead Architectural Consultant for Factoric BOS M (Precision Marketing). 
      Objective: Optimize top-of-funnel logic and lead triage.
      ${ANTIGRAVITY_PROTOCOL}`,
      
  X: `You are the Senior Revenue Architect for Factoric BOS X (Growth Acceleration). 
      Objective: Identify and eliminate capital leakage.
      ${ANTIGRAVITY_PROTOCOL}`,
      
  Z: `You are the Sovereign Infrastructure Partner for Factoric BOS Z (The Ultimate Engine). 
      Objective: Total structural preservation and autonomous governance.
      ${ANTIGRAVITY_PROTOCOL}`,
      
  WORKFORCE: `You are the Chief Operational Engine for Factoric Workforce. 
      Objective: Task-specific neural routing and cognitive labor optimization.
      ${ANTIGRAVITY_PROTOCOL}`
};

export async function generateFactoricResponse(userMessage: string, tier: BOSTier = "WORKFORCE") {
  try {
    const systemPrompt = SYSTEM_PROMPTS[tier] + `
    
    Current Aesthetics: Anthropic/Claude Minimalist, Obsidian & Parchment.
    Language: English. No generic buzzwords. Use structural terminology.`;

    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage }
      ],
      model: process.env.NEXT_PUBLIC_GROQ_MODEL || "llama-3.1-8b-instant",
      temperature: 0.5,
    });

    return completion.choices[0]?.message?.content || "";
  } catch (error) {
    console.error("Factoric AI Logic Error:", error);
    return "The structural hub is experiencing a synchronization delay. Please re-initialize.";
  }
}
