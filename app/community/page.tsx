'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Newspaper,
  Calendar,
  MapPin,
  Users,
  Search,
  AlertTriangle,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/components/language-provider';
import { newsItems, eventItems } from '@/lib/data';
import type { Bilingual } from '@/lib/data';

function formatDate(dateStr: string, lang: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(lang === 'yo' ? 'yo-NG' : 'en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function CommunityPage() {
  const { t, language } = useLanguage();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const categories = [
    { value: 'all', key: 'community.news.all' },
    { value: 'announcement', key: 'community.news.category.announcement' },
    { value: 'event', key: 'community.news.category.event' },
    { value: 'festival', key: 'community.news.category.festival' },
    { value: 'community', key: 'community.news.category.community' },
    { value: 'development', key: 'community.news.category.development' },
  ] as const;

  const urgentNotices = newsItems.filter((n) => n.urgent);

  const filteredNews = useMemo(() => {
    return newsItems.filter((n) => {
      const matchesSearch =
        !search ||
        n.title[language].toLowerCase().includes(search.toLowerCase()) ||
        n.excerpt[language].toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'all' || n.category === category;
      return matchesSearch && matchesCategory && !n.urgent;
    });
  }, [search, category, language]);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/31890403/pexels-photo-31890403.jpeg?auto=compress&cs=tinysrgb&h=800&w=1600"
            alt={t('community.title')}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/85 via-secondary/60 to-background" />
        </div>
        <div className="absolute right-0 top-0 h-full w-2 bg-kente opacity-60" />

        <div className="container relative z-10 mx-auto flex min-h-[40vh] flex-col justify-end px-4 pb-12 lg:px-8">
          <Badge className="mb-4 w-fit border-gold/40 bg-gold/10 text-gold backdrop-blur-sm">
            <Newspaper className="mr-1.5 h-3.5 w-3.5" />
            {language === 'en' ? 'Community' : 'Àgbègbè'}
          </Badge>
          <h1 className="font-display text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl lg:text-6xl">
            {t('community.title')}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-secondary-foreground/85">{t('community.subtitle')}</p>
        </div>
      </section>

      {/* Urgent Notices */}
      {urgentNotices.length > 0 && (
        <section className="container mx-auto px-4 py-12 lg:px-8">
          <div className="mb-6 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <h2 className="font-display text-xl font-bold">{t('community.notices.title')}</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {urgentNotices.map((notice) => (
              <Card key={notice.id} className="border-destructive/30 bg-destructive/5 p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-destructive/15">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-base font-bold sm:text-lg">{notice.title[language]}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{notice.excerpt[language]}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span>{formatDate(notice.date, language)}</span>
                      <span>•</span>
                      <span>{notice.author}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* News with filters */}
      <section className="container mx-auto px-4 py-12 lg:px-8">
        <div className="mb-8">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{t('community.news.title')}</h2>
        </div>

        {/* Search & filter */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder={t('community.news.search')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  {t(cat.key as never)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results */}
        {filteredNews.length === 0 ? (
          <div className="rounded-lg border border-dashed border-border py-20 text-center">
            <p className="text-muted-foreground">{t('community.news.noResults')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredNews.map((news) => (
              <Card key={news.id} className="group h-full overflow-hidden border-border/60 shadow-md transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl">
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
                <div className="flex flex-col p-5">
                  <p className="mb-2 text-xs text-muted-foreground">{formatDate(news.date, language)}</p>
                  <h3 className="font-display text-lg font-bold leading-snug transition-colors group-hover:text-primary">
                    {news.title[language]}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {news.excerpt[language]}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-border/40 pt-3">
                    <span className="text-xs text-muted-foreground">{news.author}</span>
                    <Button variant="link" size="sm" className="h-auto p-0 text-primary">
                      {t('cta.readMore')}
                      <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Event Calendar */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10">
            <Badge variant="outline" className="mb-3 border-primary/30 text-primary">
              <Calendar className="mr-1.5 h-3.5 w-3.5" />
              {language === 'en' ? 'Calendar' : 'Ìkànnà'}
            </Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{t('community.calendar.title')}</h2>
            <p className="mt-2 text-muted-foreground">{t('community.calendar.subtitle')}</p>
          </div>

          <div className="space-y-4">
            {eventItems.map((event) => {
              const date = new Date(event.date);
              const day = date.getDate();
              const month = date.toLocaleDateString(language === 'yo' ? 'yo-NG' : 'en-US', { month: 'short' });
              return (
                <Card key={event.id} className="group flex flex-col overflow-hidden border-border/60 shadow-sm transition-all hover:border-gold/40 hover:shadow-md sm:flex-row">
                  {/* Date block */}
                  <div className="flex flex-shrink-0 flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary p-6 text-secondary-foreground sm:w-28">
                    <span className="font-display text-3xl font-bold sm:text-4xl">{day}</span>
                    <span className="text-sm font-medium uppercase tracking-wider">{month}</span>
                  </div>

                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden sm:aspect-auto sm:w-56">
                    <img
                      src={event.image}
                      alt={event.title[language]}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-center p-5">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <Badge className="bg-gold/15 text-primary">{event.category[language]}</Badge>
                      {event.free && (
                        <Badge variant="outline" className="border-success/30 text-success">
                          {t('common.free')}
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-display text-lg font-bold leading-snug transition-colors group-hover:text-primary">
                      {event.title[language]}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-primary/60" />
                        <span>{event.time[language]}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-primary/60" />
                        <span>{event.location[language]}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-primary/60" />
                        <span>{event.attending.toLocaleString()} {t('common.attending')}</span>
                      </div>
                    </div>
                    {event.capacity && (
                      <div className="mt-3">
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-primary to-gold"
                            style={{ width: `${Math.min((event.attending / event.capacity) * 100, 100)}%` }}
                          />
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {event.attending.toLocaleString()} / {event.capacity.toLocaleString()}
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}