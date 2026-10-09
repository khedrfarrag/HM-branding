# Research & Technical Decisions: China Cities Expansion & Map 2.0 Overhaul

**Feature**: `024-china-cities-expansion-map`  
**Date**: 2026-09-13  
**Status**: Completed  

---

## 1. Map Rendering Engine & Geographic Projection

### Context & Challenge
The legacy map in `ChinaInteractiveMap.tsx` rendered a primitive polygon ellipse with 18 of the 24 cities defaulting to `{ x: 400, y: 300 }`, causing an unreadable stacked white smudge. High-density industrial clusters (Pearl River Delta and Yangtze River Delta) have cities located within 30–80 km of each other, making raw static labels impossible to read without collision.

### Decision
Implement a pure **SVG-based geographic projection engine** (`viewBox="0 0 900 680"`) representing authentic China continental boundaries, Bohai Bay, Yangtze estuary, Pearl River estuary, and Hainan island, paired with calibrated spherical-to-viewport coordinates for all 34 commercial cities.

### Rationale
- **Zero Heavy Dependencies**: Eliminates Leaflet/Mapbox/OpenLayers (which add 150KB+ JS, require external tiles, cause SSR hydration flashes, and need third-party API keys).
- **Crisp Luxury Aesthetics**: Pure SVG enables bespoke luxury dark-mode styling (Slate-950, deep indigo gradients, amber-400 glows, glassmorphic tooltips) matching Hossam Mabrouk's branding identity.
- **SSR & SSG Compatibility**: Renders instantaneously in Next.js Server Components and Client Components with 0 layout shift.

### Alternatives Evaluated
- *Leaflet / React-Leaflet*: Heavy, requires CSS imports, client-only dynamic loading, and external map tiles that can be blocked or slow in certain countries.
- *D3-geo with GeoJSON*: Good projection math, but adds 60KB runtime bundle overhead when a calibrated SVG path provides equivalent visual fidelity.

---

## 2. Label Collision & High-Density Cluster UX

### Context & Challenge
Cities like Guangzhou, Foshan, Shunde, Dongguan, Shenzhen, and Zhongshan are tightly clustered in South China. Similarly, Shanghai, Suzhou, Wuxi, Changzhou, Hangzhou, Shaoxing, and Ningbo are tightly clustered in East China.

### Decision
1. **Interactive Pin System**: Render sleek glowing markers (`<circle>` with radial pulse on selected/hovered state) rather than permanent horizontal text strings for all 34 cities.
2. **Selective Landmark Labeling**: Display short bilingual labels only for regional anchors (e.g. Beijing, Shanghai, Guangzhou, Chengdu, Wuhan) or upon user interaction.
3. **Floating Glassmorphic Tooltips**: On hover (desktop) or touch (mobile), a floating glass card displays the city name, province, and top specialty.
4. **Industrial Belt Filter Tabs**:
   - *All China (كل الصين)*: Overview of all 34 cities.
   - *Pearl River Delta (GBA - حوض دلتا اللؤلؤ)*: Guangzhou, Shenzhen, Foshan, Dongguan, Shunde, Zhongshan, Shantou.
   - *Yangtze River Delta (دلتا نهر يانغتسي)*: Shanghai, Hangzhou, Ningbo, Suzhou, Shaoxing, Cixi, Haining, Changzhou, Wuxi, Nantong, Tongxiang.
   - *Bohai Rim & North (شمال الصين وحوض بوهاي)*: Beijing, Tianjin, Qingdao, Linyi, Cangzhou.
   - *Central & Inland (الوسط والجنوب الداخلي)*: Wuhan, Zhengzhou, Chengdu, Chongqing.
   - *Southeast Coast (الساحل الجنوبي الشرقي)*: Xiamen, Quanzhou, Wenzhou, Ningde, Taizhou, Yongkang, Yiwu.

---

## 3. Calibrated SVG Coordinate System for All 34 Cities

Calculated on a `900 x 680` canvas matching real geographical projections of China:

