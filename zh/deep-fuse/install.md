---
layout: deep-fuse
title:  "安装深度熔合"
---


### 安装

在Ubuntu的终端里依次输入以下命令
 
安装必要的编译工具 
```
sudo apt-get update
sudo apt-get install build-essential git cmake libprotobuf-dev protobuf-compiler curl libreadline-dev
```

安装Dart<br>
如果以下命令被墙 可以到这里下载安装包 [github.com/rinick/sdk/releases](https://github.com/rinick/sdk/releases/tag/1.20.0-dev.10.1) 
```

sudo apt-get update
sudo apt-get install apt-transport-https

sudo sh -c 'curl https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -'

sudo sh -c 'curl https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list > /etc/apt/sources.list.d/dart_stable.list'
sudo apt-get update

sudo apt-get install dart
```
 
安装torch
```
curl -s https://raw.githubusercontent.com/torch/ezinstall/master/install-deps | bash

git clone https://github.com/torch/distro.git ~/torch --recursive

cd ~/torch

./install.sh

source ~/.bashrc
```

安装caffee加载器
```
cd ~

luarocks install loadcaffe
```

安装深度熔合
```
git clone https://github.com/rinick/deep-fuse.git --recursive
cd ~/deep-fuse/neural-style
sh ./models/download_models.sh

cd ..

/usr/lib/dart/bin/pub get
/usr/lib/dart/bin/pub build
```

### 运行

```
cd ~/deep-fuse
sh run.sh
```