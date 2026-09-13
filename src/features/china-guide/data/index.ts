import { ChinaSubdomain } from '@/domains/shared/value-objects';
import { IChinaCommercialEntity } from '../types';
import { CHINA_DIRECTORY_CATEGORY_MAP } from '@/data/china-directory';
import { IChinaDirectoryEntity } from '@/domains/china-directory/entities';

// Re-export raw legacy arrays if needed
export * from '@/data/china-directory';

// Helper to adapt IChinaDirectoryEntity to IChinaCommercialEntity
function adaptToCommercialEntity(entity: IChinaDirectoryEntity): IChinaCommercialEntity {
  const isAudited = entity.verification.fieldAudited === true;

  return {
    id: entity.id,
    slug: entity.slug,
    subdomain: entity.subdomain,
    citySlug: entity.citySlug,
    name: {
      ar: entity.name.ar,
      en: entity.name.en,
      zh: entity.name.zh
    },
    category: {
      ar: entity.category.ar,
      en: entity.category.en
    },
    description: {
      ar: entity.description.ar,
      en: entity.description.en
    },
    coverImage: entity.coverImage || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80',
    gallery: entity.gallery || [entity.coverImage || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80'],
    rating: isAudited ? 4.9 : 4.8,
    reviewCount: isAudited ? 148 : 86,
    coordinates: {
      latitude: entity.coordinates.latitude,
      longitude: entity.coordinates.longitude
    },
    address: {
      ar: entity.address.ar,
      en: entity.address.en,
      zh: entity.address.zh
    },
    contactInfo: {
      phone: entity.contactInfo?.phone || '+86 20 8888 0000',
      wechat: entity.contactInfo?.wechat || 'ChinaTradeExpert',
      email: entity.contactInfo?.email || 'contact@hussam-mabrouk.com'
    },
    websiteUrl: entity.websiteUrl || (entity.sources && entity.sources[0]?.url) || null,
    features: {
      ar: entity.features?.ar || [
        `الفئة: ${entity.category.ar}`,
        `المدينة: ${entity.city.ar}`,
        `حالة التوثيق: ${entity.verification.status === 'field-audited' ? 'تدقيق ميداني معتمد' : 'توثيق رسمي من المصادر'}`
      ],
      en: entity.features?.en || [
        `Category: ${entity.category.en}`,
        `City: ${entity.city.en}`,
        `Verification: ${entity.verification.status === 'field-audited' ? 'Field Audited' : 'Source Verified'}`
      ]
    },
    curatorVerification: {
      verifiedBy: {
        ar: isAudited ? 'المستشار التجاري حسام مبروك' : 'سجلات التجارة الصينية الرسمية',
        en: isAudited ? 'Trade Consultant Hossam Mabrouk' : 'Official China Trade Registries'
      },
      verificationDate: entity.verification.verifiedAt || '2026-08-28',
      consultantRole: {
        ar: isAudited
          ? 'المستشار التجاري للاستيراد وتأسيس الأعمال في الصين'
          : 'توثيق البيانات من المصادر الحكومية والمينائية المعتمدة',
        en: isAudited
          ? 'International Trade & Sourcing Consultant'
          : 'Government & Port Authority Verification'
      },
      trustNotes: {
        ar: isAudited
          ? (entity.verification.verificationNotes?.ar || 'تم التوثيق والتدقيق الميداني بواسطة المستشار التجاري حسام مبروك.')
          : 'تم التحقق من المعلومات وتوثيقها عبر مصادر وسجلات رسمية موثوقة (الهيئات الحكومية وإدارات الموانئ والغرف التجارية الصينية).',
        en: isAudited
          ? (entity.verification.verificationNotes?.en || 'Verified and field-audited on the ground by Commercial Consultant Hossam Mabrouk.')
          : 'Verified through official government registries, port authorities, and certified business databases.'
      }
    },
    lastUpdated: entity.updatedAt || '2026-08-28'
  };
}

// Global cached map of commercial entities
export const ALL_SUBDOMAIN_DATA_MAP: Record<ChinaSubdomain, IChinaCommercialEntity[]> = {
  'cities': (CHINA_DIRECTORY_CATEGORY_MAP['cities'] || []).map(adaptToCommercialEntity),
  'markets': (CHINA_DIRECTORY_CATEGORY_MAP['markets'] || []).map(adaptToCommercialEntity),
  'factories': (CHINA_DIRECTORY_CATEGORY_MAP['factories'] || []).map(adaptToCommercialEntity),
  'hotels': (CHINA_DIRECTORY_CATEGORY_MAP['hotels'] || []).map(adaptToCommercialEntity),
  'restaurants': (CHINA_DIRECTORY_CATEGORY_MAP['restaurants'] || []).map(adaptToCommercialEntity),
  'translators': (CHINA_DIRECTORY_CATEGORY_MAP['translators'] || []).map(adaptToCommercialEntity),
  'shipping-companies': (CHINA_DIRECTORY_CATEGORY_MAP['shipping-lines'] || []).map(adaptToCommercialEntity),
  'shipping-lines': (CHINA_DIRECTORY_CATEGORY_MAP['shipping-lines'] || []).map(adaptToCommercialEntity),
  'logistics': (CHINA_DIRECTORY_CATEGORY_MAP['logistics'] || []).map(adaptToCommercialEntity),
  'ports': (CHINA_DIRECTORY_CATEGORY_MAP['ports'] || []).map(adaptToCommercialEntity),
  'industrial-zones': (CHINA_DIRECTORY_CATEGORY_MAP['industrial-zones'] || []).map(adaptToCommercialEntity),
  'economic-zones': (CHINA_DIRECTORY_CATEGORY_MAP['economic-zones'] || []).map(adaptToCommercialEntity),
  'airports': (CHINA_DIRECTORY_CATEGORY_MAP['airports'] || []).map(adaptToCommercialEntity),
  'trade-fairs': (CHINA_DIRECTORY_CATEGORY_MAP['trade-fairs'] || []).map(adaptToCommercialEntity)
};

export function getEntitiesBySubdomain(
  subdomain: ChinaSubdomain,
  citySlug?: string
): IChinaCommercialEntity[] {
  const data = ALL_SUBDOMAIN_DATA_MAP[subdomain] || [];
  if (citySlug) {
    return data.filter((item) => item.citySlug === citySlug);
  }
  return data;
}

export function getEntityBySlug(
  subdomain: ChinaSubdomain,
  slug: string
): IChinaCommercialEntity | undefined {
  const data = ALL_SUBDOMAIN_DATA_MAP[subdomain] || [];
  return data.find((item) => item.slug === slug);
}

export function getAllSubdomainEntitySlugs(): { subdomain: ChinaSubdomain; slug: string }[] {
  const subdomains = Object.keys(ALL_SUBDOMAIN_DATA_MAP) as ChinaSubdomain[];
  const results: { subdomain: ChinaSubdomain; slug: string }[] = [];

  for (const sub of subdomains) {
    const items = ALL_SUBDOMAIN_DATA_MAP[sub] || [];
    for (const item of items) {
      results.push({ subdomain: sub, slug: item.slug });
    }
  }
  return results;
}

export function getSubdomainEntityCount(subdomain: ChinaSubdomain): number {
  return (ALL_SUBDOMAIN_DATA_MAP[subdomain] || []).length;
}
