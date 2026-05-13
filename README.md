# GrayDraft_StylePlugin

脚本插件仓库（与 GrayDraft 应用内 `docs/initPlan/Plugin` 方案对齐）：内含 **`GrayDraftStyle.grayplugin`** 包，提供笔记本样式与 **Agent `manifest.agent` 契约**。

## 目录结构（提交到 GitHub 的根布局）

```
GrayDraft_StylePlugin/
├── README.md
└── GrayDraftStyle.grayplugin/     # 符合规范的 .grayplugin 目录
    ├── manifest.json              # 必需（含 kind、可选 agent 块）
    ├── main.js                    # 笔记本管线入口（受控运行时加载）
    ├── style.css                  # 可选，建议限定在 .gd-style-doc 下
    ├── assets/                    # 可选资源（图标等）
    └── README.md                  # 可选：插件说明
```

- 将 `manifest.json` 里的 **`repository`** 换成你真实的 GitHub 地址（当前为占位 `your-username`）。
- **不要**把 `.graydraft` 项目放进本仓库；项目级安装由 GrayDraft 写入 `<项目>.graydraft/Metadata/Plugins/`。

## 在 GrayDraft 中的两种使用方式

### 一、直接导入本仓库目录

1. 打开 GrayDraft → **Settings** → **Plugins**。
2. 选择安装目标：**当前项目**（需已打开 `.graydraft`）或 **用户插件目录**。
3. 点击 **Import plugin folder…**，在访达中选中：
   - **`GrayDraftStyle.grayplugin`** 这一层目录（推荐），或  
   - 本仓库根目录 `GrayDraft_StylePlugin`（应用会自动在子目录中查找带 `manifest.json` 的 `.grayplugin` 包）。

### 二、输入 GitHub 链接自动导入

1. 同上进入 **Settings → Plugins**。
2. 在 **GitHub repository URL** 中粘贴仓库地址，例如：  
   `https://github.com/your-id/GrayDraft_StylePlugin`
3. 点击 **Import from GitHub**。应用会下载默认分支的源码包、解压并在其中查找 **`*.grayplugin`** 目录后复制到所选目标。

> 公开仓库使用 GitHub API 与 zip 下载；若遇限流，可稍后重试或在浏览器手动下载 zip 后用「导入文件夹」指向解压后的目录。

## 样式能力（`style.css`）

在 `.gd-style-doc` 下提供：**标题与段落**、**有序/无序列表**（含嵌套、紧凑 `gd-list--tight`、无符号 `gd-list--plain`）、**表格**（`gd-table-wrap` 滚动容器、`gd-table--striped` 斑马纹、`gd-num` 数字列）、**引用 / 分隔线**、**行内 code 与 pre**、**figure/figcaption** 等，均使用系统语义色（`Canvas` / `CanvasText` / `LinkText`）以适配浅色与深色环境。

## Agent 与笔记本

- `kind` 为 **`html-notebook`**：未来由宿主在笔记本 WebView 中注入 `style.css` / `main.js`。
- **`manifest.agent`**：供 Agent 提示词注入设计契约（与 `docs/initPlan/Agent` 一致）。

## 许可证

MIT（可按需修改 `manifest.json` 中的 `license` 字段）。
