'use client';

import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  Lock,
  Users,
  Globe,
  Sparkles,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/components/language-provider';
import { heritageItems } from '@/lib/data';

export default function HeritagePage() {
  const { t, language } = useLanguage();
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [langFilter, setLangFilter] = useState('all');

  const types = useMemo(() => {
    const set = new Set(heritageItems.map((h) => h.type.en));
    return Array.from(set);
  }, []);

  const languages = useMemo(() => {
    const set = new Set(heritageItems.map((h) => h.language.en));
    return Array.from(set);
  }, []);

  const filteredItems = useMemo(() => {
    return heritageItems.filter((h) => {
      const matchesSearch =
        !search ||
        h.title[language].toLowerCase().includes(search.toLowerCase()) ||
        h.description[language].toLowerCase().includes(search.toLowerCase());
      const matchesType = typeFilter === 'all' || h.type.en === typeFilter;
      const matchesLang = langFilter === 'all' || h.language.en === langFilter;
      return matchesSearch && matchesType && matchesLang;
    });
  }, [search, typeFilter, langFilter, language]);

  const getAccessIcon = (access: string) => {
    if (access === 'restricted') return <Lock className="h-3.5 w-3.5" />;
    if (access === 'members') return <Users className="h-3.5 w-3.5" />;
    return <Globe className="h-3.5 w-3.5" />;
  };

  const getAccessBadge = (access: string) => {
    if (access === 'restricted') {
      return (
        <Badge className="bg-destructive/15 text-destructive">
          {t('heritage.restricted')}
        </Badge>
      );
    }
    if (access === 'members') {
      return (
        <Badge className="bg-primary/15 text-primary">
          {t('heritage.membersOnly')}
        </Badge>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/38223531/pexels-photo-38223531.jpeg?auto=compress&cs=tinysrgb&h=800&w=1600"
            alt={t('heritage.title')}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/85 via-secondary/60 to-background" />
        </div>
        <div className="absolute right-0 top-0 h-full w-2 bg-kente opacity-60" />

        <div className="container relative z-10 mx-auto flex min-h-[40vh] flex-col justify-end px-4 pb-12 lg:px-8">
          <Badge className="mb-4 w-fit border-gold/40 bg-gold/10 text-gold backdrop-blur-sm">
            <BookOpen className="mr-1.5 h-3.5 w-3.5" />
            {language === 'en' ? 'Heritage' : 'Àṣà'}
          </Badge>
          <h1 className="font-display text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl lg:text-6xl">
            {t('heritage.title')}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-secondary-foreground/85">{t('heritage.subtitle')}</p>
        </div>
      </section>

      {/* Search & filters */}
      <section className="container mx-auto px-4 py-12 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder={t('heritage.search')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full sm:w-44">
              <SelectValue placeholder={t('heritage.filter.all')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('heritage.filter.all')}</SelectItem>
              {types.map((ty) => (
                <SelectItem key={ty} value={ty}>{ty}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={langFilter} onValueChange={setLangFilter}>
            <SelectTrigger className="w-full sm:w-44">
              <SelectValue placeholder={t('heritage.filter.allLang')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('heritage.filter.allLang')}</SelectItem>
              {languages.map((l) => (
                <SelectItem key={l} value={l}>{l}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Stats */}
        <div className="mb-8 flex flex-wrap gap-3">
          <Badge variant="outline" className="border-primary/30 text-primary">
            <Sparkles className="mr-1.5 h-3.5 w-3.5" />
            {filteredItems.length} {language === 'en' ? 'items' : 'ohun'}
          </Badge>
          <Badge variant="outline" className="border-success/30 text-success">
            <Globe className="mr-1.5 h-3.5 w-3.5" />
            {heritageItems.filter((h) => h.access === 'public').length} {language === 'en' ? 'Public' : 'Gbogbo Ènìyàn'}
          </Badge>
          <Badge variant="outline" className="border-primary/30 text-primary">
            <Users className="mr-1.5 h-3.5 w-3.5" />
            {heritageItems.filter((h) => h.access === 'members').length} {t('heritage.membersOnly')}
          </Badge>
        </div>

        {/* Results */}
        {filteredItems.length === 0 ? (
          <div className="rounded-lg border border-dashed border-border py-20 text-center">
            <p className="text-muted-foreground">{t('heritage.noResults')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group h-full overflow-hidden border-border/60 shadow-md transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title[language]}
                    className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-105 ${
                      item.access !== 'public' ? 'group-hover:blur-[2px]' : ''
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {item.access !== 'public' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-secondary/50 backdrop-blur-[3px]">
                      <div className="flex flex-col items-center gap-2 text-secondary-foreground">
                        {getAccessIcon(item.access)}
                        <span className="text-xs font-medium">{t('heritage.loginPrompt')}</span>
                      </div>
                    </div>
                  )}
                  <div className="absolute left-3 top-3">
                    <Badge className="bg-gold/90 text-gold-foreground backdrop-blur-sm">
                      {item.type[language]}
                    </Badge>
                  </div>
                  <div className="absolute right-3 top-3">
                    {getAccessBadge(item.access)}
                  </div>
                </div>
                <div className="flex flex-col p-5">
                  <h3 className="font-display text-lg font-bold leading-snug transition-colors group-hover:text-primary">
                    {item.title[language]}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {item.description[language]}
                  </p>
                  <div className="mt-4 space-y-1.5 border-t border-border/40 pt-3 text-xs text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{t('common.contributor')}</span>
                      <span>{item.contributor}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{t('common.language')}</span>
                      <span>{item.language[language]}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{language === 'en' ? 'Clan / Quarter' : 'Ìdílé / Àdúgbò'}</span>
                      <span>{item.clan[language]}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}