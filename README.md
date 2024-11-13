# matcher-mobile

# Fixes for mac & android

export ANDROID_SDK=/Users/dmitry/Library/Android/sdk
export PATH=/Users/dmitry/Library/Android/sdk/platform-tools:\$PATH

export ANDROID_HOME=/Users/dmitry/Library/Android/sdk
export PATH=$ANDROID_HOME/tools:$PATH
export PATH=$ANDROID_HOME/platform-tools:$PATH
"android-fix": "source ~/.bash_profile&&react-native run-android",

# React-native Updating

- npx react-native upgrade

# All packages Updating

- yarn upgrade-interactive --latest

### Update IOS dependencies after packages updating

1. yarn
2. cd ios
3. pod repo update
4. cd ..
5. yarn

### android

./gradlew cleanBuildCache

# Debugger installation

1. Download https://fbflipper.com
2. Open flipper, click to Plugin Manager and install "redux-debugger"
