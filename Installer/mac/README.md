## Moddable SDK install shell script for macOS

* inst_moddable-sdk_mac : Host tool and ESP32 dev.environment installer
* inst_moddable-esp_mac : ESP8288 dev.environment installer

#### How to use.
This shell script is required wget command. <br />
If you didn't install it yet then you must install it as below.
 ```
$ brew install wget
```
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
