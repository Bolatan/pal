'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/components/language-provider';
import { siteConfig } from '@/lib/data';

export default function ContactPage() {
  const { t, language } = useLanguage();
  const [form, setForm] = useState({
    name: '',
    contact: '',
    purpose: '',
    date: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState('');

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = t('contact.audience.error.name');
    if (!form.contact.trim()) e.contact = t('contact.audience.error.contact');
    if (!form.purpose.trim()) e.purpose = t('contact.audience.error.purpose');
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    const ref = `IFE-${Date.now().toString(36).toUpperCase().slice(-6)}`;
    setReference(ref);
    setSubmitted(true);
  };

  const reset = () => {
    setForm({ name: '', contact: '', purpose: '', date: '', message: '' });
    setErrors({});
    setSubmitted(false);
    setReference('');
  };

  const contactCards = [
    {
      icon: MapPin,
      label: t('contact.info.address').split(',')[0],
      value: t('contact.info.address'),
      href: 'https://maps.google.com/?q=Ile-Ife+Osun+Nigeria',
    },
    {
      icon: Phone,
      label: t('contact.info.phone'),
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: MessageCircle,
      label: t('contact.info.whatsapp'),
      value: siteConfig.whatsapp,
      href: `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}`,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[35vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/39121199/pexels-photo-39121199.jpeg?auto=compress&cs=tinysrgb&h=800&w=1600"
            alt={t('contact.title')}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/85 via-secondary/60 to-background" />
        </div>
        <div className="absolute right-0 top-0 h-full w-2 bg-kente opacity-60" />

        <div className="container relative z-10 mx-auto flex min-h-[35vh] flex-col justify-end px-4 pb-12 lg:px-8">
          <Badge className="mb-4 w-fit border-gold/40 bg-gold/10 text-gold backdrop-blur-sm">
            <Send className="mr-1.5 h-3.5 w-3.5" />
            {language === 'en' ? 'Contact' : 'Ìkànnà'}
          </Badge>
          <h1 className="font-display text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl">
            {t('contact.title')}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-secondary-foreground/85">{t('contact.subtitle')}</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <h2 className="mb-6 font-display text-2xl font-bold">{t('contact.info.title')}</h2>
            <div className="space-y-4">
              {contactCards.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 rounded-xl border border-border/60 bg-card p-4 shadow-sm transition-all hover:border-gold/40 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-gold/10 text-primary transition-all group-hover:from-primary group-hover:to-gold group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{c.label}</div>
                      <div className="mt-0.5 text-sm font-medium">{c.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-xl border border-gold/20 bg-gold/5 p-4">
              <Clock className="h-5 w-5 flex-shrink-0 text-gold" />
              <div>
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{t('contact.info.hours')}</div>
                <div className="mt-0.5 text-sm font-medium">{t('contact.info.hoursValue')}</div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-6 overflow-hidden rounded-xl border border-border/60 shadow-md">
              <div className="relative aspect-video bg-gradient-to-br from-secondary to-primary">
                <div className="absolute inset-0 bg-kente-soft opacity-20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-secondary-foreground">
                  <MapPin className="mb-2 h-10 w-10 text-gold" />
                  <p className="font-display text-lg font-bold">Ile-Ife</p>
                  <p className="text-sm text-secondary-foreground/70">Osun State, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Audience request form */}
          <div className="lg:col-span-3">
            <Card className="border-border/60 p-6 shadow-lg lg:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
                    <CheckCircle2 className="h-8 w-8 text-success" />
                  </div>
                  <h2 className="font-display text-2xl font-bold">{t('contact.audience.success.title')}</h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {t('contact.audience.success.body')}
                  </p>
                  <div className="mt-4 rounded-lg border border-gold/30 bg-gold/5 px-6 py-3">
                    <span className="font-display text-lg font-bold text-primary">{reference}</span>
                  </div>
                  <Button onClick={reset} variant="outline" className="mt-8 border-primary/30">
                    {t('contact.audience.success.another')}
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-bold">{t('contact.audience.title')}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{t('contact.audience.subtitle')}</p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="name" className="mb-1.5">
                          {t('contact.audience.name')} <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={errors.name ? 'border-destructive' : ''}
                        />
                        {errors.name && (
                          <p className="mt-1 flex items-center gap-1 text-xs text-destructive">
                            <AlertCircle className="h-3 w-3" />
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="contact" className="mb-1.5">
                          {t('contact.audience.contact')} <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="contact"
                          value={form.contact}
                          onChange={(e) => setForm({ ...form, contact: e.target.value })}
                          className={errors.contact ? 'border-destructive' : ''}
                        />
                        {errors.contact && (
                          <p className="mt-1 flex items-center gap-1 text-xs text-destructive">
                            <AlertCircle className="h-3 w-3" />
                            {errors.contact}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="purpose" className="mb-1.5">
                        {t('contact.audience.purpose')} <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="purpose"
                        value={form.purpose}
                        onChange={(e) => setForm({ ...form, purpose: e.target.value })}
                        className={errors.purpose ? 'border-destructive' : ''}
                        rows={3}
                      />
                      {errors.purpose && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-destructive">
                          <AlertCircle className="h-3 w-3" />
                          {errors.purpose}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="date" className="mb-1.5">
                        {t('contact.audience.date')}
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="mb-1.5">
                        {t('contact.audience.message')}
                      </Label>
                      <Textarea
                        id="message"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-gold font-semibold shadow-md shadow-primary/20 hover:shadow-lg"
                    >
                      {t('contact.audience.submit')}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </>
              )}
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}