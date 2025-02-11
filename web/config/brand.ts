export const brandConfig = {
  // 品牌名称
  name: process.env.NEXT_PUBLIC_BRAND_NAME || 'Dify',

  // 品牌英文名
  englishName: process.env.NEXT_PUBLIC_BRAND_ENGLISH_NAME || 'Dify',

  // 条件渲染
  shouldRender: process.env.NEXT_PUBLIC_SHOULD_RENDER === 'true',
}
