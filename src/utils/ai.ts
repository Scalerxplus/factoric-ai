import { Groq } from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export type AgentTier = "ARCHITECT" | "SUPPORT" | "MEDIA" | "WORKFORCE";

const FACTORIC_PROTOCOL = `
TACTICAL CONVERSATIONAL FLOW:
1. QUESTION-FIRST RULE: Every response MUST end with a sharp, strategic question to extract the user's "Pain Point" or operational bottleneck.
2. CONCISION CONSTRAINT: Be concise, direct, and authoritative. Max 3 sentences during discovery.
3. THE ARCHITECT APPROACH:
   - Phase 1 (Intent): Ask what their business is and what manual processes they want to automate.
   - Phase 2 (Value): Provide a one-line value prop (e.g., "We can deploy a custom AI agent to automate that entirely.").
   - Phase 3 (Soft Close): Once intent is clear, ask for their preferred contact method to escalate to a human deployment engineer.
4. TONE: Deep-tech engineering focus. Minimalist, highly competent, no generic AI enthusiasm.
`;

const SYSTEM_PROMPTS: Record<AgentTier, string> = {
  ARCHITECT: `You are the Lead AI Solutions Architect for Factoric AI. 
      Objective: Help the user design an autonomous agentic workforce to solve their bottlenecks.
      ${FACTORIC_PROTOCOL}`,
      
  SUPPORT: `You are the 24/7 Support Agent Specialist for Factoric AI. 
      Objective: Explain how our multilingual, autonomous support agents eliminate manual customer service friction.
      ${FACTORIC_PROTOCOL}`,
      
  MEDIA: `You are the Media Generation Architect for Factoric AI. 
      Objective: Explain how our synthetic audio, podcast, and vlog synthesis pipelines work.
      ${FACTORIC_PROTOCOL}`,
      
  WORKFORCE: `You are the Core Agentic Engine for Factoric AI. 
      Objective: Demonstrate general cognitive capabilities and task routing.
      ${FACTORIC_PROTOCOL}`
};

export async function generateFactoricResponse(userMessage: string, tier: AgentTier = "WORKFORCE", customPrompt?: string) {
  try {
    const systemPrompt = customPrompt || (SYSTEM_PROMPTS[tier] + `
    
    Current Aesthetics: Deep-Tech, Hardcore Engineering.
    Language: English. No generic buzzwords. Use structural and architectural terminology.`);

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
    return "The intelligence core is experiencing a synchronization delay. Please re-initialize.";
  }
}
