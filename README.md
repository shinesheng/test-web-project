## 项目地址
- git：https://github.com/shinesheng/test-web-project.git


## 本地安装运行
1. 安装依赖：根目录下执行npm install

## 运行1
1. 启动node服务：node app.js
2. 代码编译：webpack -w
3. 访问地址：localhost:8222

## 运行2
1. 执行webpack server服务：webpack-dev-server --hot --inline --content-base ./dist
2. 访问地址：localhost:8222


## 项目结构
- app.js：node服务启动文件
- dist：编译产出文件，实际部署代码
    - lib：将内容copy到dist中
- app
    -  lib：外部js库
