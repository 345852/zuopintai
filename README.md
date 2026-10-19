# 作品台

访问地址：https://118.25.109.46/zuopintai/

采用深色圆角界面、绿色操作按钮、作品概览和三列作品卡片，并适配平板与手机。支持搜索、分类筛选、打开当前结果和复制链接。

点击顶部统计卡片可切换对应分类，“总作品”恢复全部；卡片和分类栏保持选中状态同步，统计数量根据实际作品计算。支持鼠标、触屏以及键盘 Enter / 空格操作。

项目为独立静态页面，无构建依赖。直接打开 `index.html`，或在项目目录运行 `python3 -m http.server 8080` 预览。

发布顺序：先将源码提交并推送到 GitHub，再备份腾讯云 `/opt/my-resource-page/dist/zuopintai/index.html`，上传新文件并原子替换入口。无需重启服务。

线上作品入口集中页，包含以下链接：

- 春日菜谱下单小程序：http://118.25.109.46/chunri-caipu-xiadan-xiaochengxu/
- 社畜反击战：http://118.25.109.46/shechu-fanji-zhan/
- 影视 App：http://118.25.109.46/yingshi-app-jiaohu/
- 优化编辑器：http://118.25.109.46/lanbai-xinban-bianjiqi/
- 监测面板：http://118.25.109.46/monitor-dashboard/
- AI编辑器：http://118.25.109.46/ai-editor/
- 游戏 App：http://118.25.109.46/youxi-app/