```typescript
export const CHINA_CITY_MAP_COORDINATES: Record<string, { x: number; y: number; regionKey: string }> = {
  // North China & Bohai Rim
  beijing: { x: 605, y: 205, regionKey: 'north' },
  tianjin: { x: 625, y: 225, regionKey: 'north' },
  cangzhou: { x: 615, y: 250, regionKey: 'north' },
  qingdao: { x: 670, y: 275, regionKey: 'north' },
  linyi: { x: 635, y: 305, regionKey: 'north' },

  // Yangtze River Delta
  shanghai: { x: 725, y: 375, regionKey: 'yangtze' },
  suzhou: { x: 705, y: 368, regionKey: 'yangtze' },
  wuxi: { x: 690, y: 362, regionKey: 'yangtze' },
  changzhou: { x: 675, y: 355, regionKey: 'yangtze' },
  nantong: { x: 715, y: 345, regionKey: 'yangtze' },
  hangzhou: { x: 685, y: 400, regionKey: 'yangtze' },
  shaoxing: { x: 695, y: 412, regionKey: 'yangtze' },
  ningbo: { x: 730, y: 415, regionKey: 'yangtze' },
  cixi: { x: 718, y: 395, regionKey: 'yangtze' },
  haining: { x: 698, y: 388, regionKey: 'yangtze' },
  tongxiang: { x: 692, y: 382, regionKey: 'yangtze' },

  // Southeast Coast (Zhejiang & Fujian)
  yiwu: { x: 672, y: 430, regionKey: 'southeast' },
  yongkang: { x: 678, y: 448, regionKey: 'southeast' },
  taizhou: { x: 712, y: 450, regionKey: 'southeast' },
  wenzhou: { x: 700, y: 480, regionKey: 'southeast' },
  ningde: { x: 685, y: 515, regionKey: 'southeast' },
  quanzhou: { x: 665, y: 545, regionKey: 'southeast' },
  xiamen: { x: 652, y: 560, regionKey: 'southeast' },

  // Pearl River Delta (South China / GBA)
  guangzhou: { x: 575, y: 568, regionKey: 'gba' },
  foshan: { x: 560, y: 574, regionKey: 'gba' },
  shunde: { x: 563, y: 585, regionKey: 'gba' },
  dongguan: { x: 588, y: 575, regionKey: 'gba' },
  zhongshan: { x: 572, y: 592, regionKey: 'gba' },
  shenzhen: { x: 598, y: 588, regionKey: 'gba' },
  shantou: { x: 642, y: 565, regionKey: 'gba' },

  // Central & Inland Hubs
  wuhan: { x: 575, y: 395, regionKey: 'central' },
  zhengzhou: { x: 555, y: 295, regionKey: 'central' },
  chengdu: { x: 395, y: 410, regionKey: 'central' },
  chongqing: { x: 445, y: 435, regionKey: 'central' }
};
```

---

## 4. Ground Sourcing Facts for the 10 New Cities

1. **Beijing (北京)**: National tech (Zhongguancun), BAIC automotive, Xinfadi Agri-wholesale, Panjiayuan antiques, CIFTIS & Auto China, historic Niujie Muslim Quarter & Grand Mosque.
2. **Tianjin (天津)**: Northern container gateway, Wangqingtuo bicycle/e-bike capital (>40% of China bikes), Cuihuangkou carpets, Daqiuzhuang steel pipes.
3. **Wuhan (武汉)**: China Optics Valley (lasers, fiber optics), Hankou North Trade City (30 wholesale markets), Dongfeng automotive base.
4. **Nantong (南通)**: Dieshiqiao International Home Textile Market (>60% China bedding/linens), marine engineering & shipbuilding.
5. **Zhengzhou (郑州)**: Foxconn iPhone City (>50% global iPhones), central rail/air logistics, Yutong Bus, auto parts wholesale, rich Hui Muslim heritage.
6. **Changzhou (常州)**: New Energy Capital (EV batteries, solar PV), robotics, Henglin SPC/vinyl flooring hub.
7. **Wuxi (无锡)**: Xishan electric scooter capital (>35% global e-scooters: Yadea, Niu), semiconductors/IC packaging, stainless steel trade.
8. **Taizhou - Zhejiang (浙江台州)**: Huangyan plastic homeware & precision mold capital, Wenling water pumps, Jiaojiang sewing machines.
9. **Tongxiang / Puyuan (桐乡濮院)**: Puyuan knitwear & cashmere sweater capital (>70% China woolen sweaters), chemical fibers.
10. **Shantou / Chenghai (汕头澄海)**: Chenghai world toy capital (>70% global plastic/RC toys), Chaonan/Chaoyang seamless lingerie & underwear.
