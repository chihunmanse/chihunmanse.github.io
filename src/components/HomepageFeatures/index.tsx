import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  link: string;
  icon: string;
  description: JSX.Element;
  tags: string[];
};

const FeatureList: FeatureItem[] = [
  {
    title: "Blockchain",
    icon: "🔗",
    link: "/category/upgradeable-contract",
    tags: ["Ethereum", "Solidity", "Hardhat", "Ethers.js"],
    description: (
      <>스마트 컨트랙트 개발과 블록체인 기술에 대한 학습 내용을 정리합니다.</>
    ),
  },
  {
    title: "Backend",
    icon: "⚙️",
    link: "/category/database",
    tags: ["Node.js", "NestJS", "TypeScript", "Docker", "Database"],
    description: (
      <>
        백엔드 개발과 관련된 CS 지식, 데이터베이스, 서버 아키텍처 등을 다룹니다.
      </>
    ),
  },
  {
    title: "DevOps",
    icon: "🚀",
    link: "/category/aws-architecture",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    description: (
      <>
        클라우드 인프라와 DevOps 도구들을 활용한 배포 및 운영 경험을 공유합니다.
      </>
    ),
  },
];

function Feature({ title, icon, link, description, tags }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.featureCard}>
        <a href={link} className={styles.featureLink}>
          <div className={styles.featureIcon}>{icon}</div>
          <h3 className={styles.featureTitle}>{title}</h3>
          <p className={styles.featureDescription}>{description}</p>
          <div className={styles.featureTags}>
            {tags.map((tag, idx) => (
              <span key={idx} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
