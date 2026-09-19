import React, { useState } from 'react';
import { Tv, Smartphone, Monitor, Cast, HardDrive, Laptop, CheckCircle2, Clock } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Language } from '../types';
import { translations } from '../data/translations';
import { DEVICE_GUIDES } from '../data/channels';

interface DeviceCompatibilityProps {
  currentLang: Language;
}

const DEVICE_ICONS: Record<string, React.ElementType> = {
  tivimate: Tv,
  smarters: Smartphone,
  'smart-tv': Monitor,
  firestick: Cast,
  'mag-formuler': HardDrive,
  'apple-tv': Laptop
};

export const DeviceCompatibility: React.FC<DeviceCompatibilityProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [selectedDevice, setSelectedDevice] = useState(DEVICE_GUIDES[0].id);

  const activeGuide = DEVICE_GUIDES.find((g) => g.id === selectedDevice) || DEVICE_GUIDES[0];

  return (
    <section id="devices" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.devices.badge}
          icon={Monitor}
          title={t.devices.title}
          lead={t.devices.subtitle}
          className="mb-14"
        />

        <div data-reveal-stagger className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {DEVICE_GUIDES.map((device) => {
            const Icon = DEVICE_ICONS[device.id] || Tv;
            const isSelected = selectedDevice === device.id;
            return (
              <button
                key={device.id}
                onClick={() => setSelectedDevice(device.id)}
                aria-pressed={isSelected}
                className={`flex flex-col items-center justify-center gap-2 rounded-2xl border p-3.5 text-center transition-all ${
                  isSelected
                    ? 'border-lux-400 bg-lux-50 text-ink-900 shadow-md shadow-lux-500/15'
                    : 'border-ink-200 bg-white text-ink-500 hover:border-ink-300 hover:text-ink-900'
                }`}
              >
                <Icon className={`h-6 w-6 ${isSelected ? 'text-lux-600' : 'text-ink-400'}`} />
                <span className="text-xs font-bold">{device.name}</span>
                <span className="text-[10px] font-medium text-ink-400">{device.setupTime}</span>
              </button>
            );
          })}
        </div>

        <div className="lux-card mx-auto max-w-4xl rounded-3xl border border-ink-100 bg-white p-6 sm:p-8">
          <div className="mb-6 flex flex-col justify-between gap-4 border-b border-ink-100 pb-6 sm:flex-row sm:items-center">
            <div>
              <div className="mb-1.5 flex flex-wrap items-center gap-2">
                <span className="rounded bg-lux-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-lux-700 ring-1 ring-lux-200">
                  Application recommandée
                </span>
                <span className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                  <Clock className="h-3.5 w-3.5" />
                  {activeGuide.setupTime}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-ink-900 sm:text-2xl">{activeGuide.recommendedApp}</h3>
            </div>

            <a
              href="#pricing"
              className="shrink-0 rounded-2xl bg-lux-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-lux-500/25 transition-colors hover:bg-lux-700"
            >
              Obtenir mes identifiants
            </a>
          </div>

          <p className="mb-4 text-[11px] font-bold uppercase tracking-wider text-ink-400">
            {t.devices.setupBadge}
          </p>

          <ol className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {activeGuide.steps.map((step, idx) => (
              <li
                key={step}
                className="flex items-start gap-3 rounded-2xl border border-ink-100 bg-ink-50 p-4 text-xs text-ink-700 sm:text-sm"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-lux-700 ring-1 ring-lux-200">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ink-100 pt-6 text-xs text-ink-500">
            {[
              'Compatible Xtream Codes API & M3U Plus',
              'Support Stalker Portal (MAG / Formuler)',
              'Guide EPG XMLTV haute précision'
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-xs font-medium text-ink-400">{t.devices.appsIncluded}</p>
      </div>
    </section>
  );
};
