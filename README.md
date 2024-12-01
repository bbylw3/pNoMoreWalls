# NodeHub - NoMoreWalls节点导航

NodeHub 是一个优雅的单页面应用，采用现代化设计风格，为 [NoMoreWalls](https://github.com/peasoft/NoMoreWalls) 项目提供导航服务。项目使用 Cloudflare Workers 部署，无需服务器，一键部署即可使用。

## 特性

- 🎨 PornHub 风格的设计
- 📱 完美适配各种设备
- 🚀 轻量级单页面应用
- ⚡️ Cloudflare Workers 部署
- 🔄 多种订阅格式支持
- ✅ 节点可用性验证

## 订阅格式

- Base64 订阅
  - 适用于 v2ray 系列客户端
  - 支持 v2rayN、v2rayNG 等
- Clash 订阅
  - 适用于 Clash 系列客户端
  - 支持 Clash For Windows 等
- Clash Meta 订阅
  - 适用于 Clash Meta 核心
  - 支持 Clash Verge、Clash Meta For Android 等
- 原始节点列表
  - 未经转换的原始节点
  - 方便进行自定义转换

## 功能特点

- 多格式支持：支持多种主流客户端订阅格式
- 自动更新：定时抓取并更新节点信息
- 节点筛选：自动检测节点可用性
- 简单易用：一键复制订阅链接
- 实时反馈：复制操作的视觉反馈
- 镜像支持：提供项目镜像站点访问

## 快速部署

1. 登录到 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 `Workers & Pages`
3. 点击 `Create Worker` 创建新的 Worker
4. 将 `worker.js` 中的代码复制到编辑器中
5. 点击 `Save and Deploy` 保存并部署
6. 访问分配的 `.workers.dev` 域名即可使用

## 项目依赖

本项目是完全独立的单文件应用，不依赖任何外部库和框架，仅需要：

- Cloudflare Workers 环境
- 支持现代 CSS 特性的浏览器

## 致谢

- 节点来源：[NoMoreWalls](https://github.com/peasoft/NoMoreWalls)
- 项目镜像：[NWalls.html](https://peasoft.github.io/NWalls.html)

## 免责声明

本项目仅供学习交流使用，请勿用于非法用途。使用本项目导航到的任何资源时，请遵守当地法律法规。

## 许可证

MIT License