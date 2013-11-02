// Initialize the Facebook SDK
document.addEventListener('deviceready', function() {
	FB.init({
		appId: '174068009457211',
		nativeInterface: CDV.FB,
		useCachedDialogs: false
	});
	
	FB.getLoginStatus(handleStatusChange);
	authUser();
	//updateAuthElements();
});