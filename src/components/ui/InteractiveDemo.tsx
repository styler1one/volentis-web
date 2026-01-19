'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface Message {
  id: string;
  type: 'user' | 'ai';
  text: string;
  source?: string;
  confidence?: 'high' | 'medium';
}

interface InteractiveDemoProps {
  agent: 'hr' | 'legal' | 'compliance' | 'it' | 'finance' | 'international';
}

// Sample responses for each agent type
const sampleResponses: Record<string, Record<string, { answer: string; source: string }>> = {
  hr: {
    'vacation': {
      answer: 'Based on Article 7.2 of your Employment Contract and the CAO Section 4.1: Full-time employees are entitled to 25 vacation days per year. Part-time employees receive days pro-rata based on their contract hours. Unused days can be carried over to the next year (max 5 days) if used before April 1st.',
      source: 'Employee Handbook v3.1, Chapter 7 - Leave Policies'
    },
    'remote': {
      answer: 'Per the Remote Work Policy (v2.3, effective January 2025): Employees may work from home up to 3 days per week, subject to manager approval. Core office days are Tuesday and Thursday. Equipment allowance: €500 one-time for home office setup. VPN is required for accessing internal systems.',
      source: 'Remote Work Guidelines 2025, Section 2.1'
    },
    'parental': {
      answer: 'According to the HR Policy Handbook (Section 8.3) and the Parental Leave Act: You are entitled to 9 weeks of paid parental leave at 70% of your salary (capped at €250/day). Submit your request at least 2 months before the desired start date via the HR portal. Both parents can take leave.',
      source: 'Parental Leave Policy 2024, Article 12'
    },
    'expenses': {
      answer: 'Per the Expense Reimbursement Policy: Submit expenses within 30 days via the HR portal. Receipts required for amounts over €25. Manager approval needed for expenses over €100. Meals during travel: max €50/day. Mileage: €0.23/km. Processing time: 5 business days after approval.',
      source: 'Finance Policy Manual, Chapter 4.2 - Expense Claims'
    },
    'default': {
      answer: 'I can help you find information about HR policies, leave entitlements, benefits, and procedures. Could you please be more specific about what you\'d like to know? For example, you can ask about vacation days, remote work policy, parental leave, or expense reimbursement.',
      source: 'Employee Handbook v3.1'
    }
  },
  legal: {
    'payment': {
      answer: 'Based on the Standard Contract Terms (Section 5.1): Our standard payment term is 30 days net from invoice date. For contracts over €100,000, payment terms can be negotiated to 45 or 60 days with CFO approval. Late payment interest: 8% per annum above ECB base rate.',
      source: 'Standard Contract Terms v4.2, Section 5'
    },
    'liability': {
      answer: 'Per our Standard Terms (Section 9.2): Total liability is capped at the greater of (a) total fees paid in the 12 months preceding the claim, or (b) €1,000,000. Exclusions apply for: indirect damages, loss of profit, data loss. Professional indemnity insurance: €5M per occurrence.',
      source: 'Legal Risk Framework, Liability Caps Policy'
    },
    'termination': {
      answer: 'According to the Standard Contract Terms (Section 12): Either party may terminate with 90 days written notice. Termination for cause: 30 days notice with cure period. Upon termination: all unpaid fees become due, confidentiality obligations survive for 3 years.',
      source: 'Standard Contract Terms v4.2, Section 12'
    },
    'default': {
      answer: 'I can help you find information about contract terms, legal clauses, and compliance requirements. Please specify what you\'re looking for - such as payment terms, liability clauses, termination provisions, or confidentiality requirements.',
      source: 'Legal Document Repository'
    }
  },
  compliance: {
    'gdpr': {
      answer: 'Our GDPR obligations (as documented in the Data Protection Framework): We act as Data Controller for employee data and Data Processor for customer data. Key requirements: (1) Maintain processing records (Art. 30), (2) Conduct DPIAs for high-risk processing, (3) Report breaches within 72 hours, (4) Honor data subject rights within 30 days.',
      source: 'Data Protection Framework v2.1, GDPR Compliance Checklist'
    },
    'data-request': {
      answer: 'Per the Data Subject Rights Procedure: Log all requests in the DSR tracker within 24 hours. Identity verification required before processing. Response deadline: 30 days (extendable to 60 for complex requests). Escalate to DPO if: (a) request unclear, (b) involves third-party data, (c) potential legal implications.',
      source: 'GDPR Procedures Manual, Section 3 - Data Subject Rights'
    },
    'retention': {
      answer: 'According to the Data Retention Schedule: Employee records: 7 years after employment ends. Financial records: 10 years. Customer contracts: 7 years after termination. Marketing consents: until withdrawn plus 1 year. Audit logs: 3 years. Automated deletion runs monthly.',
      source: 'Data Retention Policy v3.0, Retention Schedule Appendix'
    },
    'default': {
      answer: 'I can help you with compliance questions about GDPR, data protection, audit requirements, and regulatory obligations. What specific compliance topic would you like to explore?',
      source: 'Compliance Policy Framework'
    }
  },
  it: {
    'password': {
      answer: 'Password Reset Procedure: (1) Go to password.company.com, (2) Click "Forgot Password", (3) Enter your work email, (4) Check your email for a reset link (valid 1 hour), (5) Create new password (min 12 chars, 1 uppercase, 1 number, 1 special). If locked out, contact IT Service Desk: ext. 5555.',
      source: 'IT Self-Service Guide, Section 2.1 - Account Management'
    },
    'vpn': {
      answer: 'VPN Setup (for remote work): (1) Download GlobalProtect from software.company.com, (2) Install with default settings, (3) Connect to vpn.company.com, (4) Login with your network credentials + MFA code. Troubleshooting: Ensure you\'re not on a restricted network. Contact IT if issues persist: it-support@company.com.',
      source: 'Remote Access Guide v2.0, VPN Configuration'
    },
    'software': {
      answer: 'Software Request Process: (1) Submit request via ServiceNow (service.company.com), (2) Include business justification and cost center, (3) Manager approval required for software >€100/year, (4) IT Security review for new vendors (5-10 days), (5) Deployment within 2 business days after approval.',
      source: 'IT Procurement Policy, Software Request Procedure'
    },
    'default': {
      answer: 'I can help you with IT questions about account access, software, hardware, network connectivity, and IT policies. What technical issue can I help you resolve?',
      source: 'IT Knowledge Base'
    }
  },
  finance: {
    'approval': {
      answer: 'Expense Approval Matrix: Up to €500: Direct manager. €500-€2,000: Department head. €2,000-€10,000: Finance director. €10,000+: CFO approval required. CAPEX requests follow separate process with business case requirement. All approvals tracked in SAP.',
      source: 'Finance Policy Manual, Chapter 3 - Authorization Limits'
    },
    'invoice': {
      answer: 'Invoice Submission Process: (1) Ensure PO number is on invoice, (2) Submit to invoices@company.com or upload to SAP portal, (3) Three-way match: PO, receipt, invoice, (4) Payment runs: Tuesday and Thursday, (5) Standard payment: 30 days. For urgent payments, contact accounts-payable@company.com.',
      source: 'Accounts Payable Procedure v2.3'
    },
    'procurement': {
      answer: 'Procurement Process: (1) Create purchase requisition in SAP, (2) For >€5,000: minimum 3 quotes required, (3) Preferred vendor list in Procurement Portal, (4) Contract review by Legal for >€25,000 or multi-year, (5) PO issued after all approvals. Lead time: 3-5 days for standard requests.',
      source: 'Procurement Policy, Section 4 - Vendor Selection'
    },
    'default': {
      answer: 'I can help you with finance questions about approvals, invoices, procurement, budgets, and expense policies. What financial matter can I assist with?',
      source: 'Finance Policy Manual'
    }
  },
  international: {
    'germany-parental': {
      answer: 'Parental Leave in Germany (Elternzeit): Both parents entitled to up to 3 years per child. Elterngeld (parental allowance): 65-67% of net income, max €1,800/month for 12-14 months. Can be taken flexibly until child turns 8. Employer must be notified 7 weeks in advance. Job protection guaranteed during leave.',
      source: 'Germany Country Guide v2024, Chapter 5 - Family Benefits'
    },
    'france-vacation': {
      answer: 'Vacation in France: Legal minimum: 25 working days (5 weeks) per year for full-time employees. Additional RTT days (Réduction du Temps de Travail) may apply based on collective agreement - typically 10-12 days. Main vacation period: May 1 - October 31. Employers must approve at least 12 consecutive days in summer.',
      source: 'France Country Guide v2024, Chapter 4 - Leave Entitlements'
    },
    'netherlands-notice': {
      answer: 'Notice Periods in Netherlands: Statutory minimum based on tenure: 0-5 years: 1 month, 5-10 years: 2 months, 10-15 years: 3 months, 15+ years: 4 months. Employer notice is 2x employee notice. Collective agreements may have different terms. Probation period notice: immediate to 1 month.',
      source: 'Netherlands Country Guide v2024, Chapter 8 - Termination'
    },
    'default': {
      answer: 'I can help you with HR policies and regulations across EU countries. I have information about Germany, France, Netherlands, Belgium, Spain, Italy, and more. Which country and topic would you like to know about?',
      source: 'International HR Policy Framework'
    }
  }
};

