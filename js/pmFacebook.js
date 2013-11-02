// Initialize the Facebook SDK
document.addEventListener('deviceready', function() {
	FB.init({
		appId: 'appid',
		nativeInterface: CDV.FB,
		useCachedDialogs: false
	});
	
	FB.getLoginStatus(handleStatusChange);
	authUser();
	//updateAuthElements();
});