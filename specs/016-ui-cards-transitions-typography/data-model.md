# Visual Data Model: UI Cards Images, Mobile Transitions, Animated Gradient Headers & Arabic Typography

## Entities & Visual Datasets

### 1. Sector Card Visual Item (`SectorCardItem`)

| Attribute | Type | Description | Example |
|:---|:---|:---|:---|
| `id` | `string` | Unique sector identifier | `"electronics"` |
| `number` | `string` | Display index | `"01"` |
| `titleAr` | `string` | Arabic title | `"الأجهزة الإلكترونية الاستهلاكية ومكوناتها"` |
| `titleEn` | `string` | English title | `"Consumer Electronics & Components"` |
| `categoryAr` | `string` | Arabic category tag | `"الإلكترونيات والتكنولوجيا"` |
| `categoryEn` | `string` | English category tag | `"Electronics & Tech"` |
| `bgImage` | `string` | Public image path | `"/images/sectors/electronics.jpg"` |

### 2. Service Card Visual Item (`ServiceCardItem`)

| Attribute | Type | Description | Example |
|:---|:---|:---|:---|
| `id` | `string` | Unique service identifier | `"sourcing"` |
| `number` | `string` | Display index | `"01"` |
| `titleAr` | `string` | Arabic title | `"الاستيراد"` |
| `titleEn` | `string` | English title | `"Import Sourcing"` |
| `descAr` | `string` | Arabic description | `"تخليص جمركي شامل وإدارة شحن الواردات..."` |
| `descEn` | `string` | English description | `"Comprehensive customs clearance and import management..."` |
| `tagsAr` | `string[]` | Arabic feature badges | `["جمركة", "شحن", "ضرائب"]` |
| `tagsEn` | `string[]` | English feature badges | `["Customs", "Freight", "Tax"]` |
| `bgImage` | `string` | Public image path | `"/images/services/sourcing.jpg"` |

### 3. Section Header Configuration (`SectionHeaderConfig`)

| Attribute | Type | Description | Default |
|:---|:---|:---|:---|
| `badge` | `string` | Sub-header section badge | `"القطاعات"` / `"الخدمات"` |
| `title` | `string` | Main section header text | `"خبرة قطاعية، مهيأة للتوسع والنمو."` |
| `subtitle` | `string` | Optional descriptive paragraph | `""` |
| `animatedGradient` | `boolean` | Flag to enable animated text gradient | `true` |
