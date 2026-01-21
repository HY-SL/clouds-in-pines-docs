// @ts-check
/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
module.exports = {
  // 侧边栏名称：docsSidebar（可自定义，需和 docusaurus.config.js 中的配置对应）
  docsSidebar: [
    {
      type: 'category',
      label: '嵌入式开发',
      items: [
        '嵌入式开发/STM32驱动开发',
        '嵌入式开发/ESP32开发'
      ],
    },
    {
      type: 'category',
      label: 'YOLO实践',
      items: [
        'YOLO实践/环境配置',
        'YOLO实践/模型训练'
      ],
    },
    {
      type: 'category',
      label: 'Docusaurus 教程',
      items: [
        'intro',
        {
          type: 'category',
          label: '基础教程',
          items: [
            'tutorial-basics/create-a-document',
            'tutorial-basics/create-a-page',
            'tutorial-basics/create-a-blog-post',
            'tutorial-basics/markdown-features',
            'tutorial-basics/deploy-your-site',
            'tutorial-basics/congratulations',
          ],
        },
        {
          type: 'category',
          label: '进阶教程',
          items: [
            'tutorial-extras/manage-docs-versions',
            'tutorial-extras/translate-your-site',
          ],
        },
      ],
    },
  ],
};
