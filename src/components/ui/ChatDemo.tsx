'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function ChatDemo() {
  const t = useTranslations('hero.chatDemo');
  const [showUserMessage, setShowUserMessage] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [showAiResponse, setShowAiResponse] = useState(false);
  const [typedResponse, setTypedResponse] = useState('');
  
  const aiResponse = t('aiResponse');

  useEffect(() => {
    // Show user message after 500ms
    const userTimer = setTimeout(() => setShowUserMessage(true), 500);
    
    // Show typing indicator after 1.5s
    const typingTimer = setTimeout(() => setShowTyping(true), 1500);
    
    // Start AI response after 2.5s
    const responseTimer = setTimeout(() => {
      setShowTyping(false);
      setShowAiResponse(true);
    }, 2500);

    return () => {
      clearTimeout(userTimer);
      clearTimeout(typingTimer);
      clearTimeout(responseTimer);
    };
  }, []);

  // Typing effect for AI response
  useEffect(() => {
    if (showAiResponse && typedResponse.length < aiResponse.length) {
      const timer = setTimeout(() => {
        setTypedResponse(aiResponse.slice(0, typedResponse.length + 1));
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [showAiResponse, typedResponse, aiResponse]);

  return (
    <div className="bg-white rounded-2xl shadow-card-hover border border-border-gray/20 overflow-hidden">
      {/* Chat Header */}
      <div className="bg-volentis-navy px-6 py-4 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-white/90 text-sm font-medium">Volentis.ai Assistant</span>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="p-6 space-y-4 min-h-[320px] bg-bg-light">
        {/* User Message */}
        <div 
          className={`flex justify-end transition-all duration-500 ${
            showUserMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="max-w-[85%] bg-volentis-cyan text-white rounded-2xl rounded-br-md px-4 py-3">
            <p className="text-sm">{t('userMessage')}</p>
          </div>
        </div>

        {/* Typing Indicator */}
        {showTyping && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-border-gray/10">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-volentis-cyan/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-volentis-cyan/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-volentis-cyan/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}

        {/* AI Response */}
        {showAiResponse && (
          <div className="flex justify-start animate-fade-in">
            <div className="max-w-[85%] bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-border-gray/10">
              <p className="text-sm text-text-dark">
                {typedResponse}
                {typedResponse.length < aiResponse.length && (
                  <span className="inline-block w-0.5 h-4 bg-volentis-cyan ml-0.5 animate-pulse" />
                )}
              </p>
              
              {/* Source Citation */}
              {typedResponse.length === aiResponse.length && (
                <div className="mt-3 pt-3 border-t border-border-gray/20">
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <svg className="w-4 h-4 text-accent-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Source: HR Policy Handbook v2.3, Section 4.2</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-accent-success/10 text-accent-success">
                      High Confidence
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Chat Input (decorative) */}
      <div className="px-6 py-4 border-t border-border-gray/20 bg-white">
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-bg-light rounded-full px-4 py-2 text-sm text-text-muted">
            Ask anything about your company policies...
          </div>
          <button className="w-10 h-10 bg-volentis-cyan rounded-full flex items-center justify-center text-white hover:bg-volentis-cyan-hover transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
