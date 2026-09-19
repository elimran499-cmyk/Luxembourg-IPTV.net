import React, { useState } from 'react';
import { UI } from '../data/ui';
import { Wifi, CheckCircle2, ShieldCheck, ArrowRight, Gauge, Server } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Language } from '../types';
import { translations } from '../data/translations';
import { LUX_ISPS } from '../data/channels';

interface ISPCheckerProps {
  currentLang: Language;
}

interface TestResult {
  ping: string;
  jitter: string;
  route: string;
  bufferRisk: string;
}

export const ISPChecker: React.FC<ISPCheckerProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const ui = UI[currentLang];
  const [selectedIsp, setSelectedIsp] = useState(LUX_ISPS[0].id);
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<TestResult | null>({
    ping: LUX_ISPS[0].ping,
    jitter: '0.4 ms',
    route: 'LU-CIX Bettembourg → Tier IV Fast-Path',
    bufferRisk: '0.00 %'
  });

  const currentIsp = LUX_ISPS.find((i) => i.id === selectedIsp) || LUX_ISPS[0];

  const handleRunTest = () => {
    setIsTesting(true);
    setTimeout(() => {
      setTestResult({
        ping: currentIsp.ping,
        jitter: '0.3 ms',
        route: `LU-CIX (${currentIsp.name.split(' ')[0]}) → Datacenter Bettembourg`,
        bufferRisk: '0.00 %'
      });
      setIsTesting(false);
    }, 900);
  };

  return (
    <section id="isp-check" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.ispCheck.badge}
          icon={Wifi}
          title={t.ispCheck.title}
          lead={t.ispCheck.subtitle}
          className="mb-14"
        />

        <div className="lux-card mx-auto max-w-4xl rounded-3xl border border-ink-100 bg-white p-5 sm:p-8">
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Operator picker */}
            <div className="space-y-3 lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-wider text-ink-500">{t.ispCheck.selectPrompt}</p>

              <div className="space-y-2">
                {LUX_ISPS.map((isp) => (
                  <button
                    key={isp.id}
                    onClick={() => {
                      setSelectedIsp(isp.id);
                      setTestResult(null);
                    }}
                    className={`flex w-full items-center justify-between rounded-2xl border p-3 text-left text-sm transition-all ${
                      selectedIsp === isp.id
                        ? 'border-lux-400 bg-lux-50 font-bold text-ink-900'
                        : 'border-ink-200 bg-white text-ink-600 hover:border-ink-300 hover:text-ink-900'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className={`h-2 w-2 rounded-full ${selectedIsp === isp.id ? 'bg-lux-500' : 'bg-ink-300'}`}
                      />
                      {isp.name}
                    </span>
                    <span className="text-xs font-bold text-emerald-600">{isp.ping}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={handleRunTest}
                disabled={isTesting}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-lux-600 to-lux-500 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-lux-500/25 transition-all hover:from-lux-700 hover:to-lux-600 disabled:opacity-60"
              >
                {isTesting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    {t.ispCheck.testing}
                  </>
                ) : (
                  <>
                    <Gauge className="h-4 w-4" />
                    {t.ispCheck.testButton}
                  </>
                )}
              </button>
            </div>

            {/* Diagnostic readout — the one inked panel, so it reads as a console */}
            <div className="flex min-h-[320px] flex-col justify-between rounded-2xl bg-ink-900 p-5 text-white sm:p-6 lg:col-span-7">
              <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80">
                  <Server className="h-4 w-4 text-lux-300" />
                  Bettembourg / Roost peering
                </span>
                <span className="rounded bg-emerald-400/15 px-2 py-0.5 text-[10px] font-bold text-emerald-300 ring-1 ring-emerald-400/30">
                  99.98 % DISPONIBILITÉ
                </span>
              </div>

              {testResult ? (
                <div className="lux-fade-in my-4 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="flex items-center gap-2 font-display text-base font-bold text-white sm:text-lg">
                        <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                        {t.ispCheck.resultTitle}
                      </h3>
                      <p className="mt-0.5 text-xs text-white/60">
                        {currentIsp.name} • {testResult.route}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="block text-[10px] uppercase tracking-wider text-white/50">
                        {t.ispCheck.resultLatency}
                      </span>
                      <span className="font-display text-2xl font-black text-emerald-400">{testResult.ping}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                      <span className="block text-[10px] uppercase tracking-wider text-white/50">{ui.ispJitter}</span>
                      <span className="font-display text-sm font-bold text-white">{testResult.jitter}</span>
                    </div>
                    <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                      <span className="block text-[10px] uppercase tracking-wider text-white/50">{ui.ispDropRisk}</span>
                      <span className="font-display text-sm font-bold text-emerald-400">{testResult.bufferRisk}</span>
                    </div>
                  </div>

                  <p className="flex items-start gap-2 rounded-xl bg-emerald-400/10 p-3 text-xs text-emerald-200 ring-1 ring-emerald-400/20">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>
                      {t.ispCheck.resultNote} {t.ispCheck.resultStatus}
                    </span>
                  </p>

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-white/60">{ui.ispReady}</span>
                    <a
                      href="#pricing"
                      className="flex items-center gap-1 text-xs font-bold text-lux-300 transition-colors hover:text-white"
                    >
                      {t.nav.pricing}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="my-auto space-y-2 py-8 text-center">
                  <Gauge className="mx-auto h-8 w-8 animate-pulse text-lux-300" />
                  <p className="text-sm text-white/70">
                    Lancez le test pour analyser le routage avec {currentIsp.name}.
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-white/40">
                <span>{ui.ispExchange}</span>
                <span>{ui.ispFastPath}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
