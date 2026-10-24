'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Crown, Menu, X, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/language-provider';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const { t, language, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-gold/20 bg-background/95 shadow-md shadow-black/5 backdrop-blur-md'
          : 'border-b border-transparent bg-background',
      )}
    >
      {/* Top kente accent bar */}
      <div className="h-1 w-full bg-kente" />

      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:h-20 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold to-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform group-hover:scale-110 lg:h-12 lg:w-12">
            <Crown className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold tracking-tight lg:text-xl">
              {t('site.name')}
            </span>
            <span className="hidden text-[11px] font-medium text-muted-foreground sm:block">
              {t('site.tagline')}
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative rounded-md px-4 py-2 text-sm font-medium transition-colors',
                isActive(link.href)
                  ? 'text-primary'
                  : 'text-foreground/70 hover:text-primary',
              )}
            >
              {t(link.key as never)}
              {isActive(link.href) && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-gold to-primary" />
              )}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="hidden border-gold/30 hover:border-gold/60 hover:bg-gold/5 sm:inline-flex"
          >
            <Languages className="mr-1.5 h-4 w-4" />
            {language === 'en' ? 'Yorùbá' : 'English'}
          </Button>
          <Button
            asChild
            size="sm"
            className="hidden bg-gradient-to-r from-primary to-gold font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 md:inline-flex"
          >
            <Link href="/contact">{t('cta.audience')}</Link>
          </Button>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gold/10 bg-background lg:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                  isActive(link.href)
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground/70 hover:bg-muted hover:text-primary',
                )}
              >
                {t(link.key as never)}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2 border-t border-border pt-3">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="flex-1 border-gold/30"
              >
                <Languages className="mr-1.5 h-4 w-4" />
                {language === 'en' ? t('lang.yo') : t('lang.en')}
              </Button>
              <Button asChild size="sm" className="flex-1">
                <Link href="/contact">{t('cta.audience')}</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}