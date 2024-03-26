pod-install:
	cd ios && rm -rf Pods && rm -rf build && rm -rf Podfile.lock && pod install && cd ..

pod-install-update:
	cd ios && rm -rf Pods && rm -rf build && rm -rf Podfile.lock && pod install --repo-update && cd ..

run-ios:
	npx react-native run-ios --simulator="iPhone 15 Pro"
	
run-android:
	npx react-native run-android

clean-android:
	cd android &&./gradlew clean && cd ../

apk:
	cd android && ./gradlew assembleRelease

aab:
	cd android && ./gradlew bundleRelease

sha:
	cd android && ./gradlew signingReport

gen:
	src/assets/gen/generate-images src/assets/images --prefix ../ > src/assets/gen/index.tsx   
	cat src/assets/gen/index.tsx