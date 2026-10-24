'use client';

import React, { useState } from 'react';
import { Users, MapPin, Crown, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/language-provider';
import { chiefs } from '@/lib/data';
import type { Chief } from '@/lib/data';

export default function ChiefsPage() {
  const { t, language } = useLanguage();
  const [selectedChief, setSelectedChief] = useState<Chief | null>(null);

  const sorted = [...chiefs].sort((a, b) => a.order - b.order);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/30253020/pexels-photo-30253020.jpeg?auto=compress&cs=tinysrgb&h=800&w=1600"
            alt={t('chiefs.title')}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/85 via-secondary/60 to-background" />
        </div>
        <div className="absolute right-0 top-0 h-full w-2 bg-kente opacity-60" />

        <div className="container relative z-10 mx-auto flex min-h-[40vh] flex-col justify-end px-4 pb-12 lg:px-8">
          <Badge className="mb-4 w-fit border-gold/40 bg-gold/10 text-gold backdrop-blur-sm">
            <Crown className="mr-1.5 h-3.5 w-3.5" />
            {language === 'en' ? 'Traditional Council' : 'Ìgbìmọ̀ Àtijọ́'}
          </Badge>
          <h1 className="font-display text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl lg:text-6xl">
            {t('chiefs.title')}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-secondary-foreground/85">{t('chiefs.subtitle')}</p>
        </div>
      </section>

      {/* Chiefs grid */}
      <section className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sorted.map((chief) => (
            <Card
              key={chief.id}
              className="group cursor-pointer overflow-hidden border-border/60 shadow-md transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
              onClick={() => setSelectedChief(chief)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={chief.image}
                  alt={chief.name[language]}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Order badge */}
                <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-gold to-primary text-sm font-bold text-primary-foreground shadow-lg">
                  {chief.order}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 text-secondary-foreground">
                  <h3 className="font-display text-base font-bold leading-tight">{chief.name[language]}</h3>
                  <p className="mt-0.5 text-xs text-gold/90">{chief.title[language]}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary/60" />
                <span>{chief.quarter[language]}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Profile modal */}
      {selectedChief && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedChief(null)}
          />
          <Card className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto border-gold/30 shadow-2xl">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={selectedChief.image}
                alt={selectedChief.name[language]}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-3 top-3 bg-secondary/80 text-secondary-foreground hover:bg-secondary"
                onClick={() => setSelectedChief(null)}
              >
                <X className="h-5 w-5" />
              </Button>
              <div className="absolute bottom-4 left-4 right-4 text-secondary-foreground">
                <Badge className="mb-2 bg-gold/90 text-gold-foreground">
                  {t('chiefs.profile.order')} #{selectedChief.order}
                </Badge>
                <h2 className="font-display text-2xl font-bold">{selectedChief.name[language]}</h2>
                <p className="text-gold/90">{selectedChief.title[language]}</p>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4 grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-border/60 bg-muted/30 p-3">
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t('chiefs.profile.quarter')}
                  </div>
                  <div className="mt-1 font-medium">{selectedChief.quarter[language]}</div>
                </div>
                <div className="rounded-lg border border-border/60 bg-muted/30 p-3">
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t('chiefs.profile.order')}
                  </div>
                  <div className="mt-1 font-medium">#{selectedChief.order}</div>
                </div>
              </div>

              <h3 className="mb-2 font-display text-sm font-bold uppercase tracking-wider text-primary">
                {t('chiefs.profile.title')}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{selectedChief.bio[language]}</p>

              <h3 className="mt-5 mb-2 font-display text-sm font-bold uppercase tracking-wider text-primary">
                {t('chiefs.profile.responsibilities')}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{selectedChief.responsibilities[language]}</p>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}