import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '嵌入式开发',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        深入探索嵌入式系统开发，从基础的电路设计与硬件原理，到 STM32、ESP32 等微控制器的驱动开发。记录软硬件协同设计、电机驱动控制等实践经验，构建扎实的嵌入式技术基础。
      </>
    ),
  },
  {
    title: '人工智能与视觉',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        聚焦深度学习与计算机视觉领域，从 YOLO 系列目标检测模型的部署与应用，到图像处理算法的实践。分享环境搭建、模型训练、推理优化的完整学习路径与踩坑经验。
      </>
    ),
  },
  {
    title: '机器人与控制',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        探索 ROS2 机器人操作系统与自动控制原理，从基础的运动学建模到复杂的路径规划与控制算法。记录机器人系统开发的全过程，将理论知识转化为实际工程能力。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
