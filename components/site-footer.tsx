'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Crown, MapPin, Phone, Mail, MessageCircle, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/language-provider';
import { siteConfig } from '@/lib/data';
import { translations } from '@/lib/i18n';

export function SiteFooter() {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative mt-20 bg-secondary text-secondary-foreground">
      <div className="h-1 w-full bg-kente" />

      <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold to-primary text-primary-foreground">
                <Crown className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-display text-lg font-bold">{t('site.name')}</div>
                <div className="text-xs text-secondary-foreground/70">{t('site.tagline')}</div>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary-foreground/80">
              {t('footer.about')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-gold">
              {language === 'en' ? 'Quick Links' : 'Àtọ́kọ̀ Kíákía'}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/palace', key: 'footer.links.palace' },
                { href: '/community', key: 'footer.links.community' },
                { href: '/chiefs', key: 'footer.links.chiefs' },
                { href: '/heritage', key: 'footer.links.heritage' },
                { href: '/contact', key: 'footer.links.contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-secondary-foreground/70 transition-colors hover:text-gold"
                  >
                    {t(l.key as never)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Modules */}
          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-gold">
              {t('footer.modules.title')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                'footer.modules.palace',
                'footer.modules.community',
                'footer.modules.heritage',
                'footer.modules.development',
                'footer.modules.marketplace',
              ].map((m) => (
                <li key={m} className="text-secondary-foreground/70">
                  {t(m as never)}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-gold">
              {t('contact.info.title')}
            </h3>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold/70" />
                <span>{t('contact.info.address')}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0 text-gold/70" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0 text-gold/70" />
                <span>{siteConfig.email}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 flex-shrink-0 text-gold/70" />
                <span>{t('contact.info.hoursValue')}</span>
              </li>
            </ul>

            <div className="mt-5">
              <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground/90">
                {t('footer.newsletter.title')}
              </h4>
              <p className="mb-3 text-xs text-secondary-foreground/60">{t('footer.newsletter.body')}</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('footer.newsletter.placeholder')}
                  className="flex-1 rounded-md border border-secondary-foreground/20 bg-secondary-foreground/5 px-3 py-2 text-sm text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:ring-1 focus:ring-gold"
                />
                <Button type="submit" size="sm" className="bg-gold px-3 text-gold-foreground hover:bg-gold/90">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
              {subscribed && (
                <p className="mt-2 text-xs text-gold">{language === 'en' ? 'Subscribed successfully!' : 'A dárí!'}</p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-secondary-foreground/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-secondary-foreground/60">
            &copy; {new Date().getFullYear()} {t('site.name')}. {t('footer.rights')}
          </p>
          <p className="text-xs text-secondary-foreground/50">{t('footer.disclaimer')}</p>
        </div>
      </div>
    </footer>
  );
}