function getResponse(agent: string, question: string): { answer: string; source: string } {
  const agentResponses = sampleResponses[agent] || sampleResponses.hr;
  const q = question.toLowerCase();
  
  // Match keywords to responses
  if (agent === 'hr') {
    if (q.includes('vacation') || q.includes('holiday') || q.includes('days off') || q.includes('vakantie')) {
      return agentResponses['vacation'];
    }
    if (q.includes('remote') || q.includes('home') || q.includes('thuiswerk') || q.includes('wfh')) {
      return agentResponses['remote'];
    }
    if (q.includes('parental') || q.includes('parent') || q.includes('baby') || q.includes('ouderschaps')) {
      return agentResponses['parental'];
    }
    if (q.includes('expense') || q.includes('reimburse') || q.includes('onkosten') || q.includes('declaratie')) {
      return agentResponses['expenses'];
    }
  } else if (agent === 'legal') {
    if (q.includes('payment') || q.includes('term') || q.includes('betaling')) {
      return agentResponses['payment'];
    }
    if (q.includes('liability') || q.includes('limit') || q.includes('aansprakelijk')) {
      return agentResponses['liability'];
    }
    if (q.includes('terminat') || q.includes('notice') || q.includes('beëindig') || q.includes('opzeg')) {
      return agentResponses['termination'];
    }
  } else if (agent === 'compliance') {
    if (q.includes('gdpr') || q.includes('privacy') || q.includes('avg')) {
      return agentResponses['gdpr'];
    }
    if (q.includes('request') || q.includes('subject') || q.includes('verzoek')) {
      return agentResponses['data-request'];
    }
    if (q.includes('retention') || q.includes('bewaar') || q.includes('delete')) {
      return agentResponses['retention'];
    }
  } else if (agent === 'it') {
    if (q.includes('password') || q.includes('wachtwoord') || q.includes('reset') || q.includes('locked')) {
      return agentResponses['password'];
    }
    if (q.includes('vpn') || q.includes('remote') || q.includes('connect')) {
      return agentResponses['vpn'];
    }
    if (q.includes('software') || q.includes('install') || q.includes('app')) {
      return agentResponses['software'];
    }
  } else if (agent === 'finance') {
    if (q.includes('approval') || q.includes('limit') || q.includes('goedkeuring')) {
      return agentResponses['approval'];
    }
    if (q.includes('invoice') || q.includes('factuur') || q.includes('payment')) {
      return agentResponses['invoice'];
    }
    if (q.includes('procure') || q.includes('inkoop') || q.includes('vendor') || q.includes('purchase')) {
      return agentResponses['procurement'];
    }
  } else if (agent === 'international') {
    if (q.includes('germany') || q.includes('german') || q.includes('duits') || q.includes('eltern')) {
      return agentResponses['germany-parental'];
    }
    if (q.includes('france') || q.includes('french') || q.includes('frank')) {
      return agentResponses['france-vacation'];
    }
    if (q.includes('netherland') || q.includes('dutch') || q.includes('nederland')) {
      return agentResponses['netherlands-notice'];
    }
  }
  
  return agentResponses['default'];
}

