'use client';

import React from 'react';
import { Crown, Sparkles, MapPin, BookOpen, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/components/language-provider';
import { royalLineage, quarters, galleryImages } from '@/lib/data';

export default function PalacePage() {
  const { t, language } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/38192538/pexels-photo-38192538.jpeg?auto=compress&cs=tinysrgb&h=800&w=1600"
            alt={t('palace.title')}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/85 via-secondary/60 to-background" />
        </div>
        <div className="absolute right-0 top-0 h-full w-2 bg-kente opacity-60" />

        <div className="container relative z-10 mx-auto flex min-h-[50vh] flex-col justify-end px-4 pb-12 lg:px-8">
          <Badge className="mb-4 w-fit border-gold/40 bg-gold/10 text-gold backdrop-blur-sm">
            <Crown className="mr-1.5 h-3.5 w-3.5" />
            {t('palace.oni.role')}
          </Badge>
          <h1 className="font-display text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl lg:text-6xl">
            {t('palace.title')}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-secondary-foreground/85">{t('palace.subtitle')}</p>
        </div>
      </section>

      {/* Ooni Profile */}
      <section className="container mx-auto px-4 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/31779717/pexels-photo-31779717.jpeg?auto=compress&cs=tinysrgb&h=800&w=640"
                  alt={t('palace.oni.title')}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-2xl border-l-4 border-t-4 border-gold" />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-br-2xl border-b-4 border-r-4 border-gold" />
            </div>
          </div>
          <div className="lg:col-span-3">
            <Badge variant="outline" className="mb-3 border-gold/30 text-primary">
              <Sparkles className="mr-1.5 h-3.5 w-3.5" />
              {t('home.oni.current')}
            </Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{t('palace.oni.title')}</h2>
            <p className="mt-1 text-sm font-medium uppercase tracking-wider text-gold/80">{t('palace.oni.role')}</p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t('palace.oni.bio')}</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{t('home.oni.current')}</div>
                <div className="mt-1 font-display text-lg font-bold text-primary">2015–present</div>
              </div>
              <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{t('palace.lineage.title')}</div>
                <div className="mt-1 font-display text-lg font-bold text-primary">51st Ooni</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Royal Lineage */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3 border-primary/30 text-primary">
              <Crown className="mr-1.5 h-3.5 w-3.5" />
              {language === 'en' ? 'Royal Heritage' : 'Àṣà Ọba'}
            </Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{t('palace.lineage.title')}</h2>
            <p className="mx-auto mt-2 max-w-xl text-muted-foreground">{t('palace.lineage.subtitle')}</p>
          </div>

          {/* Timeline */}
          <div className="relative mx-auto max-w-3xl">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-gold via-primary to-gold/30 sm:left-6" />

            {royalLineage.map((entry, i) => (
              <div key={entry.order} className="relative mb-8 flex items-start gap-4 sm:gap-6">
                {/* Node */}
                <div className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-gold text-xs font-bold text-primary-foreground shadow-lg sm:h-12 sm:w-12 sm:text-sm">
                  {entry.order}
                </div>
                {/* Content */}
                <Card className="flex-1 border-border/60 p-4 shadow-sm transition-all hover:border-gold/40 hover:shadow-md sm:p-5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-display text-base font-bold sm:text-lg">{entry.name}</h3>
                    <span className="flex-shrink-0 text-xs font-medium text-primary sm:text-sm">{entry.reign}</span>
                  </div>
                  {entry.note && (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.note}</p>
                  )}
                </Card>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-2xl rounded-lg bg-gold/5 p-4 text-center text-xs text-muted-foreground">
            {t('palace.lineage.note')}
          </p>
        </div>
      </section>

      {/* History */}
      <section className="container mx-auto px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <Badge variant="outline" className="mb-3 border-primary/30 text-primary">
              <BookOpen className="mr-1.5 h-3.5 w-3.5" />
              {language === 'en' ? 'History' : 'Ìtàn'}
            </Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{t('palace.history.title')}</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-base leading-relaxed text-muted-foreground">{t('palace.history.body1')}</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t('palace.history.body2')}</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t('palace.history.body3')}</p>
          </div>
        </div>
      </section>

      {/* Quarters */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3 border-primary/30 text-primary">
              <MapPin className="mr-1.5 h-3.5 w-3.5" />
              {language === 'en' ? 'The Quarters' : 'Àdúgbò'}
            </Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{t('palace.quarters.title')}</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quarters.map((q, i) => (
              <Card
                key={q.name.en}
                className="group border-border/60 p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-gold/10 font-display text-base font-bold text-primary transition-all group-hover:from-primary group-hover:to-gold group-hover:text-primary-foreground">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold">{q.name[language]}</h3>
                    <p className="text-xs text-muted-foreground">{q.chief[language]}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container mx-auto px-4 py-20 lg:px-8">
        <div className="mb-10 text-center">
          <Badge variant="outline" className="mb-3 border-primary/30 text-primary">
            {language === 'en' ? 'Gallery' : 'Àwọn Àwòrán'}
          </Badge>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{t('palace.gallery.title')}</h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl shadow-md transition-all hover:shadow-xl ${
                i % 5 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  i % 5 === 0 ? 'aspect-square sm:aspect-square' : 'aspect-square'
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}