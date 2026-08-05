---
layout: ulugo
title: 许可证与致谢
sidebar: ./sidebar
---

### 项目许可证

| 范围 | 许可方式 |
| --- | --- |
| 乌鹭自行开发并在公开仓库中发布的代码 | [Mozilla Public License 2.0（MPL-2.0）](https://github.com/rinick/ulugo/blob/main/LICENSE) |
| 棋盘图像识别与截图检测的核心实现 | 单独分发，不以开源许可证发布 |
| 第三方代码与资源 | 遵循各自项目的许可证 |

MPL 2.0 是文件级的开放源代码许可证。你可以使用、研究、修改和重新分发其覆盖的代码；对外分发修改后的 MPL 文件时，需要按许可证要求提供相应源代码并保留许可证声明。新编写且不包含 MPL 代码的独立文件，可以采用其他许可证。

具体权利与义务以仓库中的 [LICENSE](https://github.com/rinick/ulugo/blob/main/LICENSE) 原文为准，也可以参考 Mozilla 的 [MPL 2.0 常见问题](https://www.mozilla.org/en-US/MPL/2.0/FAQ/)。

### 图像识别的开源边界

图片选择、裁剪、预览、结果校正及 SGF 生成等应用集成代码随乌鹭主应用以 MPL 2.0 开源；棋盘图像识别核心（其中包含对弈软件截图检测）不公开源代码。

保留这部分代码，主要是为了降低识别技术被改造成在线对局实时读盘或辅助落子的风险，同时避免截图检测机制被针对性绕过。这项限制针对技术的再利用方式，不影响正常的实体棋盘录谱、盘后数子和赛后复盘。

识别仍然在用户设备上完成：图片不会上传到服务器，我们也不会收集图片或将其用于训练。使用范围、截图检测和问题反馈方式见 [棋谱图像识别](./scan.html#screenshot)。

### 致谢

| 项目 | 与乌鹭的关系 |
| --- | --- |
| [KaTrain](https://github.com/sanderland/katrain) | AI 复盘思路与部分交互设计的重要参考 |
| [Sabaki](https://github.com/SabakiHQ/Sabaki) | SGF 编辑器设计参考；乌鹭的棋盘渲染组件基于其原始渲染器与视觉行为改写 |
| [KataGo](https://github.com/lightvector/KataGo) | 桌面版使用的本地 AI 分析引擎 |
| [circle-flags](https://github.com/HatScripts/circle-flags) | 语言选择器中的旗帜图标，采用 MIT 许可证 |

感谢这些项目的作者与贡献者，也感谢所有提交问题、建议和翻译的乌鹭用户。第三方项目的名称仅用于说明来源与致谢，不表示其作者对乌鹭提供认可或担保。

乌鹭所使用的其他第三方库和资源仍归各自权利人所有，并适用各自的许可证；重新分发时请同时遵守相应条款和许可证声明。
