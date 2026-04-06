import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/choosing-a-preset',
        'getting-started/theme-editor-overview',
        'getting-started/understanding-color-schemes',
        'getting-started/recommended-first-steps',
      ],
    },
    {
      type: 'category',
      label: 'Setup Guides',
      items: [
        'setup-guides/logo-and-favicon',
        'setup-guides/typography',
        'setup-guides/color-schemes',
        'setup-guides/navigation-and-menus',
        'setup-guides/social-media-links',
        'setup-guides/cart-settings',
        'setup-guides/search-settings',
      ],
    },
    {
      type: 'category',
      label: 'Sections Guide',
      items: [
        'sections-guide/header',
        'sections-guide/footer',
        'sections-guide/hero-banner',
        'sections-guide/scroll-expansion-hero',
        'sections-guide/featured-collection',
        'sections-guide/shop-the-look',
        'sections-guide/editorial-split',
        'sections-guide/image-with-text',
        'sections-guide/collage',
        'sections-guide/collection-list',
        'sections-guide/video-hero',
        'sections-guide/testimonials',
        'sections-guide/multicolumn',
        'sections-guide/rich-text-and-custom-liquid',
        'sections-guide/newsletter',
        'sections-guide/marquee',
        'sections-guide/product-recommendations',
      ],
    },
    {
      type: 'category',
      label: 'Product & Collection Pages',
      items: [
        'product-collection/product-page-setup',
        'product-collection/collection-page',
        'product-collection/collection-list',
      ],
    },
    {
      type: 'category',
      label: 'Styling & Customization',
      items: [
        'styling-customization/buttons',
        'styling-customization/product-cards',
        'styling-customization/media-and-images',
        'styling-customization/animations',
      ],
    },
    {
      type: 'category',
      label: 'Customer Accounts',
      items: [
        'customer-accounts/login-and-registration',
        'customer-accounts/account-dashboard',
      ],
    },
    {
      type: 'category',
      label: 'FAQs',
      items: [
        'faqs/switching-presets',
        'faqs/custom-colors',
        'faqs/custom-fonts',
        'faqs/page-speed',
        'faqs/mobile-responsive',
        'faqs/third-party-apps',
        'faqs/translation',
        'faqs/custom-css',
        'faqs/updating-theme',
      ],
    },
    'changelog/v1-0-0',
    'support/contact-and-support',
  ],
};

export default sidebars;
