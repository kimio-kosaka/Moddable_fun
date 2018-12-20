## Moddable SDK installer shell scripts for Linux

* inst_moddable-sdk_lin : Host tool and ESP32 dev.environment installer
* inst_moddable-esp_lin : ESP8288 dev.environment installer

#### How to use.
1. Prepare the password file "passwd.sudo" in the same directory as "inst_moddable-sdk_lin" file
1. Write the password of sudo command into "passwd.sudo" file
1. Write the serial-port setting into "inst_moddable-sdk_mac" script<br />
 cf. SERIAL_DEV=/dev/ttyUSB0
1. Execute "inst_moddable-sdk_lin"<br />
1. After install finished rerun "Terminal"<br />
And Delete "passwd.sudo" file as soon as possible to keep security

#### Setting file for Moddable-SDK environment
1. The installer "inst_moddable-sdk_lin" create environment setting files ~/.moddable_profile  and modify ~/.profile
1. These files name can be change by variable MODDABLE_PROFILE and EXECUTE_PROFILE in "inst_moddable-sdk_lin" script

#### Verify the set up
1. Verify the xsbug debugger
  ```
$ xsbug
  ```
1. Verify the environment simulator
 ```
$ cd ${MODDABLE}/examples/helloworld
$ mcconfig -d -m -p lin
 ```
1. Verify the setup by building helloworld for the esp32 target
 ```
 $ mcconfig -d -m -p esp32
 ```

More information is here --> ["Getting Started"](https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/Moddable%20SDK%20-%20Getting%20Started.md) by Moddable Tech INC.
