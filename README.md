# Glasgow Pair Programming Workshop

## Pre-Requisite - Install Node

In order to work with ES6 you need a way to run the build and test tools (that
are also written in JavaScript).  In practice, this means running [node.js](https://nodejs.org/en/) on a server or your local machine so you can run the various
commands used.

We have provided a few ways of doing this.  

1. Download and install node onto your machine an run it locally
2. Run the VM provided using vagrant

### Option 1: Local node.js Install

Open terminal and ```cd``` to this repository

Install [nvm](https://github.com/creationix/nvm) (Node Version Manager)
```shell
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```
OR
```shell
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

Install node (version 6.9.4) by running ```nvm install```

### Option 2: Run Virtual Box VM Using Vagrant

If you already have virtualbox and vagrant installed, this is a good option.  

Note that the full install procedure will take at least 10 minutes.

Install virtual box using the [installer](https://www.virtualbox.org/wiki/Downloads) or (OSX only) ```brew cask install virtualbox```

Install vagrant using the [installer](https://www.vagrantup.com/downloads.html) or (OSX only) ```brew cask install vagrant```

Open terminal and ```cd``` to this repository

Start the VM
```shell
vagrant up --provision
```
Connect to the VM and navigate to the source code (this repository is mounted at ```/vagrant```)
```shell
vagrant ssh
cd /vagrant
```

## Setup and Run Tests

Once you have installed node.js, you use a packaged utility called npm to pull down the various libraries we are using to build and test your code.
```
npm install
```
and then run the tests
```
npm test
```
You should see 1 failing test something like this
```
$ npm test

> glasgow-pair-programming-workshop@0.1.0 test /vagrant
> mocha --opts .mocha.opts



  kata 1 - countWords
    1) returns one when there is one word


  0 passing (80ms)
  1 failing

  1) kata 1 - countWords returns one when there is one word:

      AssertionError: expected -1 to equal 1
      + expected - actual

      --1
      +1

      at Context.<anonymous> (test/katasTest.js:24:36)
```

### Useful Links
* [Chai assertions](http://chaijs.com/api/bdd/)
