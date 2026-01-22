---

slug: yolov11-deployment
title: YoloV11部署指南：在win下用conda搭建yolov11环境
authors: [HY-SL]
tags: [yolo, deployment, conda]
---

<!-- truncate -->

# win下用conda搭建yolov11环境

1.  按win+r键，输入`cmd`，在打开的页面输入：`nvidia-smi` ，查看显卡支持的最高cuda版本

    ***以下所有命令均在conda命令行下完成，并且可能会遇到权限不足，最好以管理员身份运行conda命令行***

2.  新建Conda虚拟环境    `conda create --prefix D:\Anaconda\envs\yolov11 python=3.10` 
3.  切换到虚拟环境    `conda activate D:\Anaconda\envs\yolov11`
4.  安装Pyorch `pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118`
    1. 检查安装 :  输入  `python`
    2. 输入  `import torch`
    3. 输入  `print(torch.version.cuda)`
    4. 输入  `print(torch.__version__)`
5. 安装ultralytics    `pip install ultralytics`
    1. 检查安装 :  输入  `python`
    2. 输入  `import ultralytics `(无报错即安装成功，输入`pip list`或`conda list`可查看所有已安装的包及版本）
6. win下yolov11环境搭建完成，最好全程在VPN加速环境下完成
7. cuda版本最好为11.8，过高可能会报错。python版本为3.10，较为稳定。
8. Anaconda3下载，官方网址： https://www.anaconda.com/

​					清华源： https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/?C=M&O=D

​	cuda下载网址： https://developer.nvidia.com/cuda-toolkit-archive

​	cuDNN下载网址： https://developer.nvidia.com/cuda-toolkit-archive

​	Pyorth下载网址： https://pytorch.org/get-started/locally/

9. Conda常用命令：
    - 列出所有虚拟环境：`conda env list`
    - 激活虚拟环境：`conda activate +环境名称或环境文件夹地址`
    - 安装包：`conda install +包名`
    - 退出当前虚拟环境：`conda deactivate`
    - 创建虚拟环境：
        1. 选择地址：`conda create --prefix D:\Anaconda\envs\yolov11 python=3.10` #环境地址的最后为环境名（\yolov11）
        2. 默认地址：`conda create --name +你想创建的环境名 python=3.10`  #python版本，默认地址为C:\Users\\[用户名]\\.conda\envs
    - 删除虚拟环境：
        1. 先退出虚拟环境：`conda deactivate`
        2. 删除环境：`conda remove -n  +你的环境名称 --all`

