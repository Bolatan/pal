'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Crown,
  Newspaper,
  BookOpen,
  HandHeart,
  ShoppingBag,
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/components/language-provider';
import { newsItems, eventItems, heritageItems, quarters } from '@/lib/data';

const iconMap = {
  Crown,
  Newspaper,
  BookOpen,
  HandHeart,
  ShoppingBag,
} as const;

function formatDate(dateStr: string, lang: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(lang === 'yo' ? 'yo-NG' : 'en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function HomePage() {
  const { t, language } = useLanguage();
  const [eventFilter] = useState('upcoming');

  const quickLinks = [
    { href: '/palace', icon: 'Crown', titleKey: 'home.quicklinks.palace', descKey: 'home.quicklinks.palace.desc' },
    { href: '/community', icon: 'Newspaper', titleKey: 'home.quicklinks.community', descKey: 'home.quicklinks.community.desc' },
    { href: '/heritage', icon: 'BookOpen', titleKey: 'home.quicklinks.heritage', descKey: 'home.quicklinks.heritage.desc' },
    { href: '/development', icon: 'HandHeart', titleKey: 'home.quicklinks.development', descKey: 'home.quicklinks.development.desc' },
    { href: '/marketplace', icon: 'ShoppingBag', titleKey: 'home.quicklinks.marketplace', descKey: 'home.quicklinks.marketplace.desc' },
  ] as const;

  const latestNews = newsItems.filter((n) => !n.urgent).slice(0, 3);
  const upcomingEvents = eventItems.slice(0, 4);
  const featuredHeritage = heritageItems.filter((h) => h.access === 'public').slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[85vh] w-full overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/38192540/pexels-photo-38192540.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
            alt="Traditional palace architecture in Nigeria"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/70 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        {/* Decorative kente strip */}
        <div className="absolute right-0 top-0 h-full w-2 bg-kente opacity-60" />

        <div className="container relative z-10 mx-auto flex min-h-[85vh] max-w-5xl flex-col justify-center px-4 py-20 text-center text-secondary-foreground lg:px-8">
          <div className="animate-fade-up">
            <Badge className="mb-6 border-gold/40 bg-gold/10 text-gold backdrop-blur-sm">
              <Sparkles className="mr-1.5 h-3.5 w-3.5" />
              {t('home.hero.badge')}
            </Badge>
          </div>

          <h1 className="animate-fade-up font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl" style={{ animationDelay: '0.1s' }}>
            {t('home.hero.title')}
          </h1>

          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/85 sm:text-xl" style={{ animationDelay: '0.2s' }}>
            {t('home.hero.subtitle')}
          </p>

          <div className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ animationDelay: '0.3s' }}>
            <Button
              asChild
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-gold font-semibold shadow-xl shadow-primary/30 transition-all hover:scale-105 sm:w-auto"
            >
              <Link href="/contact">
                {t('cta.audience')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-gold/40 bg-secondary-foreground/5 text-secondary-foreground backdrop-blur-sm hover:bg-secondary-foreground/10 sm:w-auto"
            >
              <Link href="/palace">{t('cta.explore')}</Link>
            </Button>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 z-10 h-20 w-full bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Quick Links */}
      <section className="container mx-auto -mt-8 px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {quickLinks.map((link, i) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];
            return (
              <Link key={link.href} href={link.href}>
                <Card
                  className="group h-full cursor-pointer border-border/60 bg-card p-5 shadow-md transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-gold/10 text-primary transition-all group-hover:from-primary group-hover:to-gold group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-base font-bold">{t(link.titleKey as never)}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{t(link.descKey as never)}</p>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* About / Stats */}
      <section className="container mx-auto px-4 py-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge variant="outline" className="mb-4 border-gold/30 text-primary">
              {language === 'en' ? 'About Ile-Ife' : 'Nípa Ilẹ̀ Ifẹ̀'}
            </Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {t('home.about.title')}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t('home.about.body')}</p>
            <div className="mt-8">
              <Button asChild variant="link" className="h-auto p-0 text-primary hover:text-gold">
                <Link href="/palace">
                  {t('cta.learnMore')}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: t('home.about.stat1.label'), value: t('home.about.stat1.value') },
              { label: t('home.about.stat2.label'), value: t('home.about.stat2.value') },
              { label: t('home.about.stat3.label'), value: t('home.about.stat3.value') },
              { label: t('home.about.stat4.label'), value: t('home.about.stat4.value') },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-border/60 bg-card p-6 text-center shadow-sm transition-all hover:border-gold/40 hover:shadow-md"
              >
                <div className="font-display text-3xl font-bold text-primary transition-colors group-hover:text-gold sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Badge variant="outline" className="mb-3 border-primary/30 text-primary">
                <Newspaper className="mr-1.5 h-3.5 w-3.5" />
                {language === 'en' ? 'News' : 'Ìròyìn'}
              </Badge>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{t('home.news.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('home.news.subtitle')}</p>
            </div>
            <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/5">
              <Link href="/community">
                {t('cta.viewAll')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {latestNews.map((news) => (
              <Link key={news.id} href="/community">
                <Card className="group h-full overflow-hidden border-border/60 shadow-md transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title[language]}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute left-3 top-3">
                      <Badge className="bg-secondary/90 text-secondary-foreground backdrop-blur-sm">
                        {t(`community.news.category.${news.category}` as never)}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="mb-2 text-xs text-muted-foreground">{formatDate(news.date, language)}</p>
                    <h3 className="font-display text-lg font-bold leading-snug transition-colors group-hover:text-primary">
                      {news.title[language]}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {news.excerpt[language]}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="container mx-auto px-4 py-20 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Badge variant="outline" className="mb-3 border-primary/30 text-primary">
              <Calendar className="mr-1.5 h-3.5 w-3.5" />
              {language === 'en' ? 'Events' : 'Àlejò'}
            </Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{t('home.events.title')}</h2>
            <p className="mt-2 text-muted-foreground">{t('home.events.subtitle')}</p>
          </div>
          <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/5">
            <Link href="/community">
              {t('cta.viewAll')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="group overflow-hidden border-border/60 shadow-md transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title[language]}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <Badge className="bg-gold/90 text-gold-foreground backdrop-blur-sm">
                    {event.category[language]}
                  </Badge>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display text-base font-bold leading-snug transition-colors group-hover:text-primary">
                  {event.title[language]}
                </h3>
                <div className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-primary/60" />
                    <span>{formatDate(event.date, language)}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-primary/60" />
                    <span className="truncate">{event.location[language]}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-primary/60" />
                    <span>{event.attending.toLocaleString()} {t('common.attending')}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Ooni Section */}
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-20 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/31779717/pexels-photo-31779717.jpeg?auto=compress&cs=tinysrgb&h=800&w=640"
                  alt={t('palace.oni.title')}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Decorative frame */}
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-2xl border-l-4 border-t-4 border-gold" />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-br-2xl border-b-4 border-r-4 border-gold" />
            </div>

            <div>
              <Badge className="mb-4 border-gold/40 bg-gold/10 text-gold">
                <Crown className="mr-1.5 h-3.5 w-3.5" />
                {t('home.oni.current')}
              </Badge>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{t('home.oni.title')}</h2>
              <p className="mt-1 text-sm font-medium uppercase tracking-wider text-gold/80">{t('home.oni.lineage')}</p>
              <p className="mt-6 text-base leading-relaxed text-secondary-foreground/80">{t('home.oni.body')}</p>
              <div className="mt-8">
                <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90">
                  <Link href="/palace">
                    {t('cta.learnMore')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Preview */}
      <section className="container mx-auto px-4 py-20 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Badge variant="outline" className="mb-3 border-primary/30 text-primary">
              <BookOpen className="mr-1.5 h-3.5 w-3.5" />
              {t('home.heritage.title')}
            </Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{t('home.heritage.title')}</h2>
            <p className="mt-2 max-w-xl text-muted-foreground">{t('home.heritage.subtitle')}</p>
          </div>
          <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/5">
            <Link href="/heritage">
              {t('cta.browse')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredHeritage.map((item) => (
            <Link key={item.id} href="/heritage">
              <Card className="group h-full overflow-hidden border-border/60 shadow-md transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title[language]}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute left-3 top-3">
                    <Badge className="bg-secondary/90 text-secondary-foreground backdrop-blur-sm">
                      {item.type[language]}
                    </Badge>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold leading-snug transition-colors group-hover:text-primary">
                    {item.title[language]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {item.description[language]}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {t('common.contributor')}: {item.contributor}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary" />
        <div className="absolute inset-0 bg-kente-soft opacity-30" />
        <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center text-secondary-foreground lg:px-8">
          <Sparkles className="mx-auto mb-6 h-12 w-12 text-gold animate-float" />
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            {t('home.cta.title')}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/85">
            {t('home.cta.body')}
          </p>
          <p className="mt-4 text-sm text-secondary-foreground/60">{t('home.cta.note')}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full bg-gold font-semibold text-gold-foreground shadow-xl shadow-black/20 transition-all hover:scale-105 sm:w-auto"
            >
              <Link href="/contact">
                {t('cta.join')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-gold/40 bg-secondary-foreground/5 text-secondary-foreground backdrop-blur-sm hover:bg-secondary-foreground/10 sm:w-auto"
            >
              <Link href="/contact">{t('cta.support')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}