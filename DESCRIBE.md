## 契机
>重学前端——动手实现响应式布局

## 目标
>构建一个响应式网站，能够支持pc、移动端等多种设备响应的网站——简单介绍自己，后续构建其他项目可以添加进来，让更多的人认识我。

## 构建流程
1. 构建项目
2. 填写项目基本信息，例如package.json文件中的内容，以及html中的元标签..
3. 依赖库调研、确定
4. 关联git、提交代码到github，创建分支，符合标准流程
5. 初始化项目样式(例如修改默认样式、定义颜色变量(主题..)、布局变量...)--遵守css规范(命名、风格、注释...)
6. 基本html编写--遵守规范，需要考虑无障碍
  6.1-页面元素
  6.2-素材
7. 样式优化
8. 使用grid布局+media媒体查询响应式
9. 逐步完善项目
  9.1-主题切换
  9.2-国际化
10.   打包发布到服务器上
11.   测试项目是否存在bug
12.   发布release、完成(开源LICENSE)

## 完成情况
1. 构建项目✅
2. 项目基本信息✅
3. 基础依赖✅
  - Swiper-轮播✅
4. git、github✅
5. 项目样式初始化✅
6. html编写✅
7. 添加css样式✅
8. 响应式✅
9. 主题切换✅
10. 国际化(中英文切换)✅
11. 护眼模式✅
12. 完善提示信息
    1.  title✅
    2.  无障碍❎
      - 良好的语义(语义化)✅
      - 仅装饰用的图像 -> alt为空/role="presentation"✅
      - 文本替代品，img图像(非仅装饰用的)应该添加具体描述✅
      - 如果存在表格，尽量使用scope属性构建可访问表格
      - 多媒体无障碍
      - 移动端无障碍
    3.  响应式图片(减少用户流量)✅(picture、source、srcset属性)
      - 分辨率切换(不同的尺寸)
        - srcset
        - sizes
      - 分辨率切换(相同的尺寸，不同的分辨率)
13. 发布❎
14. 测试❎
15. 完成(开源LICENSE)❎

### HTML规范
- 语义化✅
- 无障碍
- 注释✅
  - 块开头添加注释以 【** + 一个空格 + 块名字 + ** 】命名， 例如：`** header **`
- 风格✅
  - 缩进(2个字符)✅
- 响应式图片——减少用户流量✅

### CSS规范
- 保持统一——BEM命名规范✅
- 风格✅
  - 缩进(2个字符)
- 注释✅
- 样式表拆分✅
- 变量命名规则统一✅
- 响应式布局——练习grid、flex✅
- 媒体查询✅

### JS规范
- 模块化✅
- 公用函数拆分✅