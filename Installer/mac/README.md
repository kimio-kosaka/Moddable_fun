## Moddable SDK installer shell scripts for macOS

* inst_moddable-sdk_mac : Host tool and ESP32 dev.environment installer
* inst_moddable-esp_mac : ESP8288 dev.environment installer

This shell script is required "wget" command. <br />
If you didn't install it yet then you must install it as below.
 ```
$ brew install wget
 ```
#### How to use.
1. Prepare the password file "passwd.sudo" in the same directory as "inst_moddable-sdk_mac" file
1. Write the password of sudo-command into "passwd.sudo" file
1. Write the serial-port setting into "inst_moddable-sdk_mac" script<br />
 cf. SERIAL_DEV=/dev/cu.SLAB_USBtoUART
1. Execute "inst_moddable-sdk_mac"<br />
1. After install finished rerun "Terminal"<br />
And Delete "passwd.sudo" file as soon as possible to keep security

#### Setting file for Moddable-SDK environment
1. The installer "inst_moddable-sdk_mac" create environment setting files ~/.moddable_profile  and modify ~/.profile
2. These files name can be change by variable MODDABLE_PROFILE and EXECUTE_PROFILE in "inst_moddable-sdk_mac" script

#### Verify the set up
1. Verify the xsbug debugger
```
$ open ${MODDABLE}/build/bin/mac/release/xsbug.app
```
2. Verify the environment simulator
```
$ cd ${MODDABLE}/examples/helloworld
$ mcconfig -d -m -p mac
```
3. Verify the setup by building helloworld for the esp32 target
```
$ mcconfig -d -m -p esp32
```

More information is here --> ["Getting Started"ß](https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/Moddable%20SDK%20-%20Getting%20Started.md) by Moddable Tech INC.