export default function InteractiveDemo({ agent }: InteractiveDemoProps) {
  const t = useTranslations('tryAgent.interactiveDemo');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Get suggestions for this agent
  const suggestions = t.raw(`suggestions.${agent}`) as string[];

  // Auto-scroll when new messages appear
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: text.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    const response = getResponse(agent, text);
    
    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: 'ai',
      text: response.answer,
      source: response.source,
      confidence: 'high'
    };

    setIsTyping(false);
    setMessages(prev => [...prev, aiMessage]);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  return (
    <div className="bg-white rounded-2xl shadow-card border border-border-gray/20 overflow-hidden">
      {/* Chat Header */}
      <div className="bg-volentis-navy px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-volentis-cyan/20 rounded-full flex items-center justify-center">
            <span className="text-xl">
              {agent === 'hr' && '👥'}
              {agent === 'legal' && '⚖️'}
              {agent === 'compliance' && '🛡️'}
              {agent === 'it' && '💻'}
              {agent === 'finance' && '💰'}
              {agent === 'international' && '🌍'}
            </span>
          </div>
          <div>
            <p className="text-white font-medium">Volentis.ai {agent.toUpperCase()} Agent</p>
            <p className="text-white/60 text-xs">Interactive Demo</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-accent-success/20 rounded-full">
          <span className="w-2 h-2 bg-accent-success rounded-full animate-pulse" />
          <span className="text-accent-success text-xs font-medium">Online</span>
        </div>
      </div>

      {/* Chat Messages */}
      <div 
        ref={chatContainerRef}
        className="p-4 space-y-4 min-h-[400px] max-h-[500px] overflow-y-auto bg-bg-light"
      >
        {/* Welcome message */}
        {messages.length === 0 && (
          <div className="flex justify-start">
            <div className="max-w-[85%] bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-border-gray/10">
              <p className="text-sm text-text-dark">
                {t('description', { department: agent })}
              </p>
              <div className="mt-3 pt-3 border-t border-border-gray/20">
                <p className="text-xs text-text-muted mb-2">{t('suggestions.title')}</p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.slice(0, 3).map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="text-xs bg-volentis-cyan/10 text-volentis-cyan px-3 py-1.5 rounded-full hover:bg-volentis-cyan/20 transition-colors text-left"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Messages */}
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            {message.type === 'user' ? (
              <div className="max-w-[80%] bg-volentis-cyan text-white rounded-2xl rounded-br-md px-4 py-2.5">
                <p className="text-sm">{message.text}</p>
              </div>
            ) : (
              <div className="max-w-[85%] bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-border-gray/10">
                <p className="text-sm text-text-dark whitespace-pre-wrap">{message.text}</p>
                {message.source && (
                  <div className="mt-3 pt-3 border-t border-border-gray/20 flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent-success flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-xs text-accent-success font-medium">High confidence</p>
                      <p className="text-xs text-text-muted">{message.source}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-border-gray/10">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 bg-volentis-cyan/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-volentis-cyan/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-volentis-cyan/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}

        {/* More suggestions after conversation started */}
        {messages.length > 0 && messages.length < 4 && !isTyping && (
          <div className="flex justify-center pt-2">
            <div className="flex flex-wrap gap-2 justify-center max-w-md">
              {suggestions.slice(messages.length, messages.length + 2).map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="text-xs bg-white text-volentis-cyan px-3 py-1.5 rounded-full border border-volentis-cyan/20 hover:bg-volentis-cyan/5 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="px-4 py-3 border-t border-border-gray/20 bg-white">
        <div className="flex items-center gap-3">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('suggestions.title').replace(':', '...')}
            className="flex-1 bg-bg-light rounded-full px-4 py-2.5 text-sm text-text-dark placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-volentis-cyan/30 focus:bg-white transition-all"
            disabled={isTyping}
          />
          <button 
            type="submit"
            disabled={!input.trim() || isTyping}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              input.trim() && !isTyping
                ? 'bg-volentis-cyan text-white hover:bg-volentis-cyan-hover'
                : 'bg-volentis-cyan/30 text-white/50 cursor-not-allowed'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </form>

      {/* Disclaimer */}
      <div className="px-4 py-2 bg-amber-50 border-t border-amber-200">
        <p className="text-xs text-amber-800 text-center">
          {t('disclaimer')}
        </p>
      </div>
    </div>
  );
}
