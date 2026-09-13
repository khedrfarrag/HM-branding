import React from 'react';
import Link from 'next/link';
import { Locale } from '@/domains/shared/value-objects';
import { ICuratorVerification } from '../types';
import { ShieldCheck, Award, Calendar, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

interface AuthorityBadgeProps {
  locale: Locale;
  verification: ICuratorVerification;
}

export default function AuthorityBadge({
  locale,
  verification,
}: AuthorityBadgeProps) {
  const isAr = locale === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const isHossamAudited =
    verification.verifiedBy.ar?.includes('حسام مبروك') ||
    verification.verifiedBy.en?.includes('Hossam Mabrouk') ||
    verification.trustNotes.ar?.includes('حسام مبروك');

  if (!isHossamAudited) {
    return (
      <div
        className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-slate-900/90 to-slate-950 border border-emerald-500/30 shadow-2xl relative overflow-hidden backdrop-blur-md space-y-6"
        dir={isAr ? 'rtl' : 'ltr'}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-emerald-500/20">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                  {isAr ? 'بيانات موثقة عبر مصادر رسمية' : 'Source Verified Official Data'}
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white">
                {isAr ? 'سجلات التجارة والهيئات المينائية والحكومية الصينية' : 'Official China Trade & Port Registries'}
              </h3>
              <p className="text-xs text-slate-400">
                {isAr ? 'تم التحقق من بيانات المنشأة ومطابقتها وفق السجلات الرسمية' : 'Verified against official enterprise and maritime records'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-slate-800 self-start sm:self-center">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isAr ? 'تاريخ التحديث:' : 'Verified On:'}</span>
            <span className="font-mono text-slate-200 font-bold">{verification.verificationDate}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-xs font-black text-emerald-400 uppercase tracking-wider">
            {isAr ? 'بيان التوثيق والمصادر المعتمدة:' : 'Verification Statement & Source Integrity:'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-2xl border border-slate-800/80">
            {verification.trustNotes[locale] || verification.trustNotes.ar}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{isAr ? 'ترخيص تجاري وسجل قانوني معتمد في الصين' : 'Verified Commercial Registration in China'}</span>
          </div>

          <Link
            href={`/${locale}/booking/consultation/book-consultation`}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all shadow-lg shadow-amber-500/20 active:scale-98"
          >
            <span>{isAr ? 'طلب فحص وتدقيق ميداني خاص مع حسام مبروك' : 'Request Field Audit with Hussam Mabrouk'}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  // Strictly for Hossam Mabrouk's direct field audits
  return (
    <div
      className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-500/15 via-slate-900/90 to-slate-950 border border-amber-500/40 shadow-2xl relative overflow-hidden backdrop-blur-md space-y-6"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="absolute top-0 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-amber-500/20">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                {isAr ? '✓ موثّق ومدقّق ميدانيًا' : '✓ Verified & Field-Audited'}
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              {verification.verifiedBy[locale] || verification.verifiedBy.ar}
            </h3>
            <p className="text-xs text-slate-400">
              {verification.consultantRole[locale] || verification.consultantRole.ar}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-slate-800 self-start sm:self-center">
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span>{isAr ? 'تاريخ التدقيق الميداني:' : 'Audited On:'}</span>
          <span className="font-mono text-slate-200 font-bold">{verification.verificationDate}</span>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-black text-amber-400 uppercase tracking-wider">
          {isAr ? 'ملاحظات المستشار وتوصيات الاستيراد الميدانية:' : 'Consultant Field Notes & Sourcing Advice:'}
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-2xl border border-slate-800/80">
          {verification.trustNotes[locale] || verification.trustNotes.ar}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{isAr ? 'تم التدقيق والمعاينة على أرض الواقع في الصين' : 'Physically Inspected on the Ground in China'}</span>
        </div>

        <Link
          href={`/${locale}/booking/consultation/book-consultation`}
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all shadow-lg shadow-amber-500/20 active:scale-98"
        >
          <span>{isAr ? 'احجز استشارة تجارية مع حسام مبروك' : 'Book Consultation with Hussam Mabrouk'}</span>
          <ArrowIcon className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
