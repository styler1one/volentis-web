'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface Message {
  type: 'user' | 'ai';
  textKey: string;
  sourceKey?: string;
}

export default function ChatDemo() {
  const t = useTranslations('hero.chatDemo');
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [typingIndex, setTypingIndex] = useState<number>(-1);
  const [typedText, setTypedText] = useState<string>('');
  const [userTyping, setUserTyping] = useState<string>('');
  const [isUserTyping, setIsUserTyping] = useState<boolean>(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const conversation: Message[] = [
    { type: 'user', textKey: 'message1.user' },
    { type: 'ai', textKey: 'message1.ai', sourceKey: 'message1.source' },
    { type: 'user', textKey: 'message2.user' },
    { type: 'ai', textKey: 'message2.ai', sourceKey: 'message2.source' },
    { type: 'user', textKey: 'message3.user' },
    { type: 'ai', textKey: 'message3.ai', sourceKey: 'message3.source' },
  ];

  // Auto-scroll to bottom when new content appears
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [visibleMessages, typingIndex, typedText]);

  useEffect(() => {
    if (visibleMessages >= conversation.length) return;

    const currentMessage = conversation[visibleMessages];
    
    if (currentMessage.type === 'user') {
      const fullText = t(currentMessage.textKey);
      
      if (!isUserTyping && userTyping.length === 0) {
        const timer = setTimeout(() => {
          setIsUserTyping(true);
        }, visibleMessages === 0 ? 800 : 1200);
        return () => clearTimeout(timer);
      } else if (isUserTyping && userTyping.length < fullText.length) {
        const timer = setTimeout(() => {
          setUserTyping(fullText.slice(0, userTyping.length + 1));
        }, 35 + Math.random() * 45);
        return () => clearTimeout(timer);
      } else if (isUserTyping && userTyping.length === fullText.length) {
        const timer = setTimeout(() => {
          setIsUserTyping(false);
          setUserTyping('');
          setVisibleMessages(prev => prev + 1);
        }, 500);
        return () => clearTimeout(timer);
      }
    } else {
      if (typingIndex === -1) {
        const timer = setTimeout(() => {
          setTypingIndex(visibleMessages);
        }, 800);
        return () => clearTimeout(timer);
      } else if (typingIndex === visibleMessages) {
        const fullText = t(currentMessage.textKey);
        if (typedText.length < fullText.length) {
          const timer = setTimeout(() => {
            setTypedText(fullText.slice(0, typedText.length + 2));
          }, 18);
          return () => clearTimeout(timer);
        } else {
          const timer = setTimeout(() => {
            setTypingIndex(-1);
            setTypedText('');
            setVisibleMessages(prev => prev + 1);
          }, 1000);
          return () => clearTimeout(timer);
        }
      }
    }
  }, [visibleMessages, typingIndex, typedText, isUserTyping, userTyping, conversation, t]);

  return (
    <div className="bg-white rounded-2xl shadow-2xl shadow-volentis-navy/10 border border-border-gray/10 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
      
      {/* Modern Chat Header */}
      <div className="bg-gradient-to-r from-volentis-navy via-volentis-navy to-[#1a4a5e] px-5 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo & Status */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
              <Image
                src="/volentis_logo.png"
                alt="Volentis"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">Volentis AI</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-accent-success rounded-full animate-pulse" />
                <span className="text-white/60 text-xs">{t('status') || 'Online'}</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Actions */}
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div 
        ref={chatContainerRef}
        className="p-5 space-y-4 min-h-[400px] max-h-[400px] overflow-y-auto bg-gradient-to-b from-bg-light to-white scroll-smooth"
      >
        {/* Welcome message */}
        <div className="text-center py-2">
          <span className="inline-block px-3 py-1 bg-volentis-cyan/10 text-volentis-cyan text-xs font-medium rounded-full">
            {t('welcome') || 'Conversation started'}
          </span>
        </div>

        {conversation.map((message, index) => {
          if (index > visibleMessages) return null;
          
          const isTyping = typingIndex === index && message.type === 'ai';
          const isComplete = index < visibleMessages;
          
          if (message.type === 'user' && index < visibleMessages) {
            return (
              <div key={index} className="flex justify-end animate-fade-in">
                <div className="max-w-[80%] bg-gradient-to-br from-volentis-cyan to-volentis-cyan-hover text-white rounded-2xl rounded-br-md px-4 py-3 shadow-lg shadow-volentis-cyan/20">
                  <p className="text-sm leading-relaxed">{t(message.textKey)}</p>
                </div>
              </div>
            );
          }
          
          if (message.type === 'ai') {
            if (isTyping && typedText.length === 0) {
              return (
                <div key={index} className="flex justify-start">
                  <div className="flex items-end gap-2">
                    <div className="w-8 h-8 bg-volentis-navy/5 rounded-full flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/volentis_logo.png"
                        alt=""
                        width={16}
                        height={16}
                        className="w-4 h-4 opacity-60"
                      />
                    </div>
                    <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-md border border-border-gray/10">
                      <div className="flex gap-1.5">
                        <span className="w-2 h-2 bg-volentis-cyan rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-volentis-cyan rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-volentis-cyan rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            
            if (isTyping || isComplete) {
              const displayText = isComplete ? t(message.textKey) : typedText;
              const showSource = isComplete && message.sourceKey;
              
              return (
                <div key={index} className="flex justify-start animate-fade-in">
                  <div className="flex items-end gap-2 max-w-[85%]">
                    <div className="w-8 h-8 bg-volentis-navy/5 rounded-full flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/volentis_logo.png"
                        alt=""
                        width={16}
                        height={16}
                        className="w-4 h-4 opacity-60"
                      />
                    </div>
                    <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-md border border-border-gray/10">
                      <p className="text-sm text-text-dark leading-relaxed">
                        {displayText}
                        {isTyping && typedText.length < t(message.textKey).length && (
                          <span className="inline-block w-0.5 h-4 bg-volentis-cyan ml-0.5 animate-pulse" />
                        )}
                      </p>
                      
                      {/* Source Citation - Enhanced */}
                      {showSource && (
                        <div className="mt-3 pt-3 border-t border-border-gray/10">
                          <div className="flex items-center gap-2 px-2.5 py-1.5 bg-accent-success/10 rounded-lg">
                            <svg className="w-4 h-4 text-accent-success flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-xs text-accent-success font-medium">{t(message.sourceKey!)}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            }
          }
          
          return null;
        })}
      </div>

      {/* Enhanced Chat Input */}
      <div className="px-5 py-4 border-t border-border-gray/10 bg-white">
        <div className="flex items-center gap-3">
          {/* Attachment button */}
          <button className="w-10 h-10 rounded-xl bg-bg-light hover:bg-volentis-cyan/10 flex items-center justify-center transition-colors group">
            <svg className="w-5 h-5 text-text-muted group-hover:text-volentis-cyan transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
          </button>
          
          {/* Input field */}
          <div className={`flex-1 rounded-xl px-4 py-3 text-sm transition-all duration-300 ${
            isUserTyping 
              ? 'bg-white border-2 border-volentis-cyan shadow-lg shadow-volentis-cyan/10' 
              : 'bg-bg-light border-2 border-transparent'
          }`}>
            {isUserTyping ? (
              <span className="text-text-dark">
                {userTyping}
                <span className="inline-block w-0.5 h-4 bg-volentis-cyan ml-0.5 animate-pulse" />
              </span>
            ) : (
              <span className="text-text-muted">{t('inputPlaceholder')}</span>
            )}
          </div>
          
          {/* Send button */}
          <button 
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isUserTyping && userTyping.length > 0
                ? 'bg-volentis-cyan text-white shadow-lg shadow-volentis-cyan/30 scale-110'
                : 'bg-volentis-cyan/20 text-volentis-cyan'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        
        {/* Typing hint */}
        <div className="mt-2 flex items-center justify-center gap-2 text-xs text-text-muted">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{t('hint') || 'AI answers from your own documents'}</span>
        </div>
      </div>
    </div>
  );
}
