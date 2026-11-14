# Week 8 - Workflow Optimization Report

## 1. Matrix 테스트 확장
- 운영체제: Ubuntu, Windows
- Node.js 버전: 20, 22
- 총 4가지 조합으로 테스트 수행

## 2. 중복 작업 제거
- Reusable Workflow를 사용하여 테스트 작업을 분리
- Composite Action을 사용하여 Node.js 설정 및 의존성 설치 작업을 통합

## 3. 캐싱 적용 전후 비교

| 항목 | 캐싱 전 | 캐싱 후 |
|---|---:|---:|
| Setup Node.js | 1초 | 1초 |
| Install dependencies | 2초 | 0초 |
| 합계 | 3초 | 1초 |

개선률: 약 66.7%

계산식: ((3 - 1) / 3) × 100 = 66.7%

※ GitHub Actions의 초 단위 표시를 기준으로 계산한 근사치입니다.

## 4. 선택적 배포 파이프라인
- main 브랜치에 push된 경우에만 배포 작업 실행
- 변경 파일 감지를 통해 애플리케이션 관련 파일이 변경된 경우에만 배포 실행

## 5. 결론
Matrix 테스트, Reusable Workflow, Composite Action을 적용하여 워크플로를 개선했습니다. 또한 npm 캐싱을 적용하여 의존성 설치 시간을 단축했으며, 변경 파일 감지를 통해 불필요한 배포 작업을 줄이도록 구성했습니다.
